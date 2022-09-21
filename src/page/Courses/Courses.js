import { Spin } from 'antd'
import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title, TitleComponent, TitleContent, TitleMarkNumber } from '../../components/Text'
import { handleClickCourse } from '../../redux/actions/quanLiKhoaHocAction'
import { endLoading, startLoading } from '../../redux/features/LoadingSlice'
import { quanLiKhoaHocService } from '../../service/QuanLiKhoaHocService'

function Courses() {

    const [arrCourses, setArrCourses] = useState('')
    const dispatch = useDispatch()

    // const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])

    useEffect(() => {
        (async () => {
            try {
                // dispatch(startLoading(true))
                const result = await quanLiKhoaHocService.LayDanhMucKhoaHoc()
                // dispatch(endLoading(false))
                const { data } = result
                setArrCourses(data)
            } catch (error) {
                // dispatch(endLoading(false))
                console.log('error', error)
            }
        })()
    }, [])

    return (
        <div id='courses'>
            <Spin spinning={false} tip='Loading ...'>x
                <div className='container'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <TitleComponent className='courses__title' >
                            <TitleMarkNumber>06+</TitleMarkNumber>
                            <Title>Courses</Title>
                        </TitleComponent>
                        <TitleContent>MyElearning provide users with <strong>06+ unique and specialized courses</strong> focusing on educational centers and online courses</TitleContent>
                    </div>
                    <div className='courses__list' data-aos="fade-up" data-aos-duration="1000">
                        {arrCourses && arrCourses.map((course, index) => {
                            return <div className='list-item' key={index} onClick={() => {
                                localStorage.setItem('tenDanhMuc', course.tenDanhMuc)
                                dispatch(handleClickCourse(course.maDanhMuc))
                            }}>
                                <div className='list-item__img'>
                                    <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                                </div>
                                <div className='list-item__info'>
                                    <h3>{course.tenDanhMuc}</h3>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </Spin >
        </div >
    )
}
export default memo(Courses)
