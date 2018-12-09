import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHotItems, inputSearch, commitSearch, initHistory, deleteHistory } from '../../actions';
import SearchInput from '../common/SearchInput';
import SearchDefault from '../common/SearchDefault';
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
    const { input, items, inputList } = this.props.search;
    const { inputSearch, commitSearch, deleteHistory } = this.props;
    return (
      <div className="tab-content">
        <SearchInput input={ input } commitSearch={ commitSearch } inputSearch={ inputSearch } />
        <SearchDefault items={ items } inputList={ inputList } commitSearch={ commitSearch } inputSearch={ inputSearch } deleteHistory={ deleteHistory }/>
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
    deleteHistory: bindActionCreators(deleteHistory, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);