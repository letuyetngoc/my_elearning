import { message } from 'antd'
import { history } from '../../App'
import { errorMessage } from '../../components/message'
import { quanLiKhoaHocService } from '../../service/QuanLiKhoaHocService'
import { endLoading, startLoading } from '../features/LoadingSlice'
import { getAllCourses, getArrCourseItem, getCourseDetail } from '../features/QuanLiKhoaHocSlice'

export const handleClickCourse = (maDanhMuc) => {
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
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}
export const deletecourseAction = (courseId) => {
    return async () => {
        try {
            const result = await quanLiKhoaHocService.XoaKhoaHoc(courseId)
            console.log('result', result)
            const { data } = result
        } catch (error) {
            const { data } = error.response
            errorMessage(data || 'An error occurred, please try again!')
        }
    }
}