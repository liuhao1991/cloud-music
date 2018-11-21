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
        <Banner updateTime={ this.state.playlist.updateTime } />
        <SongList tracks={ this.state.playlist.tracks } />
        { this.state.playlist.tracks ?
          <div className="hotdn">
           <span class="hotview">查看完整榜单</span>
          </div>
          :
          ''
        }
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

const SongItem = (props) => {
  const { song, index } = props
  const i = index + 1
  const order = i < 10 ? '0' + i : i
  const songName = `${song.name}`
  const Alia = () => {
    return <span>{ song.alia.length ? '(' + song.alia.join(' / ') + ')' : ''}</span>
  }
  const singerList = song.ar.map(v => {
    return v.name
  })

  const songInfo = singerList.join(' / ') + ' - ' + song.name

  return (
    <a className="sgitem" href={ song.id }>
      <div className={ `sgnumber ${index < 3 ? 'sgnumber-highlight' : null}` }>{ order }</div>
      <div className="sginfos">
        <div className="sginfo">
          <div className="sgname">
            { songName }
            <Alia />
          </div>
          <div className="sgalbum">
            <i className="hmsprt sghot"></i>
            <span>{ songInfo }</span>
          </div>
        </div>
        <div className="sgplay">
          <span className="hmsprt sgchply"></span>
        </div>
      </div>
    </a>
  )
}

const SongList = (props) => {
  const { tracks } = props
  
  if (tracks) {
    const songTracks = tracks.map((v, i) => {
      return <SongItem song={ v } index={ i } key={ v.id }/>
    })
    return (
      <div className="sglist">
        { songTracks }
      </div>
    )
  } else {
    return (
      <div className="sglist">
        <center>
          <img alt="加载中" src="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7" />
        </center>
      </div>
    )
  }
  
}

export default Hotsongs;