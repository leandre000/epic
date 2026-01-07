const express = require('express');
const { body, validationResult } = require('express-validator');
const Application = require('../models/Application');
const Job = require('../models/Job');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/applications
// @desc    Create a new job application
// @access  Private (Job Seeker)
router.post('/', protect, authorize('job_seeker'), [
  body('job').notEmpty().withMessage('Job ID is required'),
  body('resume').notEmpty().withMessage('Resume is required'),
  body('coverLetter').optional().isLength({ max: 2000 }).withMessage('Cover letter too long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { job, coverLetter, resume } = req.body;

    // Check if job exists and is active
    const jobDoc = await Job.findById(job);
    if (!jobDoc || jobDoc.status !== 'active') {
      return res.status(404).json({
        success: false,
        message: 'Job not found or not accepting applications'
      });
    }

    // Check if user already applied
    const existingApplication = await Application.findOne({
      job,
      applicant: req.user.id
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this job'
      });
    }

    // Create application
    const application = await Application.create({
      job,
      applicant: req.user.id,
      coverLetter,
      resume
    });

    // Add application to job
    jobDoc.applications.push(application._id);
    await jobDoc.save();

    const populatedApplication = await Application.findById(application._id)
      .populate('job', 'title company')
      .populate('applicant', 'firstName lastName email');

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: { application: populatedApplication }
    });
  } catch (error) {
    console.error('Create application error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/applications
// @desc    Get applications (filtered by user role)
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { page = 1, limit = 10, status, job } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

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
      .limit(parseInt(limit));

    const total = await Application.countDocuments(filter);

    res.json({
      success: true,
      data: {
        applications,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/applications/:id
// @desc    Get single application
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate('job')
      .populate('applicant');

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Check authorization
    if (
      application.applicant._id.toString() !== req.user.id &&
      req.user.role !== 'admin' &&
      req.user.role !== 'employer'
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this application'
      });
    }

    res.json({
      success: true,
      data: { application }
    });
  } catch (error) {
    console.error('Get application error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/applications/:id/status
// @desc    Update application status
// @access  Private (Employer/Admin)
router.put('/:id/status', protect, authorize('employer', 'admin'), [
  body('status').isIn(['pending', 'reviewing', 'shortlisted', 'interview', 'rejected', 'accepted', 'withdrawn']).withMessage('Invalid status')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Verify employer owns the job
    const job = await Job.findById(application.job);
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this application'
      });
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

    res.json({
      success: true,
      message: 'Application status updated',
      data: { application: populatedApplication }
    });
  } catch (error) {
    console.error('Update application error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;


