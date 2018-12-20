import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHistory, deleteHistory, commitSearch, searchSongs, searchMultimatch } from '../../actions';
import SearchHistory from '../common/SearchHistory';

class SearchHistoryContainer extends Component {
  
  componentDidMount () {
    const { inputList } = this.props.search
    if (!inputList.length) {
      this.props.initHistory();
    }
  }

  render () {
    const { search, deleteHistory, commitSearch, searchSongs, searchMultimatch } = this.props;
    const { inputList } = search;
    const handleSubmit = text => {
      commitSearch(text);
      searchSongs(text);
      searchMultimatch(text);
    }
    return (
      <SearchHistory inputList={ inputList } handleSubmit={ handleSubmit } deleteHistory={ deleteHistory }/>
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
    initHistory: bindActionCreators(initHistory, dispatch),
    deleteHistory: bindActionCreators(deleteHistory, dispatch),
    commitSearch: bindActionCreators(commitSearch, dispatch),
    searchSongs: bindActionCreators(searchSongs, dispatch),
    searchMultimatch: bindActionCreators(searchMultimatch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistoryContainer)



