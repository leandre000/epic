/**
 * Validation handler - DRY principle
 * Centralizes validation error handling
 */
const { validationResult } = require('express-validator');
const { errorResponse } = require('./responseHandler');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(
      res,
      'Validation failed',
      400,
      errors.array().map(err => ({
        field: err.param,
        message: err.msg,
      }))
    );
  }
  next();
};

module.exports = handleValidation;

