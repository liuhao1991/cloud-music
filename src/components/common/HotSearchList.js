import React from 'react';
import '../../assets/css/HotSearchList.css';

const HotSearchItem = (props) => {
  const { first } = props.item;
  const { commitSearch } = props;
  
  return (
    <div className="hot-search-item" onClick={() => commitSearch(first) }>
      { first }
    </div>
  )
}

const HotSearchList = (props) => {
  const { hotitems, commitSearch, inputSearch } = props;
  const hotList = hotitems.map((v, i) => {
    return <HotSearchItem item={ v } key={ i } inputSearch={ inputSearch } commitSearch={ commitSearch } />
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
