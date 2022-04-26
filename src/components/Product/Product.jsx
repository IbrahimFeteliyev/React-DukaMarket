import React, { useEffect, useState } from 'react'

function Product() {


    const [data, setData] = useState([]);

    const product = () => {
        fetch('https://fakestoreapi.com/products')
            .then(e => e.json())
            .then(res => setData(res))
    }



    useEffect(() => {
        product()
    }, [])

    return (
        <section id="product">
            <div className="container">
            <div className="row">

{
    data.map(item => (  
        <div key={item.id} className="col-lg-3">
            <div className="card">
                <div className="card-header">
                    <h5 className="header-title">
                        {item.title}
                    </h5>
                </div>
                <div className="card-body">
                    <img src={item.image} alt="" className="img-top img-fluid" />
                    <p>

                    </p>
                </div>
            </div>
        </div>
    ))
}

</div>
            </div>
            
        </section>
    )
}

export default Product