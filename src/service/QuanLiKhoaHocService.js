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
}
export const quanLiKhoaHocService = new QuanLiKhoaHocService()