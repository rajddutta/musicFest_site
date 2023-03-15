import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitch, FaTwitter} from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyle.css'

const Navbar = () => {
   const [nav,setNav] = useState(false)
   const handleNav = () => setNav(!nav)

  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
       <div className={nav ? 'logo dark' : 'logo'}>
        <h2>WIRELESS</h2>
       </div>
       <ul className='nav-menu'>
         <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
         <Link to='social' smooth={true} duration={500}><li>Social</li></Link> 
         <Link to='buy' smooth={true} duration={500}><li>Buy Ticket</li></Link> 
         <Link to='brand' smooth={true} duration={500}><li>Brand</li></Link> 
        <Link to='about' smooth={true} duration={500}><li>About</li></Link> 
       </ul>
       <div className='nav-icons'>
         <BiSearch className='icon' />
         <BsPerson className='icon' />
       </div>
       <div className='hamburger' onClick={handleNav}>
        {nav ? (<AiOutlineClose style={{color:'#000'}} className='icon'/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
       </div>

       <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
         <ul className='mobile-nav'>
           <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
           <Link to='social' smooth={true} duration={500}><li>Social</li></Link> 
           <Link to='buy' smooth={true} duration={500}><li>Buy Ticket</li></Link> 
           <Link to='brand' smooth={true} duration={500}><li>Brand</li></Link> 
           <Link to='about' smooth={true} duration={500}><li>About</li></Link> 
         </ul>
         <div className='mobile-menu-button'>
          <div className='menu-icons'>
              <button>Search</button>
              <button>Account</button>
          </div>
          <div className='social-icons'>
              <FaFacebook className='icon' />
              <FaInstagram className='icon' />
              <FaTwitch className='icon' />
              <FaTwitter className='icon' />
              <FaPinterest className='icon' />
          </div>
         </div>
       </div>
    </div>
  )
}

export default Navbar