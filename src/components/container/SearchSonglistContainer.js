import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSongs } from '../../actions';
import SearchSonglist from '../common/SearchSonglist';

class SearchSonglistContainer extends Component {

  state = {
    offset: 0,
    limit: 20
  }

  componentDidMount () {
    window.addEventListener('scroll', this.widnowScroll, false);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.widnowScroll, false);
  }

  widnowScroll = () => {
    const { searchSongs, search } = this.props;
    const { input, songs } = search;
    const wrapper = document.querySelector('.tab-content');
    const scrollTop = (document.documentElement.scrollTop || document.body.scrollTop) - 104;
    const srollHeight = wrapper.clientHeight - scrollTop;
    const windowHeight = document.body.clientHeight || document.documentElement.clientHeight;
    if (srollHeight === windowHeight) {
      if (songs.songCount === songs.songs.length) {
        return;
      }
      this.setState(prevState => {
        return {
          offset: prevState.offset + prevState.limit
        }
      });
      searchSongs({
        text: input,
        offset: this.state.offset
      });
    }
  }

  render () {
    const { search } = this.props;
    const { songs } = search;
    return <SearchSonglist songs={ songs.songs } />
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchSongs: bindActionCreators(searchSongs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSonglistContainer);

