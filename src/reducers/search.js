import { INIT_HOTITEMS, INPUT_CONTENT, COMMIT_CONTENT } from '../actions/types';

const search = (state = {
  input: '',
  inputList: [],
  items: []
}, action) => {
  switch (action.type) {
    case INIT_HOTITEMS:
      return {...state, ...{items: action.payload} };
    case INPUT_CONTENT:
      return {...state, ...{input: action.payload} };
    case COMMIT_CONTENT:
      const inputList = state.inputList;
      if (inputList.indexOf(action.payload) === -1) {
        return {...state, ...{inputList: [...inputList, action.payload]} };
      }
      return state;
    default:
      return state;
  }
}

export default search;