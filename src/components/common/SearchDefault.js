import React from 'react';
import HotSearchList from './HotSearchList';
import SearchHistory from './SearchHistory';

const SearchDefault = props => {
  const { items, commitContent, inputContent, inputList } = props;
  return (
    <div className="m-default">
      <HotSearchList hotitems={ items } commitContent={ commitContent } inputContent={ inputContent } />
      <SearchHistory inputList={ inputList } />
    </div>
  )
}

export default SearchDefault;