import React from 'react';
import UserPic from '../../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'

const CommentForm = () => {
  return (
    <div className="CommentForm">
      <div className="CommentForm__container">
        <img className="CommentForm__container__pic" src={UserPic} alt="User Pic" />
        <div className="CommentForm__container__box">
          <h5 className="CommentForm__container__box__label">JOIN THE CONVERSATION</h5>
          <input className="CommentForm__container__box--input" type="text" placeholder="Write comment here" />
        </div>
      </div>
      <button className="CommentForm__button" onClick={() => this.props.handleClick()}>COMMENT</button>
    </div>
  )
}

export default CommentForm;
