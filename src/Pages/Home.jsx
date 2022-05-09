import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider/Slider'
import About from '../components/About/About'
import Aboutservice from '../components/Aboutservice/Aboutservice'
import { BASE_URL } from '../api/config'
import Days from '../components/Days/Days'
import Feature from '../components/Feature/Feature'
import Free from '../components/Free/Free'
import Photo from '../components/Photo/Photo'
import Bestseller from '../components/Bestseller/Bestseller'



function Home() {

  const [categories, setCategories] = useState([])
  const [selectedCat, setSelectedCat] = useState([]) 

  const getCat = async () => {
    await fetch(BASE_URL + "/products/categories")
      .then(r => r.json())
      .then(data => setCategories(data))
  }

  useEffect(() => {
    getCat()
  }, [])

  return (
    
    <div>
      
      <Slider/>
      <About/>
      <Aboutservice/>
      <Days/>
      <Bestseller/>
      <Days/>
      <Feature/>
      <Free/>
      <Days/>
      <Photo/>
      
      

          

    </div>



  )
}


export default Home