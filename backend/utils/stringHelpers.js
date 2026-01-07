// String utility functions
const truncate = (str, length = 100, suffix = '...') => {
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const removeSpecialChars = (str) => {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
};

const generateRandomString = (length = 10) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

module.exports = {
  truncate,
  capitalize,
  capitalizeWords,
  removeSpecialChars,
  generateRandomString,
};

