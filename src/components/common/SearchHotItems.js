import React from 'react';
import '../../assets/css/SearchHotItem.css';

const SearchHotItem = ({ item, handleSubmit }) => {
	const { first } = item;
	return (
		<div className="hot-search-item" onClick={() => handleSubmit(first) }>;
			{ first }
		</div>
	);
}

const SearchHotItems = ({ hotitems, inputSearch, handleSubmit }) => {
	const hotList = hotitems.map((v, i) => {
		return <SearchHotItem item={ v } key={ i } inputSearch={ inputSearch } handleSubmit={ handleSubmit } />;
	});
	return (
		<div className="hot-search-list">
			<div className="hot-title">热门搜索</div>
			<div className="hot-list">
				{ hotList }
			</div>
		</div>
	);
}

export default SearchHotItems;
