import React, { useEffect, useState } from 'react'

import Footer from './Footer'
import Header from './Header'

export default function HomeTemplate({ Component }) {
    return (
        <div className='homeTemplate'>
            <Header />
            {Component}
            <Footer />
        </div>
    )
}
