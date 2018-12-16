import React from 'react';
import '../../assets/css/HotSearchList.css';

const HotSearchItem = (props) => {
  const { first } = props.item;
  const { handleSubmit } = props;
  return (
    <div className="hot-search-item" onClick={() => handleSubmit(first) }>
      { first }
    </div>
  )
}

const HotSearchList = (props) => {
  const { hotitems, commitSearch, inputSearch, searchSongs, searchMultimatch } = props;
  const handleSubmit = text => {
    commitSearch(text);
    searchSongs(text);
    searchMultimatch(text);
  }
  const hotList = hotitems.map((v, i) => {
    return <HotSearchItem item={ v } key={ i } inputSearch={ inputSearch } handleSubmit={ handleSubmit } />
  });
  return (
    <div className="hot-search-list">
      <div className="hot-title">热门搜索</div>
      <div className="hot-list">
        { hotList }
      </div>
    </div>
  )
}

export default HotSearchList;
