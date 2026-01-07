// Standardize API responses
const successResponse = (data, message = 'Success', statusCode = 200) => {
  return {
    success: true,
    message,
    data,
    statusCode,
  };
};

const errorResponse = (message = 'Error', statusCode = 400, errors = null) => {
  const response = {
    success: false,
    message,
    statusCode,
  };

  if (errors) {
    response.errors = errors;
  }

  return response;
};

const paginatedResponse = (data, pagination, message = 'Success') => {
  return {
    success: true,
    message,
    data,
    pagination,
  };
};

module.exports = {
  successResponse,
  errorResponse,
  paginatedResponse,
};

