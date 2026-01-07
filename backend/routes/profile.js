const express = require('express');
const { body } = require('express-validator');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const handleValidation = require('../utils/validationHandler');
const { successResponse } = require('../utils/responseHandler');
const AppError = require('../utils/errorHandler');

const router = express.Router();

// @route   GET /api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', protect, asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  return successResponse(res, { user });
}));

// @route   PUT /api/profile
// @desc    Update user profile
// @access  Private
router.put('/', protect, [
  body('firstName').optional().trim().notEmpty(),
  body('lastName').optional().trim().notEmpty(),
  body('email').optional().isEmail(),
  body('bio').optional().isLength({ max: 500 }),
  body('phone').optional().isString(),
  handleValidation
], asyncHandler(async (req, res) => {
  if (req.body.email && req.body.email !== req.user.email) {
    if (await User.findOne({ email: req.body.email })) {
      throw new AppError('Email already in use', 400);
    }
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true, runValidators: true }
  ).select('-password');

  return successResponse(res, { user }, 'Profile updated successfully');
}));

// @route   PUT /api/profile/password
// @desc    Update password
// @access  Private
router.put('/password', protect, [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters'),
  handleValidation
], asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.comparePassword(req.body.currentPassword))) {
    throw new AppError('Current password is incorrect', 401);
  }

  user.password = req.body.newPassword;
  await user.save();

  return successResponse(res, null, 'Password updated successfully');
}));

module.exports = router;


