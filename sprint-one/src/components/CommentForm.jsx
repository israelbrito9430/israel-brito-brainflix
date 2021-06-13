import React from 'react';
import UserPic from '../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'
const CommentForm = () => {   
  return (
    <div>
      <img src={UserPic} alt="User Pic" style={{ width: '60px', borderRadius: '50%', height: '50px' }} />
      <div>
        <div>JOIN THE CONVERSATION</div>
        <input type="text" placeholder="Write comment here" />
      </div>
      <button onClick={() => {}}>COMMENT</button>
    </div>
  )
}

export default CommentForm;
