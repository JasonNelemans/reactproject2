import React, {useEffect, useState} from 'react';
import Post from './Post';
import axios from 'axios';

function Main() {

  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
    try {
      const response = await axios.get('http://localhost:4000/')
      setData(response)
    }
    catch (error) {
      console.log('error:', error.message)
    }
  }
  getData(); 
  }, [])

  console.log('data: ', data)
  return (
    <div>
      <Post 
        title={"First post"} 
        picture={"Cat"}
        likes={3}
      />
      <Post 
        title={"Second post"} 
        picture={"Dog"}
        likes={6}
      />
      <Post 
        title={"Third post"}
        likes={0}
      />
    </div>
  )
}

export default Main