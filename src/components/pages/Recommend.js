import React, { Component } from 'react';
import RecommendList from '../common/RecommendList';
import SongList from '../common/SongList';
import http from '../js/api';

class Recommend extends Component {
  constructor() {
    super();
    this.state = {
      songs: []
    };
  }
  
  fetchData() {
    http.get('http://localhost:3001/api/newsong')
      .then(res => {
        this.setState({
          songs: res.data.result
        });
      });
  }

  componentDidMount () {
    this.fetchData();
  }

  render () {
    return (
      <div style={ styles.recommend }>
        <div style={ styles.sectionTitle }>
          推荐歌单
        </div>
        <RecommendList/>
        <div style={ styles.sectionTitle }>
          最新音乐
        </div>
        <SongList songs={ this.state.songs } />
        <div style={ styles.footer }>
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
  },
  footer: {
    height: '200px',
    position: 'relative',
    paddingTop: '53.3%',
    marginTop: '4px',
    background: 'url(//s3.music.126.net/m/s/img/recommand_bg_2x.png?d045faf…) no-repeat',
    backgroundSize: 'contain',
  }
}

export default Recommend;