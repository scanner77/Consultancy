import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Job Finder
            <div className = "fullstackdeveloper">Consultancy Finder</div>
            <i class='fas fa-microphone-alt' />
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              
              <Link to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>

            </li>
            {/* <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li> */}

{/* =========================== */}
            <li className='nav-item'>
              <Link
                to='/account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>
{/* ==========Sign Up */}
            <li className='nav-item'>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              SignUp
              </Link>
            </li>
        
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;