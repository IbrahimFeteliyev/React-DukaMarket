import React from 'react'
import '../Banner/banner.scss'


function Banner() {
    return (
        <section className="banner">
            <div className="text">
                <h4 className='banner-h'>Your Cart
                </h4>
                <ul className="list-unstyled banner-ul d-flex justify-content-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Banner