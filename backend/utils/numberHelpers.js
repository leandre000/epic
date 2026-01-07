// Number utility functions
const formatNumber = (num, decimals = 0) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

module.exports = {
  formatNumber,
  formatCurrency,
  randomInt,
  clamp,
};

