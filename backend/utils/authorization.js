/**
 * Authorization helpers - DRY principle
 * Simplifies authorization checks
 */
const AppError = require('./errorHandler');

const checkOwnership = (resource, userId, adminOverride = true) => {
  return resource.owner?.toString() === userId || 
         resource.postedBy?.toString() === userId ||
         (adminOverride && resource.user?.role === 'admin');
};

const checkResourceExists = (resource, resourceName = 'Resource') => {
  if (!resource) {
    throw new AppError(`${resourceName} not found`, 404);
  }
  return resource;
};

const authorizeAction = (req, resource, action = 'access') => {
  const isOwner = checkOwnership(resource, req.user.id);
  const isAdmin = req.user.role === 'admin';
  
  if (!isOwner && !isAdmin) {
    throw new AppError(`Not authorized to ${action} this resource`, 403);
  }
};

module.exports = {
  checkOwnership,
  checkResourceExists,
  authorizeAction,
};

