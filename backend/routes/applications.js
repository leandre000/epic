const express = require('express');
const { body } = require('express-validator');
const Application = require('../models/Application');
const Job = require('../models/Job');
const { protect, authorize } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const handleValidation = require('../utils/validationHandler');
const { successResponse, paginatedResponse } = require('../utils/responseHandler');
const { executeQuery } = require('../utils/queryHelpers');
const { checkResourceExists, authorizeAction } = require('../utils/authorization');
const AppError = require('../utils/errorHandler');

const router = express.Router();

// @route   POST /api/applications
// @desc    Create a new job application
// @access  Private (Job Seeker)
router.post('/', protect, authorize('job_seeker'), [
  body('job').notEmpty().withMessage('Job ID is required'),
  body('resume').notEmpty().withMessage('Resume is required'),
  body('coverLetter').optional().isLength({ max: 2000 }).withMessage('Cover letter too long'),
  handleValidation
], asyncHandler(async (req, res) => {
  const { job, coverLetter, resume } = req.body;

  const jobDoc = await Job.findById(job);
  if (!jobDoc || jobDoc.status !== 'active') {
    throw new AppError('Job not found or not accepting applications', 404);
  }

  if (await Application.findOne({ job, applicant: req.user.id })) {
    throw new AppError('You have already applied for this job', 400);
  }

  const application = await Application.create({
    job,
    applicant: req.user.id,
    coverLetter,
    resume
  });

  jobDoc.applications.push(application._id);
  await jobDoc.save();

  const populatedApplication = await Application.findById(application._id)
    .populate('job', 'title company')
    .populate('applicant', 'firstName lastName email');

  return successResponse(res, { application: populatedApplication }, 'Application submitted successfully', 201);
}));

// @route   GET /api/applications
// @desc    Get applications (filtered by user role)
// @access  Private
router.get('/', protect, asyncHandler(async (req, res) => {
  const filter = {};
  
  if (req.user.role === 'job_seeker') {
    filter.applicant = req.user.id;
  } else if (['employer', 'admin'].includes(req.user.role)) {
    if (req.query.job) filter.job = req.query.job;
  }
  
  if (req.query.status) filter.status = req.query.status;

  const { data: applications, pagination } = await executeQuery(Application, filter, {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    populate: [
      { path: 'job', select: 'title company location' },
      { path: 'applicant', select: 'firstName lastName email avatar' }
    ],
    sort: { createdAt: -1 }
  });

  return paginatedResponse(res, { applications }, pagination);
}));

// @route   GET /api/applications/:id
// @desc    Get single application
// @access  Private
router.get('/:id', protect, asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id)
    .populate('job')
    .populate('applicant');

  checkResourceExists(application, 'Application');

  const canView = application.applicant._id.toString() === req.user.id ||
                  ['admin', 'employer'].includes(req.user.role);
  
  if (!canView) {
    throw new AppError('Not authorized to view this application', 403);
  }

  return successResponse(res, { application });
}));

// @route   PUT /api/applications/:id/status
// @desc    Update application status
// @access  Private (Employer/Admin)
router.put('/:id/status', protect, authorize('employer', 'admin'), [
  body('status').isIn(['pending', 'reviewing', 'shortlisted', 'interview', 'rejected', 'accepted', 'withdrawn']).withMessage('Invalid status'),
  handleValidation
], asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);
  checkResourceExists(application, 'Application');

  const job = await Job.findById(application.job);
  if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new AppError('Not authorized to update this application', 403);
  }

  application.status = req.body.status;
  if (req.body.notes) {
    application.notes.push({
      note: req.body.notes,
      addedBy: req.user.id
    });
  }

  await application.save();

  const populatedApplication = await Application.findById(application._id)
    .populate('job')
    .populate('applicant');

  return successResponse(res, { application: populatedApplication }, 'Application status updated');
}));

module.exports = router;


