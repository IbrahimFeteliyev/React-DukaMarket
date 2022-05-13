import React from 'react'
import '../Articlebox/articlebox.scss'

function Articlebox() {
    return (
        <div className="col-lg-6">
            <div className="article-box">
                <div className="img-box">
                    <img className='img-fluid' src="https://dukamarket.b-cdn.net/wp-content/uploads/2022/01/2-505x316.jpg" alt="" />
                </div>
                <div className="text">
                    <h6><a href="#">Delicious Mixed Grilled Food For The Weekend With The Family And Friends</a></h6>
                    <span class="author mb-10">posted by <a href="#">Admin</a></span>
                    <p>It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...</p>



                </div>
            </div>
        </div>
    )
}

export default Articlebox

