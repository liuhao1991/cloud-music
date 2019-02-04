import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Song.css';

const Song = ({ song }) => {
  const { id, name, alia, index, info, showIndex, highlight } = song
  const order = highlight && index < 9 ? '0' + (index + 1) : index + 1
  return (
    <Link className="sgitem" to={ '/song/' + id }>
      {
        showIndex &&
        <div className={ `sgfl ${index < 3 && highlight ? 'sgfl-cred' : null}` }>
          { order }
        </div>
      }
      <div className="sgfr">
        <div className="sgchfl">
          <div className="sgtl f-thide">
            { name }
            {
              alia !== '' &&
              <span className="sgalia">({ alia })</span>
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
    </Link>
  );
}

export default Song;