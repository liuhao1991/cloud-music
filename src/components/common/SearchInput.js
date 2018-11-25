import React, { Component } from 'react';
import '../css/SearchInput.css';

class SearchInput extends Component {
  handleChangeInput = e => {
    const { inputSearchContent } = this.props;
    const value = e.target.value;
    inputSearchContent(value);
  }

  handleClearInput = () => {
    const { inputSearchContent } = this.props;
    inputSearchContent('');
  }

  render () {
    const { input } = this.props;
    return (
      <form className="search-input">
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