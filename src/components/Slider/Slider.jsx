import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css';
import '../Slider/slider.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BASE_URL } from '../../api/config'


function Slider() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        await fetch(BASE_URL + 'products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className='MySlider'>
            {/* <Swiper>
                {
                    products.map(item => (
                        <SwiperSlide key ={item.id}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {
                    products.map(item => (
                        <SwiperSlide key={item.id}>

                            <img className='image' src={item.image} alt="" />



                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}

export default Slider