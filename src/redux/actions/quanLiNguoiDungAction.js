import { quanLiNguoiDungService } from '../../service/QuanLiNguoiDungService'
import { getInfoUser } from '../features/QuanLiNguoiDungSlice'

export const getInfoUserAction = async (dispatch) => {
    try {
        const result = await quanLiNguoiDungService.ThongTinTaiKhoan()
        const { data } = result || {}
        dispatch(getInfoUser(data))
    } catch (error) {
        console.log('error', error)
    }
}   