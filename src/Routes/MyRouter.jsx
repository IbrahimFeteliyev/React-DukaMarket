import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Detail from '../Pages/Detail'



function MyRouter() {
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
    )
}

export default MyRouter