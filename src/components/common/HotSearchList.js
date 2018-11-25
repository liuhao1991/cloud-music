import React from 'react';
import '../css/HotSearchList.css';

const HotSearchItem = (props) => {
  const { first } = props.item;
  const { inputSearchContent } = props;

  return (
    <div className="hot-search-item" onClick={() => inputSearchContent(first) }>
      { first }
    </div>
  )
}

const HotSearchList = (props) => {
  const { hotitems, inputSearchContent } = props;
  const hotList = hotitems.map((v, i) => {
    return <HotSearchItem item={ v } key={ i } inputSearchContent={ inputSearchContent }/>
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
