import React from 'react'
import { useEffect } from 'react'
import { BsHouseFill } from 'react-icons/bs'
import { FaUserAlt, FaUserFriends } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import useAcountInfo from '../../hooks/useAcountInfo'
export default function DashboardAdmin({ Component }) {
    const { taiKhoan, email } = useAcountInfo()
    const [activeClass, setActiveClass] = useState(false)
    const active = activeClass ? 'active' : ''


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
                        <NavLink to='/dashboardStudent/inroll-courses' className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className='icon'>
                                <FaUserFriends />
                            </span>
                            <span className='text'>List users</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/dashboardStudent' >
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
