import React, { Component } from 'react';
import BScroll from 'better-scroll';
import logo from '../../assets/img/logosong.svg';
import '../../assets/css/SongPlayer.css';

class SongPlayer extends Component {

  state = {
    wrapperHeight: 0,
  }

  componentDidMount () {
    let wrapper = document.querySelector('.m-scroll_wrapper');
    const wrapperHeight = wrapper.clientHeight;
    this.setState({
      wrapperHeight: wrapperHeight
    });
    new BScroll(wrapper);
  }

  render () {
    const id = this.props.match.params.id;
    return (
      <div className="song-player">
        <div className="m-song-bg"></div>
        <div className="m-scroll_wrapper">
          <div className="m-scroll_scroller">
            <div className="m-song_newfst" style={{height: this.state.wrapperHeight}}>
              <div className="m-logo">
                <img className="u-svg u-svg-logosong" src={ logo } alt="logo" />
              </div>
              <div className="m-song-wrap">
                <div className="m-song-disc">
                  <div className="m-song-turn">
                    <div className="m-song-rollwrap">
                      <div className="m-song-img">
                        <img className="u-img" alt="music-img" src="http://p1.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0" />
                      </div>
                    </div>
                    <div className="m-song-lgour">
                      <div className="m-song-light"></div>
                    </div>
                  </div>
                  <div className="m-song-plybtn"></div>
                </div>
                <div className="m-song-clickarea"></div>
              </div>
              <div className="m-song-info">
                <h2 className="m-song-h2">
                  <span className="m-song-sname">圣诞夜</span>
                  <span className="m-song-gap">-</span>
                  <b className="m-song-autr">朱星杰</b>
                </h2>
              </div>
              <div className="m-giude" style={{bottom: '-14px'}}>
                <i className="arr ani"></i>
              </div>
            </div>
            
            <div className="m-moreLists">
              <h2 className="u-title">包含这首歌的歌单</h2>
              <ul>
                <li>
                  <figure className="cover u-cover">
                    <img alt="" src="https://p1.music.126.net/G7GgOHBdH1rUIIW3hot6Kw==/109951163609743240.webp?imageView&amp;thumbnail=369x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <span className="u-earp sgply_cut">2283.1万</span>
                  </figure>
                  <h3 className="tit f-fs13 f-thide">那些喜欢到循环播放的歌</h3>
                  <p className="sub">
                    <span className="author">by 暧酱酱</span>
                  </p>
                </li>
                <li>
                  <figure className="cover u-cover">
                    <img alt="" src="https://p1.music.126.net/G7GgOHBdH1rUIIW3hot6Kw==/109951163609743240.webp?imageView&amp;thumbnail=369x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <span className="u-earp sgply_cut">2283.1万</span>
                  </figure>
                  <h3 className="tit f-fs13 f-thide">那些喜欢到循环播放的歌</h3>
                  <p className="sub">
                    <span className="author">by 暧酱酱</span>
                  </p>
                </li>
                <li>
                  <figure className="cover u-cover">
                    <img alt="" src="https://p1.music.126.net/G7GgOHBdH1rUIIW3hot6Kw==/109951163609743240.webp?imageView&amp;thumbnail=369x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <span className="u-earp sgply_cut">2283.1万</span>
                  </figure>
                  <h3 className="tit f-fs13 f-thide">那些喜欢到循环播放的歌</h3>
                  <p className="sub">
                    <span className="author">by 暧酱酱</span>
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="m-moreSongs">
              <h2 className="u-title">喜欢这首歌的人也听</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SongPlayer;