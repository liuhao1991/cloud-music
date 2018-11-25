import http from '../js/api';
import { INIT_RECOMMEND, INIT_HOTSONGS, INIT_HOTITEMS, INPUT_CONTENT, COMMIT_CONTENT } from './types';

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
        dispath({
          type: INIT_HOTITEMS,
          payload: res.data.result.hots
        });
      })
  }
}

export const inputContent = (text) => {
  return (dispath) => {
    dispath({
      type: INPUT_CONTENT,
      payload: text
    });
  }
}

export const commitContent = (text) => {
  console.log(text)
  return (dispath) => {
    dispath({
      type: COMMIT_CONTENT,
      payload: text
    });
  }
}
