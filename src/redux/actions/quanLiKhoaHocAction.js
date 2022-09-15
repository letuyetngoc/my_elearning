import { history } from '../../App'
import { quanLiKhoaHocService } from '../../service/QuanLiKhoaHocService'
import { getArrCourseItem, getCourseDetail } from '../features/QuanLiKhoaHocSlice'

export const handleClickCourse = (maDanhMuc) => {
    return async (dispatch) => {
        try {
            const result = await quanLiKhoaHocService.LayKhoaHocTheoDanhMuc(maDanhMuc)
            const { data } = result || []
            history.push(`/course/:${maDanhMuc}`)

            dispatch(getArrCourseItem(data))
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const layThongTinKhoaHocAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            const result = await quanLiKhoaHocService.LayThongTinKhoaHoc(maKhoaHoc)
            const { data } = result || {}
            dispatch(getCourseDetail(data))
            history.push(`/course-detail/:${maKhoaHoc}`)
        } catch (error) {
            console.log('error', error)
        }
    }
}