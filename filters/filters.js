import { isArray, isObject } from 'lodash';

class Filters {
  filter = {};
  filters = [];

  request;
  query;

  constructor(request) {
    this.request = request;
    this.query = request.query;
  }

  apply() {
    this.filters.forEach((filter, value) => {
      if (typeof this[filter] === 'function') {
        this[filter](value);
      }
    });
  }

  getFilter() {
    return this.filter;
  }

  setDefaultFilter(value, column) {
    this.filter = { ...this.filter, [column]: value };
  }

  setFilter(value, column) {
    if (isArray(value)) {
      this.setDefaultFilter(value, column);
    } else if (isObject(value)) {
      this.filter = { ...this.filter, [column]: { ...value } };
    } else {
      this.setDefaultFilter(value, column);
    }
  }

  skip() {
    const page = parseInt(this.query.page ?? '1');
    const skip = page ? (page - 1) * this.perPage : page * this.perPage;
    this.setFilter(skip, 'skip');
  }

  limit() {
    this.setFilter(this.perPage, 'limit');
  }
}

export default Filters;
