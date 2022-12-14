import { GROUP } from "../util/setting";
import BaseService from "./BaseService";

class QuanLiKhoaHocService extends BaseService {
    constructor() {
        super()
    }
    LayDanhMucKhoaHoc = () => {
        return this.get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    }
    LayKhoaHocTheoDanhMuc = (maDanhMuc) => {
        return this.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUP}`)
    }
    LayThongTinKhoaHoc = (maKhoaHoc) => {
        return this.get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
    LayDanhSachKhoaHoc = () => {
        return this.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP}`)
    }
    LayDanhSachKhoaHocTheoTen = (tenKhoaHoc) => {
        return this.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUP}`)
    }
    XoaKhoaHoc = (maKhoaHoc) => {
        return this.delete(`api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
    }
    ThemKhoaHoc = (data) => {
        return this.post('api/QuanLyKhoaHoc/ThemKhoaHoc', data)
    }
    CapNhatKhoaHoc = (data) => {
        return this.put('api/QuanLyKhoaHoc/CapNhatKhoaHoc', data)
    }
    HuyGhiDanh = (data) => {
        return this.post('api/QuanLyKhoaHoc/HuyGhiDanh', data)
    }
    DangKyKhoaHoc = (data) => {
        return this.post('api/QuanLyKhoaHoc/DangKyKhoaHoc', data)
    }
}
export const quanLiKhoaHocService = new QuanLiKhoaHocService()