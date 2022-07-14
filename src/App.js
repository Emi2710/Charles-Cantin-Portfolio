import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components';
import {Home, Gallery, Price} from './container'

const App = () => {

  useEffect(() => {
      document.body.style.backgroundColor = '#000';
  }, []);  

   
    
  return (
      <BrowserRouter>
        <div className='app'>
              
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/gallerie" element={<Gallery />} />
                <Route path="/tarifs" element={<Price />} />  
              </Routes>

          </div>
      </BrowserRouter>
            
  );
}

export default App;