import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';

function Category() {
    const [category, setCategory] = useState([]);

    const getCategories = async () => {
        fetch(BASE_URL + 'products/categories')
            .then(respons => respons.json())
            .then(data => setCategory(data))

    }

    useEffect(() => {
        getCategories()
    }, [])


    console.log(category);

    return (
        <div>
            <ul className='list-group'>
                {
                    category.map(e => (
                        <li key={ Math.floor(Math.random() * 1000000)} className='list-group-item'>{e}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category