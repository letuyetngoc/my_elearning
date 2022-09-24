import { Spin } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title, TitleComponent, TitleContent, TitleMarkNumber } from '../../components/Text'
import { getInfoCourseAction } from '../../redux/actions/quanLiKhoaHocAction';



export default function ListCourseItem() {
    const dispatch = useDispatch()
    const { arrCourseItem } = useSelector(state => state.QuanLiKhoaHocReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])

    return (
        <div className='listCourseItem'>
            <Spin spinning={isLoading} tip='Geting course detail ...'>
                <div className='container' data-aos="fade-up" data-aos-duration="1000">
                    <div className='listCourseItem__title'>
                        <div className='title-img'>
                            <img src="https://htmldemo.net/edumall/assets/images/course-laptop-screenshot.png" alt="photo" />
                        </div>
                        <div className='title-content'>
                            <TitleComponent className='title-content__wrap'>
                                <TitleMarkNumber className='title-content__number'>{arrCourseItem.length}+</TitleMarkNumber>
                                <br />
                                <Title className='title-content__title textTruncate'>{localStorage.getItem('tenDanhMuc')}</Title>
                                <TitleContent className='title-content__decs '>Users can choose from our {arrCourseItem.length}+ different course listing layouts for your eLearning platform</TitleContent>
                            </TitleComponent>
                        </div>
                    </div>
                    <div className='listCourseItem__list'>
                        {arrCourseItem && arrCourseItem.map((course, index) => {
                            return (
                                <div className='list-item' key={index} onClick={() => dispatch(getInfoCourseAction(course.maKhoaHoc))}>
                                    <div className='list-item__img'>
                                        <img src={course.hinhAnh}
                                            onError={(e) => {
                                                e.target.src = 'https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg';
                                                e.target.onError = null;
                                            }}
                                            alt="" />
                                    </div>
                                    <div className='list-item__text'>
                                        <h3 className='textTruncate'>{course.tenKhoaHoc}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Spin>
        </div >
    )
}
