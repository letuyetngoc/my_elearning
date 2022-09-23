import { Formik, Field, Form } from 'formik';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { GROUP } from '../../util/setting'
import * as Yup from 'yup';
import { addCourseAction, getCatalogueCoursesAction } from '../../redux/actions/quanLiKhoaHocAction';
import { DatePicker, InputNumber, Spin } from 'antd';
import { Select } from '../../components/Select';
import { getAllUsersAction } from '../../redux/actions/quanLiNguoiDungAction';
import { useState } from 'react';

export default function AddCourse() {
    const dispatch = useDispatch()
    const { arrAllUsers } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { arrCatalogCourse } = useSelector(state => state.QuanLiKhoaHocReducer)
    const { isLoading } = useSelector(state => state.LoadingReducer)

    const [imgCourse, setImgCourse] = useState('https://picsum.photos/200')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getAllUsersAction)
    }, [])

    useEffect(() => {
        dispatch(getCatalogueCoursesAction)
    }, [])

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(imgCourse)
        }
    }, [imgCourse])


    const arrAccountCreater = useMemo(() => {
        const newArr = arrAllUsers.filter(item => item.maLoaiNguoiDung === 'GV')
        return newArr.map(item => ({ value: item.taiKhoan, label: item.taiKhoan }))
    }, [arrAllUsers])

    const arrCatalogueCourse = useMemo(() => {
        return arrCatalogCourse.map(item => ({ value: item.maDanhMuc, label: item.tenDanhMuc }))
    }, [arrCatalogCourse])


    const validateForm = Yup.object().shape({
        maKhoaHoc: Yup.string()
            .required('Required!'),
        biDanh: Yup.string()
            .required('Required'),
        tenKhoaHoc: Yup.string()
            .required('Required!'),
        moTa: Yup.string()
            .required('Required!'),
        luotXem: Yup.string()
            .required('Required!')
            .matches(/^[1-9]|10/, 'Please enter number!'),
    });

    return (
        <div className='addCourse'>
            <div className='containerDashboard'>
                <div className='contentDashboard'>
                    <Spin spinning={isLoading} tip='Loading...'>
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
                                dispatch(addCourseAction(values))
                            }}
                        >
                            {({ errors, touched, setFieldValue }) => (
                                <Form >
                                    <div className='contentDashboard__list'>
                                        <div className='addCourse__group'>
                                            <div className='addCourse__group-item'>
                                                <label>CourseID</label>
                                                <Field name="maKhoaHoc" className='input' />
                                                {errors.maKhoaHoc && touched.maKhoaHoc ? (<div className='textError'>{errors.maKhoaHoc}</div>) : null}
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Aliase</label>
                                                <Field name="biDanh" className='input' />
                                                {errors.biDanh && touched.biDanh ? (<div className='textError'>{errors.biDanh}</div>) : null}
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Course name</label>
                                                <Field name="tenKhoaHoc" className='input' />
                                                {errors.tenKhoaHoc && touched.tenKhoaHoc ? (<div className='textError'>{errors.tenKhoaHoc}</div>) : null}
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Views</label>
                                                <Field name="luotXem" className='input' />
                                                {errors.luotXem && touched.luotXem ? (<div className='textError'>{errors.luotXem}</div>) : null}
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Date</label>
                                                <DatePicker onChange={(date, dateString) => setFieldValue('ngayTao', dateString)} />
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Rating</label>
                                                <InputNumber min={1} max={10} defaultValue={0} onChange={(value) => setFieldValue('danhGia', value)} />
                                            </div>
                                        </div>
                                        <div className='addCourse__group'>
                                            <div className='addCourse__group-item'>
                                                <label>Course catalogue</label>
                                                <Select defaultValue="Choose course catalogue" options={arrCatalogueCourse} onClick={e => setFieldValue('maDanhMucKhoaHoc', e.target.dataset.value)} />
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Account creater</label>
                                                <Select defaultValue="Choose account creater" options={arrAccountCreater} onClick={e => setFieldValue('taiKhoanNguoiTao', e.target.dataset.value)} />
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Description</label>
                                                <textarea name="moTa" className='textArea' onChange={(e) => setFieldValue('moTa', e.target.value)} />
                                                {errors.moTa && touched.moTa ? (<div className='textError'>{errors.moTa}</div>) : null}
                                            </div>
                                            <div className='addCourse__group-item'>
                                                <label>Image</label>
                                                <input name="hinhAnh" type='file' onChange={(e) => {
                                                    const file = e.target.files[0]
                                                    const url = URL.createObjectURL(file)
                                                    setImgCourse(url)
                                                    setFieldValue('hinhAnh', file.name)
                                                }} />
                                                <div style={{ width: '100px', height: '100px', marginTop: '10px' }}>
                                                    <img src={imgCourse} alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='contentDashboard__btn'>
                                        <button type='submit' className='btn btn-add'>Add course</button>
                                    </div>
                                </Form>)}
                        </Formik>
                    </Spin>
                </div>
            </div>
        </div >
    )
}
