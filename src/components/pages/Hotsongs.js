import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHotsongs } from '../../actions';
import Song from '../common/Song';
import Loading from '../common/Loading';
import '../../assets/css/HotSongs.css';

class Hotsongs extends Component {

  componentDidMount () {
    if (!Object.keys(this.props.hotsongs).length) {
      this.props.initHotsongs();
    }
  }

  render () {
    return (
      <div className="tab-content">
        <div className="hot-songs">
          <Banner updateTime={ this.props.hotsongs.updateTime } />
          <SongList tracks={ this.props.hotsongs.tracks } />
          { this.props.hotsongs.tracks 
            ? <div className="hotdn">
                <span className="hotview">查看完整榜单</span>
              </div>
            : ''
          }
        </div>
      </div>
    );
  }
}

const Banner = (props) => {
  const { updateTime } =  props;
  const updateDate = new Date(props.updateTime);
  const m = updateDate.getMonth() + 1;
  const d = updateDate.getDate() >= 10 ? updateDate.getDate() : '0' + updateDate.getDate();
  return (
    <div className="banner">
      <div className="hotpct">
        <div className="hmsprt hoticon"></div>
        <div className="hottime">更新日期：{ updateTime ? (m + '月' + d + '日') : '' }</div>
      </div>
    </div>
  );
}

const SongList = (props) => {
  const { tracks } = props;
  let songTracks;
  if (tracks) {
    songTracks = tracks.map((item, index) => {
      const id = item.id;
      const name = item.name;
      const album = item.al.name;
      const alia = item.alia.join(' / ');
      const singerList = item.ar.map(v => v.name);
      const singers = singerList.join(' / ');
      const info = singers + ' - ' + album;
      const showIndex = true;
      const highlight = true;
      const songInfo = {
        name,
        alia,
        index,
        info,
        id,
        showIndex,
        highlight
      };
      return <Song song={ songInfo } key={ id } />;
    })
  } else {
    songTracks = <Loading />
  }
  
  return (
    <div className="sglist">
      { songTracks }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    hotsongs: state.hotsongs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initHotsongs: bindActionCreators(initHotsongs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotsongs);