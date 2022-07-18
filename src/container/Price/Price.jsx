import React,{ useState, useEffect } from 'react';
import { client } from '../../client';

import './Price.scss';

const Price = () => {

  const [price, setPrice] = useState([]);

  useEffect(() => {
    const query = '*[_type == "price"]';

    client.fetch(query).then((data) => {
      setPrice(data);
    });
  }, []);

  return (
    <div className='app__price-wrapper'>
      <h1 className='title' style={{color:'#fff', margin:'2rem'}}>Les tarifs</h1>
      <div className='app__price-flex'>
        {price.map((price, index) => (
          <>
              <div className='app__price-container'>
                <h2 className='title'>{price.titre}</h2>
                <p>{price.description}</p>
                <h2 className='title'>{price.prix}</h2>
              </div>
          </>
        ))}  
      </div>
      
    </div>
  )
}

export default Price