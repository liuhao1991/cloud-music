import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/PlaylistBanner.css';

const PlaylistBanner = props => {
  const { coverImgUrl, playCount, creator, name } = props.playlist;
  return (
    <div className="u-plhead pylst_header">
      <div className="plhead_bg" style={{ backgroundImage: 'url("' + coverImgUrl +'")' }}></div>
      <div className="plhead_wrap">
        <div className="plhead_fl lsthd_fl">
          <img className="u-img" alt="" src={ coverImgUrl } />
          <span className="lsthd_icon">歌单</span>
          <i className="u-earp lsthd_num">{ playAcount(playCount) }</i>
        </div>
        <div className="plhead_fr">
          <h2 className="f-thide2 f-brk lsthd_title">{ name }</h2>
          <div className="lsthd_auth f-thide">
            <Link className="lsthd_link" to={ '/user/' + creator.userId }>
              <div className="u-avatar lsthd_ava">
                <img className="u-img" alt="" src={ creator.avatarUrl } />
                <span className="ava-icon ava-icon-daren "></span>
              </div>
              { creator.nickname }
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const playAcount = (count) => {
  return Number((count / 10000).toFixed(1)) + '万';
}

export default PlaylistBanner;