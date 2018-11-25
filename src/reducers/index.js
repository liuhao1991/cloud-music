import { combineReducers } from 'redux';
import recommends from './recommends';
import hotsongs from './hotsongs';

export default combineReducers({
  recommends,
  hotsongs
});