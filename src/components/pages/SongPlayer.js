import React, { Component } from 'react';
import BScroll from 'better-scroll';
import MusicComments from '../common/MusicComments';
import SimiPlaylist from '../common/SimiPlaylist';
import SimiSong from '../common/SimiSong';
import logo from '../../assets/img/logosong.svg';
import '../../assets/css/SongPlayer.css';
import http from '../../js/http';

class SongPlayer extends Component {

  state = {
    wrapperHeight: 0,
    comments: {},
    simiPlaylist: {},
    simiSong: {},
    lyric: {},
    playing: false,
    url: ''
  }

  fetchSongUrl = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/url', {params: data})
      .then(res => {
        this.setState({
          url: res.data.data[0].url,
          playing: true
        });
        setTimeout(() => {
          this.refs.audio.play();
        }, 500)
      })
  }

  fetchSongLyric = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/lyric', {params: data})
      .then(res => {
        this.setState({
          lyric: res.data
        });
      })
  }
  
  fetchComments = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/comments', {params: data})
      .then(res => {
        this.setState({
          comments: res.data
        });
      })
  }

  fetchSimiPlaylist = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/simiPlaylist', {params: data})
      .then(res => {
        this.setState({
          simiPlaylist: res.data
        });
      })
  }

  fetchSimiSong = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/simiSong', {params: data})
      .then(res => {
        this.setState({
          simiSong: res.data
        });
      })
  }

  handlePlay = () => {
    let imageWrapper = document.querySelector('.m-song-rollwrap');
    let image = document.querySelector('.m-song-img');
    let wrapperTransform = this.getTransform(imageWrapper);
    let innerTransform = this.getTransform(image);
    document.querySelector('.m-song-rollwrap').style.transform = wrapperTransform === 'none' ? innerTransform : innerTransform.concat(' ', wrapperTransform)
    document.querySelector('.m-song-lgour').style.transform = wrapperTransform === 'none' ? innerTransform : innerTransform.concat(' ', wrapperTransform)
    
    this.setState(prevState => ({
      playing: !prevState.playing
    }));
    this.state.playing ? this.refs.audio.pause() : this.refs.audio.play();
  }

  getTransform = (wrapper) => {
    let wrapperStyle = getComputedStyle(wrapper, null);
    let wrapperTransform = wrapperStyle.getPropertyValue("-webkit-transform") ||
        wrapperStyle.getPropertyValue("-moz-transform") ||
        wrapperStyle.getPropertyValue("-ms-transform") ||
        wrapperStyle.getPropertyValue("-o-transform") ||
        wrapperStyle.getPropertyValue("transform");
    return wrapperTransform
  }

  componentDidMount () {
    this.fetchComments();
    this.fetchSimiPlaylist();
    this.fetchSimiSong();
    this.fetchSongUrl();
    this.fetchSongLyric();

    let wrapper = document.querySelector('.m-scroll_wrapper');
    const wrapperHeight = wrapper.clientHeight;
    this.setState({
      wrapperHeight: wrapperHeight
    });
    new BScroll(wrapper);
  }

  render () {
    const LyricFmt = () => {
      if (!this.state.lyric.lrc) {
        return <div className="m-song-lrc">暂无歌词</div>;
      }
      const lrc = this.state.lyric.lrc.lyric ? this.state.lyric.lrc.lyric.split('\n') : [];
      const tlyric = this.state.lyric.tlyric.lyric ? this.state.lyric.tlyric.lyric.split('\n') : []
      const str = lrc.map((v, i) => {
        return <p className="m-song-lritem j-lritem" key={ i }>
                { tlyric.length 
                  ? <span><span>{ v }</span><span>{ tlyric[i] }</span></span>
                  : v }
              </p>
      });
      return <div className="m-song-lrc">{ str }</div>
    }
    return (
      <div className="song-player">
        <audio ref="audio" src={ this.state.url }></audio>
        <div className="m-song-bg"></div>
        <div className="m-scroll_wrapper">
          <div className="m-scroll_scroller">
            <div className="m-song_newfst" style={{height: this.state.wrapperHeight}}>
              <div className="m-logo">
                <img className="u-svg u-svg-logosong" src={ logo } alt="logo" />
              </div>
              <div className="m-song-wrap">
                <div className={ `m-song-disc ${this.state.playing ? 'playing': ''}` }>
                  <div className="m-song-turn">
                    <div className="m-song-rollwrap">
                      <div className={ `m-song-img ${this.state.playing ? 'spining': ' '}` }>
                        <img className="u-img" alt="music-img" src="http://p1.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0" />
                      </div>
                    </div>
                    <div className="m-song-lgour">
                      <div className={ `m-song-light ${this.state.playing ? 'spining': ''}` }></div>
                    </div>
                  </div>
                  <div className="m-song-plybtn"></div>
                </div>
                <div className="m-song-clickarea" onClick={ this.handlePlay }></div>
              </div>
              <div className="m-song-info">
                <h2 className="m-song-h2">
                  <span className="m-song-sname">圣诞夜</span>
                  <span className="m-song-gap">-</span>
                  <b className="m-song-autr">朱星杰</b>
                </h2>
                <LyricFmt />
              </div>
              <div className="m-giude" style={{bottom: '-14px'}}>
                <i className="arr ani"></i>
              </div>
            </div>
            {
              this.state.simiPlaylist.playlists && this.state.simiPlaylist.playlists.length
              ? <SimiPlaylist playlists={ this.state.simiPlaylist.playlists }/>
              : ''
            }
            {
              this.state.simiSong.songs && this.state.simiSong.songs.length
              ? <SimiSong songs={ this.state.simiSong.songs }/>
              : ''
            }
            {
              this.state.comments.hotComments
              ? <MusicComments comments={ this.state.comments.comments } hotComments={ this.state.comments.hotComments } total={ this.state.comments.total }/>
              : ''
            }
          </div>
        </div>
        <div className="u-ft">
          <div className="footer-wrap">
            <span className="u-btn u-btn-hollow u-btn-red">打 开</span>
            <span className="u-btn u-btn-red">下 载</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SongPlayer;