import React, {useState} from 'react';

export default function Post(props) {
  const [value, setValue] = useState('unliked')
  
  
  const handleClick = () => {
    if(value === 'unliked') {
      setValue('liked')
    } else {
      setValue('unliked')
    }
  }
  
  const likeValue = value === 'unliked' ? 'not liked' : 'liked'

  const likeButton = value === 'unliked' ? 'Like' : 'Unlike'

  
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="pf-picture">{props.picture}</div>
      <div className="name">Name</div>
      <div className="post-content">Post content</div>
      <div className="like-counter">You have {props.likes} likes</div>
      <div className="like-anouncement">You have {likeValue} this</div>
      <button onClick={handleClick}>{likeButton}</button>
    </div>
  )
}