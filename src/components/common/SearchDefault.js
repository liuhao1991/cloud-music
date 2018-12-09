import React from 'react';
import HotSearchList from './HotSearchList';
import SearchHistory from './SearchHistory';

const SearchDefault = props => {
  const { items, commitSearch, inputSearch, inputList, deleteHistory } = props;
  return (
    <div className="m-default">
      <HotSearchList hotitems={ items } commitSearch={ commitSearch } inputSearch={ inputSearch } />
      <SearchHistory inputList={ inputList } deleteHistory={deleteHistory} commitSearch={ commitSearch }/>
    </div>
  )
}

export default SearchDefault;