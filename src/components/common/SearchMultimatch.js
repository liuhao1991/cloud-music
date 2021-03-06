import React from 'react';
import { Link } from 'react-router-dom';
import { picUrlFmt } from '../../assets/js/help';
import '../../assets/css/SearchMultimatch.css';

const SearchMultimatch = ({ multimatch }) => {
  if (Object.keys(multimatch).length === 0 || multimatch.orders.length === 0) {
    return null;
  }
  const { orders } = multimatch;
  const matches = orders.map((v, i) => {
    if (v === 'album') {
      return <Album album={ multimatch[v] } key={ i }/>;
    } else if (v === 'artist') {
      return <Artist artist={ multimatch[v] } key={ i }/>;
    } else if (v === 'mv') {
      return <MusicVideo mv={ multimatch[v] } key={ i }/>;
    } else {
      return null;
    }
  });
  return (
    <div className="m-matchlist">
      <h3 className="title">最佳匹配</h3>
      <ul>
        { matches }
      </ul>
    </div>
  )
}

const Album = ({ album }) => {
  const item = album[0];
  const { artists } = item;
  const names = artists.map(v => {
    return v.name;
  });
  let fmtPicUrl = picUrlFmt(item.picUrl, '.webp?imageView&thumbnail=100x0&quality=75&tostatic=0&type=webp');
  return (
    <li className="matchitem album">
      <Link to={'/album/' + item.id }>
        <div className="linkcover f-bd f-bd-btm">
          <figure className="piccover">
            <img className="pic" alt="" src={ fmtPicUrl } />
          </figure>
          <article className="describe">
            <h4 className="maindes f-thide">专辑：
              <p className="hcover">
                <span className="normal">{ item.name }</span>
              </p>
            </h4>
            <p className="hcover addtional">
              <span className="normal">{ names.join(' / ') }</span>
            </p>
          </article>
          <i className="u-svg u-svg-arr"></i>
        </div>
      </Link>
    </li>
  );
}

const Artist = ({ artist }) => {
  const item = artist[0];
  const { name, alias, id, picUrl } = item;
  const alia = alias.length ? '（' + alias.join(' / ') + '）': '';
  let fmtPicUrl = picUrlFmt(picUrl, '.webp?imageView&thumbnail=100x0&quality=75&tostatic=0&type=webp');
  return (
    <li className="matchitem artist">
      <Link to={'/artist/' + id }>
        <div className="linkcover f-bd f-bd-btm">
          <figure className="piccover">
            <img className="pic" alt="" src={ fmtPicUrl } />
          </figure>
          <article className="describe">
            <h4 className="maindes f-thide">歌手：
              <p className="hcover">
                <span className="normal">{ name + alia }</span>
              </p>
            </h4>
          </article>
          <i className="u-svg u-svg-arr"></i>
        </div>
      </Link>
    </li>
  );
}

const MusicVideo = ({mv}) => {
  const item = mv[0];
  const { id, cover, name, artists } = item;
  const names = artists.map(v => {
    return v.name;
  });
  let fmtPicUrl = picUrlFmt(cover, '.webp?imageView&thumbnail=178x0&quality=75&tostatic=0&type=webp');
  return (
    <li className="matchitem mv">
      <Link to={'/mv/' + id }>
        <div className="linkcover f-bd f-bd-btm">
          <figure className="piccover">
            <img className="pic" alt="" src={ fmtPicUrl } />
          </figure>
          <article className="describe">
            <h4 className="maindes f-thide">MV：
              <p className="hcover">
                <span className="normal">{ name }</span>
              </p>
            </h4>
            <p className="hcover addtional">
              <span className="normal">{ names }</span>
            </p>
          </article>
          <i className="u-svg u-svg-arr"></i>
        </div>
      </Link>
    </li>
  );
}

export default SearchMultimatch;