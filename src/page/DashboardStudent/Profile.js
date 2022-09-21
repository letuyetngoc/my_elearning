import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoUserAction } from '../../redux/actions/quanLiNguoiDungAction'

export default function Profile() {

    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        dispatch(getInfoUserAction)
    }, [])
    return (
        <div className='profile'>
            <div className='containerDashboard'>
                <div className='contentDashboard'>
                    <Spin spinning={isLoading} tip='Loading ...'>
                        <ul>
                            <li>
                                <div className='content-lable'>Acount: </div>
                                <div className='content-info'>{userInfo.taiKhoan}</div>
                            </li>
                            <li>
                                <div className='content-lable'>User name: </div>
                                <div className='content-info'>{userInfo.hoTen}</div>
                            </li>
                            <li>
                                <div className='content-lable'>Email: </div>
                                <div className='content-info'>{userInfo.email}</div>
                            </li>
                            <li>
                                <div className='content-lable'>Phone: </div>
                                <div className='content-info'>{userInfo.soDT}</div>
                            </li>
                            <li>
                                <div className='content-lable'>Type of user: </div>
                                <div className='content-info'>{userInfo.maLoaiNguoiDung == 'HV' ? 'Student' : 'Teacher'}</div>
                            </li>
                            <li>
                                <div className='content-lable'>Group: </div>
                                <div className='content-info'>{userInfo.maNhom}</div>
                            </li>
                        </ul>
                    </Spin>
                </div>
            </div>
        </div>
    )
}
