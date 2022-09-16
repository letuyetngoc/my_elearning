import { createSlice } from '@reduxjs/toolkit'

const QUAN_LI_NGUOI_DUNG = 'QUAN_LI_NGUOI_DUNG'

const initialState = {
    userInfo: {},
    arrTypeOfUser: []
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
        }

    }
})
export const { getInfoUser, getTypeOfUser } = QuanLiNguoiDungSlice.actions
export default QuanLiNguoiDungSlice.reducer