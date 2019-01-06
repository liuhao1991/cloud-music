import React, { Component } from 'react';
import Song from './Song';

class SearchSonglist extends Component {
  render () {
    const { songs } = this.props;
    const list = songs.map((item, index) => {
      const { id, name, alias, artists, album } = item;
      const singerList = artists.map(v => v.name);
      const singers = singerList.join(' / ');
      const alb = album.name;
      const info = singers + ' - ' + alb;
      const alia = alias.join(' / ');
      const showIndex = false;
      const songInfo = {
        name,
        alia,
        index,
        info,
        id,
        showIndex
      };
      return <Song song={ songInfo } key={ index }/>;
    });
    return (
      <div className="m-songlist">
        { list }
      </div>
    );
  }
}

export default SearchSonglist;