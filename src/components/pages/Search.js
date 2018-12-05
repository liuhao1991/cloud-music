import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHotItems, inputContent, commitContent, initHistory } from '../../actions';
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
    const { inputContent, commitContent } = this.props;
    return (
      <div className="tab-content">
        <SearchInput input={ input } commitContent={ commitContent } inputContent={ inputContent } />
        <SearchDefault items={ items } inputList={ inputList } commitContent={ commitContent } inputContent={ inputContent } />
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
    inputContent: bindActionCreators(inputContent, dispatch),
    commitContent: bindActionCreators(commitContent, dispatch),
    initHistory: bindActionCreators(initHistory, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);