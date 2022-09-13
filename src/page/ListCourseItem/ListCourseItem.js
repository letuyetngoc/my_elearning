import React from 'react'
import { useEffect } from 'react';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title, TitleComponent, TitleContent, TitleMarkNumber } from '../../components/Text'

export default function ListCourseItem() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='listCourseItem'>
            <div className='container' data-aos="fade-up" data-aos-duration="1000">
                <div className='listCourseItem__title'>
                    <div className='title-content'>
                        <TitleComponent className='title-content__wrap'>
                            <TitleMarkNumber className='title-content__number'>06+</TitleMarkNumber>
                            <br />
                            <Title className='title-content__title textTruncate'>Frontend Courses </Title>
                            <TitleContent className='title-content__decs '>Users can choose from our 06+ different course listing layouts for your eLearning platform</TitleContent>
                        </TitleComponent>
                    </div>
                    <div className='title-img'>
                        <img src="https://htmldemo.net/edumall/assets/images/course-laptop-screenshot.png" alt="photo" />
                    </div>
                </div>
            </div>
            <div className='listCourseItem__list'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='list-item'>
                            <div className='list-item__img'>
                                <img src="https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg" alt="" />
                            </div>
                            <div className='list-item__text'>
                                <h3 className='textTruncate'>Fronteand 70</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='list-item'>
                            <div className='list-item__img'>
                                <img src="https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg" alt="" />
                            </div>
                            <div className='list-item__text'>
                                <h3 className='textTruncate'>Fronteand 70</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='list-item'>
                            <div className='list-item__img'>
                                <img src="https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg" alt="" />
                            </div>
                            <div className='list-item__text'>
                                <h3 className='textTruncate'>Fronteand 70</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='list-item'>
                            <div className='list-item__img'>
                                <img src="https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg" alt="" />
                            </div>
                            <div className='list-item__text'>
                                <h3 className='textTruncate'>Fronteand 70</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='list-item'>
                            <div className='list-item__img'>
                                <img src="https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg" alt="" />
                            </div>
                            <div className='list-item__text'>
                                <h3 className='textTruncate'>Fronteand 70</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='list-item'>
                            <div className='list-item__img'>
                                <img src="https://htmldemo.net/edumall/assets/images/layout/course-layout-05.jpg" alt="" />
                            </div>
                            <div className='list-item__text'>
                                <h3 className='textTruncate'>Fronteand 70</h3>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}
