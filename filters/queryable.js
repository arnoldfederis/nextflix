import dayjs from 'dayjs';
import Filters from './filters';

class Queryable extends Filters {
  getFrom(value) {
    const from = value ?? dayjs().subtract(1, 'month').format('YYYY-MM-DD');
    return new Date(from);
  }

  getTo(value) {
    const to = value ?? dayjs().format('YYYY-MM-DD');
    return new Date(`${to} 23:59:59`);
  }

  where(column, value, condition) {
    if (!value) {
      return;
    }

    let where = { [column]: value };

    if (condition) {
      where = { [column]: { [condition]: value } };
    }

    this.setFilter({ ...this.filter.where, ...where }, 'where');
  }

  whereBetween(column, from, to) {
    if (!from && !to) {
      return;
    }

    this.where(column, [from, to], 'between');
  }

  whereBetweenDate(column, from, to) {
    this.whereBetween(column, from, to);
  }
}

export default Queryable;
