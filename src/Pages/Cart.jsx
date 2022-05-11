import React from 'react'
import Banner from '../components/Banner/Banner'

function Cart() {
  return (
    <>
      <Banner />
      <section className="cart">
        <div className="cart-container">
          <table className="table-cart">
            <thead>
              <tr>
                <th class="product-thumbnail">Images</th>
                <th class="cart-product-name">Product</th>
                <th class="product-price">Unit Price</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-subtotal">Total</th>
                <th class="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="product-thumbnail"><a href="#"><img src="https://themepure.net/template/dukamarket/dukamarket/assets/img/cart/shop-p-10.jpg" alt="" /></a></td>
                <td class="product-name"><a href="#">Jacket light</a></td>
                <td class="product-price"><span class="amount">$130.00</span></td>
                <td class="product-quantity">
                </td>
                <td class="product-subtotal"><span class="amount">$130.00</span></td>
                <td class="product-remove"><a href='#'><i class="fa fa-times"></i></a></td>
              </tr>
              <tr>
                <td class="product-thumbnail"><a href="#"><img src="https://themepure.net/template/dukamarket/dukamarket/assets/img/cart/shop-p-11.jpg" alt="" /></a></td>
                <td class="product-name"><a href="#">Jacket Pink</a></td>
                <td class="product-price"><span class="amount">$120.50</span></td>
                <td class="product-quantity">
                </td>
                <td class="product-subtotal"><span class="amount">$120.50</span></td>
                <td class="product-remove"><a href='#'><i class="fa fa-times"></i></a></td>
              </tr>
            </tbody>
          </table>

          <div className="buttons d-flex align-items-center justify-content-between">
            <div className="left-buttons">
              <input class="input-text" placeholder="Coupon code" type="text" />
              <button class="tp-btn-h1" type="submit">Apply
                coupon</button>
            </div>

            <div class="coupon2">
              <button class="tp-btn-h1" type="submit">Update cart</button>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-7"></div>
            <div className="col-lg-5">
              <h3 className='cart-h3'>Cart totals</h3>
              <ul class="mb-20 cart-ul">
                <li className='cart-li'>Subtotal <span className='cart-prices'>$250.00</span></li>
                <li className='cart-li'>Total <span className='cart-prices'>$250.00</span></li>
              </ul>
              <a class="tp-btn-h1" href="#">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Cart