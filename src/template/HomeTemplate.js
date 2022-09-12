import React, { useEffect, useState } from 'react'
import ListCourseItem from '../page/ListCourseItem/ListCourseItem'
import Courses from './Courses'
import Feature from './Feature'
import Header from './Header'
import Slider from './Slider'

export default function HomeTemplate() {
    return (
        <div className='homeTemplate'>
            <Header />
            <Slider />
            <Feature />
            <Courses />
            <ListCourseItem />
        </div>
    )
}
