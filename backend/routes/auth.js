const express = require('express');
const { body } = require('express-validator');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const handleValidation = require('../utils/validationHandler');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const AppError = require('../utils/errorHandler');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['job_seeker', 'employer']).withMessage('Invalid role'),
  handleValidation
], asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (await User.findOne({ email })) {
    throw new AppError('User already exists with this email', 400);
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    role: role || 'job_seeker'
  });

  const token = user.generateToken();

  return successResponse(res, {
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    },
    token
  }, 'User registered successfully', 201);
}));

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidation
], asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !user.isActive || !(await user.comparePassword(password))) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = user.generateToken();

  return successResponse(res, {
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      avatar: user.avatar
    },
    token
  }, 'Login successful');
}));

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  return successResponse(res, { user });
}));

module.exports = router;


