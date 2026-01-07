const express = require('express');
const { body, query } = require('express-validator');
const Job = require('../models/Job');
const Company = require('../models/Company');
const { protect, authorize } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const handleValidation = require('../utils/validationHandler');
const { successResponse, paginatedResponse } = require('../utils/responseHandler');
const { buildFilter, buildSort, executeQuery } = require('../utils/queryHelpers');
const { checkResourceExists, authorizeAction } = require('../utils/authorization');
const AppError = require('../utils/errorHandler');

const router = express.Router();

// @route   GET /api/jobs
// @desc    Get all jobs with filters
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  handleValidation
], asyncHandler(async (req, res) => {
  const filter = buildFilter(req.query, { status: 'active' });
  const sort = buildSort(req.query.featured);
  
  const { data: jobs, pagination } = await executeQuery(Job, filter, {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    populate: [
      { path: 'company', select: 'name logo location industry' },
      { path: 'postedBy', select: 'firstName lastName' }
    ],
    sort
  });

  return paginatedResponse(res, { jobs }, pagination);
}));

// @route   GET /api/jobs/:id
// @desc    Get single job
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)
    .populate('company')
    .populate('postedBy', 'firstName lastName email');

  checkResourceExists(job, 'Job');
  
  job.views += 1;
  await job.save();

  return successResponse(res, { job });
}));

// @route   POST /api/jobs
// @desc    Create a new job
// @access  Private (Employer/Admin)
router.post('/', protect, authorize('employer', 'admin'), [
  body('title').trim().notEmpty().withMessage('Job title is required'),
  body('company').notEmpty().withMessage('Company is required'),
  body('description').notEmpty().withMessage('Job description is required'),
  body('category').isIn(['engineering', 'design', 'product', 'marketing', 'sales', 'operations', 'finance', 'hr', 'other']).withMessage('Invalid category'),
  handleValidation
], asyncHandler(async (req, res) => {
  const company = await Company.findById(req.body.company);
  checkResourceExists(company, 'Company');
  authorizeAction(req, company, 'post jobs for');

  const job = await Job.create({
    ...req.body,
    postedBy: req.user.id
  });

  company.jobs.push(job._id);
  await company.save();

  const populatedJob = await Job.findById(job._id)
    .populate('company')
    .populate('postedBy', 'firstName lastName');

  return successResponse(res, { job: populatedJob }, 'Job created successfully', 201);
}));

// @route   PUT /api/jobs/:id
// @desc    Update a job
// @access  Private (Employer/Admin)
router.put('/:id', protect, authorize('employer', 'admin'), asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  checkResourceExists(job, 'Job');
  authorizeAction(req, job, 'update');

  const updatedJob = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).populate('company').populate('postedBy', 'firstName lastName');

  return successResponse(res, { job: updatedJob }, 'Job updated successfully');
}));

// @route   DELETE /api/jobs/:id
// @desc    Delete a job
// @access  Private (Employer/Admin)
router.delete('/:id', protect, authorize('employer', 'admin'), asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  checkResourceExists(job, 'Job');
  authorizeAction(req, job, 'delete');

  await job.deleteOne();
  return successResponse(res, null, 'Job deleted successfully');
}));

module.exports = router;


