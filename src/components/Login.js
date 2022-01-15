import React from "react";
import { useState } from "react";
import { login } from "../api";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const [newToken, message] = await login(username, password);
    console.log(token);
    setToken(newToken);
    setMessage(message);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <button>Submit</button>
      <div>{message}</div>
    </form>
  );
};
export default Login;
