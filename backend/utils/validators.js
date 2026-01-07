// Custom validation utilities
const { body } = require('express-validator');

const validateEmail = () => {
  return body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail();
};

const validatePassword = (field = 'password', minLength = 6) => {
  return body(field)
    .isLength({ min: minLength })
    .withMessage(`Password must be at least ${minLength} characters`)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number');
};

const validateObjectId = (field) => {
  return body(field)
    .isMongoId()
    .withMessage(`Invalid ${field} ID`);
};

module.exports = {
  validateEmail,
  validatePassword,
  validateObjectId
};

