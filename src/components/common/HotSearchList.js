import React from 'react';
import '../../assets/css/HotSearchList.css';

const HotSearchItem = (props) => {
  const { first } = props.item;
  const { inputContent, commitContent } = props;

  const handleClick = (value) => {
    inputContent(value);
    commitContent(value);
  }

  return (
    <div className="hot-search-item" onClick={() => handleClick(first) }>
      { first }
    </div>
  )
}

const HotSearchList = (props) => {
  const { hotitems, inputContent, commitContent } = props;
  const hotList = hotitems.map((v, i) => {
    return <HotSearchItem item={ v } key={ i } inputContent={ inputContent } commitContent={ commitContent } />
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
