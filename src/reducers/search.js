import { INIT_HOTITEMS, INPUT_CONTENT, COMMIT_CONTENT, INIT_HISTORY } from '../actions/types';

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
        inputList.unshift(action.payload)
        localStorage.setItem('search_history', JSON.stringify(inputList))
        return {...state, ...{inputList: [...inputList]} };
      }
      return state;
    case INIT_HISTORY:
      const searchHistory = localStorage.getItem('search_history') ? JSON.parse(localStorage.getItem('search_history')) : [];
      return {...state, ...{inputList: [...searchHistory]} };
    default:
      return state;
  }
}

export default search;