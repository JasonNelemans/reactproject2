import React from 'react';

export default function PostComments(props) {
  return (
    <li>
      <p><strong>{props.name}</strong></p>
      <p>{props.comment}</p>
    </li>
  )
}