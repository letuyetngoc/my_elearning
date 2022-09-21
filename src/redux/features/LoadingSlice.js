import { createSlice } from '@reduxjs/toolkit'

export const LOADING = 'LOADING'

const initialState = {
    isLoading: false,
    isloadingItem: false
}
export const LoadingSlice = createSlice({
    name: LOADING,
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true
        },
        startLoadingItem: (state) => {
            state.isloadingItem = true
        },
        endLoading: (state) => {
            state.isLoading = false
        },
        endLoadingItem: (state) => {
            state.isloadingItem = false
        }
    }
})
export const { startLoading, endLoading, startLoadingItem, endLoadingItem } = LoadingSlice.actions
export default LoadingSlice.reducer