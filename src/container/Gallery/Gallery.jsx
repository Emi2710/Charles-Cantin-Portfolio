import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';

import './Gallery.scss';

const Gallery = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [gallery, setGallery] = useState([]);
  const [filterGallery, setFilterGallery] = useState([]);

  const handleFilter = (item) => {
      setActiveFilter(item);

      if(item ==='Tout') {
        setFilterGallery(gallery);
      } else {
        setFilterGallery(gallery.filter((gallery) =>gallery.tags.includes(item)))
      }
  }

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query).then((data) => {
      setGallery(data);
      setFilterGallery(data);
    });
  }, []);

  return (
    <div className='app__gallery-wrapper'>
      <h1 className='title' style={{color: '#fff', letterSpacing:'1.5px', margin:'3rem 1rem'}}>Une image, une histoire...</h1>
      <div className='app__gallery-filter'>
          {['Mariage', 'Grossesse', 'Bébé', 'Famille', 'Bâptème', 'Couple', 'Tout'].map((item, index) => (
            <div  
              key={index}
              onClick={() => handleFilter(item)}
              className={`app__gallery-filter-item ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))}
      </div>

      <div className='app__gallery-container'>
        {filterGallery.map((gallery, index) => (
          
            <div className='app__gallery-img' key={index}>
              <img src={urlFor(gallery.imgUrl)} alt={gallery.name} />
            </div>
          
        ))}
      </div>
    </div>
  )
}

export default Gallery;