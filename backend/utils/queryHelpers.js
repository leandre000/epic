/**
 * Query helpers - DRY & KISS principles
 * Simplifies common database query patterns
 */
const { paginate, createPaginationResponse } = require('./pagination');

const buildFilter = (query, defaultFilter = {}) => {
  const filter = { ...defaultFilter };
  
  // Simple field filters
  ['category', 'employmentType', 'experienceLevel', 'status'].forEach(field => {
    if (query[field]) filter[field] = query[field];
  });
  
  // Location filter
  if (query.location) {
    filter.$or = [
      { 'location.city': new RegExp(query.location, 'i') },
      { 'location.country': new RegExp(query.location, 'i') },
    ];
  }
  
  // Text search
  if (query.search) {
    filter.$text = { $search: query.search };
  }
  
  // Featured filter
  if (query.featured === 'true') {
    filter.featured = true;
  }
  
  return filter;
};

const buildSort = (featured, defaultSort = { createdAt: -1 }) => {
  return featured === 'true' 
    ? { featured: -1, createdAt: -1 } 
    : defaultSort;
};

const executeQuery = async (Model, filter, options = {}) => {
  const {
    page = 1,
    limit = 10,
    populate = [],
    select = '',
    sort = { createdAt: -1 },
  } = options;
  
  const { skip, limit: limitNum } = paginate(page, limit);
  
  let query = Model.find(filter);
  
  populate.forEach(pop => {
    query = query.populate(pop.path || pop, pop.select || '');
  });
  
  if (select) query = query.select(select);
  
  const [data, total] = await Promise.all([
    query.sort(sort).skip(skip).limit(limitNum),
    Model.countDocuments(filter),
  ]);
  
  return {
    data,
    pagination: createPaginationResponse(data, total, page, limit).pagination,
  };
};

module.exports = {
  buildFilter,
  buildSort,
  executeQuery,
};

