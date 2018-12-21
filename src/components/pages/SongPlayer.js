import React, { Component } from 'react';
import '../../assets/css/SongPlayer.css';

class SongPlayer extends Component {
  render () {
    const id = this.props.match.params.id;
    return (
      <div className="song-player">
        <div className="m-song-bg"></div>
        <div className="m-scroll_wrapper">
          { id }
        </div>
      </div>
    )
  }
}

export default SongPlayer;