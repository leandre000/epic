// Query builder utility for building MongoDB queries
class QueryBuilder {
  constructor() {
    this.query = {};
    this.sort = {};
    this.select = '';
    this.populate = [];
  }

  filter(field, value, operator = 'eq') {
    if (!value) return this;

    switch (operator) {
      case 'eq':
        this.query[field] = value;
        break;
      case 'in':
        this.query[field] = { $in: Array.isArray(value) ? value : [value] };
        break;
      case 'ne':
        this.query[field] = { $ne: value };
        break;
      case 'gt':
        this.query[field] = { $gt: value };
        break;
      case 'gte':
        this.query[field] = { $gte: value };
        break;
      case 'lt':
        this.query[field] = { $lt: value };
        break;
      case 'lte':
        this.query[field] = { $lte: value };
        break;
      case 'regex':
        this.query[field] = { $regex: value, $options: 'i' };
        break;
    }

    return this;
  }

  search(fields, searchTerm) {
    if (!searchTerm) return this;

    if (fields.length === 1) {
      this.query[fields[0]] = { $regex: searchTerm, $options: 'i' };
    } else {
      this.query.$or = fields.map((field) => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      }));
    }

    return this;
  }

  sortBy(field, order = 'asc') {
    this.sort[field] = order === 'asc' ? 1 : -1;
    return this;
  }

  selectFields(fields) {
    this.select = fields.join(' ');
    return this;
  }

  populateField(path, select = '') {
    this.populate.push({ path, select });
    return this;
  }

  build() {
    return {
      query: this.query,
      sort: this.sort,
      select: this.select,
      populate: this.populate,
    };
  }
}

module.exports = QueryBuilder;

