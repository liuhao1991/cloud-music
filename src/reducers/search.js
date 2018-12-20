import {
  INIT_HOTITEMS,
  INPUT_SEARCH,
  COMMIT_SEARCH,
  INIT_HISTORY,
  DELETE_HISTORY,
  SEARCH_RECOMMEND,
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
      return {...state, ...{input: action.payload, songs: {}, search: false, focus: true} };
    case COMMIT_SEARCH:
      if (state.inputList.indexOf(action.payload) === -1) {
        state.inputList.unshift(action.payload);
        localStorage.setItem('search_history', JSON.stringify(state.inputList));
        return {...state, ...{inputList: [...state.inputList], songs: {}, input: action.payload, focus: false} };
      }
      return {...state, ...{input: action.payload, songs: {}, focus: false} };
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
    case SEARCH_MULTIMATCH:
      return  {...state, ...{multimatch: action.payload} };
    case SEARCH_SONGS:
      const { songs } = state;
      const originSongs = songs.songs || [];
      const songCount = action.payload.songCount;
      const newSongs = [].concat(originSongs, action.payload.songs);
      return  {...state, ...{songs: {songs: newSongs, songCount: songCount}, search: true} };
    default:
      return state;
  }
}

export default search;