import React from 'react';
import HotSearchList from './HotSearchList';
import SearchHistory from './SearchHistory';

const SearchDefault = props => {
  const { items, commitSearch, inputSearch, inputList, deleteHistory, searchSongs, searchMultimatch } = props;
  return (
    <div className="m-default">
      <HotSearchList hotitems={ items } commitSearch={ commitSearch } inputSearch={ inputSearch } searchSongs={searchSongs} searchMultimatch={ searchMultimatch } />
      <SearchHistory inputList={ inputList } deleteHistory={deleteHistory} commitSearch={ commitSearch } searchSongs={searchSongs} searchMultimatch={ searchMultimatch } />
    </div>
  )
}

export default SearchDefault;