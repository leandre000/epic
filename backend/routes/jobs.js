const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Job = require('../models/Job');
const Company = require('../models/Company');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/jobs
// @desc    Get all jobs with filters
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('category').optional().isString(),
  query('location').optional().isString(),
  query('employmentType').optional().isString(),
  query('experienceLevel').optional().isString(),
  query('search').optional().isString()
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      location,
      employmentType,
      experienceLevel,
      search,
      featured
    } = req.query;

    // Build filter object
    const filter = { status: 'active' };

    if (category) filter.category = category;
    if (employmentType) filter.employmentType = employmentType;
    if (experienceLevel) filter['experienceLevel'] = experienceLevel;
    if (featured === 'true') filter.featured = true;
    if (location) {
      filter.$or = [
        { 'location.city': new RegExp(location, 'i') },
        { 'location.country': new RegExp(location, 'i') }
      ];
    }
    if (search) {
      filter.$text = { $search: search };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const jobs = await Job.find(filter)
      .populate('company', 'name logo location industry')
      .populate('postedBy', 'firstName lastName')
      .sort(featured === 'true' ? { featured: -1, createdAt: -1 } : { createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Job.countDocuments(filter);

    res.json({
      success: true,
      data: {
        jobs,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    console.error('Get jobs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/jobs/:id
// @desc    Get single job
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('company')
      .populate('postedBy', 'firstName lastName email');

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Increment views
    job.views += 1;
    await job.save();

    res.json({
      success: true,
      data: { job }
    });
  } catch (error) {
    console.error('Get job error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/jobs
// @desc    Create a new job
// @access  Private (Employer/Admin)
router.post('/', protect, authorize('employer', 'admin'), [
  body('title').trim().notEmpty().withMessage('Job title is required'),
  body('company').notEmpty().withMessage('Company is required'),
  body('description').notEmpty().withMessage('Job description is required'),
  body('category').isIn(['engineering', 'design', 'product', 'marketing', 'sales', 'operations', 'finance', 'hr', 'other']).withMessage('Invalid category')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    // Verify company exists and user owns it
    const company = await Company.findById(req.body.company);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    if (company.owner.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to post jobs for this company'
      });
    }

    const job = await Job.create({
      ...req.body,
      postedBy: req.user.id
    });

    // Add job to company
    company.jobs.push(job._id);
    await company.save();

    const populatedJob = await Job.findById(job._id)
      .populate('company')
      .populate('postedBy', 'firstName lastName');

    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: { job: populatedJob }
    });
  } catch (error) {
    console.error('Create job error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/jobs/:id
// @desc    Update a job
// @access  Private (Employer/Admin)
router.put('/:id', protect, authorize('employer', 'admin'), async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Check authorization
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this job'
      });
    }

    job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('company').populate('postedBy', 'firstName lastName');

    res.json({
      success: true,
      message: 'Job updated successfully',
      data: { job }
    });
  } catch (error) {
    console.error('Update job error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   DELETE /api/jobs/:id
// @desc    Delete a job
// @access  Private (Employer/Admin)
router.delete('/:id', protect, authorize('employer', 'admin'), async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Check authorization
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this job'
      });
    }

    await job.deleteOne();

    res.json({
      success: true,
      message: 'Job deleted successfully'
    });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;


