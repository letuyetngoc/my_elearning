import { createSlice } from '@reduxjs/toolkit'

const QUAN_LI_NGUOI_DUNG = 'QUAN_LI_NGUOI_DUNG'

const initialState = {
    userInfo: {}
}
export const QuanLiNguoiDungSlice = createSlice({
    name: QUAN_LI_NGUOI_DUNG,
    initialState,
    reducers: {
        getInfoUser: (state, action) => {
            state.userInfo = action.payload
        },

    }
})
export const { getInfoUser } = QuanLiNguoiDungSlice.actions
export default QuanLiNguoiDungSlice.reducer