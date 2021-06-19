import React from 'react';
import UserPic from '../../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'

const CommentForm = () => {
  return (
    <div className="CommentForm">
      <div className="CommentForm__container">
        <img className="CommentForm__container__pic" src={UserPic} alt="User Pic" />
        <div className="CommentForm__container__box">
          <label className="CommentForm__container__box__label">JOIN THE CONVERSATION</label>
          <textarea className="CommentForm__container__box__input" type="text" placeholder="Write comment here" />
        </div>
      </div>
      <button className="CommentForm__button" onClick={() => this.props.handleClick()}>COMMENT</button>
    </div>
  )
}

export default CommentForm;