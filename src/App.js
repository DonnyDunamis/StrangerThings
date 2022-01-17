import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Posts, Login, Register, Profile, MessageForm } from "./components";
import { getUser } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

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
        {token && <h2>Welcome, {user.username}</h2>}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Posts token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route path="/profile" element={<Profile setToken={setToken} />} />
        <Route path="/messages" element={<MessageForm token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
