import React, {useState, useEffect} from 'react';
import PostComments from './PostComments'

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

  let number = props.likes

  if(value === 'liked') {
    number++
  }

  return (
        <div className="Post">
          <h4><em>Name:</em> {props.name}</h4>
          <div className="post-content"><strong>Content:</strong> {props.content}</div>
          <div className="like-counter"><strong>{number}</strong> likes</div>
          <div className="like-anouncement">You have <strong>{likeValue}</strong> this</div>
          <button onClick={handleClick}>{likeButton}</button>
          <p><strong>Comments</strong></p>
          <ul>
            {props.comments.map(comment => {
              return (
                <PostComments
                  name={comment.name}
                  comment={comment.comment}
                />
              )
            })}
          </ul>
        </div>
  )  
}