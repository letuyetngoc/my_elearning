import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const MODAL = 'MODAL'

const initialState = {
    isModal: false,
    Component: <p>Default</p>
}
export const ModalSlice = createSlice({
    name: MODAL,
    initialState,
    reducers: {
        appearModal: (state, action) => {
            state.isModal = true
            state.Component = action.payload
        },
        hideModal: (state) => {
            state.isModal = false
        }
    }
})
export const { appearModal, hideModal } = ModalSlice.actions
export default ModalSlice.reducer