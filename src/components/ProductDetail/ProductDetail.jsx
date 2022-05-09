import React, { useEffect, useState } from 'react'
import '../ProductDetail/productdetail.scss'
import { BASE_URL } from '../../api/config';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux'
// import { increment, decrement, incrementByAmount, decrementByAmount} from '../features/counterSlice'


function ProductDetail() {

  const { id } = useParams()
  const [product, setProducts] = useState([]);
  const getProducts = async () => {
    await fetch(BASE_URL + "Product/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const count = useSelector((state) => state.counter.value)

  console.log(product);



  return (
    <div>


      <section key={product.id} className="productdetail">
        <div className="productdetail-container">

          <div className="row">
            <div className="col-lg-6">
              <div className="product-images d-flex justify-content-between">
                <ul className='small-images list-unstyled'>
                </ul>
                {
                  product.productPictures &&
                  product.productPictures.map(e => (
                    <div className="big-image">
                      <img width={100} src={e} alt="" />
                    </div>
                  ))
                }

              </div>

            </div>
            <div className="col-lg-6">
              <div className="about-product">
                <h6>{product.name}</h6>
                <div className="review d-flex align-items-center">
                  <div className="stars d-flex">
                    <i class="fal fa-star"></i>
                    <i class="fal fa-star"></i>
                    <i class="fal fa-star"></i>
                    <i class="fal fa-star"></i>
                    <i class="fal fa-star"></i>
                  </div>
                  <span>(01 review)</span>
                  <span><a href="#">Add your review</a></span>
                </div>
                <span className='price'>{product.price}.00₼</span>
                <div className="details">
                  <ul className='list-unstyled'>
                    <li><a href='#'><i class="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                    <li><a href='#'><i class="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                    <li><a href='#'><i class="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                    <li><a href='#'><i class="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                  </ul>
                </div>
                <div className="add-to-cart">
                  <div className="top d-flex">
                    <h5>Availability: <span> 940 in stock</span></h5>
                  </div>
                  {/* <div>
                        Count : {count}
                      </div>
                      <div>
                        <button onClick={() => increment()}>Artir</button>
                        <button onClick={() => decrement()}>Azalt</button>
                        <button onClick={() => incrementByAmount(5)}>+5</button>
                        <button onClick={() => decrementByAmount(5)}>-5</button>

                      </div> */}
                  <hr />
                  <div class="product_info">
                    <span className='line'>
                      <span className='title'>SKU:</span>
                      <span className='info'>{product.sku}</span>
                    </span>
                    <span className='line'>
                      <span className='title'>Categories:</span>
                      <span className='info'>{product.categoryName}</span>
                    </span>
                    <span className='line'>
                      <span className='title'>Tags:</span>
                      <span className='info'>{product.summary}</span>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default ProductDetail