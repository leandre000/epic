// URL utility functions
const buildQueryString = (params) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });
  return query.toString();
};

const parseQueryString = (queryString) => {
  const params = {};
  const query = new URLSearchParams(queryString);
  query.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

module.exports = {
  buildQueryString,
  parseQueryString,
  isValidUrl,
};

