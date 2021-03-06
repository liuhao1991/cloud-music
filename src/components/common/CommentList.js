import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/CommentList.css';
const CommentList = props => {
  const { comments, hotComments, total } = props.comments;
  return (
    <div>
      {
        hotComments.length &&
        <Comments comments={ hotComments } title={ '精彩评论' } />
      }
      <Comments comments={ comments } title={ '最新评论' + total } />
    </div>
  );
}

const Comment = ({ cmt }) => {
  const time = new Date(cmt.time);
  return (
    <div className="cmt_item">
      <div className="cmt_head">
        <Link className="userphoto" to={ `/user/${cmt.user.userId}` }>
          <img src={ cmt.user.avatarUrl } alt=""/>
        </Link>
      </div>
      <div className="cmt_wrap f-bd f-bd-btm">
        <div className="cmt_header">
          <div className="cmt_meta">
            <span className="cmt_user">
              <Link className="nickname" to={ `/user/${cmt.user.userId}` }>{ cmt.user.nickname }</Link>
            </span>
            <div className="cmt_time">
              <span>{ time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日'}</span>
            </div>
          </div>
          <div className="cmt_like">
            <span className="cmt_likearea">
              <span className="cmt_count">{ cmt.likedCount }</span>
              <Alike />
            </span>
          </div>
        </div>
        <div className="cmt_content">
          {
            cmt.beReplied.length > 0 &&
            <span className="cmt_text">
              回复
              <Link className="at" to={ `/user/${cmt.beReplied[0].user.userId}` }>{ '@' + cmt.beReplied[0].user.nickname }：</Link>
            </span>
          }
          <span className="cmt_text">
            { cmt.content }
          </span>
        </div>
        {
          cmt.beReplied.length > 0 &&
          <div className="cmt_replied">
            <span className="cmt_replied_user">{ '@' + cmt.beReplied[0].user.nickname }：</span>
            <span className="cmt_replied_cnt">
              <span className="cmt_text">{ cmt.beReplied[0].content }</span>
            </span>
          </div>
        }
      </div>
    </div>
  );
}

const Alike = _ => {
  return (
    <i className="cmt_likeicn">
      <svg className="u-svg u-svg-unzancmt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
        <path fill="#999" d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836">
        </path>
      </svg>
    </i>
  );
}

const Comments = ({ title, comments }) => {
  const list = comments.map(v => {
    return <Comment cmt={v } key={ v.commentId } />;
  })
  return (
    <div className="m-comments">
      <h3 className="cmt_title">{ title }</h3>
      <div className="cmt-list">
        { list }
      </div>
    </div>
  );
}

export {
  Comment
}

export default CommentList;
