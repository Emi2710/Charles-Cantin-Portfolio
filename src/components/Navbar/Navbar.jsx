import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    
  return (
    <div>
      <nav className='app__navbar'>
          
          <ul className='app__navbar-links'>

            <Link to='/'><li className='app__flex p-text'>Accueil</li></Link>
            <Link to='gallerie'><li className='app__flex p-text'>Gallerie</li></Link>
            <Link to='tarifs'><li className='app__flex p-text'>Tarifs</li></Link>
              
          </ul>
          <button><a href='contact'>Contactez-moi</a></button>
          

          <div className='app__navbar-menu'>
              <HiMenuAlt4 onClick={() => setToggle(true)} className='hamburger' />

          {toggle && (
            <motion.div 
            whileInView={{x: [-300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)} />
              
              <ul className='app__navbar-toggle'>

                <Link to='/'><li onClick={() => setToggle(false)}>Accueil</li></Link>
                <Link to='gallerie'><li onClick={() => setToggle(false)}>Gallerie</li></Link>
                <Link to='tarifs'><li onClick={() => setToggle(false)}>Tarifs</li></Link>
              </ul>
            </motion.div>
          )}
          </div>
  
      </nav>  

      

    </div>
    
    
  )
}

export default Navbar