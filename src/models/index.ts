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
}
