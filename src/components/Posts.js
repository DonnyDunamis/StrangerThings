import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, deletePost, addNewPost } from "../api";
import { AddPostForm, AddPost, PostSingle } from "./";

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);

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
        posts.map(({ _id, description, isAuthor }) => {
          return (
            <div className="post" key={_id}>
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
            </div>
          );
        })}
    </div>
  );
};
export default Posts;
