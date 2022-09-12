import React, { memo, useEffect, useState } from 'react'

function Header() {
    const [isSticyMenu, setIsStickyMenu] = useState(false)

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
                        <h2>My Elearning</h2>
                    </div>
                    <ul className='header__menu'>
                        <li className='menu-item'>
                            <a href='#feature' className='menu-link'>
                                <span>Feature</span>
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a className='menu-link'>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a href='#courses' className='menu-link'>
                                <span>Courses</span>
                            </a>
                        </li>
                    </ul>
                    <div className='header_loginBtn'>
                        <button className='btn btn--danger'>Sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default memo(Header)