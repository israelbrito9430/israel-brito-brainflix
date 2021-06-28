import React from 'react';
import './CommentList.scss'

const CommentList = (props) => {
  const timestamp = props.data.timestamp;
  const date = new Date(+timestamp);

  return (
    <div className="comment">
      <div className="comment__pic"></div>
      <div className="comment__info">
        <div className="comment__info__firtsLine">
          <p className="comment__info__firtsLine__name">{props.data.name}</p>
          <p className="comment__info__firtsLine__date">{date.toDateString()}</p>
        </div>
        <p className="comment__info__text">{props.data.comment}</p>
      </div>
      <div>
        <button onClick={() => props.handleDelete(props.data.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CommentList;
