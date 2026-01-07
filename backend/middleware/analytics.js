const Analytics = require('../models/Analytics');

// Analytics tracking middleware
const analyticsMiddleware = async (req, res, next) => {
  // Track request after response is sent
  res.on('finish', async () => {
    try {
      if (req.user) {
        await Analytics.create({
          event: 'api_request',
          user: req.user.id,
          metadata: {
            method: req.method,
            path: req.path,
            statusCode: res.statusCode,
          },
          ip: req.ip,
          userAgent: req.get('user-agent'),
        });
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  });

  next();
};

module.exports = analyticsMiddleware;

