import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'

export default function HomeTemplate({ Component }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='homeTemplate'>
            <Header />
            <Slider />
            {Component}
            <Footer />
        </div>
    )
}
