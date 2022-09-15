import { configureStore } from '@reduxjs/toolkit'
import QuanLiKhoaHocReducer from './features/QuanLiKhoaHocSlice'

export const store = configureStore({
    reducer: {
        QuanLiKhoaHocReducer,
    }
})