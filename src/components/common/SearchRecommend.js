import React from 'react';
import '../../assets/css/SearchRecommend.css';

const SearchRecommend = ({ input, recom, handleSubmit }) => {
  return (
    <div className="serarch-recommend">
      <h3 className="serarch-recommend-title f-thide" onClick={ () => handleSubmit(input) }>搜索"{ input }"</h3>
      {
        recom.allMatch
        ? <ul>
            <Recomitem recom={ recom.allMatch } handleSubmit={ handleSubmit }/>
          </ul>
        : ''
      }
    </div>
  );
}

const Recomitem = ({ recom, handleSubmit }) => {
  return recom.map((v, i) => {
    return <li className="recomitem" key={ i } onClick={ () => handleSubmit(v.keyword) }>
            <i className="u-svg u-svg-search"></i>
            <span className="f-bd f-bd-btm f-thide">{ v.keyword }</span>
          </li>
  });
}

export default SearchRecommend;