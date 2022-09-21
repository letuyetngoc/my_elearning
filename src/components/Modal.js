import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../redux/features/ModalSlice'

export default function Modal() {
    const dispatch = useDispatch()
    const { Component, isModal } = useSelector(state => state.ModalReducer)
    const modalTag = useRef()

    useEffect(() => {
        window.scrollTo(0, 0)

        const handleCloseModal = (e) => {
            if (e.target == modalTag.current) {
                dispatch(hideModal())
            }
        }

        window.addEventListener('click', handleCloseModal)

        return () => {
            window.removeEventListener('click', handleCloseModal)
        }

    }, [])

    return (
        isModal &&
        <>
            <div className='popupModal' ref={modalTag} >
                <div className='popupModal__content'>
                    {Component}
                </div>
            </div>
        </>
    )
}
