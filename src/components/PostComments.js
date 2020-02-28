import React from 'react';
import AddComment from './AddComment'

export default function PostComments(props) {
  return (
    <div>
    <li>
      <p><strong>{props.name}</strong></p>
      <p>{props.comment}</p>
    </li>
    <AddComment />
    </div>
  )
}