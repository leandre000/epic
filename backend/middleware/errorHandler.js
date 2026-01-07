const AppError = require('../utils/errorHandler');
const logger = require('../utils/logger');
const { errorResponse } = require('../utils/responseHandler');

// Global error handling middleware - KISS principle
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    logger.error('Error:', err);
    return errorResponse(res, err.message, err.statusCode, {
      stack: err.stack,
      error: err
    });
  }

  // Operational errors: send message to client
  if (err.isOperational) {
    return errorResponse(res, err.message, err.statusCode);
  }

  // Programming errors: don't leak details
  logger.error('ERROR:', err);
  return errorResponse(res, 'Something went wrong!', 500);
};

module.exports = errorHandler;

