import React from 'react';
import UserPic from '../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'
const CommentForm = () => {   
  return (
    <div className="CommentForm">
      <img className="CommentForm__pic" src={UserPic} alt="User Pic" style={{ width: '60px', borderRadius: '50%', height: '50px' }} />
      <div className="CommentForm__box" >
        <div>JOIN THE CONVERSATION</div>
        <input type="text" placeholder="Write comment here" />
      </div>
      <button onClick={() => {}}>COMMENT</button>
    </div>
  )
}

export default CommentForm;
