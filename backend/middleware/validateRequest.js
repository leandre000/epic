const { validationResult } = require('express-validator');
const AppError = require('../utils/errorHandler');

// Validate request middleware
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => ({
      field: err.param,
      message: err.msg,
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errorMessages,
    });
  }
  next();
};

module.exports = validateRequest;

