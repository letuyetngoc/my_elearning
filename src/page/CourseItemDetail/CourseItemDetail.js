import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function CourseItemDetail() {
    const { courseDetail } = useSelector(state => state.QuanLiKhoaHocReducer)
    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])
    return (
        <div className='courseItemDetail'>
            <div className='container' data-aos="fade-up" data-aos-duration="1000">
                <div className='courseItemDetail__item'>
                    <img src="https://htmldemo.net/edumall/assets/images/shop/shop-01.jpg" alt="" />
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
                        <button className='btn btn--primary  btn_registerCourse'>Enrolled</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
