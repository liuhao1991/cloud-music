import { INIT_RECOMMEND } from '../actions/types';

const recommends = (state = [], action) => {
  if (action.type === INIT_RECOMMEND) {
    return [
      ...state,
      ...action.payload
    ]
  }
  return state;
}

export default recommends;