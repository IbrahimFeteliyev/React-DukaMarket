import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from '../../api/config';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


function Photo() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        await fetch(BASE_URL + "products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className='general'>
            <Swiper>
                {products.map((item) => (
                    <SwiperSlide>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/brand-5.jpg" alt="" />
                                </div>
                                <div className="col-lg-2">
                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/brand-6.jpg" alt="" />
                                </div>
                                <div className="col-lg-2">
                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/brand-4.jpg" alt="" />
                                </div> <div className="col-lg-2">
                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/brand-3.jpg" alt="" />
                                </div> <div className="col-lg-2">
                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/brand-2.jpg" alt="" />
                                </div> <div className="col-lg-2">
                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/brand-1.jpg" alt="" />
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Photo