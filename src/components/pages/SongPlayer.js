import React, { Component } from 'react';
import '../../assets/css/SongPlayer.css';

class SongPlayer extends Component {

  state = {
    duration: '0ms',
    wrapperHeight: '0px',
  }

  componentDidMount () {

    const scroller = document.querySelector('.m-scroll_scroller');
    const scrollerHeight = scroller.clientHeight;
    const wrapperHeight = scroller.parentNode.clientHeight;
    this.setState({
      wrapperHeight: wrapperHeight + 'px'
    })
    scroller.style.transitionTimingFunction = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
    scroller.style.transitionDuration = '0ms';
    let initY = 0, sliderPixel = 0, sliderSpan = 0;
    let touchstartAt = 0, touchendAt = 0;
    const windowHeight = document.body.clientHeight || document.documentElement.clientHeight;
    scroller.addEventListener('touchstart', function(e) {
      const touch = e.targetTouches;
      initY = touch[0].pageY;
      touchstartAt = new Date().getTime();
      this.style.transitionDuration = '0ms';
    });
    scroller.addEventListener('touchmove', function(e) {
      const touch = e.targetTouches;
      const startY = touch[0].pageY;
      sliderSpan = startY - initY;
      if (startY < 0 || startY > windowHeight) {
        return
      }
      const translateY = sliderPixel + sliderSpan;
      this.style.transform = 'translate(0px, '+ translateY + 'px) translateZ(0px)';
    });
    scroller.addEventListener('touchend', function(e) {
      touchendAt = new Date().getTime();
      sliderPixel += sliderSpan;
      const maxHeight = scrollerHeight - wrapperHeight;
      if (sliderPixel < -maxHeight ) {
        sliderPixel = -maxHeight;
      } else if (sliderPixel > 0) {
        sliderPixel = 0;
      }
      const interval = (touchendAt - touchstartAt) / 1000;
      if (interval <= 0.3) {
        const tempSliderSpan = sliderSpan / interval;
        sliderPixel = sliderPixel - sliderSpan + tempSliderSpan;
        if (sliderPixel < -maxHeight ) {
          sliderPixel = -maxHeight;
        } else if (sliderPixel > 0) {
          sliderPixel = 0;
        }
        this.style.transform = 'translate(0px, '+ sliderPixel + 'px) translateZ(0px)';
        this.style.transitionDuration = interval * 5000 + 'ms';
      } else {
        this.style.transform = 'translate(0px, '+ sliderPixel + 'px) translateZ(0px)';
        this.style.transitionDuration = '600ms';
      }
      // this.style.transitionDuration = '0ms';
      sliderSpan = 0;
      initY = 0;
    });
  }

  render () {
    const id = this.props.match.params.id;
    return (
      <div className="song-player">
        <div className="m-song-bg"></div>
        <div className="m-scroll_wrapper">
          <div className="m-scroll_scroller">
            <div className="m-song_newfst" style={{height: this.state.wrapperHeight}}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SongPlayer;