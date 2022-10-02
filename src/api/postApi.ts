import { INews, INewsCategory } from "models";
import { buildApi } from "utils";
import pathApi from "./apiPath";
import axiosClient from "./axiosClient";

export const cancelReqPost = new AbortController();

export const postApi = {
  getPosts: () => {
    return axiosClient.get<INews[]>(pathApi.post.list);
  },
  getPost: (id: string) => {
    const api = buildApi(pathApi.post.post, {id});
    return axiosClient.get<INews>(api)
  },
  getCategories: () => {
    const api = buildApi(pathApi.post.getCategories);
    return axiosClient.get<INewsCategory[]>(api)
  }
};
