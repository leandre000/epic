// Date utility functions
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const isDatePast = (date) => {
  return new Date(date) < new Date();
};

const isDateFuture = (date) => {
  return new Date(date) > new Date();
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getDaysDifference = (date1, date2) => {
  const diffTime = Math.abs(new Date(date2) - new Date(date1));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

module.exports = {
  formatDate,
  formatDateTime,
  isDatePast,
  isDateFuture,
  addDays,
  getDaysDifference,
};

