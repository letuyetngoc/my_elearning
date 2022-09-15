import React, { useEffect } from 'react'
import Courses from '../Courses/Courses'
import Dashboard from '../Dashboard/Dashboard'
import Feature from '../Feature/Feature'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Feature />
            <Courses />
            <Dashboard />
        </>
    )
}
