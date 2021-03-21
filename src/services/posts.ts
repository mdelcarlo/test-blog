import axios from "axios";
import config from "../config";

const {
  api: { baseURL, posts: postsEndpoint, post: postEndpoint },
} = config;

const axiosInstance = axios.create({
  baseURL,
});

export const getPosts = async () => await axiosInstance.get(postsEndpoint);
export const getPost = async (id) => await axiosInstance.get(postEndpoint(id));
export const addPost = async (postProps) =>
  await axiosInstance.post(postsEndpoint, { userId: 1, ...postProps });
export const deletePost = async (id) =>
  await axiosInstance.delete(postEndpoint(id));
