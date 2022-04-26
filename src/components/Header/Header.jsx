import React, { useEffect, useState } from 'react'
import '../Header/header.scss'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BASE_URL } from '../../api/config'

export const Header = () => {

    const [active, setActive] = useState();
    const [activeDep, setActiveDep] = useState();
    const dropdown = () => {
        active === 'active' ? setActive(' ') : setActive('active');
    }

    const drop = () => {
        activeDep === 'active' ? setActiveDep('') : setActiveDep('active')
    }



    const [category, setCategory] = useState([]);
    const getCategories = async () => {
        await fetch(BASE_URL + 'products/categories')
            .then(a => a.json())
            .then(data => setCategory(data))
    }

    useEffect(() => {
        getCategories();
    }, [])







    return (

        <section id='header'>
            <div className="header-container">


                <div className="topNav">
                    <div className="left">
                        <div className='language'>
                            <span>Dil secin: </span>
                            <div className='LangArea'>
                                <span onClick={e => dropdown()}>Azerbaycan <i class="lang-icon far fa-chevron-down"></i></span>
                                <ul className={`language-list ${active}`}>
                                    <li>Azerbaycan</li>
                                    <li>Rus</li>
                                    <li>Ingilis</li>
                                </ul>
                            </div>
                        </div>
                        <div className='number'>
                            <span> Need Help?</span>
                            <span> +(000) 000 00 00</span>
                        </div>
                    </div>
                    <div className="right">
                        <ul className='list-unstyled d-flex'>
                            <li>About Us</li>
                            <li>Order Tracking</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>

                    </div>

                </div>
                <div className="midNav">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3">
                            <div className="logo">
                                <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/logo1.svg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <div className="search-box">
                                <div className="input">
                                    <input type="text" placeholder="I'm shopping for..." />
                                    <button class="button" type="submit"><i class="far fa-search"></i></button>
                                    <div className="categories">
                                        <span>All Categories </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-12 col-md-5">
                            <div className="header-action d-flex justify-content-between">
                                <div className="block-userlink">
                                    <i class="flaticon-user"></i>
                                    <span class="text">Login
                                        <span class="sub">My Account </span>
                                    </span>

                                </div>
                                <div className="block-wishlist">
                                    <i class="flaticon-user"></i>
                                    <span class="text">Favorite
                                        <span class="sub">My Wishlist </span>
                                    </span>
                                </div>
                                <div className="block-cart">
                                    <i class="flaticon-user"></i>
                                    <span class="text">Your Cart:
                                        <span class="sub">$00.00 </span>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="bottomNav">
                    <div className="d-flex align-items-center">
                        <div className="col-lg-3">
                            <div className="left">
                                <div className="shop-box">
                                    <div onClick={e => drop()} className='shop-department'>
                                        <button className='shopArea'>
                                            <HorizontalSplitIcon />
                                            <span>SHOP BY DEPARTMENT</span>
                                        </button>
                                        <ul className={`shop-list ${activeDep}`}>

                                            {
                                                category.map(e => (
                                                    <li key={Math.floor(Math.random() * 1000000000)} className='shop-list-li'>
                                                        <a className='shop-list-a' href="#">{e}</a>
                                                        <ChevronRightIcon />
                                                        <div className="shop-list-dropdown">
                                                            <div className="row">

                                                                <div className="col-lg-4">
                                                                    <ul class="shop-list-box list-unstyled ">
                                                                        <h4>Shop Pages</h4>
                                                                        <li><a href="#">Standart Shop Page</a></li>
                                                                        <li><a href="#">Shop Right Slidebar</a></li>
                                                                        <li><a href="#">Shop Left Slidebar</a></li>
                                                                        <li><a href="#">Shop 3 Column</a></li>
                                                                        <li><a href="#">Shop 4 Column</a></li>


                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul class="shop-list-box list-unstyled ">
                                                                        <h4>Product Pages</h4>
                                                                        <li><a href="#">Product Details</a></li>
                                                                        <li><a href="#">Product V2</a></li>
                                                                        <li><a href="#">Product V3</a></li>
                                                                        <li><a href="#">Varriable Product</a></li>
                                                                        <li><a href="#">External Product</a></li>


                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul class="shop-list-box list-unstyled ">
                                                                        <h4>Other Pages</h4>
                                                                        <li><a href="#">Whislist</a></li>
                                                                        <li><a href="#">Shopping Cart</a></li>
                                                                        <li><a href="#">Checkout</a></li>
                                                                        <li><a href="#">Login</a></li>
                                                                        <li><a href="#">Register</a></li>


                                                                    </ul>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mid">
                                <div class="big-menu">

                                    <ul class="d-flex list-unstyled">
                                        <li class="home-i">
                                            <a class="home-a-i" href="#">Home<i class="far fa-chevron-down"></i></a>
                                            <div className="home-dropdown row">
                                                <div className="row">

                                                    <div className="col-lg-4">
                                                        <ul class="list-unstyled ">
                                                            <h4>Home Pages</h4>
                                                            <li><a href="#">Home One</a></li>
                                                            <li><a href="#">Home Two</a></li>
                                                            <li><a href="#">Home Three</a></li>
                                                            <li><a href="#">Shop 3 Column</a></li>
                                                            <li><a href="#">Shop 4 Column</a></li>


                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <ul class="list-unstyled ">
                                                            <h4>Home Pages</h4>
                                                            <li><a href="#">Home One</a></li>
                                                            <li><a href="#">Home Two</a></li>
                                                            <li><a href="#">Home Three</a></li>
                                                            <li><a href="#">Shop 3 Column</a></li>
                                                            <li><a href="#">Shop 4 Column</a></li>


                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <ul class="list-unstyled ">
                                                            <h4>Home Pages</h4>
                                                            <li><a href="#">Home One</a></li>
                                                            <li><a href="#">Home Two</a></li>
                                                            <li><a href="#">Home Three</a></li>
                                                            <li><a href="#">Shop 3 Column</a></li>
                                                            <li><a href="#">Shop 4 Column</a></li>


                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <ul class="list-unstyled ">
                                                            <h4>Home Pages</h4>
                                                            <li><a href="#">Home One</a></li>
                                                            <li><a href="#">Home Two</a></li>
                                                            <li><a href="#">Home Three</a></li>
                                                            <li><a href="#">Shop 3 Column</a></li>
                                                            <li><a href="#">Shop 4 Column</a></li>


                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <ul class="list-unstyled ">
                                                            <h4>Home Pages</h4>
                                                            <li><a href="#">Home One</a></li>
                                                            <li><a href="#">Home Two</a></li>
                                                            <li><a href="#">Home Three</a></li>
                                                            <li><a href="#">Shop 3 Column</a></li>
                                                            <li><a href="#">Shop 4 Column</a></li>


                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="aboutus-i">
                                            <a class="home-a-i" href="#">About Us</a>

                                        </li>
                                        <li class="shop-i">
                                            <a class="home-a-i" href="#">Shop<i class="far fa-chevron-down"></i></a>

                                        </li>
                                        <li class="blog-i">
                                            <a class="home-a-i" href="#">Blog<i class="far fa-chevron-down"></i></a>
                                            <ul class="list-unstyled dropped-item">
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Blog Details</a></li>

                                            </ul>
                                        </li>
                                        <li class="pages-i">
                                            <a class="home-a-i" href="#">Pages<i class="far fa-chevron-down"></i></a>
                                            <ul class="list-unstyled dropped-item">
                                                <li><a href="#">My Account</a></li>
                                                <li><a href="#">Product Details</a></li>
                                                <li><a href="#">FAQs Pages</a></li>
                                                <li><a href="#">Cart</a></li>
                                                <li><a href="#">Whishlist</a></li>
                                                <li><a href="#">Checkout</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">404 Error</a></li>


                                            </ul>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="right">
                                <span className='right-span' >Spend $120 more and get free shipping!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Header

