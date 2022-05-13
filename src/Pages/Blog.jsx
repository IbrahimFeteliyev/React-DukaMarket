import React from 'react'
import Banner from '../components/Banner/Banner'
import Articlebox from '../components/Articlebox/Articlebox'


function Blog() {
  return (
    <>
      <Banner />
      <div className="blog-container">
      <div className="row">
       <div className="col-lg-8">
         <div className="row">
         <Articlebox />
         </div>
       </div>
       <div className="col-lg-4"></div>
      </div>
      </div>
      
    </>
  )
}

export default Blog