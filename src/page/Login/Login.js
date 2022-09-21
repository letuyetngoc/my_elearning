import { BsHouseFill } from 'react-icons/bs'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { quanLiNguoiDungService } from '../../service/QuanLiNguoiDungService';
import { errorMessage, successMessage } from '../../components/message';
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/setting';
import { useDispatch, useSelector } from 'react-redux';
import { endLoading, startLoading } from '../../redux/features/LoadingSlice';
import { Spin } from 'antd';

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading } = useSelector(state => state.LoadingReducer)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const validate = values => {
        const { taiKhoan, matKhau } = values
        const errors = {}
        if (!taiKhoan) {
            errors.taiKhoan = 'Required'
        }
        if (!matKhau) {
            errors.matKhau = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
                dispatch(startLoading())
                const result = await quanLiNguoiDungService.DangNhap(values)
                dispatch(endLoading())
                const { data } = result

                localStorage.setItem(USER_LOGIN, JSON.stringify(data))
                localStorage.setItem(ACCESS_TOKEN, data.accessToken)

                navigate('/')
                successMessage('Login sucessfully!')

            } catch (error) {
                dispatch(endLoading())
                console.log('error', error.response)
                const { data } = error.response
                errorMessage(data || 'An error occurred, please try again!')
            }
        },
    });

    return (
        <div className='login'>
            <div className='login__wrap'>
                <Spin spinning={isLoading} tip='Log in...'>
                    <form onSubmit={formik.handleSubmit}>
                        <h3>Login</h3>
                        <div className='group-item'>
                            <label>Account</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input id='taiKhoan' name='taiKhoan' placeholder='Enter your account' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                    <div className='text-error'>{formik.errors.taiKhoan}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <label>Password</label>
                            <div className='group-item__input'>
                                <BsHouseFill className='icon' />
                                <input id='matKhau' name='matKhau' type='password' placeholder='Enter your password' onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="on" />
                                {formik.touched.matKhau && formik.errors.matKhau ? (
                                    <div className='text-error'>{formik.errors.matKhau}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='group-item'>
                            <button className='btn btn__login' type='submit'>Login</button>
                        </div>
                        <p className='signUp-link'>You don't have an acount? <Link to='/register'><span>Sign up</span></Link></p>
                    </form>
                </Spin>
            </div>
        </div >
    )
}
