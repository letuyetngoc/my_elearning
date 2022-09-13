import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title, TitleComponent, TitleContent, TitleMark, TitleMarkNumber } from '../../components/Text'
import { quanLiKhoaHocService } from '../../service/QuanLiKhoaHocService'

function Courses() {
    const [arrCourses, setArrCourses] = useState('')
    const navigate = useNavigate()

    useEffect(async () => {
        try {
            const result = await quanLiKhoaHocService.LayDanhMucKhoaHoc()
            const { data } = result
            setArrCourses(data)
        } catch (error) {
            console.log('error', error)
        }
    }, [])

    const handleClickCourse = async (maDanhMuc) => {
        try {
            const result = await quanLiKhoaHocService.LayKhoaHocTheoDanhMuc(maDanhMuc)
            console.log('result', result)
            const { data } = result
            navigate(`/course:${maDanhMuc}`)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div id='courses'>
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
                        return <div className='list-item' key={index} onClick={() => handleClickCourse(course.maDanhMuc)}>
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
        </div>
    )
}
export default memo(Courses)
