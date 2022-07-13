import React from 'react';

import { Navbar } from './components';
import { Home, Gallery, Price, Footer } from './container';

const App = () => {

  const showPage = () => {
        if (window.location.pathname === "/" || window.location.pathname === "/accueil"  ) {
            return <Home />
        } else if (window.location.pathname === "/gallerie") {
            return <Gallery />
        } else if (window.location.pathname === "/tarifs") {
            return <Price />
        }    
    }
  return (
      
        <div className='app'>
            
            <Navbar />
            {showPage()}  
            <Footer />

        </div>    
  );
}

export default App;