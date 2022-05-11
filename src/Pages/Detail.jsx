import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/config';
import DetailMain from '../components/DetailMain/DetailMain';
import ProductDetail from '../components/ProductDetail/ProductDetail';

function Detail() {

    // const { id } = useParams();
    // const [detail, setDetail] = useState([])

    // const getDetail = async () => {
    //     fetch(BASE_URL + "detail/" + id)
    //         .then(res => res.json())
    //         .then(respons => setDetail(respons))
    // }

    // useEffect(() => {
    //     getDetail()
    // }, [])



    return (
        <div>
            <ProductDetail />
            <DetailMain />
            

        </div>

    )
}

export default Detail