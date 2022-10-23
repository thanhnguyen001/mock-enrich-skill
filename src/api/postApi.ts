import { INews, INewsCategory } from "models";
import { buildApi } from "utils";
import pathApi from "./apiPath";
import axiosClient from "./axiosClient";

export const cancelReqPost = new AbortController();

export const postApi = {
  getPosts: (query?: any) => {
    const api = buildApi(pathApi.post.list, null, query);
    return axiosClient.get<INews[]>(api);
  },
  getPost: (id: string) => {
    const api = buildApi(pathApi.post.post, { id });
    return axiosClient.get<INews>(api);
  },
  getCategories: () => {
    const api = buildApi(pathApi.post.getCategories);
    return axiosClient.get<INewsCategory[]>(api);
  },
  deletePostById: (id: string) => {
    const api = buildApi(pathApi.post.deletePost, { id });
    return axiosClient.delete(api);
  },
  createPost: (body: any) => {
    const api = buildApi(pathApi.post.createPost);
    return axiosClient.post(api, body);
  }
};
