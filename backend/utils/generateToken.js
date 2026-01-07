const crypto = require('crypto');

// Generate random token
const generateToken = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};

// Generate verification token
const generateVerificationToken = () => {
  return generateToken(32);
};

// Generate password reset token
const generateResetToken = () => {
  return generateToken(32);
};

module.exports = {
  generateToken,
  generateVerificationToken,
  generateResetToken,
};

