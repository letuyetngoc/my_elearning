import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAcountInfo from '../../hooks/useAcountInfo'
import { registerCourseAction } from '../../redux/actions/quanLiKhoaHocAction'

export default function CourseItemDetail() {
    const dispatch = useDispatch()
    const { courseDetail } = useSelector(state => state.QuanLiKhoaHocReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)
    const { taiKhoan } = useAcountInfo()

    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])

    return (
        <div className='courseItemDetail'>
            <Spin spinning={isLoading} tip='Loading...'>
                <div className='container' data-aos="fade-up" data-aos-duration="1000">
                    <div className='courseItemDetail__item'>
                        <img src={courseDetail.hinhAnh}
                            onError={(e) => {
                                e.target.src = 'https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg';
                                e.target.onError = null;
                            }}
                            alt="" />
                    </div>
                    <div className='courseItemDetail__item'>
                        <div className='info-title'>
                            <h3>{courseDetail.tenKhoaHoc}</h3>
                        </div>
                        <div className='info-content'>
                            <ul>
                                <li>
                                    Mô tả: <span> {courseDetail.moTa}</span>
                                </li>
                                <li>Lượt xem: <span>{courseDetail.luotXem}</span></li>
                                <li>Ngày tạo: <span>{courseDetail.ngayTao}</span></li>
                                <li>Số lượng học viên: <span>{courseDetail.soLuongHocVien}</span></li>
                            </ul>
                        </div>
                        <div className='info-btn'>
                            <button className='btn btn--primary  btn_registerCourse' onClick={() => dispatch(registerCourseAction({
                                maKhoaHoc: courseDetail.maKhoaHoc,
                                taiKhoan,
                            }))}>Register</button>
                        </div>
                    </div>
                </div>
            </Spin>
        </div>
    )
}
