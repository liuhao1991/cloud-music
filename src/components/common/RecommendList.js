import React from 'react';
import recommends from '../js/recommends';
import '../css/RecommendItem.css';

const playCount = (count) => {
  return (count / 10000).toFixed(1) + '万';
}

const RecommendItem = (props) => {
  return (
    <a className="recommend-item" href={ '/m/playlist?id=' + props.item.id }>
      <div className="recommend-img">
        <img src={ props.item.picUrl } alt={ props.item.name }/>
        <div className="recommend-shadow">
          <span className="recommend-play-count">{ playCount(props.item.playCount) }</span>
        </div>
      </div>
      <div className="recommend-name">
        { props.item.name }
      </div>
    </a>
  )
}

const RecommendList = () => {
  const recommendList = [].concat([], recommends.HomeRecommend.data._list[0], recommends.HomeRecommend.data._list[1]);
  const list = recommendList.map(item => {
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