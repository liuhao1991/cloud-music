import React from 'react';
import SearchDefault from './SearchDefault';
import SearchRecommend from './SearchRecommend';
import SearchMultimatch from './SearchMultimatch';
import SearchSonglist from './SearchSonglist';

const SearchResult = ({input, search, focus, items, recom, multimatch, songs, inputList, commitSearch, inputSearch, deleteHistory, searchSongs, searchMultimatch }) => {
  if (search) {
    return (
      <div className="m-searchresult">
        <SearchMultimatch multimatch={ multimatch } />
        {
          songs.songs
          ? <SearchSonglist songs={ songs.songs } />
          : <div style={ styles.noresult }>暂无搜索结果</div>
        }
      </div>
    )
  }
  if (input !== '' && focus) {
    return (
      <SearchRecommend input={ input } recom={ recom } commitSearch={ commitSearch } searchSongs={ searchSongs } searchMultimatch={ searchMultimatch } />
    )
  } else {
    return (
      <SearchDefault items={ items } inputList={ inputList } commitSearch={ commitSearch } inputSearch={ inputSearch } deleteHistory={ deleteHistory } searchSongs={ searchSongs } searchMultimatch={ searchMultimatch } />
    )
  }
}

const styles = {
  noresult: {
    padding: '20px 0',
    textAlign: 'center'
  }
}

export default SearchResult;