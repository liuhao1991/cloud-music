import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { commitSearch, searchSongs, searchMultimatch } from '../../actions';
import SearchRecommend from '../common/SearchRecommend';

const SearchRecommendContainer = props => {
	const { search, commitSearch, searchSongs, searchMultimatch } = props;
	const { input, recom } = search;
	const handleSubmit = text => {
    commitSearch(text);
    searchSongs(text);
    searchMultimatch(text);
  }
	return <SearchRecommend input={ input } recom={ recom } handleSubmit={ handleSubmit }/>
}

const mapStateToProps = state => {
	return {
		search: state.search
	}
}

const mapDispatchToProps = dispatch => {
	return {
		commitSearch: bindActionCreators(commitSearch, dispatch),
		searchSongs: bindActionCreators(searchSongs, dispatch),
		searchMultimatch: bindActionCreators(searchMultimatch, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRecommendContainer);