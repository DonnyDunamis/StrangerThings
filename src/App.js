import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Posts, Login, Register } from "./components";

function App() {
  const [token, setToken] = useState("");
  console.log(token);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
