const express = require('express');
const Notification = require('../models/Notification');
const { protect } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, paginatedResponse } = require('../utils/responseHandler');
const { executeQuery } = require('../utils/queryHelpers');
const { checkResourceExists } = require('../utils/authorization');

const router = express.Router();

// @route   GET /api/notifications
// @desc    Get user notifications
// @access  Private
router.get('/', protect, asyncHandler(async (req, res) => {
  const filter = { user: req.user.id };
  if (req.query.unread === 'true') filter.read = false;

  const { data: notifications, pagination } = await executeQuery(Notification, filter, {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
    sort: { createdAt: -1 }
  });

  return paginatedResponse(res, { notifications }, pagination);
}));

// @route   PUT /api/notifications/:id/read
// @desc    Mark notification as read
// @access  Private
router.put('/:id/read', protect, asyncHandler(async (req, res) => {
  const notification = await Notification.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  checkResourceExists(notification, 'Notification');

  notification.read = true;
  await notification.save();

  return successResponse(res, null, 'Notification marked as read');
}));

// @route   PUT /api/notifications/read-all
// @desc    Mark all notifications as read
// @access  Private
router.put('/read-all', protect, asyncHandler(async (req, res) => {
  await Notification.updateMany(
    { user: req.user.id, read: false },
    { read: true }
  );

  return successResponse(res, null, 'All notifications marked as read');
}));

module.exports = router;

