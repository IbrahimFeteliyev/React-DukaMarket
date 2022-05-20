import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';

function Articleleft() {

  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    await fetch(BASE_URL + "Category/getall")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div>
      <ul>
        <h3>Categories</h3>
      {
        categories.map(category => (
          <li key={Math.floor(Math.random() * 1000000000)} className='shop-list-li'>
            <a className='shop-list-a' href="#">{category.name}</a>

          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Articleleft