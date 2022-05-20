import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Slider/slider.scss";
import { GET } from "../../api/service";


// " data.message"
function Slider() {
  const [products, setProducts] = useState([]);


  // const getProducts = async () => {
  //   axios.get(BASE_URL + "Product/productlist").then((res) => {
  //     setProducts(res.data.message)
  //   })
  // };


  const getData = async () => {
    const res = await GET("Product/productlist")
    setProducts(res.message);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="mySlider">
      <Swiper>
        {products.filter(x => x.isSlider === true).map((item) => (
          <SwiperSlide>
            <img
              src={item.coverPhoto}
              alt=""
            />
            <div className="container">
              <div className="deal">
                <h3>{item.name}</h3><br />
                <h6>{item.description}</h6><br />
                <button>DISCOVER NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;