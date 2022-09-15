import { configureStore } from '@reduxjs/toolkit'
import QuanLiKhoaHocReducer from './features/QuanLiKhoaHocSlice'
import QuanLiNguoiDungReducer from './features/QuanLiNguoiDungSlice'

export const store = configureStore({
    reducer: {
        QuanLiKhoaHocReducer,
        QuanLiNguoiDungReducer
    }
})