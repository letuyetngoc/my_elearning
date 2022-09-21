import { Formik, Field, Form } from 'formik';
import React from 'react'
import { useDispatch, } from 'react-redux';
import { addUserAction } from '../../redux/actions/quanLiNguoiDungAction';
import { GROUP } from '../../util/setting'
import * as Yup from 'yup';

export default function AddCourse() {
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
                            maKhoaHoc: '',
                            biDanh: '',
                            tenKhoaHoc: '',
                            moTa: '',
                            luotXem: 0,
                            danhGia: 0,
                            maNhom: GROUP,
                            hinhAnh: '',
                            ngayTao: 0,
                            maDanhMucKhoaHoc: '',
                            taiKhoanNguoiTao: ''
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
                                            <label>CourseID</label>
                                            <Field name="maKhoaHoc" className='input' />
                                            {errors.maKhoaHoc && touched.maKhoaHoc ? (<div className='textError'>{errors.maKhoaHoc}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Aliase</label>
                                            <Field name="biDanh" className='input' />
                                            {errors.biDanh && touched.biDanh ? (<div className='textError'>{errors.biDanh}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Course name</label>
                                            <Field name="tenKhoaHoc" className='input' />
                                            {errors.tenKhoaHoc && touched.tenKhoaHoc ? (<div className='textError'>{errors.tenKhoaHoc}</div>) : null}
                                        </div>
                                        <div className='updateInfo__group-item'>
                                            <label>Description</label>
                                            <textarea name="moTa" className='input' />
                                            {errors.moTa && touched.moTa ? (<div className='textError'>{errors.moTa}</div>) : null}
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
