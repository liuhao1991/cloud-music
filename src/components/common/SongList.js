import React from 'react';
import Song from '../common/Song';

const SongList = (props) => {
  const songs = props.songs
  const list = songs.map((item, index) => {
    const { song, id, name } = item
    const { artists, alias, album } = song
    const singerList = artists.map(v => v.name)
    const singers = singerList.join(' / ')
    const alb = album.name
    const info = singers + ' - ' + alb
    const alia = alias.join(' / ')
    return <Song name={ name } alia={ alia } index={ index } info={ info } id={ id } key={ id } showIndex={ false }/>
  });

  return (
    <div>
      { list }
    </div>
  )
}

export default SongList;