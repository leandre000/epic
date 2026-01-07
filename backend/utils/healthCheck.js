const mongoose = require('mongoose');

// Health check utility
const healthCheck = async () => {
  const checks = {
    database: false,
    timestamp: new Date().toISOString(),
  };

  try {
    // Check database connection
    if (mongoose.connection.readyState === 1) {
      checks.database = true;
    }
  } catch (error) {
    console.error('Health check error:', error);
  }

  return checks;
};

module.exports = healthCheck;

