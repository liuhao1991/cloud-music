import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initHotItems, inputContent, commitContent } from '../../actions';
import SearchInput from '../common/SearchInput';
import HotSearchList from '../common/HotSearchList';
import '../../assets/css/Search.css';

class Search extends Component {
  componentDidMount () {
    if (!this.props.search.items.length) {
      this.props.initHotItems();
    }
  }

  render () {
    const { input, items } = this.props.search;
    const { inputContent, commitContent } = this.props;
    return (
      <div className="tab-content">
        <div className="">
          <SearchInput input={ input } commitContent={ commitContent } inputContent={ inputContent } />
          <HotSearchList hotitems={ items } commitContent={ commitContent } inputContent={ inputContent } />
        </div>
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);