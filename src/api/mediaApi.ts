// import { IUploadFileRes } from './../models/index';
import { buildApi } from "utils";
import pathApi from "./apiPath";
import axiosClient from "./axiosClient";

export const cancelReqMedia = new AbortController();

export const mediaApi = {
  uploadFile: (body: FormData) => {
    const api = buildApi(pathApi.media.uploadFile);
    return axiosClient.post(api, body);
  },
};
