export interface IReqRegUser {
  ten_tai_khoan: string;
  ten_nhan_vien: string;
  email: string;
  mat_khau: string;
  xac_nhan_mat_khau: string;
}

export interface IResRegUser {
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
