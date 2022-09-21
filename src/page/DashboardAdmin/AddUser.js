import { Formik, Field, Form } from 'formik';
import React from 'react'
import { useDispatch, } from 'react-redux';
import { addUserAction } from '../../redux/actions/quanLiNguoiDungAction';
import { GROUP } from '../../util/setting'
import * as Yup from 'yup';

export default function AddUser() {
    const dispatch = useDispatch()

    const validateForm = Yup.object().shape({
        taiKhoan: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required!'),
        hoTen: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email!').required('Required!'),
        matKhau: Yup.string()
            .required('Required!')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'At least 8 characters, contain number, lowercase, uppercase!'),
        soDT: Yup.string()
            .required('Required!')
            .matches(/^[0-9()-]+$/, 'Please enter number!'),
        xacNhanMatKhau: Yup.string()
            .required('Required!')
            .oneOf([Yup.ref('matKhau'), null], 'Passwords must match!')
    });

    return (
        <div className='updateInfo'>
            <div className='containerDashboard'>
                <div className='contentDashboard'>
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: '',
                            xacNhanMatKhau: '',
                            hoTen: '',
                            soDT: '',
                            maLoaiNguoiDung: 'GV',
                            maNhom: GROUP,
                            email: ''
                        }}
                        validationSchema={validateForm}
                        onSubmit={(values) => {
                            console.log('value', values)
                            dispatch(addUserAction(values))
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form >
                                <div className='contentDashboard__list'>
                                    <div className='updateInfo__group'>
                                        <div className='updateInfo__group-item'>
                                            <label>Account</label>
                                            <Field name="taiKhoan" className='input' />
                                            {errors.taiKhoan && touched.taiKhoan ? (<div className='textError'>{errors.taiKhoan}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Password</label>
                                            <Field name="matKhau" className='input' type='password' autoComplete="on" />
                                            {errors.matKhau && touched.matKhau ? (<div className='textError'>{errors.matKhau}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Confirm password</label>
                                            <Field name="xacNhanMatKhau" className='input' type='password' autoComplete="on" />
                                            {errors.xacNhanMatKhau && touched.xacNhanMatKhau ? (<div className='textError'>{errors.xacNhanMatKhau}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>User name</label>
                                            <Field name="hoTen" className='input' />
                                            {errors.hoTen && touched.hoTen ? (<div className='textError'>{errors.hoTen}</div>) : null}
                                        </div>
                                    </div>
                                    <div className='updateInfo__group'>
                                        <div className='updateInfo__group-item'>
                                            <label>Phone</label>
                                            <Field name="soDT" className='input' />
                                            {errors.soDT && touched.soDT ? (<div className='textError'>{errors.soDT}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Type of user</label>
                                            <Field name="maLoaiNguoiDung" className='input' />
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Email</label>
                                            <Field name="email" className='input' />
                                            {errors.email && touched.email ? (<div className='textError'>{errors.email}</div>) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className='contentDashboard__btn'>
                                    <button type='submit' className='btn btn-update'>Add user</button>
                                </div>
                            </Form>)}
                    </Formik>
                </div>
            </div>
        </div >
    )
}
