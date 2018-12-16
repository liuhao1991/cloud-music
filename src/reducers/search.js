import {
  INIT_HOTITEMS,
  INPUT_SEARCH,
  COMMIT_SEARCH,
  INIT_HISTORY,
  DELETE_HISTORY,
  SEARCH_RECOMMEND,
  FOCUS_INPUT,
  SEARCH_MULTIMATCH,
  SEARCH_SONGS
} from '../actions/types';

const search = (state = {
  input: '',
  focus: false,
  search: false,
  inputList: [],
  items: [],
  recom: {},
  multimatch: {},
  songs: {}
}, action) => {
  switch (action.type) {
    case INIT_HOTITEMS:
      return {...state, ...{items: action.payload} };
    case INPUT_SEARCH:
      return {...state, ...{input: action.payload, search: false} };
    case COMMIT_SEARCH:
      if (state.inputList.indexOf(action.payload) === -1) {
        state.inputList.unshift(action.payload);
        localStorage.setItem('search_history', JSON.stringify(state.inputList));
        return {...state, ...{inputList: [...state.inputList], input: action.payload, search: true} };
      }
      return {...state, ...{input: action.payload, search: true} };
    case INIT_HISTORY:
      const searchHistory = localStorage.getItem('search_history') ? JSON.parse(localStorage.getItem('search_history')) : [];
      return {...state, ...{inputList: [...searchHistory]} };
    case DELETE_HISTORY:
      const index = action.payload;
      state.inputList.splice(index, 1);
      localStorage.setItem('search_history', JSON.stringify(state.inputList));
      return {...state, ...{inputList: [...state.inputList]} };
    case SEARCH_RECOMMEND:
      return {...state, ...{recom: action.payload} };
    case FOCUS_INPUT:
      return {...state, ...{focus: action.payload, search: false } };
    case SEARCH_MULTIMATCH:
      return  {...state, ...{multimatch: action.payload} };
    case SEARCH_SONGS:
      return  {...state, ...{songs: action.payload} };
    default:
      return state;
  }
}

export default search;