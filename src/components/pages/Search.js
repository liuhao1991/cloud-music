import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInputContainer from '../container/SearchInputContainer';
import SearchDefaultContainer from '../container/SearchDefaultContainer';
import SearchRecommendContainer from '../container/SearchRecommendContainer';
import SearchMultimatch from '../common/SearchMultimatch';
import SearchSonglist from '../common/SearchSonglist';
import '../../assets/css/Search.css';

class Search extends Component {
  render () {
    const { search } = this.props;
    const { songs, input, multimatch } = search;
    const searched = search.search;

    const RenderLogic = () => {
      if (searched) {
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
      if (input !== '') {
        return (
          <SearchRecommendContainer />
        )
      } else {
        return (
          <SearchDefaultContainer />
        )
      }
    }

    return (
      <div className="tab-content">
        <SearchInputContainer />
        <SearchDefaultContainer />
      </div>
    )
  }
}

const styles = {
  noresult: {
    padding: '20px 0',
    textAlign: 'center'
  }
}

const mapStateToProps = state => ({search: state.search});

export default connect(mapStateToProps)(Search);