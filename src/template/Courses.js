import React from 'react'
import { Title, TitleComponent, TitleContent, TitleMark, TitleMarkNumber } from '../components/Text'

export default function Courses() {
    return (
        <div id='courses'>
            <div className='container'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <TitleComponent className='courses__title' >
                        <TitleMarkNumber>06+</TitleMarkNumber>
                        <Title>Courses</Title>
                    </TitleComponent>
                    <TitleContent>MyElearning provide users with <strong>06+ unique and specialized courses</strong> focusing on educational centers and online courses</TitleContent>
                </div>
                <div className='courses__list' data-aos="fade-up" data-aos-duration="1000">
                    <div className='list-item'>
                        <div className='list-item__img'>
                            <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                        </div>
                        <div className='list-item__info'>
                            <h3>Lập trình Backend vsdgdfgdgdgdgdgdgdfgdfgdfgdgdgg dfdsffsd</h3>
                        </div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item__shape'>

                        </div>
                        <div className='list-item__img'>
                            <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                        </div>
                        <div className='list-item__info'>
                            <h3>Lập trình Backend</h3>
                        </div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item__shape'>

                        </div>
                        <div className='list-item__img'>
                            <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                        </div>
                        <div className='list-item__info'>
                            <h3>Lập trình Backend</h3>
                        </div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item__shape'>

                        </div>
                        <div className='list-item__img'>
                            <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                        </div>
                        <div className='list-item__info'>
                            <h3>Lập trình Backend</h3>
                        </div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item__shape'>

                        </div>
                        <div className='list-item__img'>
                            <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                        </div>
                        <div className='list-item__info'>
                            <h3>Lập trình Backend Lập trình Backend</h3>
                        </div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item__shape'>

                        </div>
                        <div className='list-item__img'>
                            <img src='https://htmldemo.net/edumall/assets/images/home-main-preview.jpg' />
                        </div>
                        <div className='list-item__info'>
                            <h3>Lập trình Backend</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
