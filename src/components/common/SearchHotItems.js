import React from 'react';
import '../../assets/css/HotSearchList.css';

const SearchHotItem = (props) => {
	const { first } = props.item;
	const { handleSubmit } = props;
	return (
		<div className="hot-search-item" onClick={() => handleSubmit(first) }>
			{ first }
		</div>
	)
}

const SearchHotItems = (props) => {
	const { hotitems, inputSearch, handleSubmit } = props;
	const hotList = hotitems.map((v, i) => {
		return <SearchHotItem item={ v } key={ i } inputSearch={ inputSearch } handleSubmit={ handleSubmit } />
	});
	return (
		<div className="hot-search-list">
			<div className="hot-title">热门搜索</div>
			<div className="hot-list">
				{ hotList }
			</div>
		</div>
	)
}

export default SearchHotItems;
