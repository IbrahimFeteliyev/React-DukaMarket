import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from '../../api/config';
import 'swiper/scss';
import '../Days/Days.scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router-dom';


function Days() {



    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        await fetch(BASE_URL + "Product/productlist")
            .then((res) => res.json())
            .then((data) => setProducts(data.message));
    };

    useEffect(() => {
        getProducts();
    }, []);

    
    return (
        <div className='myslider'>
            <div className="products-container">
                <div className="heading">



                    <div className="boxes-h d-flex justify-content-between align-items-center">
                        <div className="box-left">
                            <h4>Top Deals Of The Day</h4>
                        </div>
                        <div className="box-right d-flex align-items-center">
                            <span>Hurry Up! Offer ends in:</span>
                            <div className="count d-flex">
                                <div className="count-box ">
                                    <span>0</span>
                                    <span>Days</span>
                                </div>
                                <div className="count-box ">
                                    <span>0</span>
                                    <span>Hours</span>
                                </div>
                                <div className="count-box ">
                                    <span>0</span>
                                    <span>Mins</span>
                                </div>
                                <div className="count-box ">
                                    <span>0</span>
                                    <span>Secs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row align-items-center">
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={5}
                        navigation

                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            products.map(product => (
                                <SwiperSlide key={product.id}>


                                        <div className="box">
                                            <div className="image">
                                                <img width="100%" src={product.productPictures[0]} alt="" />
                                                <div className="icons">
                                                    <i class="fa-solid fa-eye icon"></i><br />
                                                    <i class="fa-solid fa-heart icon"></i><br />
                                                    <i class="fa-solid fa-layer-group icon"></i>
                                                </div>
                                            </div>
                                            <div className="text">
                                                <Link to={'detail/' + product.id}>
                                                    <span className="box1 title">{product.name}</span>
                                                </Link>

                                                <div className="d-flex align-items-center">
                                                    <span className="star">
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                    </span>
                                                    <span>(01 review)</span>
                                                </div>
                                                <span className='box1 number'><del className='del'>{product.price}₼</del>660₼</span>
                                                <div className="box2">
                                                    <div className="red">
                                                    </div>
                                                </div>
                                                <span>Sold:315/1225</span>
                                                <div className="button">
                                                    <button>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>




                                </SwiperSlide>
                            ))
                        }







                    </Swiper>
                </div>
            </div >
        </div>
    )
}

export default Days