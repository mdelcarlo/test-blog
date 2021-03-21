import axios from "axios";
import config from "../config";

const {
  api: { baseURL, postComments },
} = config;

const axiosInstance = axios.create({
  baseURL,
});

export const getPostsComments = async (id) =>
  await axiosInstance.get(postComments(id));
