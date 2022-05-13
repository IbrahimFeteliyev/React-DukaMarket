import React, { useEffect, useState } from 'react'
import '../ProductDetail/productdetail.scss'
import { BASE_URL } from '../../api/config';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux'
// import { increment, decrement, incrementByAmount, decrementByAmount} from '../features/counterSlice'


function ProductDetail() {

  const { id } = useParams()
  const [product, setProducts] = useState([]);
  const [photo, setPhoto] = useState([])

  const getProducts = async () => {
    await fetch(BASE_URL + "Product/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const count = useSelector((state) => state.counter.value)

  console.log(photo);



  return (
    <div>


      <section key={product.id} className="productdetail">
        <div className="productdetail-container">

          <div className="row">
            <div className="col-lg-6">
              <div className="product-images d-flex justify-content-between">
                <div className="col-lg-2">
                  <ul className='small-images list-unstyled'>
                    {
                      product.productPictures &&
                      product.productPictures.map(e => (
                        <div className="small-image">
                          <img onClick={a => setPhoto(e)} width={100} src={e} alt="" />
                        </div>
                      ))
                    }
                  </ul>
                </div>

                <div className="col-lg-10">
                  <div width="100%" className="big-image">
                    {
                      product.productPictures &&
                      <img width="100%" src={photo.length === 0 ? product.productPictures[0] : photo} alt="" />

                    }
                  </div>
                </div>



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

      <section className="detailmain">
                      <div className="container">
                        <div className="top">
                          <h5>Description</h5>
                        </div>
                      </div>






        
        {/* <div className="detailmain-container">
          <div className="top"></div>
          <div className="content">
            <p class="des-text mb-35">Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen &amp; Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the back and seat offers a variety of comfortable seating positions,ideal for both long visits to the dining table and relaxed lounging.</p>
            <h6 class="des-sm-title">The standard passage, used since the 1500s.</h6>
            <p class="des-text mb-35">A light chair, easy to move around the dining table and about the room. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="features-des-image text-center">
              <img src="https://themepure.net/template/dukamarket/dukamarket/assets/img/features-product/product-content-1.jpg" alt="" />
            </div>
            <div class="product-des-section mb-90">
              <h5 class="des-section mb-30">Get 30% Daily Cash
                <br />  Back with Membership Card.</h5>
              <p>A new collection of lounge furniture, occasional tables and a stool by Edward Barber &amp; Jay Osgerby offers a relaxed, contemporary attitude toward interior design. The lounge furniture includes four individualized sized sofas, and three complementary ottomans. Available in a range of upholstery fabrics and leathers, the lounge furniture is distinguished by stitched seams that reinforce its architectural profile, softened by the curvature of cushions on each face range of upholstery fabrics and leathers.</p>
            </div>
            <div class="row mb-80">
              <div class="col-lg-6">
                <div class="des-single mb-30 text-center">
                  <div class="features-des-image text-center">
                    <img src="https://themepure.net/template/dukamarket/dukamarket/assets/img/features-product/product-content-2.jpg" alt="" />
                  </div>
                  <h5 class="des-section">Get 30% Daily Cash
                    <br />  Back with Membership Card.</h5>
                  <p>Sit amet conse ctetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore  magna aliqua.</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="des-single text-center mb-30">
                  <div class="features-des-image">
                    <img src="https://themepure.net/template/dukamarket/dukamarket/assets/img/features-product/product-content-3.jpg" alt="" />
                  </div>
                  <h5 class="des-section text-center">Get 70% Daily Cash
                    <br />  Back with Membership Card.</h5>
                  <p>Sit amet conse ctetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore  magna aliqua.</p>
                </div>
              </div>
            </div>
            <div class="features-des-image features-des-image-2 text-center mb-50 w-img">
              <img width={1300} src="https://themepure.net/template/dukamarket/dukamarket/assets/img/features-product/product-content-4.jpg" alt="" />
            </div>
            <p class="des-text mb-35">Designed by Puik in 1949 as one of the first models created especially for Carl Hansen &amp; Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the back and seat offers a variety of comfortable seating positions,ideal for both long visits to the dining table and relaxed lounging. A light chair easy to move around the dining table and about the room. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            <h6 class="des-sm-title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC.</h6>
            <p class="des-text mb-25">Sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>


          </div>
        </div> */}
      </section>

    </div>

  )
}

export default ProductDetail