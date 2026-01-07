const Application = require('../models/Application');
const Job = require('../models/Job');
const AppError = require('../utils/errorHandler');
const asyncHandler = require('../utils/asyncHandler');
const { paginate, createPaginationResponse } = require('../utils/pagination');
const { sendEmail, emailTemplates } = require('../utils/emailService');

// @desc    Create application
// @route   POST /api/applications
// @access  Private (Job Seeker)
exports.createApplication = asyncHandler(async (req, res, next) => {
  const { job, coverLetter, resume } = req.body;

  const jobDoc = await Job.findById(job);
  if (!jobDoc || jobDoc.status !== 'active') {
    return next(new AppError('Job not found or not accepting applications', 404));
  }

  const existingApplication = await Application.findOne({
    job,
    applicant: req.user.id,
  });

  if (existingApplication) {
    return next(new AppError('You have already applied for this job', 400));
  }

  const application = await Application.create({
    job,
    applicant: req.user.id,
    coverLetter,
    resume,
  });

  jobDoc.applications.push(application._id);
  await jobDoc.save();

  // Send confirmation email
  try {
    await sendEmail({
      email: req.user.email,
      subject: emailTemplates.applicationReceived(jobDoc.title).subject,
      html: emailTemplates.applicationReceived(jobDoc.title).html,
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }

  const populatedApplication = await Application.findById(application._id)
    .populate('job', 'title company')
    .populate('applicant', 'firstName lastName email');

  res.status(201).json({
    success: true,
    message: 'Application submitted successfully',
    data: { application: populatedApplication },
  });
});

// @desc    Get applications
// @route   GET /api/applications
// @access  Private
exports.getApplications = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, status, job } = req.query;
  const { skip, limit: limitNum } = paginate(page, limit);

  const filter = {};

  if (req.user.role === 'job_seeker') {
    filter.applicant = req.user.id;
  } else if (req.user.role === 'employer' || req.user.role === 'admin') {
    if (job) {
      filter.job = job;
    }
  }

  if (status) {
    filter.status = status;
  }

  const applications = await Application.find(filter)
    .populate('job', 'title company location')
    .populate('applicant', 'firstName lastName email avatar')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  const total = await Application.countDocuments(filter);

  res.json({
    success: true,
    data: createPaginationResponse(applications, total, page, limit),
  });
});

// @desc    Get single application
// @route   GET /api/applications/:id
// @access  Private
exports.getApplication = asyncHandler(async (req, res, next) => {
  const application = await Application.findById(req.params.id)
    .populate('job')
    .populate('applicant');

  if (!application) {
    return next(new AppError('Application not found', 404));
  }

  if (
    application.applicant._id.toString() !== req.user.id &&
    req.user.role !== 'admin' &&
    req.user.role !== 'employer'
  ) {
    return next(new AppError('Not authorized to view this application', 403));
  }

  res.json({
    success: true,
    data: { application },
  });
});

// @desc    Update application status
// @route   PUT /api/applications/:id/status
// @access  Private (Employer/Admin)
exports.updateApplicationStatus = asyncHandler(async (req, res, next) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    return next(new AppError('Application not found', 404));
  }

  const job = await Job.findById(application.job);
  if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('Not authorized to update this application', 403));
  }

  application.status = req.body.status;
  if (req.body.notes) {
    application.notes.push({
      note: req.body.notes,
      addedBy: req.user.id,
    });
  }

  await application.save();

  const populatedApplication = await Application.findById(application._id)
    .populate('job')
    .populate('applicant');

  res.json({
    success: true,
    message: 'Application status updated',
    data: { application: populatedApplication },
  });
});

