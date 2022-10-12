// common
export interface IResponseData<T> {
  msg?: string;
  success?: boolean;
  data?: T;
}

export interface IResponseError {
  error: string;
  success: boolean;
}

export interface ILayout {
  leftBar?: "small" | "normal" | "none";
  rightBar?: "small" | "normal" | "none";
}

export interface IBreadcrumb {
  path: string;
  title: string;
}

// User's models
//#region
export interface IReqRegUser {
  ten_tai_khoan: string;
  ten_nhan_vien: string;
  email: string;
  mat_khau: string;
  xac_nhan_mat_khau: string;
}

export interface IUser {
  nhan_vien_id?: string;
  ten_tai_khoan: string;
  ten_nhan_vien: string;
  email: string;
  chuc_vu?: string;
  don_vi: string;
  mat_khau: string;
  anh_dai_dien?: string;
  trang_thai: string;
  so_dien_thoai?: string;
  dia_chi?: string;
  ngay_sinh?: string;
  gioi_thieu?: string;
  ma_hoa?: string;
  nhom_nhan_vien_id?: string;
  nguoi_tao?: string;
  ngay_tao?: string;
  nguoi_sua?: string;
  ngay_sua?: string;
}

export interface IResRegUser {
  data: IUser;
  token: string;
}

export interface ILoginUser {
  ten_tai_khoan: string;
  mat_khau: string;
}

//#endregion

// News's models
//#endregion
export interface INews {
  tin_tuc_id?: string;
  uniqueItems: true;
  tieu_de?: string;
  mo_ta?: string;
  noi_dung?: string;
  anh_dai_dien?: string;
  nguoi_tao?: string;
  trang_thai?: string;
  tin_moi: number;
  tin_noi_bat: number;
  ngay_tao?: string;
  nguoi_sua?: string;
  ngay_sua?: string;
  nhom_tin_tuc_id?: number;
}

export interface INewsCategory {
  nhom_tin_tuc_id?: string;
  uniqueItems: string;
  ten_nhom: string;
  mo_ta?: string;
  anh_dai_dien?: string;
  nhom_cha_id?: string;
  trang_thai?: string;
  nguoi_tao?: string;
  ngay_tao?: string;
  nguoi_sua?: string;
  ngay_sua?: string;
}

//#endregion

// Media
//#region 
export interface IUploadFileRes {
  body?: {
    bucket: string;
    folder: string;
  };
  bodyForm: {
    loai_teo_tin: string;
    mo_ta: string;
    nguoi_tao: string;
    nhom_tep_tin_id: string;
    tep_tin_id: string;
    tep_tin_url: string;
    tieu_de: string;
  },
  fileUrl: string;
  tep_tin_id: string;
  success: boolean;
  exe_time: number;
}
