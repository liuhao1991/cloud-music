import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/SearchMultimatch.css';

const SearchMultimatch = ({ multimatch }) => {
  if (Object.keys(multimatch).length === 0 || multimatch.orders.length === 0) {
    return ''
  }
  const { orders } = multimatch;
  const matches = orders.map((v, i) => {
    if (v === 'album') {
      return <Album album={ multimatch[v] } key={ i }/>;
    } else if (v === 'artist') {
      return <Artist artist={ multimatch[v] } key={ i }/>;
    } else {
      return '';
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
  return (
    <li className="matchitem album">
      <Link to={'/album/' + item.id }>
        <div className="linkcover f-bd f-bd-btm">
          <figure className="piccover">
            <img className="pic" alt="" src={ item.picUrl } />
          </figure>
          <article className="describe">
            <h4 className="maindes f-thide">专辑:
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
  )
}

const Artist = ({ artist }) => {
  const item = artist[0];
  const { name, alias, id, picUrl } = item;
  const alia = alias.length ? '（' + alias.join(' / ') + '）': '';
  return (
    <li className="matchitem artist">
      <Link to={'/artist/' + id }>
        <div className="linkcover f-bd f-bd-btm">
          <figure className="piccover">
            <img className="pic" alt="" src={ picUrl } />
          </figure>
          <article className="describe">
            <h4 className="maindes f-thide">歌手:
              <p className="hcover">
                <span className="normal">{ name + alia }</span>
              </p>
            </h4>
          </article>
          <i className="u-svg u-svg-arr"></i>
        </div>
      </Link>
    </li>
  )
}

export default SearchMultimatch;