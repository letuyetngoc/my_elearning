import React, { useEffect, useState } from 'react'
import Feature from './Feature'
import Header from './Header'
import Slider from './Slider'

export default function HomeTemplate() {
    return (
        <div className='homeTemplate'>
            <Header />
            <Slider />
            <Feature />
        </div>
    )
}
