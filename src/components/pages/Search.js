import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHotItems, inputSearchContent } from '../../actions';
import SearchInput from '../common/SearchInput';
import HotSearchList from '../common/HotSearchList';
import '../css/Search.css';

class Search extends Component {
  componentDidMount () {
    this.props.initHotItems();
  }

  render () {
    const { input, items } = this.props.search;
    const { inputSearchContent } = this.props;
    return (
      <div className="">
        <SearchInput input={ input } inputSearchContent={ inputSearchContent } />
        <HotSearchList hotitems={ items } inputSearchContent={ inputSearchContent } />
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
    inputSearchContent: bindActionCreators(inputSearchContent, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);