const AppError = require('../utils/errorHandler');
const logger = require('../utils/logger');

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    logger.error('Error:', err);
    return res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }

  // Operational errors: send message to client
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }

  // Programming errors: don't leak details
  logger.error('ERROR:', err);
  return res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
};

module.exports = errorHandler;

