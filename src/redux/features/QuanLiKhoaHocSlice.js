import { createSlice } from '@reduxjs/toolkit'

const QUAN_LI_KHOA_HOC = 'QUAN_LI_KHOA_HOC'

const initialState = {
    arrCourseItem: [],
    courseDetail: {}
}
export const QuanLiKhoaHocSlice = createSlice({
    name: QUAN_LI_KHOA_HOC,
    initialState,
    reducers: {
        getArrCourseItem: (state, action) => {
            state.arrCourseItem = action.payload
        },
        getCourseDetail: (state, action) => {
            state.courseDetail = action.payload
        }
    }
})
export const { getArrCourseItem, getCourseDetail } = QuanLiKhoaHocSlice.actions
export default QuanLiKhoaHocSlice.reducer