import React, { Component } from 'react';
import PlaylistBanner from '../common/PlaylistBanner';
import PlaylistIntro from '../common/PlaylistIntro';
import PylistList from '../common/PylistList';
import CommentList from '../common/CommentList';
import Loading from '../common/Loading';
import http from '../../js/http';

class Playlist extends Component {
  state = {
    playlist: {},
    comments: {}
  }

  fetchPlaylist () {
    const id = this.props.match.params.id;
    const data = {
      id: id
    };
    http.get('http://localhost:3001/api/playlist', {params: data})
      .then(res => {
      this.setState({
        playlist: res.data.playlist
      })
    })
  }

  fetchComments () {
    const rid = this.props.match.params.id;
    const data = {
      rid
    };
    http.get('http://localhost:3001/api/playlist/comments', {params: data})
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
  }
  componentDidMount () {
    this.fetchPlaylist();
    this.fetchComments();
  }
  render () {
    return (
      <div className="cmt-list-wrapper">
        {
          Object.keys(this.state.playlist).length
          ? <div>
              <PlaylistBanner playlist={ this.state.playlist }/>
              { this.state.playlist.description &&
                <PlaylistIntro playlist={ this.state.playlist } />
              }
              <PylistList playlist={ this.state.playlist } />
            </div>
          : <Loading />
        }
        {
          Object.keys(this.state.comments).length > 0 &&
          <CommentList comments={ this.state.comments } />
        }
      </div>
    );
  }
}

export default Playlist;