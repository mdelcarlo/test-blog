const config = {
  api: {
    baseURL: "https://jsonplaceholder.typicode.com",
    posts: `posts/`,
    post: (postId = 1) => `posts/${postId}`,
    postComments: (postId = 1) => `posts/${postId}/comments`,
  },
};

export default config;
