import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoUserAction } from '../../redux/actions/quanLiNguoiDungAction'


export default function InrollCourses() {

    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)
    console.log(userInfo)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getInfoUserAction)
    }, [])

    return (
        <div className='inrollCourses'>
            <div className='containerDashboard'>
                <div className='contentDashboards'>
                    <div className='inrollCourses__search'>
                        <input placeholder='Enter name course to search!' />
                        <div className='icon-search'>
                            <BsSearch />
                        </div>
                    </div>
                    <Spin spinning={isLoading} tip='Loading...'>
                        <ul className='inrollCourses__list'>
                            {userInfo.chiTietKhoaHocGhiDanh?.map((course, index) => {
                                return <li className='inrollCourses__item' key={index}>
                                    <div className='item-img'>
                                        <img src={course.hinhAnh}
                                            onError={e => {
                                                e.target.src = 'https://picsum.photos/200'
                                                e.target.onError = null
                                            }}
                                            alt=".." />
                                    </div>
                                    <div className='item-content'>
                                        <h3 className='item-content__title textTruncate'>{course.tenKhoaHoc}</h3>
                                        <div className='item-content__date'>
                                            Date: <strong>{course.ngayTao}</strong>
                                        </div>
                                        <ul>
                                            <li>Status: <strong>Pending</strong></li>
                                            <li>Duration: <strong>1h 5m</strong></li>
                                            <li>Views: <strong>{course.luotXem}</strong></li>
                                        </ul>
                                        <div className='item-content__footer'>
                                            <div className='price'>100$</div>
                                            <div className='action'>
                                                <div className='action-item action-item--edit' >
                                                    <AiFillEdit className='icon' />
                                                    <span>Edit</span>
                                                </div>
                                                <div className='action-item action-item--delete' >
                                                    <AiFillDelete className='icon' />
                                                    <span>Delete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            })}

                        </ul>
                    </Spin>
                </div>
            </div>
        </div>
    )
}
