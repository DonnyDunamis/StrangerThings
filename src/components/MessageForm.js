import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addMessage } from "../api";

const MessageForm = ({ token }) => {
  const { postID } = useParams();
  const [content, setContent] = useState("");

  const handleMessage = async (event) => {
    event.preventDefault();
    try {
      const response = await addMessage(token, postID, content);
      const data = await response.json();
      console.log(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleMessage}>
      <h3>Message Form</h3>
      <label htmlFor="comment-input">Message: </label>
      <input
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};
export default MessageForm;
