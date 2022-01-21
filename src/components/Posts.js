import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, deletePost } from "../api";
import { AddPost } from "./";
import { useNavigate } from "react-router-dom";

const Posts = ({ token, posts, setPosts }) => {

  const navigate = useNavigate();

  const handlePosts = async (token) => {
    try {
      const newPosts = await fetchPosts(token);
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handlePosts(token);
  }, [token]);

  const handleDelete = async (postID) => {
    try {
      await deletePost(token, postID);
      const newPosts = posts.filter((element) => element._id !== postID);
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="posts">
      {token && <AddPost posts={posts} setPosts={setPosts} token={token} />}
      {posts.length > 0 &&
        posts.map(({ _id, title, description, isAuthor }) => {
          return (
            <div className="post" key={_id}>
              <h2>{title}</h2>
              {description}
              {isAuthor && (
                <button
                  onClick={() => {
                    handleDelete(_id);
                  }}
                >
                  Delete
                </button>
              )}
              {!isAuthor && token && (
                <button
                  onClick={() => {
                    navigate(`/posts/${_id}/messages`);
                  }}
                >
                  Message
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
};
export default Posts;
