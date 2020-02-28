import React, {useState} from 'react';

export default function AddComment() {
  const [stateComment, setStateComment] = useState()

  return (
    <div>
    <input type="text" placeholder="Add your comment" value={stateComment} onChange={event => {
      console.log("new input .value:", event.target.value)
      setStateComment(event.target.value);
      }}
    />{" "}
    <button>Add Comment</button>
    </div>
  )
}