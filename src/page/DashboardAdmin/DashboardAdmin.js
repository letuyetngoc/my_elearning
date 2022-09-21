import React from 'react'
import { useEffect } from 'react'
import { FaUserAlt, FaUserFriends, FaList } from 'react-icons/fa'
import { ImUserPlus } from 'react-icons/im'
import { RiLogoutCircleFill, RiPlayListAddLine } from 'react-icons/ri'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useAcountInfo from '../../hooks/useAcountInfo'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/setting'

export default function DashboardAdmin({ Component }) {

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
                        <a className='title'>
                            <span className='textTitle'>User management</span>
                        </a>
                    </li>
                    <li>
                        <NavLink to='/dashboardAdmin/listUsers' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <FaUserFriends />
                            </span>
                            <span className='text'>All users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboardAdmin/addUser' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <ImUserPlus />
                            </span>
                            <span className='text'>Add user</span>
                        </NavLink>
                    </li>
                    <li>
                        <a className='title'>
                            <span className='textTitle'>Courses management</span>
                        </a>
                    </li>
                    <li>
                        <NavLink to='/dashboardAdmin/allCourses' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <FaList />
                            </span>
                            <span className='text'>All courses</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboardAdmin/addCourse' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <RiPlayListAddLine />
                            </span>
                            <span className='text'>Add a new course</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/dashboardAdmin' onClick={() => {
                            localStorage.removeItem(USER_LOGIN)
                            localStorage.removeItem(ACCESS_TOKEN)
                            navigate('/')
                            window.location.reload()
                        }}>
                            <span className='icon'>
                                <RiLogoutCircleFill />
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
