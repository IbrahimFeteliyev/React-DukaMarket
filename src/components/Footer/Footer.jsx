import React from 'react'
import '../Footer/footer.scss'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AppleIcon from '@mui/icons-material/Apple';

function Footer() {
    return (
        <section className="footer-section">

            <div className="footer-top">
                <div className="footer-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-top-left">
                                <div className="follow-us">
                                    <h5>Follow Us</h5>
                                    <p>We make consolidating, marketing and tracking your social media website easy.</p>
                                </div>
                                <div className="icons d-flex">
                                    <div className="icon facebook">
                                        <FacebookIcon></FacebookIcon>
                                    </div>
                                    <div className="icon twitter">
                                        <TwitterIcon></TwitterIcon>
                                    </div>
                                    <div className="icon youtube">
                                        <YouTubeIcon></YouTubeIcon>
                                    </div>
                                    <div className="icon linkedin">
                                        <LinkedInIcon></LinkedInIcon>
                                    </div>
                                    <div className="icon rss">
                                        <RssFeedIcon></RssFeedIcon>
                                    </div>
                                    <div className="icon basketball">
                                        <SportsBasketballIcon></SportsBasketballIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-top-mid">
                                <div className="sign-up">
                                    <h5>Sign Up To Newsletter</h5>
                                    <p>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder='Enter your email here...' />
                                    <button>SUBCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-top-right">
                                <div className="download-app">
                                    <h5>Download App</h5>
                                    <p>DukaMarket App is now available on App Store & Google Play. Get it now.</p>
                                </div>
                                <div className="download-button">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="button-box">
                                                <a href="#">
                                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/04/app_ios.png" alt="" />
                                                </a>

                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="button-box">
                                                <a href="#">
                                                    <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/04/app_android.png" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="footer-mid">
                <div className="footer-container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="footer-mid-left">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h4>Customer Care</h4>
                                        <ul className='list-unstyled'>
                                            <li>New Customers</li>
                                            <li>How to use Account</li>
                                            <li>Placing an Order</li>
                                            <li>Payment Methods</li>
                                            <li>Delivery & Dispatch</li>
                                            <li>Problems with Order</li>


                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4>Customer Service</h4>
                                        <ul className='list-unstyled'>
                                            <li>Help Center</li>
                                            <li>Contact Us</li>
                                            <li>Report Abuse</li>
                                            <li>Submit a Dispute</li>
                                            <li>Policies & Rules</li>

                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4>My Account</h4>
                                        <ul className='list-unstyled'>
                                            <li>Product Support</li>
                                            <li>Checkout</li>
                                            <li>Shopping Cart</li>
                                            <li>Wishlist</li>
                                            <li>Terms & Conditions &</li>
                                            <li>Redeem Voucher</li>


                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4>Quick Links</h4>
                                        <ul className='list-unstyled'>
                                            <li>Store Location</li>
                                            <li>My account</li>
                                            <li>Order Tracking</li>
                                            <li>FAQs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className="footer-mid-right">
                                <h4>About The Store</h4>
                                <p>Our mission statement is to provide the absolute best customer experience available in the Electronic industry without exception.</p>
                                <div className="callus">
                                    <div className="callus-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Footer