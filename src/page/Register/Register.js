import { BsHouseFill } from 'react-icons/bs'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { quanLiNguoiDungService } from '../../service/QuanLiNguoiDungService'
import { useFormik } from 'formik'
import { GROUP } from '../../util/setting'
import { errorMessage, successMessage } from '../../components/message'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { endLoading, startLoading } from '../../redux/features/LoadingSlice'

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const validate = values => {

        const errors = {}
        const { taiKhoan, hoTen, matKhau, xacNhanMatKhau, soDT, email } = values

        if (!taiKhoan) {
            errors.taiKhoan = 'Required'
        } else if (taiKhoan.length > 15) {
            errors.taiKhoan = "Must be 15 characters or less"
        }
        if (!hoTen) {
            errors.hoTen = 'Required'
        } else if (hoTen.length > 15) {
            errors.hoTen = "Must be 15 characters or less"
        }

        if (!matKhau) {
            errors.matKhau = 'Required'
        } else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).test(matKhau)) {
            errors.matKhau = "At least 8 characters, contain number, lowercase, uppercase!"
        }
        if (!xacNhanMatKhau) {
            errors.xacNhanMatKhau = 'Required'
        } else if (xacNhanMatKhau !== matKhau) {
            errors.xacNhanMatKhau = "Password does not match!"
        }

        if (!email) {
            errors.email = 'Required'
        } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(email)) {
            errors.email = "Invalid email address"
        }

        if (!soDT) {
            errors.soDT = 'Required'
        } else if (!(/^[0-9()-]+$/).test(soDT)) {
            errors.soDT = "Please enter number!"
        }



        return errors
    }

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maNhom: GROUP,
            email: '',
            xacNhanMatKhau: ''
        },
        validate,
        onSubmit: async (values) => {
            try {
                dispatch(startLoading())
                await quanLiNguoiDungService.DangKy(values)
                dispatch(endLoading())
                successMessage('Register sucessfully!')
                navigate('/login')

            } catch (error) {
                dispatch(endLoading())
                const { data } = error.response || 'An error occurred, please try again!'
                errorMessage(data)
            }
        },
    });

    return (
        <div className='register'>
            <div className='register__wrap'>
                <Spin spinning={isLoading} tip='Sign up...'>
                    <form onSubmit={formik.handleSubmit}>
                        <h3>Sign up</h3>
                        <div className='group-item'>
                            <label>Account</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input placeholder='Enter your account' id='taiKhoan' name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                    <div className='text-error'>{formik.errors.taiKhoan}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <label>User name</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input placeholder='Enter your name' id='hoTen' name='hoTen' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.hoTen && formik.errors.hoTen ? (
                                    <div className='text-error'>{formik.errors.hoTen}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <label>Phone</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input placeholder='Enter your phone' id='soDT' name='soDT' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.soDT && formik.errors.soDT ? (
                                    <div className='text-error'>{formik.errors.soDT}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <label>Email</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input placeholder='Enter your email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='text-error'>{formik.errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <label>Password</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input placeholder='Enter your password' id='matKhau' name='matKhau' type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="on" />
                                {formik.touched.matKhau && formik.errors.matKhau ? (
                                    <div className='text-error'>{formik.errors.matKhau}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <label>Confirm password</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input placeholder='Confirm your password' id='xacNhanMatKhau' name='xacNhanMatKhau' type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="on" />
                                {formik.touched.xacNhanMatKhau && formik.errors.xacNhanMatKhau ? (
                                    <div className='text-error'>{formik.errors.xacNhanMatKhau}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <button className='btn btn__register' type='submit'>Sign up</button>
                        </div>
                        <p className='signUp-link'>You have an acount? <Link to='/login'><span>Log in</span></Link></p>
                    </form>
                </Spin>
            </div>
        </div >
    )
}
