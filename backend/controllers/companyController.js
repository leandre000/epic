const Company = require('../models/Company');
const AppError = require('../utils/errorHandler');
const asyncHandler = require('../utils/asyncHandler');
const { paginate, createPaginationResponse } = require('../utils/pagination');

// @desc    Get all companies
// @route   GET /api/companies
// @access  Public
exports.getCompanies = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, search, industry } = req.query;
  const { skip, limit: limitNum } = paginate(page, limit);

  const filter = { isActive: true };
  if (search) {
    filter.$text = { $search: search };
  }
  if (industry) {
    filter.industry = industry;
  }

  const companies = await Company.find(filter)
    .populate('owner', 'firstName lastName email')
    .select('-employees -jobs')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  const total = await Company.countDocuments(filter);

  res.json({
    success: true,
    data: createPaginationResponse(companies, total, page, limit),
  });
});

// @desc    Get single company
// @route   GET /api/companies/:id
// @access  Public
exports.getCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findById(req.params.id)
    .populate('owner', 'firstName lastName email')
    .populate({
      path: 'jobs',
      match: { status: 'active' },
      select: 'title location employmentType createdAt',
    });

  if (!company || !company.isActive) {
    return next(new AppError('Company not found', 404));
  }

  res.json({
    success: true,
    data: { company },
  });
});

// @desc    Create company
// @route   POST /api/companies
// @access  Private (Employer/Admin)
exports.createCompany = asyncHandler(async (req, res, next) => {
  const existingCompany = await Company.findOne({ name: req.body.name });
  if (existingCompany) {
    return next(new AppError('Company with this name already exists', 400));
  }

  const company = await Company.create({
    ...req.body,
    owner: req.user.id,
  });

  const populatedCompany = await Company.findById(company._id)
    .populate('owner', 'firstName lastName email');

  res.status(201).json({
    success: true,
    message: 'Company created successfully',
    data: { company: populatedCompany },
  });
});

// @desc    Update company
// @route   PUT /api/companies/:id
// @access  Private (Owner/Admin)
exports.updateCompany = asyncHandler(async (req, res, next) => {
  let company = await Company.findById(req.params.id);

  if (!company) {
    return next(new AppError('Company not found', 404));
  }

  if (company.owner.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to update this company', 403));
  }

  company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate('owner', 'firstName lastName email');

  res.json({
    success: true,
    message: 'Company updated successfully',
    data: { company },
  });
});

