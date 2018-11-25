import { INIT_HOTITEMS, SEARCH_CONTENT } from '../actions/types';

const search = (state = {
  input: '',
  items: []
}, action) => {
  switch (action.type) {
    case INIT_HOTITEMS:
      return {...state, ...{items: action.payload} };
    case SEARCH_CONTENT:
      return {...state, ...{input: action.payload} };
    default:
      return state;
  }
}

export default search;