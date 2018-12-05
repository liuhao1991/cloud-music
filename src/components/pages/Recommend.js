import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initRecommend, initPlaylist } from '../../actions';
import RecommendList from '../common/RecommendList';
import SongList from '../common/SongList';
import Footer from '../common/Footer';

class Recommend extends Component {

  componentDidMount () {
    const { recommends, playlist } = this.props.recommends;
    if (!recommends.length) {
      this.props.initRecommend();
    }
    if (!playlist.length) {
      this.props.initPlaylist();
    }
  }

  render () {
    const { recommends, playlist } = this.props.recommends;
    return (
      <div className="tab-content">
        <div style={ styles.recommend }>
          <div style={ styles.sectionTitle }>
            推荐歌单
          </div>
          <RecommendList playlist={playlist}/>
          <div style={ styles.sectionTitle }>
            最新音乐
          </div>
          <SongList songs={ recommends } />
          <Footer />
        </div>
      </div>
    )
  }
}

const styles = {
  recommend: {
    backgroundColor: '#fcfcfd',
    height: '100%',
    paddingTop: '20px',
  },
  sectionTitle: {
    height: '20px',
    paddingLeft: '9px',
    marginBottom: '14px',
    lineHeight: '20px',
    fontSize: '17px',
    borderLeft: '2px solid rgb(211, 58, 49)',
    color: 'rgb(51, 51, 51)',
  }
}

function mapStateToProps(state) {
  return {
    recommends: state.recommends
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initRecommend: bindActionCreators(initRecommend, dispatch),
    initPlaylist: bindActionCreators(initPlaylist, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);