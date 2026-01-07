const cache = require('../utils/cache');

// Cache middleware for GET requests
const cacheMiddleware = (duration = 5 * 60 * 1000) => {
  return (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = req.originalUrl || req.url;
    const cachedResponse = cache.get(key);

    if (cachedResponse) {
      return res.json(cachedResponse);
    }

    // Store original json method
    const originalJson = res.json.bind(res);

    // Override json method to cache response
    res.json = function (data) {
      cache.set(key, data, duration);
      return originalJson(data);
    };

    next();
  };
};

module.exports = cacheMiddleware;

