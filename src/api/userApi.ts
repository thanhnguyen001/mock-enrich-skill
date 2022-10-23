import { IUser, IUploadFileRes, INewsQueries } from './../models/index';
import { buildApi } from "utils";
import { ILoginUser, IResRegUser } from "models";
import { IReqRegUser } from "./../models";
import pathApi from "./apiPath";
import axiosClient from "./axiosClient";

export const cancelReqUser = new AbortController();

export const userApi = {
  postUser: (body: IReqRegUser) => {
    return axiosClient.post<IResRegUser>(pathApi.user.register, body, { signal: cancelReqUser.signal });
  },
  loginUser: (body: ILoginUser) => {
    return axiosClient.post<IResRegUser>(pathApi.user.login, body, { signal: cancelReqUser.signal });
  },
  getUser: (id: string) => {
    const api = buildApi(pathApi.user.getUser, { id });
    return axiosClient.get<IUser>(api, { signal: cancelReqUser.signal });
  },
  updateUser: (body: IUser) => {
    const api = buildApi(pathApi.user.update, { id: body.nhan_vien_id });
    return axiosClient.put<{data: IUploadFileRes}>(api, body, { signal: cancelReqUser.signal });
  },
  getListUser: async (query?: INewsQueries) => {
    const api = buildApi(pathApi.user.getListUser, null, query);
    return await axiosClient.get(api);
  },
  getUserCategories: () => {
    return axiosClient.get(pathApi.user.getUserCategories);
  },
  deleteUserById: (id: string) => {
    const api = buildApi(pathApi.user.deleteUser, {id});
    return axiosClient.delete(api);
  }
};
