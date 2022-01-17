import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, deletePost } from "../api";
import { AddPost } from "./";
import { useNavigate } from "react-router-dom";

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const handlePosts = async () => {
    try {
      const newPosts = await fetchPosts();
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handlePosts();
  }, []);

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
              {!isAuthor && (
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
