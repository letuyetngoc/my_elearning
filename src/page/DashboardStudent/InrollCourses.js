import { Spin, Table } from 'antd'
import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsSearch, BsListStars } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { confirmMessage } from '../../components/message'
import useAcountInfo from '../../hooks/useAcountInfo'
import { getInfoCourseAction, unEnrollCourseAction } from '../../redux/actions/quanLiKhoaHocAction'
import { getCoursesWaitingApproval } from '../../redux/actions/quanLiNguoiDungAction'


const columns = [
    {
        title: 'CourseId',
        dataIndex: 'maKhoaHoc',
        key: 'maKhoaHoc',
        sorter: {
            compare: (a, b) => {
                const x = a.maKhoaHoc.length
                const y = b.maKhoaHoc.length
                return x - y
            },
            multiple: 3,
        },
    },
    {
        title: 'Course name',
        dataIndex: 'tenKhoaHoc',
        key: 'tenKhoaHoc',
        sorter: {
            compare: (a, b) => {
                const x = a.tenKhoaHoc.length
                const y = b.tenKhoaHoc.length
                return x - y
            },
            multiple: 3,
        },
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
];

export default function InrollCourses() {

    const dispatch = useDispatch()
    const { taiKhoan } = useAcountInfo()
    const { arrCoursesWaitingApproval } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getCoursesWaitingApproval({ taiKhoan: taiKhoan }))
    }, [])

    const data = useMemo(() => {
        return arrCoursesWaitingApproval.map((course, index) => ({
            key: index + 1,
            maKhoaHoc: course.maKhoaHoc,
            tenKhoaHoc: course.tenKhoaHoc,
            action: <div className='action'>
                <div className='action-item action-item--edit' onClick={() => dispatch(getInfoCourseAction(course.maKhoaHoc))}>
                    <BsListStars className='icon' />
                    <span>Detail</span>
                </div>
                <div className='action-item action-item--delete' onClick={() => {
                    confirmMessage('Are you sure to uninroll this course?', () => dispatch(unEnrollCourseAction({
                        maKhoaHoc: course.maKhoaHoc,
                        taiKhoan,
                    })))
                }}>
                    <AiFillDelete className='icon' />
                    <span>Unenroll</span>
                </div>
            </div>
        }))
    }, [arrCoursesWaitingApproval])

    return (
        <div className='inrollCourses'>
            <div className='containerDashboard'>
                <div className='contentDashboards'>
                    {/* <div className='inrollCourses__search'>
                        <input placeholder='Enter name course to search!' />
                        <div className='icon-search'>
                            <BsSearch />
                        </div>
                    </div> */}
                    <ul className='inrollCourses__list'>
                        <Spin spinning={isLoading} tip='Loading...'>
                            <Table columns={columns} dataSource={data} />
                        </Spin>
                    </ul>
                </div>
            </div>
        </div>
    )
}
