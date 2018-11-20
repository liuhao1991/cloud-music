import React, { Component } from 'react';
import '../css/SongItem.css';

const SongItem = (props) => {
  return (
    <a className="song-item" href={ props.song.id }>
      <div className="content">
        <div className="text">
          <SongName song={ props.song.song } />
          <SongInfo song={ props.song.song } />
        </div>
        <div className="play">
          <span></span>
        </div>
      </div>
    </a>
  )
};

const SongName = (props) => {
  const { song } = props;
  return (
    <div className="name">
      <span>{ song.name}</span>
      <span className="alias">{ song.alias.length ? '(' + song.alias.join(' / ') + ')' : '' }</span>
    </div>
  )
}

const SongInfo = (props) => {
  const { song } = props;
  const artists = song.artists.map(artist => {
    return <span key={ artist.id }>{ artist.name }</span>;
  });
  return (
    <div className="info">
      { artists } - { song.album.name }
    </div>
  )
}

class SongList extends Component {
  render () {
    const songs = this.props.songs
    const list = songs.map(item => {
      return <SongItem song={ item } key={ item.id } />
    });

    return (
      <div>
        { list }
      </div>
    )
  }
}

export default SongList;