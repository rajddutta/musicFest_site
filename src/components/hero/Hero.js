import React from 'react'
import './HeroStyle.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Video from '../../asstes/coachella16.mp4'

const hero = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className='overlay'></div>
      <div className='content'>
        <h1>First Time In India</h1>
        <h2>World's Best Music Festival</h2>
        <form className='form'>
          <div>
            <input type="text" placeholder='Search Event'/>
          </div>
          <div>
            <button><AiOutlineSearch className='icon' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default hero