import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default function Slider() {

    return (
        <>
            <div className='slider'>
                <div className='container' data-aos="fade-up" data-aos-duration="1000">
                    <h1>
                        The All-in-One Educational LMS & e-Learning Platform Template
                    </h1>
                    <h1>
                        <span>Education center</span>
                        {/* <span>School</span>
                        <span>Online Courses</span> */}
                    </h1>
                    <button className='btn btn--large'>Demos</button>
                </div>
            </div>
        </>
    )
}
