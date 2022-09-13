import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container' data-aos="fade-up" data-aos-duration="1000">
                <h5>A Smart Solution for eLearning Platform</h5>
                <h2>Set up your Education<br /> website today with MyElearning</h2>
                <Link to='/register'>
                    <button className='btn btn--large btn__footer'>Register now</button>
                </Link>
            </div>
        </div>
    )
}
