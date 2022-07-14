import React, { useEffect, useState } from 'react';
import './Home.scss';

import { urlFor, client } from '../../client';


const Home = () => {

  const [home, setHome] = useState([]);

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => {
      setHome(data);
    });
  }, []);


  return (
    
      <div>
        {home.map((home, index) => (
          <>
          <div className='home__wrapper' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlFor(home.imgUrl)})`}}>
            <h1 className='title'>{home.title}</h1>
            <p>{home.description}</p>
          </div>
          </>
        ))}
      </div>
    
  )
}

export default Home;