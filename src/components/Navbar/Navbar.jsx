import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    
  return (
    <div>
      <nav className='app__navbar'>
          
          <ul className='app__navbar-links'>
              <li className="app__flex p-text"><a href='accueil'>Accueil</a></li>
              <li className="app__flex p-text"><a href='gallerie'>Gallerie</a></li>
              <li className="app__flex p-text"><a href='tarifs'>Tarifs</a></li>
          </ul>
          <button>Contactez-moi</button>

          <div className='app__navbar-menu'>
              <HiMenuAlt4 onClick={() => setToggle(true)} className='hamburger' />

          {toggle && (
            <motion.div 
            whileInView={{x: [-300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className='app__navbar-toggle'>
                  <li><a href='accueil'>Accueil</a></li>
                  <li><a href='gallerie'>Gallerie</a></li>
                  <li><a href='tarifs'>Tarifs</a></li>
              </ul>
            </motion.div>
          )}
          </div>
  
      </nav>  

      

    </div>
    
    
  )
}

export default Navbar