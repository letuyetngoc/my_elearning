import { GROUP } from "../util/setting";
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
    LayDanhSachNguoiDung = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP}`)
    }
    TimKiemNguoiDung = (data) => {
        return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${data}`)
    }
}
export const quanLiNguoiDungService = new QuanLiNguoiDungService()