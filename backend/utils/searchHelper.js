// Search helper for building MongoDB text search queries
const buildSearchQuery = (searchTerm, searchFields) => {
  if (!searchTerm) return {};

  if (searchFields.length === 1) {
    return {
      [searchFields[0]]: { $regex: searchTerm, $options: 'i' },
    };
  }

  return {
    $or: searchFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  };
};

// Build text search query for MongoDB text indexes
const buildTextSearchQuery = (searchTerm) => {
  if (!searchTerm) return {};
  return { $text: { $search: searchTerm } };
};

module.exports = {
  buildSearchQuery,
  buildTextSearchQuery,
};

