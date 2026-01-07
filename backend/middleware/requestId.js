const { v4: uuidv4 } = require('uuid');

// Add unique request ID to each request
const requestId = (req, res, next) => {
  req.id = uuidv4();
  res.setHeader('X-Request-ID', req.id);
  next();
};

module.exports = requestId;

