const Job = require('../models/Job');
const Company = require('../models/Company');
const AppError = require('../utils/errorHandler');
const asyncHandler = require('../utils/asyncHandler');
const { paginate, createPaginationResponse } = require('../utils/pagination');

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
exports.getJobs = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, category, location, employmentType, experienceLevel, search, featured } = req.query;

  const filter = { status: 'active' };
  if (category) filter.category = category;
  if (employmentType) filter.employmentType = employmentType;
  if (experienceLevel) filter.experienceLevel = experienceLevel;
  if (featured === 'true') filter.featured = true;
  if (location) {
    filter.$or = [
      { 'location.city': new RegExp(location, 'i') },
      { 'location.country': new RegExp(location, 'i') },
    ];
  }
  if (search) {
    filter.$text = { $search: search };
  }

  const { skip, limit: limitNum } = paginate(page, limit);

  const jobs = await Job.find(filter)
    .populate('company', 'name logo location industry')
    .populate('postedBy', 'firstName lastName')
    .sort(featured === 'true' ? { featured: -1, createdAt: -1 } : { createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  const total = await Job.countDocuments(filter);

  res.json({
    success: true,
    data: createPaginationResponse(jobs, total, page, limit),
  });
});

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
exports.getJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id)
    .populate('company')
    .populate('postedBy', 'firstName lastName email');

  if (!job) {
    return next(new AppError('Job not found', 404));
  }

  job.views += 1;
  await job.save();

  res.json({
    success: true,
    data: { job },
  });
});

// @desc    Create job
// @route   POST /api/jobs
// @access  Private (Employer/Admin)
exports.createJob = asyncHandler(async (req, res, next) => {
  const company = await Company.findById(req.body.company);
  if (!company) {
    return next(new AppError('Company not found', 404));
  }

  if (company.owner.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to post jobs for this company', 403));
  }

  const job = await Job.create({
    ...req.body,
    postedBy: req.user.id,
  });

  company.jobs.push(job._id);
  await company.save();

  const populatedJob = await Job.findById(job._id)
    .populate('company')
    .populate('postedBy', 'firstName lastName');

  res.status(201).json({
    success: true,
    message: 'Job created successfully',
    data: { job: populatedJob },
  });
});

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private (Employer/Admin)
exports.updateJob = asyncHandler(async (req, res, next) => {
  let job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError('Job not found', 404));
  }

  if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to update this job', 403));
  }

  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .populate('company')
    .populate('postedBy', 'firstName lastName');

  res.json({
    success: true,
    message: 'Job updated successfully',
    data: { job },
  });
});

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private (Employer/Admin)
exports.deleteJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError('Job not found', 404));
  }

  if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to delete this job', 403));
  }

  await job.deleteOne();

  res.json({
    success: true,
    message: 'Job deleted successfully',
  });
});

