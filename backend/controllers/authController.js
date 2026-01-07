const User = require('../models/User');
const AppError = require('../utils/errorHandler');
const asyncHandler = require('../utils/asyncHandler');
const { sendEmail, emailTemplates } = require('../utils/emailService');

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError('User already exists with this email', 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    role: role || 'job_seeker',
  });

  const token = user.generateToken();

  // Send welcome email
  try {
    await sendEmail({
      email: user.email,
      subject: emailTemplates.welcome(user.firstName).subject,
      html: emailTemplates.welcome(user.firstName).html,
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
      token,
    },
  });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    return next(new AppError('Invalid credentials', 401));
  }

  if (!user.isActive) {
    return next(new AppError('Account is inactive', 401));
  }

  const token = user.generateToken();

  res.json({
    success: true,
    message: 'Login successful',
    data: {
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      token,
    },
  });
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({
    success: true,
    data: { user },
  });
});

