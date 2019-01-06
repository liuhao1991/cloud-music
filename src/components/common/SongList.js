import React from 'react';
import Song from './Song';

const SongList = (props) => {
  const { songs } = props;
  const list = songs.map((item, index) => {
    const { song, id, name } = item;
    const { artists, alias, album } = song;
    const singerList = artists.map(v => v.name);
    const singers = singerList.join(' / ');
    const alb = album.name;
    const info = singers + ' - ' + alb;
    const alia = alias.join(' / ');
    const showIndex = false;
    const songInfo = {
      name,
      alia,
      index,
      info,
      id,
      showIndex
    };
    return <Song song={ songInfo } key={ id }/>;
  });

  return (
    <div>
      { list }
    </div>
  );
}

export default SongList;