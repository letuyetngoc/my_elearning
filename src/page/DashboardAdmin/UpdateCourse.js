import { Formik, Field, Form } from 'formik';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { GROUP } from '../../util/setting'
import * as Yup from 'yup';
import { getCatalogueCoursesAction, updateCourseAction } from '../../redux/actions/quanLiKhoaHocAction';
import { DatePicker, InputNumber } from 'antd';
import { Select } from '../../components/Select';
import { getAllUsersAction } from '../../redux/actions/quanLiNguoiDungAction';
import { useState } from 'react';
import moment from 'moment';
import { Spin } from 'antd'

export default function UpdateCourse() {
    const dispatch = useDispatch()

    const { isLoading } = useSelector(state => state.LoadingReducer)
    const { arrAllUsers } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { arrCatalogCourse, courseDetail } = useSelector(state => state.QuanLiKhoaHocReducer)
    const [imgCourse, setImgCourse] = useState(courseDetail.hinhAnh)

    useEffect(() => {
        dispatch(getAllUsersAction)
    }, [])

    useEffect(() => {
        dispatch(getCatalogueCoursesAction)
    }, [])

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
        danhGia: Yup.string()
            .required('Required!'),
        luotXem: Yup.string()
            .required('Required!')
            .matches(/^[1-9]|10/, 'Please enter number!'),
    });

    return (
        <div className='updateCourse'>
            <div className='containerDashboard'>
                <div className='contentDashboard'>
                    <Spin spinning={isLoading} tip='Loading...'>
                        <Formik
                            initialValues={{
                                maKhoaHoc: courseDetail.maKhoaHoc,
                                biDanh: courseDetail.biDanh,
                                tenKhoaHoc: courseDetail.tenKhoaHoc,
                                moTa: courseDetail.moTa,
                                luotXem: courseDetail.luotXem,
                                danhGia: courseDetail.danhGia,
                                maNhom: GROUP,
                                hinhAnh: courseDetail.hinhAnh,
                                ngayTao: courseDetail.ngayTao,
                                maDanhMucKhoaHoc: courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc,
                                taiKhoanNguoiTao: courseDetail.nguoiTao.taiKhoan
                            }}
                            validationSchema={validateForm}
                            onSubmit={(values) => {
                                dispatch(updateCourseAction(values))
                            }}
                        >
                            {({ errors, touched, setFieldValue, values }) => (
                                <Form >
                                    <div className='contentDashboard__list'>
                                        <div className='updateCourse__group'>
                                            <div className='updateCourse__group-item'>
                                                <label>CourseID</label>
                                                <Field name="maKhoaHoc" className='input' />
                                                {errors.maKhoaHoc && touched.maKhoaHoc ? (<div className='textError'>{errors.maKhoaHoc}</div>) : null}
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Aliase</label>
                                                <Field name="biDanh" className='input' />
                                                {errors.biDanh && touched.biDanh ? (<div className='textError'>{errors.biDanh}</div>) : null}
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Course name</label>
                                                <Field name="tenKhoaHoc" className='input' />
                                                {errors.tenKhoaHoc && touched.tenKhoaHoc ? (<div className='textError'>{errors.tenKhoaHoc}</div>) : null}
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Views</label>
                                                <Field name="luotXem" className='input' />
                                                {errors.luotXem && touched.luotXem ? (<div className='textError'>{errors.luotXem}</div>) : null}
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Date</label>
                                                <DatePicker defaultValue={moment(values.ngayTao, 'YYYY/MM/DD')} onChange={(date, dateString) => setFieldValue('ngayTao', dateString)} />
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Rating</label>
                                                <InputNumber min={1} max={10} defaultValue={values.danhGia} onChange={(value) => setFieldValue('danhGia', value)} />
                                                {errors.danhGia && touched.danhGia ? (<div className='textError'>{errors.danhGia}</div>) : null}
                                            </div>
                                        </div>
                                        <div className='updateCourse__group'>
                                            <div className='updateCourse__group-item'>
                                                <label>Course catalogue</label>
                                                <Select defaultValue={values.maDanhMucKhoaHoc} options={arrCatalogueCourse} onClick={e => setFieldValue('maDanhMucKhoaHoc', e.target.dataset.value)} />
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Account creater</label>
                                                <Select defaultValue={values.taiKhoanNguoiTao} options={arrAccountCreater} onClick={e => setFieldValue('taiKhoanNguoiTao', e.target.dataset.value)} />
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Description</label>
                                                <textarea name="moTa" className='textArea' value={values.moTa} onChange={(e) => setFieldValue('moTa', e.target.value)} />
                                                {errors.moTa && touched.moTa ? (<div className='textError'>{errors.moTa}</div>) : null}
                                            </div>
                                            <div className='updateCourse__group-item'>
                                                <label>Image</label>
                                                <input name="hinhAnh" type='file' onChange={(e) => {
                                                    const file = e.target.files[0]
                                                    const url = URL.createObjectURL(file)
                                                    setImgCourse(url)
                                                    setFieldValue('hinhAnh', file.name)
                                                }} />
                                                <div style={{ width: '100px', height: '100px', marginTop: '10px' }}>
                                                    <img src={imgCourse}
                                                        onError={(e) => {
                                                            e.target.src = 'https://picsum.photos/200';
                                                            e.target.onError = null;
                                                        }}
                                                        alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='contentDashboard__btn'>
                                        <button type='submit' className='btn btn-add'>Update course</button>
                                    </div>
                                </Form>)}
                        </Formik>
                    </Spin>
                </div>
            </div>
        </div >
    )
}
