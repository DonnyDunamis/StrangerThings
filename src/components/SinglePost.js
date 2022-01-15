import React from "react";

const PostSingle = (props) => {
  console.log(props);
  const { post, children } = props;

  return post ? (
    <div style={{ margin: ".3rem" }}>
      <h4>Title: {post.title}</h4>
      <div>Description: {post.description}</div>
      {children}
    </div>
  ) : (
    "Loading..."
  );
};
export default PostSingle;
