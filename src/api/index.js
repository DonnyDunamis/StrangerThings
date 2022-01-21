const BASE_URL = "https://strangers-things.herokuapp.com/api/2110-FT-PT-WEB-PT";

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
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
    const result = await response.json();
    console.log(result);
    if (result.success) {
      const {
        data: { token, message },
      } = result;
      return [token, message];
    } else {
      const {
        error: { token, message },
      } = result;
      return [token, message];
    }
  } catch (error) {
    console.error(error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
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
    const result = await response.json();
    console.log(result);
    if (result.success) {
      const {
        data: { token, message },
      } = result;
      return [token, message];
    } else {
      const {
        error: { token, message },
      } = result;
      return [token, message];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const { data: userObject } = await response.json();
    return userObject;
  } catch (error) {
    console.error(error);
  }
};

export const addNewPost = async (token, post) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        post,
      }),
    });
    const {
      data: { post: freshPost },
    } = await response.json();
    return freshPost;
  } catch (error) {
    console.error(error);
  }
};
export const deletePost = async (token, postID) => {
  try {
    await fetch(`${BASE_URL}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
export const addMessage = async (token, postID, content) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    });
    const {
      message: { content: newMessage },
    } = await response.json();
    return newMessage();
  } catch (error) {
    console.error(error);
  }
};
