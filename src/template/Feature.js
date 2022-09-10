import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Feature() {
    return (
        <div className='feature'>
            <div className='container'>
                <h2>
                    <>Why </>
                    <span> Choose </span>
                    <> MyElearning</>
                </h2>
                <p>MyElearning provides full of features for creating a perfect eLearning platform. Built with utility in mind, users are able to manage their education website with ease by EduMall's core features.</p>
                <div className='feature__wrapper'>
                    <div className='feature__list'>
                        <div className='feature__list-item'>
                            <ul>
                                <li>
                                    <div className='icon'>
                                        {/* <FontAwesomeIcon icon="fa-duotone fa-house" /> */}
                                    </div>
                                    <div className='text'>9 Unique Home Pages</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='feature__banner'></div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
