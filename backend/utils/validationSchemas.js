const { body } = require('express-validator');

// Validation schemas
const registerSchema = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['job_seeker', 'employer']).withMessage('Invalid role'),
];

const loginSchema = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

const jobSchema = [
  body('title').trim().notEmpty().withMessage('Job title is required'),
  body('company').notEmpty().withMessage('Company is required'),
  body('description').notEmpty().withMessage('Job description is required'),
  body('category').isIn(['engineering', 'design', 'product', 'marketing', 'sales', 'operations', 'finance', 'hr', 'other']).withMessage('Invalid category'),
];

const applicationSchema = [
  body('job').notEmpty().withMessage('Job ID is required'),
  body('resume').notEmpty().withMessage('Resume is required'),
  body('coverLetter').optional().isLength({ max: 2000 }).withMessage('Cover letter too long'),
];

module.exports = {
  registerSchema,
  loginSchema,
  jobSchema,
  applicationSchema,
};

