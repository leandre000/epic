/**
 * Authorization helpers - DRY principle
 * Simplifies authorization checks
 */
const { errorResponse } = require('./responseHandler');

const checkOwnership = (resource, userId, adminOverride = true) => {
  return resource.owner?.toString() === userId || 
         resource.postedBy?.toString() === userId ||
         (adminOverride && resource.user?.role === 'admin');
};

const checkResourceExists = (resource, resourceName = 'Resource') => {
  if (!resource) {
    throw new Error(`${resourceName} not found`);
  }
  return resource;
};

const authorizeAction = (req, resource, action = 'access') => {
  const isOwner = checkOwnership(resource, req.user.id);
  const isAdmin = req.user.role === 'admin';
  
  if (!isOwner && !isAdmin) {
    throw new Error(`Not authorized to ${action} this resource`);
  }
};

module.exports = {
  checkOwnership,
  checkResourceExists,
  authorizeAction,
};

