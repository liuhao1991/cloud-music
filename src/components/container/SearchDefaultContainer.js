import React from 'react';
import SearchHotItemsContainer from './SearchHotItemsContainer';
import SearchHistoryContainer from './SearchHistoryContainer';

const SearchDefaultContainer = props => {
  return (
    <div className="search-default">
      <SearchHotItemsContainer />
      <SearchHistoryContainer />
    </div>
  )
}

export default SearchDefaultContainer;
