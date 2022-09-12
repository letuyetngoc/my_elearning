import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function DashboardStudent() {
    return (
        <div className='dashboard'>
            <div className='dashboard__nav'>
                <div className='dashboard__nav-logo'>MyElearning</div>
                <ul>
                    <li>
                        <a className='active'>
                            <span className='icon'>
                                <FontAwesomeIcon icon="house" size="lg" />
                            </span>
                            <span className='text'>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'>
                                <FontAwesomeIcon icon="user" size="lg" />
                            </span>
                            <span className='text'>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'>
                                <FontAwesomeIcon icon="house" size="lg" />
                            </span>
                            <span className='text'>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='dashboard__header'>
                <div className='header-avatar'>
                    <FontAwesomeIcon icon="user" />
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
