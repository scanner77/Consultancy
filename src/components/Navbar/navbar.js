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
            <i className='fas fa-microphone-alt' />
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul id = "dropdown_id" className={click ? 'nav-menu active' : 'nav-menu'}>
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

            <li className='nav-item'>
              <Link
                to='/contactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Contact Us
              </Link>
            </li>

            <li className='nav-item'>
            <div className="dropdown">
            <br/>
            <br/>
            <div className="dropdown-content">
              <Link id = "one"
                to='/myaccount'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
              <Link id = "one" 
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Sign In
              </Link>
              
              <Link id = "one" 
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Sign Up
              </Link>
            </div>
          </div>
            </li>
        
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;