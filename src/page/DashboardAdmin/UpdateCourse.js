import { Formik, Field, Form } from 'formik';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { GROUP } from '../../util/setting'
import * as Yup from 'yup';
import { getCatalogueCoursesAction } from '../../redux/actions/quanLiKhoaHocAction';
import { DatePicker, InputNumber } from 'antd';
import { Select } from '../../components/Select';
import { getAllUsersAction } from '../../redux/actions/quanLiNguoiDungAction';

export default function UpdateCourse() {
    const dispatch = useDispatch()
    const { arrAllUsers } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { arrCatalogCourse } = useSelector(state => state.QuanLiKhoaHocReducer)

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
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required!'),
        biDanh: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        tenKhoaHoc: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required!'),
        moTa: Yup.string()
            .required('Required!'),
        luotXem: Yup.string()
            .required('Required!')
            .matches(/^[1-9]|10/, 'Please enter number!'),
    });

    return (
        <div className='updateCourse'>
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
                        }}
                    >
                        {({ errors, touched, setFieldValue }) => (
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
                                            <DatePicker onChange={(date, dateString) => setFieldValue('ngayTao', dateString)} />
                                        </div>
                                        <div className='updateCourse__group-item'>
                                            <label>Rating</label>
                                            <InputNumber min={1} max={10} defaultValue={0} onChange={(value) => setFieldValue('danhGia', value)} />
                                        </div>
                                    </div>
                                    <div className='updateCourse__group'>
                                        <div className='updateCourse__group-item'>
                                            <label>Course catalogue</label>
                                            <Select defaultValue="Choose course catalogue" options={arrCatalogueCourse} onClick={e => setFieldValue('maDanhMucKhoaHoc', e.target.dataset.value)} />
                                        </div>
                                        <div className='updateCourse__group-item'>
                                            <label>Account creater</label>
                                            <Select defaultValue="Choose account creater" options={arrAccountCreater} onClick={e => setFieldValue('taiKhoanNguoiTao', e.target.dataset.value)} />
                                        </div>
                                        <div className='updateCourse__group-item'>
                                            <label>Description</label>
                                            <textarea name="moTa" className='textArea' onChange={(e) => setFieldValue('moTa', e.target.value)} />
                                            {errors.moTa && touched.moTa ? (<div className='textError'>{errors.moTa}</div>) : null}
                                        </div>
                                        <div className='updateCourse__group-item'>
                                            <label>Image</label>
                                            <input name="hinhAnh" type='file' onChange={(e) => {
                                                const { files } = e.target
                                                const url = files[0].name
                                                setFieldValue('hinhAnh', url)
                                            }} />
                                            <div style={{ width: '100px', height: '100px', marginTop: '10px' }}>
                                                <img src="https://picsum.photos/200" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='contentDashboard__btn'>
                                    <button type='submit' className='btn btn-add'>Add course</button>
                                </div>
                            </Form>)}
                    </Formik>
                </div>
            </div>
        </div >
    )
}
