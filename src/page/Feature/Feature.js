import React, { useEffect } from 'react'
import { Title, TitleComponent, TitleContent, TitleMark } from '../../components/Text'
import { BsHouseFill } from 'react-icons/bs'

export default function Feature() {
    useEffect(() => {
        window.scrollTo(0, 800)
    }, [])
    return (
        <div id='feature'>
            <div className='container'>
                <div data-aos="fade-up" data-aos-duration="1000" >
                    <TitleComponent>
                        <Title>Why</Title>
                        <TitleMark>Choose</TitleMark>
                        <Title>MyElearning</Title>
                        <TitleContent>
                            MyElearning provides full of features for creating a perfect eLearning platform. Built with utility in mind, users are able to manage their education website with ease by EduMall's core features.
                        </TitleContent>
                    </TitleComponent>
                </div>
                <div className='feature__wrapper'>
                    <div className='feature__list' data-aos="fade-up" data-aos-duration="1000">
                        <div className='feature__list-item' >
                            <ul >
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>9 Unique Home Pages</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>78+ HTML Page</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Bootstrap 5 Framework</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Include SCSS</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Google Fonts</div>
                                </li>

                            </ul>
                        </div>
                        <div className='feature__list-item' >
                            <ul>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Pixel-perfect & Responsive Layouts</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>CSS3 Animations</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Modern & Unique Design</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Cross-browser Compatibility</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Documentation included</div>
                                </li>

                            </ul>
                        </div>
                        <div className='feature__list-item' >
                            <ul>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Dedicated Support</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Tested with W3C validator</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Well Commented Code</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Font Awesome Pro</div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <BsHouseFill />
                                    </div>
                                    <div className='text'>Edumall Custom Icon</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='feature__banner' data-aos="fade-up" data-aos-duration="1000">
                        <div className='banner-content'>
                            <h3>The All-in-One Educational LMS & e-Learning Platform Template</h3>
                            <button className='btn btn--warning '>Register now</button>
                        </div>
                        <div className='banner-bg'></div>
                    </div>
                </div>
            </div>
            <div className='feature__shape-wrap'>
            </div>
        </div>
    )
}
