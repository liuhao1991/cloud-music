import React, { Component } from 'react';
import http from '../js/api';
import '../css/HotSongs.css';

class Hotsongs extends Component {
  constructor() {
    super();
    this.state = {
      playlist: {}
    };
  }

  fetchData () {
    http.get('http://localhost:3001/api/detail')
    .then(res => {
      this.setState({
        playlist: res.data.playlist
      });
    });
  }
  componentDidMount () {
    this.fetchData();
  }
  render () {
    return (
      <div className="hot-songs">
        <Banner updateTime={this.state.playlist.updateTime}/>
        <div>
          <div className="sgitem">
          </div>
        </div>
      </div>
    )
  }
}

const Banner = (props) => {
  const updateDate = new Date(props.updateTime)
  const m = updateDate.getMonth() + 1;
  const d = updateDate.getDate() >= 10 ? updateDate.getDate() : '0' + updateDate.getDate();
  return (
    <div className="banner">
      <div className="hotpct">
        <div className="hmsprt hoticon"></div>
        <div className="hottime">更新日期：{ m + '月' + d + '日' }</div>
      </div>
    </div>
  )
}

// const SongItem = (props) => {
//   return (
//     <a className="recommend-item" href={ '/m/playlist?id=' + props.item.id }>
//       <div className="recommend-img">
//         <img src={ props.item.picUrl } alt={ props.item.name }/>
//         <div className="recommend-shadow">
//           <span className="recommend-play-count">{ playCount(props.item.playCount) }</span>
//         </div>
//       </div>
//       <div className="recommend-name">
//         { props.item.name }
//       </div>
//     </a>
//   )
// }

export default Hotsongs;