import { useFormik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUserAction } from '../../redux/actions/quanLiNguoiDungAction';
import { GROUP } from '../../util/setting'
import * as Yup from 'yup';

export default function UpdateInfo() {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.QuanLiNguoiDungReducer)

    useEffect(() => {
        dispatch(getInfoUserAction)
    }, [])

    const UpdateSchema = Yup.object().shape({
        taiKhoan: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        hoTen: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userInfo.taiKhoan,
            matKhau: userInfo.matKhau,
            xacNhanMatKhau: '',
            hoTen: userInfo.hoTen,
            soDT: userInfo.soDT,
            maLoaiNguoiDung: userInfo.maLoaiNguoiDung,
            maNhom: GROUP,
            email: userInfo.email
        },
        validate: { UpdateSchema },
        onSubmit: values => {
            console.log('dfsd')
            console.log('values', values)
        },
    });
    console.log('formik', formik)

    return (
        <div className='updateInfo'>
            <div className='containerDashboard'>
                <div className='contentDashboard'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='contentDashboard__list'>
                            <div className='updateInfo__group'>
                                <div className='updateInfo__group-item'>
                                    <label>Account</label>
                                    <input name='taiKhoan' id='taiKhoan' value={formik.values.taiKhoan || ''} onChange={formik.handleChange} />
                                </div>
                                <div className='updateInfo__group-item'>
                                    <label>Password</label>
                                    <input type='password' name='matKhau' id='matKhau' value={formik.values.matKhau || ''} onChange={formik.handleChange} autoComplete="on" />
                                </div>
                                <div className='updateInfo__group-item'>
                                    <label>Confirm password</label>
                                    <input type='password' name='xacNhanMatKhau' id='xacNhanMatKhau' onChange={formik.handleChange} autoComplete="on" />
                                </div>
                                <div className='updateInfo__group-item'>
                                    <label>User name</label>
                                    <input name='hoTen' id='hoTen' value={formik.values.hoTen || ''} onChange={formik.handleChange} />
                                </div>
                            </div>
                            <div className='updateInfo__group'>
                                <div className='updateInfo__group-item'>
                                    <label>Phone</label>
                                    <input name='soDT' id='soDT' value={formik.values.soDT || ''} onChange={formik.handleChange} />
                                </div>
                                <div className='updateInfo__group-item'>
                                    <label>Type of user</label>
                                    <input name='maLoaiNguoiDung' id='maLoaiNguoiDung' value={formik.values.maLoaiNguoiDung || ''} onChange={formik.handleChange} />
                                </div>
                                <div className='updateInfo__group-item'>
                                    <label>Email</label>
                                    <input name='email' id='email' value={formik.values.email || ''} onChange={formik.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='contentDashboard__btn'>
                            <button type='submit' className='btn btn-update'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
