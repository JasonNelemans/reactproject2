import React from 'react';
import AddReply from './AddReply'

export default function PostComments(props) {
  return (
    <div>
    <li>
      <p><strong>{props.name}</strong></p>
      <p>{props.comment}</p>
    </li>
    <AddReply />
    </div>
  )
}