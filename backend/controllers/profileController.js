const User = require('../models/User');
const AppError = require('../utils/errorHandler');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private
exports.getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({
    success: true,
    data: { user },
  });
});

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  if (req.body.email && req.body.email !== req.user.email) {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return next(new AppError('Email already in use', 400));
    }
  }

  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  }).select('-password');

  res.json({
    success: true,
    message: 'Profile updated successfully',
    data: { user },
  });
});

// @desc    Update password
// @route   PUT /api/profile/password
// @access  Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  const isMatch = await user.comparePassword(req.body.currentPassword);
  if (!isMatch) {
    return next(new AppError('Current password is incorrect', 401));
  }

  user.password = req.body.newPassword;
  await user.save();

  res.json({
    success: true,
    message: 'Password updated successfully',
  });
});

