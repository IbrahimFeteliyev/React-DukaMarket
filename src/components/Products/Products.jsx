import React, { useEffect, useRef, useState } from "react";
import '../Products/products.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { BASE_URL } from "../../api/config";

function Products() {


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
    <section className="Products-section">
      <div className="Products-container">
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
        <div className="boxes">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >



            {
              products.map(item => (
                <div className="col-lg-3">
                  <SwiperSlide key={item.id}>

                    <div className="box">
                      <div className="image-box">
                        <img className='image' src={item.image} alt="" />
                      </div>
                      <div className="text">
                        <h5>{item.title}</h5>
                        <h6>Price : {item.price}$</h6>
                      </div>
                    </div>





                  </SwiperSlide>
                </div>


              ))
            }


          </Swiper>
        </div>
      </div >
    </section >
  )
}

export default Products