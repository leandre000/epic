// Rate limiting helper functions
const getClientIdentifier = (req) => {
  return req.ip || req.connection.remoteAddress || 'unknown';
};

const createRateLimitKey = (identifier, endpoint) => {
  return `ratelimit:${endpoint}:${identifier}`;
};

module.exports = {
  getClientIdentifier,
  createRateLimitKey,
};

