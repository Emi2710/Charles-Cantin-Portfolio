import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { Home, Gallery, Price } from '../../container';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

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
    <nav className='app__navbar'>
        
        <ul className='app__navbar-links'>
            <li><a href='accueil'>Accueil</a></li>
            <li><a href='gallerie'>Gallerie</a></li>
            <li><a href='tarifs'>Tarifs</a></li>
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
                <li><a href='accueil'>Accueil</a></li>
                <li><a href='gallerie'>Gallerie</a></li>
                <li><a href='tarifs'>Tarifs</a></li>
            </ul>
          </motion.div>
        )}
        </div>

        {showPage()}
        
    </nav>
  )
}

export default Navbar