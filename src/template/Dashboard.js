import React from 'react'
import { Title, TitleComponent, TitleContent, TitleMark } from '../components/Text'

export default function Dashboard() {
    return (
        <div id='dashboard'>
            <div className='container'>
                <div className='dashboard_list' data-aos="fade-up" data-aos-duration="1000">
                    <div className='dashboard__item'>
                        <TitleComponent className='item-title'>
                            <TitleMark className='item-title__mark'>Student</TitleMark>
                            <Title>Dashboard</Title>
                            <TitleContent>From the dashboard, students can update their bio, check up their active courses, completed courses, track their progress easily and many more.</TitleContent>
                        </TitleComponent>
                        <div className='item-img'>
                            <img src="https://htmldemo.net/edumall/assets/images/student-dashboard-preview.png" alt="..." />
                        </div>
                        <button className='btn btn__dashboard'>Login as Student</button>
                    </div>
                    <div className='dashboard__item'>
                        <TitleComponent className='item-title'>
                            <TitleMark className='item-title__mark'>Admin</TitleMark>
                            <Title className='item-title__text'>Dashboard</Title>
                            <TitleContent className='item-title__content'>Instructors have their own dashboard to update their profile, track their course listings, earnings and many more</TitleContent>
                            <div className='item-img'>
                                <img src="https://htmldemo.net/edumall/assets/images/instructor-dashboard-preview.png" alt="..." />
                            </div>
                            <button className='btn btn__dashboard'>Login as Admin</button>
                        </TitleComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}
