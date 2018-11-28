import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/RecommendItem.css';

const playCount = (count) => {
  return (count / 10000).toFixed(1) + '万';
}

const RecommendItem = (props) => {
  const { item } = props;
  return (
    <Link className="recommend-item" to={ '/playlist/' + item.id }>
      <div className="recommend-img">
        <img src={ item.picUrl } alt={ item.name }/>
        <div className="recommend-shadow">
          <span className="recommend-play-count">{ playCount(item.playCount) }</span>
        </div>
      </div>
      <div className="recommend-name">
        { item.name }
      </div>
    </Link>
  )
}

const RecommendList = (props) => {
  const { playlist } = props;
  const list = playlist.map(item => {
    return <RecommendItem item={ item } key={ item.id } />
  });
  return (
    <div style={ styles.recommendList }>
      { list }
    </div>
  )
}

const styles = {
  recommendList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: '24px',
  },
}

export default RecommendList;