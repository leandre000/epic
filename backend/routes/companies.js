const express = require('express');
const { body, validationResult } = require('express-validator');
const Company = require('../models/Company');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/companies
// @desc    Get all companies
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search, industry } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

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
      .limit(parseInt(limit));

    const total = await Company.countDocuments(filter);

    res.json({
      success: true,
      data: {
        companies,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    console.error('Get companies error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/companies/:id
// @desc    Get single company
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
      .populate('owner', 'firstName lastName email')
      .populate({
        path: 'jobs',
        match: { status: 'active' },
        select: 'title location employmentType createdAt'
      });

    if (!company || !company.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.json({
      success: true,
      data: { company }
    });
  } catch (error) {
    console.error('Get company error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/companies
// @desc    Create a new company
// @access  Private (Employer/Admin)
router.post('/', protect, authorize('employer', 'admin'), [
  body('name').trim().notEmpty().withMessage('Company name is required'),
  body('industry').notEmpty().withMessage('Industry is required'),
  body('description').optional().isLength({ max: 2000 }).withMessage('Description too long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    // Check if company name already exists
    const existingCompany = await Company.findOne({ name: req.body.name });
    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: 'Company with this name already exists'
      });
    }

    const company = await Company.create({
      ...req.body,
      owner: req.user.id
    });

    const populatedCompany = await Company.findById(company._id)
      .populate('owner', 'firstName lastName email');

    res.status(201).json({
      success: true,
      message: 'Company created successfully',
      data: { company: populatedCompany }
    });
  } catch (error) {
    console.error('Create company error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/companies/:id
// @desc    Update a company
// @access  Private (Owner/Admin)
router.put('/:id', protect, authorize('employer', 'admin'), async (req, res) => {
  try {
    let company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    // Check authorization
    if (company.owner.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this company'
      });
    }

    company = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('owner', 'firstName lastName email');

    res.json({
      success: true,
      message: 'Company updated successfully',
      data: { company }
    });
  } catch (error) {
    console.error('Update company error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;


