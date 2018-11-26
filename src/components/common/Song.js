import React from 'react';
import '../css/Song.css';

const Song = (props) => {
  const { id, name, alia, index, info, showIndex } = props
  const order = index < 9 ? '0' + (index + 1) : index + 1
  return (
    <a className="sgitem" href={ '/' + id }>
      {
        showIndex
        ? <div className={ `sgfl ${index < 3 ? 'sgfl-cred' : null}` }>
            { order }
          </div>
        : ''
      }
      <div className="sgfr">
        <div className="sgchfl">
          <div className="sgtl f-thide">
            { name }
            {
              alia !== ''
              ? <span className="sgalia">({ alia })</span>
              : ''
            }
          </div>
          <div className="sginfo f-thide">
            <i className="hmsprt sghot"></i>
            { info }
          </div>
        </div>
        <div className="sgchfr">
          <span className="hmsprt sgchply"></span>
        </div>
      </div>
    </a>
  )
}

export default Song