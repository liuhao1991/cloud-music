import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInputContainer from '../container/SearchInputContainer';
import SearchDefaultContainer from '../container/SearchDefaultContainer';
import SearchRecommendContainer from '../container/SearchRecommendContainer';
import SearchMultimatch from '../common/SearchMultimatch';
import SearchSonglist from '../common/SearchSonglist';
import Loading from '../common/Loading';
import '../../assets/css/Search.css';

class Search extends Component {
  render () {
    const { search } = this.props;
    const { songs, input, multimatch, focus } = search;
    const searched = search.search;

    return (
      <div className="tab-content">
        <SearchInputContainer />
        <RenderResult searched={ searched } multimatch={ multimatch } songs={ songs } input={ input } focus={ focus }/>
      </div>
    )
  }
}

const RenderResult = ({searched, multimatch, songs, input, focus}) => {
  if (!searched && input !== '') { // 
    if (!focus) { // when SearchInput is onBlur
      return <Loading />
    } else { // when SearchInput is onFocus
      return <SearchRecommendContainer />
    }
  }
  
  if (searched && input !== '') {
    return (
      <div className="search-result">
        <SearchMultimatch multimatch={ multimatch } />
        {
          songs.songs
          ? <SearchSonglist songs={ songs.songs } />
          : <div style={ styles.noresult }>暂无搜索结果</div>
        }
      </div>
    )
  }
  return <SearchDefaultContainer />
}

const styles = {
  noresult: {
    padding: '20px 0',
    textAlign: 'center'
  }
}

const mapStateToProps = state => ({search: state.search});

export default connect(mapStateToProps)(Search);