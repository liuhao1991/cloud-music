import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputSearch, commitSearch, searchSongs, searchMultimatch, initHotItems } from '../../actions';
import SearchHotItems from '../common/SearchHotItems';

const SearchHotItemsContainer = props => {
  if (!props.search.items.length) {
    props.initHotItems();
  }
  const { search, commitSearch, inputSearch, searchSongs, searchMultimatch } = props;
  const { items } = search;
  const handleSubmit = text => {
    commitSearch(text);
    searchSongs(text);
    searchMultimatch(text);
  }
  return (
    <SearchHotItems handleSubmit={ handleSubmit } inputSearch={ inputSearch } hotitems={ items }/>
  )
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
    searchSongs: bindActionCreators(searchSongs, dispatch),
    searchMultimatch: bindActionCreators(searchMultimatch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHotItemsContainer);