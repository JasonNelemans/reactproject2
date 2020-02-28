import React from 'react';

export default function AddPost() {
  return (
    <div>
    <input type="text" placeholder="Add your comment" value={} onChange={event => {
      console.log("new input .value:", event.target.value)
      setStateComment(event.target.value);
      }}
    />{" "}
    <button>Add Comment</button>
    </div>
  )
}