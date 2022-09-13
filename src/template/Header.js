import React, { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../util/setting'

const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))

function Header() {
    const [isSticyMenu, setIsStickyMenu] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const handleCroll = () => {
            setIsStickyMenu(window.scrollY == 0 ? false : true)
        }
        window.addEventListener('scroll', handleCroll)
        return () => {
            window.removeEventListener('scroll', handleCroll)
        }
    }, [])
    return (
        <>
            <div className={`header ${isSticyMenu && 'sticky'}`}>
                <div className='header-wrap'>
                    <div className='header__logo'>
                        <a href='#' >My Elearning</a>
                    </div>
                    <ul className='header__menu'>
                        <li className='menu-item'>
                            <a href='#feature' className='menu-link'>
                                <span>Feature</span>
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a href='#courses' className='menu-link'>
                                <span>Courses</span>
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a href='#dashboard' className='menu-link'>
                                <span>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <div className='header_loginBtn'>
                        {userLogin ? <a onClick={() => navigate('/dashboardStudent')} >
                            <div className='header-user'>Hello {userLogin.hoTen} !</div>
                        </a> :
                            <a onClick={() => navigate('/login')}>
                                <button className='btn btn--danger'>Sign in</button>
                            </a>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default memo(Header)