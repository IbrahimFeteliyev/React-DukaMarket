import React, { useEffect, useState } from 'react'
import '../ProductDetail/productdetail.scss'
import { BASE_URL } from '../../api/config';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux'
// import { increment, decrement, incrementByAmount, decrementByAmount} from '../features/counterSlice'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function ProductDetail() {

 

  const { id } = useParams()
  const [product, setProducts] = useState([]);
  const [photo, setPhoto] = useState([])
  const [username, setUserName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComments] = useState('')
  const [hover, setHover] = useState(0);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getProducts = async () => {
    await fetch(BASE_URL + "Product/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };


  const postComment = async () => {
    fetch(BASE_URL + "Comment/addcomment", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        "ProductId": 1,
        "Ratings": 3,
        "Review": "Rustem Rustem Rustem Rustem",
        "UserEmail": "Rustem@mail.ru",
        "UserName": "Rustem",
      })
    })
  }

  useEffect(() => {
    getProducts();
  }, []);

  // const count = useSelector((state) => state.counter.value)

  var starCount = product.rating;

  var test = [<StarOutlineIcon />, <StarOutlineIcon />, <StarOutlineIcon />, <StarOutlineIcon />, <StarOutlineIcon />]

  for (let index = 0; index < 5; index++) {
    if (starCount % 1 !== 0) {
      starCount -= starCount % 1
    }
    if (index < starCount) {
      test[index] = <StarIcon />
    } else {
      if (product.rating % 1 === 0) {
        break;
      }
      if (index === starCount) {
        test[index] = <StarHalfIcon />
        break;
      }
    }

  }



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
                    {
                      test.map(e => (
                        <span>{e}</span>
                      ))
                    }
                  </div>
                  <span>{product.reviewCount}</span>
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



      <div className="comments">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className='rating'>
                <span style={{ fontSize: 100, fontWeight: 'bold', color: 'green' }}>{product.rating}</span>
                <span style={{ fontSize: 40, fontWeight: 'bold', color: 'green' }}> / 5</span>
              </div>
              <div className="stars d-flex">
                {
                  test.map(e => (
                    <span style={{ color: 'gold' }}>{e}</span>
                  ))
                }
              </div>
              <ul className="star-ul list-unstyled">
                <li><span>5 star</span><div className='process-bar'></div><span>100%</span></li>
                <li><span>4 star</span><div className='process-bar'></div><span>0%</span></li>
                <li><span>3 star</span><div className='process-bar'></div><span>0%</span></li>
                <li><span>2 star</span><div className='process-bar'></div><span>0%</span></li>
                <li><span>1 star</span><div className='process-bar'></div><span>0%</span></li>
              </ul>
            </div>

            <div className="col-lg-7">
              <h3>
                {product.reviewCount} review for <span>{product.name}</span></h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <h5>ADD A REVIEW</h5>
            <span>Your email address will not be published. Required fields are marked *</span>
            <input className='username form-control my-2' type="text" placeholder="Username" required />
            <input className='email form-control my-2' type="email" placeholder="Email" required />
            <div className="d-flex align-items-center">
              <span>Your rating *</span>
              <div className="stars d-flex my-2">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star"><i class="fal fa-star"></i></span>
                    </button>
                  );
                })}
                {/* <i onClick={() => setRating(1)} class="fal fa-star"></i>
              <i onClick={() => setRating(2)} class="fal fa-star"></i>
              <i onClick={() => setRating(3)} class="fal fa-star"></i>
              <i onClick={() => setRating(4)} class="fal fa-star"></i>
              <i onClick={() => setRating(5)} class="fal fa-star"></i> */}
              </div>
            </div>
            <span>Your review *</span>
            <textarea className='form-control my-2' name="" id="" cols="30" rows="10"></textarea>



            <span>
              <button onClick={e => postComment() && setComments(Math.random(0, 10))} className="btn btn-outline-success" >Send</button>
            </span>

          </div>
          <div className="row">
            {
              product.comments &&
              product.comments.map(comment => (
                <div key={comment.userEmail}>
                  <h4></h4>
                  <p>
                    <p><span>{comment.userName}</span></p>
                    <p><span>{comment.userEmail} {comment.ratings}</span></p>
                    <p><span>{comment.review}</span></p>
                  </p>
                  <hr />
                </div>
              ))
            }
          </div>
        </div>
      </div>


      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>


    </div>


  )
}

export default ProductDetail