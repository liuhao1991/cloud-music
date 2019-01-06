import React, { Component } from 'react';
import _ from 'lodash';
import '../../assets/css/SearchInput.css';

class SearchInput extends Component {
  handleChangeInput = e => {
    const { inputSearch, searchRecommend } = this.props;
    const value = e.target.value;
    inputSearch(value);
    if (value === '') return;
    this.searchContentByValue(searchRecommend, value);
  }

  searchContentByValue = _.debounce((callback, value) => {
    callback(value);
  }, 500)

  handleClearInput = () => {
    const { inputSearch } = this.props;
    inputSearch('');
  }

  handleSubmit = e => {
    e.preventDefault();
    const { search, commitSearch, searchSongs, searchMultimatch } = this.props;
    const { input } = search;
    if (input === '') return;
    commitSearch(input);
    searchSongs({text: input});
    searchMultimatch(input);
  }

  render () {
    const { search } = this.props;
    const { input } = search;
    return (
      <form className="search-input" onSubmit={ this.handleSubmit }>
        <div className="inputcover">
          <i className="u-svg u-svg-srch"></i>
          <input 
            type="search"
            className="input"
            value={ input }
            placeholder="搜索歌曲、歌手、专辑"
            onChange={ this.handleChangeInput }
            onFocus={ this.handleChangeInput } />
          <figure className="close" onClick={ this.handleClearInput }>
            <i className={ `u-svg u-svg-empty ${input !== '' ? 'z-show' : null}` }></i>
          </figure>
        </div>
      </form>
    );
  }
}

export default SearchInput;