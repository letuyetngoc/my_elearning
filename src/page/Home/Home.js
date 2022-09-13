import React from 'react'
import Courses from '../Courses/Courses'
import Dashboard from '../Dashboard/Dashboard'
import Feature from '../Feature/Feature'
import Slider from '../../template/Slider'

export default function Home() {
    return (
        <>
            <Slider />
            <Feature />
            <Courses />
            <Dashboard />
        </>
    )
}
