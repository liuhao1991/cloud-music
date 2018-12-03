import React from 'react';
import '../../assets/css/PlaylistIntro.css';

const PlaylistIntro = props => {
  const { tags, description } = props.playlist;
  const tagList = tags.map((v, i) => {
    return <em className="lstit_tag" key={ i }>{ v }</em>
  })

  const descriptionList = description.split('\n').map((v, i) => {
    return <span key={ i }>{ (i === 0 ? '简介：' : '') + v }<br/></span>
  })

  return (
    <div className="pylst_intro">
      <div className="lstit_tags">
        标签：
        { tagList }
      </div>
      <div className="u-intro">
        <div className="f-brk">
          { descriptionList }
        </div>
      </div>
    </div>
  )
}

export default PlaylistIntro;
