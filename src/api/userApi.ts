import { IReqRegUser, IResRegUser } from "./../models";
import pathApi from "./apiPath";
import axiosClient from "./axiosClient";

export const cancelReqUser = new AbortController();

export const userApi = {
  postUser: (body: IReqRegUser) => {
    return axiosClient.post<IResRegUser>(pathApi.user.register, body, { signal: cancelReqUser.signal });
  },
};
