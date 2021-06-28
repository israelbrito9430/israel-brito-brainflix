import React from 'react';
import './CommentList.scss'

const CommentList = (props) => {
  return (
    <div className="comment">
      <div className="comment__pic"></div>
      <div className="comment__info">
        <div className="comment__info__firtsLine">
          <p className="comment__info__firtsLine__name">{props.data.name}</p>
          <p className="comment__info__firtsLine__date">{props.data.timestamp}</p>
        </div>
        <p className="comment__info__text">{props.data.comment}</p>
      </div>
    </div>
  )
}

export default CommentList;
