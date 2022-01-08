import React from "react";
import { fetchPosts } from "../api";
import { useState, useEffect } from "react";

const Posts = () => {
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

  return (
    <div className="posts">
      {posts.length > 0 &&
        posts.map(({ _id, description }) => {
          return (
            <div className="post" key={_id}>
              {description}
            </div>
          );
        })}
    </div>
  );
};
export default Posts;
