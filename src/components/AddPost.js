import React, {useState} from 'react';

export default function AddPost(props) {
  const [stateComment, setStateComment] = useState()

  const clickHandler = () => {
    props.AddPost(stateComment)
    setStateComment('')
  }

  return (
    <div>
    <input style={{width: '300px', height: '100px'}}type="text" placeholder="Tell the world what you're thinking" value={stateComment} onChange={event => {
      console.log("new input .value:", event.target.value)
      setStateComment(event.target.value);
      }}
    />{" "}
    <button onClick={clickHandler}>Add Post</button>
    </div>
  )
}