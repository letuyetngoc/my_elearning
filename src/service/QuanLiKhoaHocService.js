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
}
export const quanLiKhoaHocService = new QuanLiKhoaHocService()