import React, { useState } from "react";
import { addNewPost } from "../api";
import { Posts, AddPostForm } from ".";
import { App } from "../App";

const AddPost = ({ posts, setPosts, token }) => {
  const blankPost = {
    title: "",
    description: "",
    location: "",
    price: "",
    willDeliver: false,
  };
  const [post, setPost] = useState(blankPost);

  const handleAddPost = async (event) => {
    try {
      event.preventDefault();
      const newPost = await addNewPost(token, post);
      setPosts([...posts, newPost]);
      setPost(blankPost);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2>Add Post</h2>
      <AddPostForm handleSubmit={handleAddPost} post={post} setPost={setPost} />
    </>
  );
};
export default AddPost;
