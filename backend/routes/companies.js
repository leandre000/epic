const express = require('express');
const { body } = require('express-validator');
const Company = require('../models/Company');
const { protect, authorize } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const handleValidation = require('../utils/validationHandler');
const { successResponse, paginatedResponse } = require('../utils/responseHandler');
const { executeQuery, buildFilter } = require('../utils/queryHelpers');
const { checkResourceExists, authorizeAction } = require('../utils/authorization');
const AppError = require('../utils/errorHandler');

const router = express.Router();

// @route   GET /api/companies
// @desc    Get all companies
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
  const filter = buildFilter(req.query, { isActive: true });
  if (req.query.industry) filter.industry = req.query.industry;

  const { data: companies, pagination } = await executeQuery(Company, filter, {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    populate: [{ path: 'owner', select: 'firstName lastName email' }],
    select: '-employees -jobs',
    sort: { createdAt: -1 }
  });

  return paginatedResponse(res, { companies }, pagination);
}));

// @route   GET /api/companies/:id
// @desc    Get single company
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)
    .populate('owner', 'firstName lastName email')
    .populate({
      path: 'jobs',
      match: { status: 'active' },
      select: 'title location employmentType createdAt'
    });

  if (!company || !company.isActive) {
    throw new AppError('Company not found', 404);
  }

  return successResponse(res, { company });
}));

// @route   POST /api/companies
// @desc    Create a new company
// @access  Private (Employer/Admin)
router.post('/', protect, authorize('employer', 'admin'), [
  body('name').trim().notEmpty().withMessage('Company name is required'),
  body('industry').notEmpty().withMessage('Industry is required'),
  body('description').optional().isLength({ max: 2000 }).withMessage('Description too long'),
  handleValidation
], asyncHandler(async (req, res) => {
  if (await Company.findOne({ name: req.body.name })) {
    throw new AppError('Company with this name already exists', 400);
  }

  const company = await Company.create({
    ...req.body,
    owner: req.user.id
  });

  const populatedCompany = await Company.findById(company._id)
    .populate('owner', 'firstName lastName email');

  return successResponse(res, { company: populatedCompany }, 'Company created successfully', 201);
}));

// @route   PUT /api/companies/:id
// @desc    Update a company
// @access  Private (Owner/Admin)
router.put('/:id', protect, authorize('employer', 'admin'), asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  checkResourceExists(company, 'Company');
  authorizeAction(req, company, 'update');

  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).populate('owner', 'firstName lastName email');

  return successResponse(res, { company: updatedCompany }, 'Company updated successfully');
}));

module.exports = router;


