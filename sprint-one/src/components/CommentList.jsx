import React from 'react';


const CommentList = (props) => {   
  return (
    <div style={{ borderBottom: '1px solid #cecece' }}>
      <div style={{ backgroundColor: '#cecece', width: '50px', height: '50px', borderRadius: '50%' }}></div>
      <div>
        <div>
          <div>{props.data.name}</div>
          <div>{props.data.timestamp}</div>
        </div>
        <div>{props.data.comment}</div>
      </div>
    </div>
  )
}

export default CommentList;
