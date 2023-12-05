import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components';
import {Home, Gallery, Price, Contact} from './container'

const App = () => {

  useEffect(() => {
      document.body.style.backgroundColor = '#ccd5ae';
  }, []);  

   
  return (
      <BrowserRouter>
        <div className='app'>
              
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/galerie" element={<Gallery />} />
                <Route path="/tarifs" element={<Price />} /> 
                <Route path="/contact" element={<Contact />} />
              </Routes>


          </div>
      </BrowserRouter>
            
  );
}

export default App;