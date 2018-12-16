import React from 'react';
import '../../assets/css/SearchHistory.css';

const SearchHistory = (props) => {
  const { inputList, deleteHistory, commitSearch, searchSongs, searchMultimatch } = props;
  const handleSubmit = text => {
    commitSearch(text);
    searchSongs(text);
    searchMultimatch(text);
  }
  const list = inputList.slice(0, 10).map((v, i) => {
    return <HistoryItem key={ i } name={ v } index={ i } deleteHistory={ deleteHistory } handleSubmit={ handleSubmit }/>
  })
  return (
    <div className="m-history">
      <ul>
        { list }
      </ul>
    </div>
  )
}


const HistoryItem = (props) => {
  const { name, index, deleteHistory, handleSubmit } = props;

  return (
    <li className="history-item">
      <i className="u-svg u-svg-histy"></i>
      <div className="histyr f-bd f-bd-btm">
        <span className="link f-thide" onClick={ () => handleSubmit(name) }>
          { name }
        </span>
        <figure className="close" onClick={ () => deleteHistory(index) }>
          <i className="u-svg u-svg-close"></i>
        </figure>
      </div>
    </li>
  )
}

export default SearchHistory;