import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Posts, Login, Register, Profile, MessageForm } from "./components";
import { getUser } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);


  const handleUser = async () => {
    console.log(token);
    if (token) {
      const userObject = await getUser(token);
      setUser(userObject);
    } else {
      setUser({});
    }
  };
  console.log("user", user);

  useEffect(() => {
    handleUser();
  }, [token]);

  return (
    <div className="App">
      <nav className="App-link">
        {token && <Link to="/">Home</Link>}
        {token && <h2>Welcome, {user.username}</h2>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && <Link to="/profile">Profile</Link>}
        {token && <button onClick={()=>{
          setToken("");
        }}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Posts posts={posts} setPosts={setPosts} token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route path="/profile" element={<Profile setToken={setToken} />} />
        <Route path="/posts/:postID/messages" element={<MessageForm posts={posts} token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
