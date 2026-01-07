const express = require('express');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, paginatedResponse } = require('../utils/responseHandler');
const { executeQuery } = require('../utils/queryHelpers');
const { checkResourceExists } = require('../utils/authorization');
const AppError = require('../utils/errorHandler');

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users (Admin only)
// @access  Private (Admin)
router.get('/', protect, authorize('admin'), asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.role) filter.role = req.query.role;

  const { data: users, pagination } = await executeQuery(User, filter, {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    select: '-password',
    sort: { createdAt: -1 }
  });

  return paginatedResponse(res, { users }, pagination);
}));

// @route   GET /api/users/:id
// @desc    Get single user
// @access  Private
router.get('/:id', protect, asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  checkResourceExists(user, 'User');

  if (user._id.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new AppError('Not authorized to view this user', 403);
  }

  return successResponse(res, { user });
}));

module.exports = router;


