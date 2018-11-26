import { INIT_RECOMMEND, INIT_PLAYLIST } from '../actions/types';

const recommends = (state = {
  recommends: [],
  playlist: []
}, action) => {
  switch (action.type) {
    case INIT_RECOMMEND:
      return {
        ...state,
        ...{recommends: action.payload}
      };
    case INIT_PLAYLIST:
      return {
        ...state,
        ...{playlist: action.payload}
      };
    default:
      return state;
  }
}

export default recommends;