import { combineReducers } from 'redux';
import recommends from './recommends';
import hotsongs from './hotsongs';
import search from './search';

export default combineReducers({
  recommends,
  hotsongs,
  search
});