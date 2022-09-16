import BaseService from "./BaseService";

class QuanLiNguoiDungService extends BaseService {
    constructor() {
        super()
    }
    DangKy = (data) => {
        return this.post('api/QuanLyNguoiDung/DangKy', data)
    }
    DangNhap = (data) => {
        return this.post('api/QuanLyNguoiDung/DangNhap', data)
    }
    ThongTinTaiKhoan = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    CapNhatThongTinNguoiDung = (data) => {
        return this.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
    }
    LayDanhSachLoaiNguoiDung = () => {
        return this.get('api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
    }
}
export const quanLiNguoiDungService = new QuanLiNguoiDungService()