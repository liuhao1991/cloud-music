import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHotItems, inputSearch, commitSearch, initHistory, deleteHistory, searchRecommend, focusInput, searchMultimatch, searchSongs } from '../../actions';
import SearchInput from '../common/SearchInput';
import SearchResult from '../common/SearchResult';
import '../../assets/css/Search.css';

class Search extends Component {
  componentDidMount () {
    if (!this.props.search.items.length) {
      this.props.initHotItems();
    }
    if (!this.props.search.inputList.length) {
      this.props.initHistory();
    }
  }

  render () {
    const { input, items, inputList, recom, focus, search, multimatch, songs } = this.props.search;
    const { inputSearch, commitSearch, deleteHistory, searchRecommend, focusInput, searchSongs, searchMultimatch } = this.props;
    return (
      <div className="tab-content">
        <SearchInput input={ input } commitSearch={ commitSearch } inputSearch={ inputSearch }  searchRecommend={ searchRecommend } focusInput={ focusInput } searchSongs={ searchSongs } searchMultimatch={ searchMultimatch } />
        <SearchResult input={ input } search={ search } focus={ focus } recom={ recom } multimatch={ multimatch } songs={ songs } commitSearch={ commitSearch } items={ items } inputList={ inputList } inputSearch={ inputSearch } deleteHistory={ deleteHistory } searchSongs={ searchSongs } searchMultimatch={ searchMultimatch } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initHotItems: bindActionCreators(initHotItems, dispatch),
    inputSearch: bindActionCreators(inputSearch, dispatch),
    commitSearch: bindActionCreators(commitSearch, dispatch),
    initHistory: bindActionCreators(initHistory, dispatch),
    deleteHistory: bindActionCreators(deleteHistory, dispatch),
    searchRecommend: bindActionCreators(searchRecommend, dispatch),
    focusInput: bindActionCreators(focusInput, dispatch),
    searchMultimatch: bindActionCreators(searchMultimatch, dispatch),
    searchSongs: bindActionCreators(searchSongs, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);