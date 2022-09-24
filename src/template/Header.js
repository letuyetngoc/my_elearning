import React, { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAcountInfo from '../hooks/useAcountInfo'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {
    const [isSticyMenu, setIsStickyMenu] = useState(false)
    const [activeClass, setActiveClass] = useState(false)
    const navigate = useNavigate()
    const userLogin = useAcountInfo()

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
                <div className='container'>
                    <div className='header-wrap'>
                        <div className='header__logo'>
                            <Link to='/home'>My Elearning</Link>
                        </div>
                        <ul className='header__menu'>
                            <li className='menu-item'>
                                <Link to='/feature' className='menu-link'>
                                    <span>Feature</span>
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/courses' className='menu-link'>
                                    <span>Courses</span>
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/dashboard' className='menu-link'>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                        </ul>
                        <div className='header_loginBtn'>
                            {userLogin ? <a onClick={() => navigate('/dashboardStudent/profile')} >
                                <div className='header-user'>{userLogin.hoTen.slice(0, 2).toUpperCase()}</div>
                            </a> :
                                <a onClick={() => navigate('/login')}>
                                    <button className='btn btn--danger'>Sign in</button>
                                </a>}
                        </div>
                        <div className='toggleBtn' onClick={() => setActiveClass(!activeClass)}>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overplay ${activeClass && 'active'}`} onClick={() => setActiveClass(false)}></div>
            <div className={`header-responsive ${activeClass && 'active'}`}>
                <div className='header-wrap'>
                    <div className='header__logo'>
                        <Link to='/home'>My Elearning</Link>
                        <AiOutlineClose className='icon' onClick={() => setActiveClass(false)} />
                    </div>
                    <ul className='header__menu'>
                        <li className='menu-item'>
                            <Link to='/feature' className='menu-link'>
                                <span>Feature</span>
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to='/courses' className='menu-link'>
                                <span>Courses</span>
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to='/dashboard' className='menu-link'>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default memo(Header)