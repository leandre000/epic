const express = require('express');
const Job = require('../models/Job');
const Application = require('../models/Application');
const User = require('../models/User');
const Company = require('../models/Company');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/stats
// @desc    Get platform statistics
// @access  Private (Admin)
router.get('/', protect, authorize('admin'), async (req, res) => {
  try {
    const [
      totalJobs,
      activeJobs,
      totalApplications,
      totalUsers,
      totalCompanies,
    ] = await Promise.all([
      Job.countDocuments(),
      Job.countDocuments({ status: 'active' }),
      Application.countDocuments(),
      User.countDocuments(),
      Company.countDocuments(),
    ]);

    res.json({
      success: true,
      data: {
        jobs: {
          total: totalJobs,
          active: activeJobs,
        },
        applications: {
          total: totalApplications,
        },
        users: {
          total: totalUsers,
        },
        companies: {
          total: totalCompanies,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

module.exports = router;

