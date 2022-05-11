import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Detail from '../Pages/Detail'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'


function MyRouter() {
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    )
}

export default MyRouter