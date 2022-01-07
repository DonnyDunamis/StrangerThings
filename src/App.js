import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
//import { Routes, Route, Link} from 'react-router-dom';
import { Posts, Login, Register } from './components'

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchHandler = async () => {
    const response = await fetch("https://strangers-things.herokuapp.com/api/2110-FT-PT-WEB-PT/posts");
    const results = await response.json();
    console.log(results);
    setPosts(results.data.posts)
  }
  useEffect(() => {
    fetchHandler();
  },[])
    return (
    <div className="App">
      {posts.length > 0 ? posts.map(post => {
        return (<div key={post._id}>Description: {post.description}</div>)
      }):""}
    </div>
  );
}

export default App;
