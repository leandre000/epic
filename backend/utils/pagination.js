// Pagination helper
const paginate = (page = 1, limit = 10) => {
  const skip = (parseInt(page) - 1) * parseInt(limit);
  return { skip, limit: parseInt(limit) };
};

// Create pagination response
const createPaginationResponse = (data, total, page, limit) => {
  return {
    data,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / parseInt(limit)),
      hasNext: page * limit < total,
      hasPrev: page > 1
    }
  };
};

module.exports = { paginate, createPaginationResponse };

