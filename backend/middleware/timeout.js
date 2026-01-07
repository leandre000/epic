// Request timeout middleware
const timeout = (ms) => {
  return (req, res, next) => {
    const timer = setTimeout(() => {
      if (!res.headersSent) {
        res.status(408).json({
          success: false,
          message: 'Request timeout',
        });
      }
    }, ms);

    res.on('finish', () => {
      clearTimeout(timer);
    });

    next();
  };
};

module.exports = timeout;

