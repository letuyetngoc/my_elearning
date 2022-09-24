import { history } from '../../App'
import { errorMessage, successMessage } from '../../components/message'
import { quanLiKhoaHocService } from '../../service/QuanLiKhoaHocService'
import { USER_LOGIN } from '../../util/setting'
import { endLoading, startLoading } from '../features/LoadingSlice'
import { getAllCourses, getArrCourseItem, getCatalogCourse, getCourseDetail } from '../features/QuanLiKhoaHocSlice'
import { getCoursesWaitingApproval } from './quanLiNguoiDungAction'

export const handleClickCourseAction = (maDanhMuc) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiKhoaHocService.LayKhoaHocTheoDanhMuc(maDanhMuc)
            const { data } = result || []
            dispatch(endLoading())
            history.push(`/course/:${maDanhMuc}`)
            dispatch(getArrCourseItem(data))
        } catch (error) {
            dispatch(endLoading())
            console.log('error', error)
        }
    }
}
export const getCatalogueCoursesAction = async (dispatch) => {
    try {
        dispatch(startLoading())
        const result = await quanLiKhoaHocService.LayDanhMucKhoaHoc()
        dispatch(endLoading())
        const { data } = result || []
        dispatch(getCatalogCourse(data))
    } catch (error) {
        dispatch(endLoading())
        console.log('error', error)
    }
}

export const getInfoCourseAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiKhoaHocService.LayThongTinKhoaHoc(maKhoaHoc)
            dispatch(endLoading())
            const { data } = result || {}
            dispatch(getCourseDetail(data))
            history.push(`/course-detail/:${maKhoaHoc}`)
        } catch (error) {
            dispatch(endLoading())
            console.log('error', error)
        }
    }
}
export const getAllCoursesAction = async (dispatch) => {
    try {
        dispatch(startLoading())
        const result = await quanLiKhoaHocService.LayDanhSachKhoaHoc()
        dispatch(endLoading())
        const { data } = result || []
        dispatch(getAllCourses(data))
    } catch (error) {
        dispatch(endLoading())
        console.log('error', error)
    }
}
export const searchCoursesAction = (nameCourse) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiKhoaHocService.LayDanhSachKhoaHocTheoTen(nameCourse)
            dispatch(endLoading())
            const { data } = result || []
            dispatch(getAllCourses(data))
        } catch (error) {
            dispatch(endLoading())
        }
    }
}
export const deletecourseAction = (courseId) => {
    return async (dispatch) => {
        try {
            const result = await quanLiKhoaHocService.XoaKhoaHoc(courseId)
            const { data } = result
            successMessage(data)
            dispatch(getAllCoursesAction)
        } catch (error) {
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}
export const addCourseAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            await quanLiKhoaHocService.ThemKhoaHoc(data)
            dispatch(endLoading())
            successMessage('Add course successfull!')
            dispatch(getAllCoursesAction)
        } catch (error) {
            dispatch(endLoading())
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
            console.log('error', error)
        }
    }
}
export const updateCourseAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            await quanLiKhoaHocService.CapNhatKhoaHoc(data)
            dispatch(endLoading())
            successMessage('Update course successfull!')
            dispatch(getAllCoursesAction)
        } catch (error) {
            dispatch(endLoading())
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}
export const unEnrollCourseAction = (info) => {
    const { taiKhoan } = JSON.parse(localStorage.getItem(USER_LOGIN))
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiKhoaHocService.HuyGhiDanh(info)
            dispatch(endLoading())
            const { data } = result
            successMessage(data)
            dispatch(getCoursesWaitingApproval({ taiKhoan }))
        } catch (error) {
            dispatch(endLoading())
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}
export const registerCourseAction = (info) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const result = await quanLiKhoaHocService.DangKyKhoaHoc(info)
            dispatch(endLoading())
            const { data } = result
            successMessage(data)
        } catch (error) {
            dispatch(endLoading())
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}