import { configureStore } from '@reduxjs/toolkit'
import QuanLiKhoaHocReducer from './features/QuanLiKhoaHocSlice'
import QuanLiNguoiDungReducer from './features/QuanLiNguoiDungSlice'
import LoadingReducer from './features/LoadingSlice'
import ModalReducer from './features/ModalSlice'


export const store = configureStore({
    reducer: {
        QuanLiKhoaHocReducer,
        QuanLiNguoiDungReducer,
        LoadingReducer,
        ModalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})