import React from 'react';
import { Comment} from '../common/CommentList';

const MusicComments = ({ comments, hotComments, total }) => {
  const flag = hotComments.length === 0;

  const actualComments = flag ? comments : hotComments;

  const commentList = actualComments.map((v, i) => {
    if (i < 5) {
      return <Comment cmt={ v } key={ v.commentId }/>;
    }
  });
  return (
    <div className="m-song_newcomm">
      <div className="m-song_newcomm_clip">
        <div className="m-talk m-talk-imm">
          <div className="m-comments m-comments-black">
            <h4 className="cmt_title">{ flag ? '最新评论(' + total  + ')' : '精彩评论' }</h4>
            <div className="cmt_list">
              { commentList }
            </div>
          </div>
          <div className="cmt_more_applink f-bd-top">
            <span className="box">打开云音乐查看更多精彩评论</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicComments;



