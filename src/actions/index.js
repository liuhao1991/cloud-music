import http from '../js/http';
import { INIT_RECOMMEND, INIT_PLAYLIST, INIT_HOTSONGS, INIT_HOTITEMS, INPUT_CONTENT, COMMIT_CONTENT, INIT_HISTORY } from './types';
// 最新音乐初始化
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
// 推荐歌单初始化
export const initPlaylist = () => {
  return (dispath) => {
    http.get('http://localhost:3001/api/v1')
      .then(res => {
        dispath({
          type: INIT_PLAYLIST,
          payload: res.data.result
        });
      })
  }
};
// 热门歌曲初始化
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
// 热门搜索标签初始化
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
// 搜索框输入
export const inputContent = (text) => {
  return (dispath) => {
    dispath({
      type: INPUT_CONTENT,
      payload: text
    });
  }
}
// 提交搜索关键词
export const commitContent = (text) => {
  console.log(text)
  return (dispath) => {
    dispath({
      type: COMMIT_CONTENT,
      payload: text
    });
  }
}
// 初始化搜索历史
export const initHistory = () => {
  return (dispath) => {
    dispath({
      type: INIT_HISTORY
    });
  }
}