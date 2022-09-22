import { Spin } from 'antd'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title, TitleComponent, TitleContent, TitleMarkNumber } from '../../components/Text'
import { getCatalogueCoursesAction, handleClickCourseAction } from '../../redux/actions/quanLiKhoaHocAction'

function Courses() {

    const dispatch = useDispatch()

    const { arrCatalogCourse } = useSelector(state => state.QuanLiKhoaHocReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])

    useEffect(() => {
        dispatch(getCatalogueCoursesAction)
    }, [])

    return (
        <div id='courses'>
            <Spin spinning={isLoading} tip='Loading ...'>
                <div className='container'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <TitleComponent className='courses__title' >
                            <TitleMarkNumber>06+</TitleMarkNumber>
                            <Title>Courses</Title>
                        </TitleComponent>
                        <TitleContent>MyElearning provide users with <strong>06+ unique and specialized courses</strong> focusing on educational centers and online courses</TitleContent>
                    </div>
                    <div className='courses__list' data-aos="fade-up" data-aos-duration="1000">
                        {arrCatalogCourse && arrCatalogCourse.map((course, index) => {
                            return <div className='list-item' key={index} onClick={() => {
                                localStorage.setItem('tenDanhMuc', course.tenDanhMuc)
                                dispatch(handleClickCourseAction(course.maDanhMuc))
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
