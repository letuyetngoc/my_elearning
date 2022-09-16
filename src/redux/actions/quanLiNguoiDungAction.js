import { errorMessage, successMessage } from '../../components/message'
import { quanLiNguoiDungService } from '../../service/QuanLiNguoiDungService'
import { getInfoUser, getTypeOfUser, getAllUsers } from '../features/QuanLiNguoiDungSlice'

export const getInfoUserAction = async (dispatch) => {
    try {
        const result = await quanLiNguoiDungService.ThongTinTaiKhoan()
        const { data } = result || {}
        dispatch(getInfoUser(data))
    } catch (error) {
        console.log('error', error)
    }
}
export const getTypeOfUserAction = async (dispatch) => {
    try {
        const result = await quanLiNguoiDungService.LayDanhSachLoaiNguoiDung()
        const { data } = result || []
        dispatch(getTypeOfUser(data))
    } catch (error) {
        console.log('error', error)
    }
}
export const updateInfoUser = (data) => {
    return async () => {
        try {
            const result = await quanLiNguoiDungService.CapNhatThongTinNguoiDung(data)
            successMessage('Update successfully!')
        } catch (error) {
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again')
        }
    }
}
export const getAllUsersAction = async (dispatch) => {
    try {
        const result = await quanLiNguoiDungService.LayDanhSachNguoiDung()
        const { data } = result || []
        dispatch(getAllUsers(data))
    } catch (error) {
        console.log('error', error)
    }
}
export const searchUsersAction = (dataSearch) => {
    return async (dispatch) => {
        try {
            const result = await quanLiNguoiDungService.TimKiemNguoiDung(dataSearch)
            const { data } = result || []
            dispatch(getAllUsers(data))
        } catch (error) {
            console.log('error', error)
        }
    }
} 