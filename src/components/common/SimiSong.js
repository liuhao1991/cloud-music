import React from 'react';
import { picUrlFmt } from '../../assets/js/help';

const SimiSong = ({ songs }) => {
  const songList = songs.map(v => {
    return <Song song={ v } key={ v.id } />;
  })
  return (
    <div className="m-moreSongs">
      <h2 className="u-title">喜欢这首歌的人也听</h2>
      <ul className="m-card m-card-sml m-card-list">
        { songList }
      </ul>
    </div>
  );
}

const Song = ({ song }) => {
  const { id, album, name } = song;
  const { picUrl, artists } = album;
  const albumName = album.name;
  const artistsName = artists.map(v => {
    return v.name;
  })
  let imgUrl = picUrlFmt(picUrl, '?imageView=1&thumbnail=90x0');
  
  return (
    <li className="itm">
      <a href={ '/song/' + id }>
        <figure className="cover u-cover">
          <img src={ imgUrl } alt={ song.id }/>
        </figure>
        <article className="cnt f-fvc f-bd f-bd-btm">
          <h3 className="f-thide">{ name }</h3>
          <p className="sub f-thide">{ artistsName.join('/') } - { albumName }</p>
        </article>
        <i className="play f-vc">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path d="m36.4 24.6c0 0 1.4 1.4 0 2.8-1.4 1.4-12.2 7-12.2 7s-5.2 3.6-5.2-.1c0-2.9 0-16.8 0-16.8s0-3.5 5.2 0l12.2 7.1"></path><path d="m26 2c13.2 0 24 10.8 24 24 0 13.2-10.8 24-24 24-13.2 0-24-10.8-24-24 0-13.2 10.8-24 24-24m0-2c-14.4 0-26 11.6-26 26 0 14.4 11.6 26 26 26 14.4 0 26-11.6 26-26 0-14.4-11.6-26-26-26z"></path></svg>
        </i>
      </a>
    </li>
  );
}

export default SimiSong;