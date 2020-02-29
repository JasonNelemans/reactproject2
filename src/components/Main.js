import React, {useEffect, useState} from 'react';
import Post from './Post';
import axios from 'axios';
import AddPost from './AddPost';


function Main() {
  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
    try {
      const response = await axios.get('http://localhost:4000/')
  
      if(response.data) {
        setData(response.data)
      }
    }
    catch (error) {
      console.log('error:', error.message)
    }
  }
  getData(); 
  }, [])

  const AddPostFunction = (post) => {
    setData([{name: 'Jason', post: post, likes: 0, comments: []}, ...data])
  }

  if(data === undefined) {
    return (
      <h3>Please wait a moment...</h3>
    )
  }

  return (
    <div>
      <h2>Social feed</h2>
      <AddPost 
        AddPost={AddPostFunction}
      />
      {data.map((post, num) => {
        return (
          <div>
          <p><em>Post number: {num + 1}</em></p>
          <Post
            name={post.name}
            content={post.post}
            likes={post.likes}
            comments={post.comments}
          />
          </div>
        )
      })}
    </div>
  )
}

export default Main