import http from '../js/api';

export const initRecommend = () => {
  return (dispath) => {
    http.get('http://localhost:3001/api/newsong')
      .then(res => {
        dispath({
          type: 'INIT_RECOMMEND',
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
        type: 'INIT_HOTSONGS',
        payload: res.data.playlist
      });
    });
  }
}