import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/all'
import { MdFingerprint} from 'react-icons/all'
import { Button } from './pages/Button'
import { IconContext} from 'react-icons'
import './Navbar.css'


const Navbar = () =>{
  const [click,setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  const [button,setButton] = useState()
  
  const closeMobileMenu = () =>setClick(false)
  
  const  showButton = () =>{
    if(window.innerWidth <=900){
      setButton(false)
    }else {
      setButton(true)
    }
  };
  
  useEffect( ()=>{
    showButton()
  } )
  
  return(
    <>
      <IconContext.Provider value={{color:'#fff'}}>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <MdFingerprint className='navbar-icon' />
            UNITECH
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-btn'>
              {button ? (
                <Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link>
              ) : (
                <Link to='/sign-up' className='btn-link'>
                  <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--mobile'
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  </>
  )
}

export default Navbar