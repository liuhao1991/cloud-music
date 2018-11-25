import http from '../js/api';
import { INIT_RECOMMEND, INIT_HOTSONGS, INIT_HOTITEMS, SEARCH_CONTENT } from './types';

export const initRecommend = () => {
  return (dispath) => {
    http.get('http://localhost:3001/api/newsong')
      .then(res => {
        dispath({
          type: INIT_RECOMMEND,
          payload: res.data.result
        });
      })
  }
};

export const initHotsongs = () => {
  return (dispath) => {
    http.get('http://localhost:3001/api/hotsongs')
      .then(res => {
        dispath({
          type: INIT_HOTSONGS,
          payload: res.data.playlist
        });
      })
  }
}

export const initHotItems = () => {
  return (dispath) => {
    http.get('http://localhost:3001/api/hots')
      .then(res => {
        console.log(res.data.result.hots)
        dispath({
          type: INIT_HOTITEMS,
          payload: res.data.result.hots
        });
      })
  }
}

export const inputSearchContent = (text) => {
  return (dispath) => {
    dispath({
      type: SEARCH_CONTENT,
      payload: text
    });
  }
}