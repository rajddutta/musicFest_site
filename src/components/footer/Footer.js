import React from 'react'
import './FooterStyle.css'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitch, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <h3>WIRELESS</h3>
          <div className='social'>
              <FaFacebook className='icon' />
              <FaInstagram className='icon' />
              <FaTwitch className='icon' />
              <FaTwitter className='icon' />
              <FaPinterest className='icon' />
          </div>
        </div>
        <div className='bottom'>
            <div className='left'>
              <ul>
                <li>Partners</li>
                <li>About</li>
                <li>Brands</li>
                <li>Advertising</li>
                <li>Merch</li>
              </ul>
            </div>
            <div className='right'>
              <ul>
                <li>Store</li>
                <li>Term</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
        </div>

        <p className='external'>Created by <a className='ext' href='https://rajddutta.github.io/rajddutta/' target="_blank">Rajdeep Dutta</a></p>

      </div>
    </div>
  )
}

export default Footer