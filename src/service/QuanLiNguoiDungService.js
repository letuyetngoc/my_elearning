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
}
export const quanLiNguoiDungService = new QuanLiNguoiDungService()