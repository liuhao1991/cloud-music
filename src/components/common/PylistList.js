import React from 'react';
import Song from '../common/Song';
import '../../assets/css/PylistList.css';

const PylistList = props => {
  const { tracks } = props.playlist;
  return (
    <div className="pylist-list">
      <div className="u-smtitle">歌曲列表</div>
      <SongList songs={ tracks } />
    </div>
  )
}

const SongList = props => {
  const { songs } = props;
  const list = songs.map((item, index) => {
    const id = item.id;
    const name = item.name;
    const album = item.al.name;
    const alia = item.alia.join(' / ');
    const singerList = item.ar.map(v => v.name);
    const singers = singerList.join(' / ');
    const info = singers + ' - ' + album;
    const showIndex = true;
    const highlight = false;
    const songInfo = {
      name,
      alia,
      index,
      info,
      id,
      showIndex,
      highlight
    };
    return <Song song={ songInfo } key={ id } />
  })
  return (
    <div>
      { list }
    </div>
  )
}

export default PylistList;
