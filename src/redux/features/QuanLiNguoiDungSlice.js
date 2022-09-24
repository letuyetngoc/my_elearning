import { createSlice } from '@reduxjs/toolkit'

const QUAN_LI_NGUOI_DUNG = 'QUAN_LI_NGUOI_DUNG'

const initialState = {
    userInfo: {},
    arrTypeOfUser: [],
    arrAllUsers: [],
    arrCoursesWaitingApproval: [],
}
export const QuanLiNguoiDungSlice = createSlice({
    name: QUAN_LI_NGUOI_DUNG,
    initialState,
    reducers: {
        getInfoUser: (state, action) => {
            state.userInfo = action.payload
        },
        getTypeOfUser: (state, action) => {
            state.arrTypeOfUser = action.payload
        },
        getAllUsers: (state, action) => {
            state.arrAllUsers = action.payload
        },
        getArrCoursesWaitingApproval: (state, action) => {
            state.arrCoursesWaitingApproval = action.payload
        }
    }
})
export const { getInfoUser, getTypeOfUser, getAllUsers, getArrCoursesWaitingApproval } = QuanLiNguoiDungSlice.actions
export default QuanLiNguoiDungSlice.reducer