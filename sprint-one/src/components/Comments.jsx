import React from 'react';

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Comments = (props) => {
  console.log(props);

  return (
    <div>
      <div>{props.data.length} Comments</div>
      <CommentForm />
      <hr style={{ backgroundColor: 'gray', width: '100%' }} />
      <CommentList />
    </div>
  )
}

export default Comments;
