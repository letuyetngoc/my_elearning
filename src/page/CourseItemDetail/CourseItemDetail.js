import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function CourseItemDetail() {
    const { courseDetail } = useSelector(state => state.QuanLiKhoaHocReducer)
    console.log('courseDetail', courseDetail)
    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])
    return (
        <div>CourseItemDetail</div>
    )
}
