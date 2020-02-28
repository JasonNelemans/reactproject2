import React, {useState} from 'react';

export default function AddComment(props) {
  const [stateComment, setStateComment] = useState()

  const clickHandler = () => {
    props.addComment(stateComment)
    setStateComment('')
  }

  return (
    <div>
    <input type="text" placeholder="Add your comment" value={stateComment} onChange={event => {
      console.log("new input .value:", event.target.value)
      setStateComment(event.target.value);
      }}
    />{" "}
    <button onClick={clickHandler}>Add Comment</button>
    </div>
  )
}