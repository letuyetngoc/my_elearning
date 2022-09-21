import React, { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAcountInfo from '../hooks/useAcountInfo'

function Header() {
    const [isSticyMenu, setIsStickyMenu] = useState(false)
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