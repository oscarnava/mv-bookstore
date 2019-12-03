import { CHANGE_FILTER } from '../actions/index';

const filter = (state = 'All', { type, filter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return filter;

    default:
      return state;
  }
};

export default filter;
