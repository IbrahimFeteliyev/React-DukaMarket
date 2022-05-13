import React, { useState } from 'react'
import '../Checkout-section/checkout-section.scss'

function Login() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }


    const [selectedd, setSelectedd] = useState(null)

    const togglee = (i) => {
        if (selectedd === i) {
            return setSelectedd(null)
        }

        setSelectedd(i)
    }


    return (
        <div id='login'>
            <div className="accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {data.map((item, i) => (
                                <div className="item">
                                    <div className="title" onClick={() => toggle(i)}>
                                        <h6><i class="fa-solid fa-folder"></i>{item.question}</h6>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content'}>
                                        {item.answer}
                                    </div>
                                </div>


                            ))}
                        </div>

                        <div className="col-lg-6">
                            {datas.map((item, i) => (
                                <div className="item">
                                    <div className="title" onClick={() => togglee(i)}>
                                        <h6><i class="fa-solid fa-folder"></i>{item.question}</h6>
                                    </div>
                                    <div className={selectedd === i ? 'content show' : 'content'}>
                                        {item.answer}
                                    </div>
                                </div>


                            ))}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}



const data = [
    {
        question: " Returning customer? Click here to login",
        answer: <div id="box">
            <div className="text">
                <p>Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                <div className="inputBox">
                    <p>Username or email *</p>
                    <input className='pass' type="text" />
                </div>
                <div className="inputBox">
                    <p>Password *</p>
                    <input className='pass' type="text" />
                </div>
                <div className="bottom">
                    <button>Login</button>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>

                </div>
                <p>Lost your password?</p>
            </div>
        </div>
    },



]


const datas = [
    {
        question: "Have a coupon? Click here to enter your code",
        answer: <div id="top">
            <input type="text" placeholder='Coupen code' /> <br/>
            <button>Apply Coupon</button>
        </div>
    },



]

export default Login