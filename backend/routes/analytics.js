const express = require('express');
const Analytics = require('../models/Analytics');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/analytics
// @desc    Track analytics event
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const analytics = await Analytics.create({
      event: req.body.event,
      user: req.user.id,
      metadata: req.body.metadata,
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });

    res.status(201).json({
      success: true,
      data: { analytics },
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

