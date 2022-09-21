import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { confirmMessage } from '../../components/message'
import useDebounce from '../../hooks/useDebounce'
import { deletecourseAction, getAllCoursesAction, searchCoursesAction } from '../../redux/actions/quanLiKhoaHocAction'

export default function AllCourses() {
    const dispatch = useDispatch()
    const { arrAllCourses } = useSelector(state => state.QuanLiKhoaHocReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)

    const [searchValue, setSearchValue] = useState('')

    const debounceValue = useDebounce(searchValue, 500)

    useEffect(() => {
        dispatch(searchCoursesAction(debounceValue))
    }, [debounceValue])

    useEffect(() => {
        dispatch(getAllCoursesAction)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='allCourses'>
            <div className='containerDashboard'>
                <div className='contentDashboards'>
                    <div className='allCourses__search'>
                        <input placeholder='Enter name course to search!' onChange={e => setSearchValue(e.target.value)} />
                        <div className='icon-search'>
                            <BsSearch />
                        </div>
                    </div>
                    <Spin spinning={isLoading} tip='Loading...'>
                        <ul className='allCourses__list'>
                            {arrAllCourses.map((course, index) => {
                                return (
                                    <li className='allCourses__item' key={index}>
                                        <div className='item-img'>
                                            <img src={`https://picsum.photos/200/300?random=${index}`} alt=".." />
                                        </div>
                                        <div className='item-content'>
                                            <h3 className='item-content__title textTruncate'>{course.tenKhoaHoc}</h3>
                                            <div className='item-content__date'>
                                                Date: <strong>{course.ngayTao}</strong>
                                            </div>
                                            <ul>
                                                <li>Status: <strong>Pending</strong></li>
                                                <li>Duration: <strong>1h 5m</strong></li>
                                                <li>Student: <strong>{course.soLuongHocVien}</strong></li>
                                            </ul>
                                            <div className='item-content__footer'>
                                                <div className='price'>100$</div>
                                                <div className='action'>
                                                    <div className='action-item action-item--edit'>
                                                        <AiFillEdit className='icon' />
                                                        <span>Edit</span>
                                                    </div>
                                                    <div className='action-item action-item--delete' onClick={() => confirmMessage('Are you sure to delete this course?', () => dispatch(deletecourseAction(course.maKhoaHoc)))}>
                                                        <AiFillDelete className='icon' />
                                                        <span>Delete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </Spin>
                </div>
            </div>
        </div>
    )
}
