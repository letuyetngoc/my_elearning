import React from 'react'
import { useEffect } from 'react'
import { BsHouseFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useAcountInfo from '../../hooks/useAcountInfo'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/setting'

export default function DashboardStudent({ Component }) {

    const { taiKhoan, email } = useAcountInfo()
    const [activeClass, setActiveClass] = useState(false)
    const active = activeClass ? 'active' : ''

    const navigate = useNavigate()

    const handleActiveClass = () => {
        setActiveClass(!activeClass)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='dashboard'>
            <div className={`overlay ${active}`} onClick={handleActiveClass}></div>
            <div className={`dashboard__nav ${active}`}>
                <div className='dashboard__nav-logo'>
                    <div className='logo-btnClose' onClick={handleActiveClass}><AiOutlineClose /></div>
                    <Link to='/'>MyElearning</Link>
                </div>
                <ul>
                    <li>
                        <NavLink to='/dashboardStudent/profile' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboardStudent/updateInfo' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>Update Infomation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboardStudent/inroll-courses' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>Enrolled courses</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/dashboardStudent' onClick={() => {
                            localStorage.removeItem(USER_LOGIN)
                            localStorage.removeItem(ACCESS_TOKEN)
                            navigate('/')
                            window.location.reload()
                        }}>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='dashboard__header'>
                <div className='header-btnToggle' onClick={handleActiveClass}><AiOutlineMenu /></div>
                <div className='header-avatar' >
                    <FaUserAlt />
                </div>
                <div className='header-user'>
                    <div className='header-user__name'>{taiKhoan}</div>
                    <div className='header-user__email'>{email}</div>
                </div>
            </div>
            <div className='dashboard__content'>
                {Component}
            </div>
        </div>
    )
}
