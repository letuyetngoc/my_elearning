import React from 'react'
import { useEffect } from 'react'
import { BsHouseFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function DashboardStudent() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='dashboard'>
            <div className='dashboard__nav'>
                <div className='dashboard__nav-logo'>
                    <Link to='/'>MyElearning</Link>
                </div>
                <ul>
                    <li>
                        <a className='active'>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'>
                                <BsHouseFill />
                            </span>
                            <span className='text'>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='dashboard__header'>
                <div className='header-avatar'>
                    <BsHouseFill />
                </div>
                <div className='header-user'>
                    <div className='header-user__name'>Le Tuyet Ngoc</div>
                    <div className='header-user__email'>letuyetngocksh@gmail.com</div>
                </div>
            </div>
            <div className='dashboard__content'></div>
        </div>
    )
}
