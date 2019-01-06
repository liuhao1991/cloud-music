import React from 'react';
import { Link } from 'react-router-dom';
import { picUrlFmt, playCount } from '../../assets/js/help';

const SimiPlaylist = ({ playlists }) => {
  const list = [1, 2, 3].map((v, i) => {
    return <Playlist playlist={ playlists[i] } key={ i }/>;
  })
  return (
    <div className="m-moreLists">
      <h2 className="u-title">包含这首歌的歌单</h2>
      <ul>
        { list }
      </ul>
    </div>
  );
}

const Playlist = ({ playlist }) => {
  if (!playlist) {
    return <li></li>;
  }
  let fmtPicUrl = picUrlFmt(playlist.coverImgUrl, '?imageView&thumbnail=369x0&quality=75&tostatic=0');
  return (
    <li>
      <Link to={ '/playlist/' + playlist.id }>
      <figure className="cover u-cover">
        <img alt={ playlist.name } src={ fmtPicUrl } />
        <span className="u-earp sgply_cut">{ playCount(playlist.playCount) }</span>
      </figure>
      <h3 className="tit f-fs13 f-thide">{ playlist.name }</h3>
      <p className="sub">
        <span className="author">by { playlist.creator.nickname }</span>
      </p>
      </Link>
    </li>
  );
}

export default SimiPlaylist;