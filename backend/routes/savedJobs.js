const express = require('express');
const SavedJob = require('../models/SavedJob');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/saved-jobs
// @desc    Save a job
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const savedJob = await SavedJob.create({
      user: req.user.id,
      job: req.body.job,
    });

    res.status(201).json({
      success: true,
      message: 'Job saved successfully',
      data: { savedJob },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Job already saved',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

// @route   GET /api/saved-jobs
// @desc    Get saved jobs
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const savedJobs = await SavedJob.find({ user: req.user.id })
      .populate('job')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { savedJobs },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

// @route   DELETE /api/saved-jobs/:id
// @desc    Remove saved job
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const savedJob = await SavedJob.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!savedJob) {
      return res.status(404).json({
        success: false,
        message: 'Saved job not found',
      });
    }

    res.json({
      success: true,
      message: 'Job removed from saved',
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

