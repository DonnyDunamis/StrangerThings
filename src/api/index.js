import React from "react";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2110-FT-PT-WEB-PT/";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const {
      data: { posts },
    } = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: { 
          username,
          password,
        },
      }),
    });
    const {
      data: { token },
    } = await response.json();
  } catch (error) {
    console.error(error);
  }
};
