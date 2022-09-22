import { errorMessage, successMessage } from '../../components/message'
import { quanLiNguoiDungService } from '../../service/QuanLiNguoiDungService'
import { endLoading, startLoading } from '../features/LoadingSlice'
import { getInfoUser, getTypeOfUser, getAllUsers } from '../features/QuanLiNguoiDungSlice'

export const getInfoUserAction = async (dispatch) => {
    try {
        dispatch(startLoading())
        const result = await quanLiNguoiDungService.ThongTinTaiKhoan()
        const { data } = result || {}
        dispatch(endLoading())
        dispatch(getInfoUser(data))
    } catch (error) {
        console.log('error', error)
        dispatch(endLoading())
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
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiNguoiDungService.CapNhatThongTinNguoiDung(data)
            dispatch(endLoading())
            successMessage('Update successfully!')
        } catch (error) {
            dispatch(endLoading())
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}
export const getAllUsersAction = async (dispatch) => {
    try {
        dispatch(startLoading())
        const result = await quanLiNguoiDungService.LayDanhSachNguoiDung()
        dispatch(endLoading())
        const { data } = result || []
        dispatch(getAllUsers(data))
    } catch (error) {
        dispatch(endLoading())
    }
}
export const searchUsersAction = (dataSearch) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiNguoiDungService.TimKiemNguoiDung(dataSearch)
            const { data } = result || []
            dispatch(endLoading())
            dispatch(getAllUsers(data))
        } catch (error) {
            console.log('error', error)
            dispatch(endLoading())
        }
    }
}
export const deleteUserAction = (account) => {
    return async (dispatch) => {
        try {
            const result = await quanLiNguoiDungService.XoaNguoiDung(account)
            const { data } = result || 'Delete successfully!'
            successMessage(data)
            dispatch(getAllUsersAction)
        } catch (error) {
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}
export const addUserAction = (userInfo) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            await quanLiNguoiDungService.ThemNguoiDung(userInfo)
            dispatch(endLoading())
            successMessage('Add user successfully!')
            dispatch(getAllUsersAction)
        } catch (error) {
            dispatch(endLoading())
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}