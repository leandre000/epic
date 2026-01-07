/**
 * Async handler wrapper - DRY principle
 * Eliminates try-catch duplication in route handlers
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
