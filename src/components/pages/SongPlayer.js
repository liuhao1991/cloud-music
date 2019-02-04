import React, { Component } from 'react';
import BScroll from 'better-scroll';
import MusicComments from '../common/MusicComments';
import SimiPlaylist from '../common/SimiPlaylist';
import SimiSong from '../common/SimiSong';
import logo from '../../assets/img/logosong.svg';
import '../../assets/css/SongPlayer.css';
import { bgImage, singerName } from  '../../assets/js/help';
import http from '../../js/http';
import Lyric from 'lyric-parser';

class SongPlayer extends Component {

  state = {
    wrapperHeight: 0,
    comments: {},
    simiPlaylist: {},
    simiSong: {},
    info: {},
    lyric: null,
    tlyric: null,
    playing: false,
    url: '',
    currentLineNum: 0,
    lyricList: null,
    lyricListTranslateY: 0
  }

  fetchSongUrl = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/url', {params: data})
      .then(res => {
        this.setState({
          url: res.data.data[0].url,
        });
        this.initPlay();
      })
  }

  fetchSongLyric = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/lyric', {params: data})
      .then(res => {
        this.setState({
          lyric: res.data.lrc.lyric ? new Lyric(res.data.lrc.lyric, this.handleLyric) : [],
          tlyric: res.data.tlyric.lyric ? new Lyric(res.data.tlyric.lyric) : []
        });
        this.initPlay();
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

  fetchSongInfo = () => {
    const id = this.props.match.params.id;
    const data = { id };
    http.get('http://localhost:3001/api/music/info', {params: data})
      .then(res => {
        this.setState({
          info: res.data
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
    this.state.lyric.togglePlay();
  }

  initPlay = () => {
    if (this.state.lyric && this.state.url !== '') {
      this.state.lyric.togglePlay();
      this.refs.audio.play();
      this.setState({
        playing: true
      });
    }
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

  handleLyric = ({lineNum}) => {
    console.log(lineNum)
    const height = document.querySelectorAll('.m-song-lritem')[lineNum].clientHeight;
    const { lyricListTranslateY } = this.state
    this.setState({
      currentLineNum: lineNum,
      lyricListTranslateY: lineNum <= 1 ? 0 : lyricListTranslateY + height
    });
  }

  handleEnded = () => {
    this.setState({
      playing: false,
      lyricListTranslateY: 0
    });
    document.querySelector('.m-song-rollwrap').style.transform = 'none';
    document.querySelector('.m-song-lgour').style.transform = 'none';
    this.state.lyric.stop();
  }

  componentDidMount () {
    this.fetchComments();
    this.fetchSimiPlaylist();
    this.fetchSimiSong();
    this.fetchSongUrl();
    this.fetchSongLyric();
    this.fetchSongInfo();
    let wrapper = document.querySelector('.m-scroll_wrapper');
    const wrapperHeight = wrapper.clientHeight;
    this.setState({
      wrapperHeight: wrapperHeight
    });
    new BScroll(wrapper);
  }

  componentWillUnmount () {
    this.state.lyric.stop();
  }

  render () {
    const LyricLines = () => {
      if (this.state.lyric === null) {
        return null
      }
      if (this.state.lyric && this.state.lyric.lines.length === []) {
        return <div className="m-song-inner">
          <p className="m-song-lritem">
            暂无歌词
          </p>
        </div>;
      }
      const lines = this.state.lyric.lines
      const tlyric = this.state.tlyric && this.state.tlyric.lines ? this.state.tlyric.lines : [];
      const lyricLines = lines.map((v, i) => {
        return <p className={ `m-song-lritem ${this.state.currentLineNum === i ? 'current' : ''}` } key={ i } >
                <span>{ v.txt }</span>
                {
                  tlyric[i]
                  ? <span>{ tlyric[i].txt }</span>
                  : null
                }
              </p>
      });
      return <div className="m-song-inner" style={{transform: 'translateY(-' + this.state.lyricListTranslateY + 'px)'}}>{ lyricLines }</div>
    }
    return (
      <div className="song-player">
        <audio ref="audio" src={ this.state.url } onEnded={ () => this.handleEnded() }></audio>
        {
          this.state.info.images &&
          <div className="m-song-bg" style={{ backgroundImage: bgImage(this.state.info.images[0]) }}></div>
        }
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
                        {
                          this.state.info.images &&
                          <img className="u-img" alt="music-img" src={this.state.info.images[0] + '?imageView&thumbnail=360y360&quality=75&tostatic=0' } />
                        }
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
                  <span className="m-song-sname">{ this.state.info.title ? this.state.info.title : ''}</span>
                  <span className="m-song-gap">-</span>
                  <b className="m-song-autr">{ singerName(this.state.info.description) }</b>
                </h2>
                <div className="m-song-lrc f-pr">
                  <div className="m-lrc-scroll" ref="lyricList">
                    <LyricLines />
                  </div>
                </div>
              </div>
              <div className="m-giude" style={{bottom: '-14px'}}>
                <i className="arr ani"></i>
              </div>
            </div>
            {
              this.state.simiPlaylist.playlists && this.state.simiPlaylist.playlists.length
              ? <SimiPlaylist playlists={ this.state.simiPlaylist.playlists }/>
              : null
            }
            {
              this.state.simiSong.songs && this.state.simiSong.songs.length
              ? <SimiSong songs={ this.state.simiSong.songs }/>
              : null
            }
            {
              this.state.comments.hotComments
              ? <MusicComments comments={ this.state.comments.comments } hotComments={ this.state.comments.hotComments } total={ this.state.comments.total }/>
              : null
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