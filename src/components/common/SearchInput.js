import React, { Component } from 'react';
import '../../assets/css/SearchInput.css';

class SearchInput extends Component {
  handleChangeInput = e => {
    const { inputSearch } = this.props;
    const value = e.target.value;
    inputSearch(value);
  }

  handleClearInput = () => {
    const { inputSearch } = this.props;
    inputSearch('');
  }

  handleSubmit = e => {
    e.preventDefault();
    const { commitSearch, input } = this.props;
    commitSearch(input);
  }

  render () {
    const { input } = this.props;
    return (
      <form className="search-input" onSubmit={ this.handleSubmit }>
        <div className="inputcover">
          <i className="u-svg u-svg-srch"></i>
          <input 
            type="search"
            className="input"
            value={ input }
            placeholder="搜索歌曲、歌手、专辑"
            onChange={ this.handleChangeInput }/>
          <figure className="close" onClick={ this.handleClearInput }>
            <i className={ `u-svg u-svg-empty ${input !== '' ? 'z-show' : null}` }></i>
          </figure>
        </div>
      </form>
    )
  }
}

export default SearchInput;