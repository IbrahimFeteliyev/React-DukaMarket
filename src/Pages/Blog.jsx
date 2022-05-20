import React from 'react'
import Banner from '../components/Banner/Banner'
import Articlebox from '../components/Articlebox/Articlebox'
import Articleleft from '../components/articleleft/Articleleft'


function Blog() {
  return (
    <>
      <Banner />
      <div className="blog-container">
      <div className="row">
       <div className="col-lg-8">
         <div className="row">
         <Articlebox />
         <Articlebox />
         <Articlebox />
         <Articlebox />
         <Articlebox />
         <Articlebox />
         </div>
       </div>
       <div className="col-lg-4">
         <Articleleft/>
       </div>
      </div>
      </div>
      
    </>
  )
}

export default Blog