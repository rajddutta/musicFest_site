import React from 'react'
import './DestinationsStyle.css'
import picture from '../../asstes/pic1.jpg'
import picture2 from '../../asstes/pic2.jpg'
import picture3 from '../../asstes/pic3.jpg'
import picture4 from '../../asstes/pic4.jpg'

const Destinations = () => {
  return (
    <div name='brand' className='destinations'>
      <div className='container'>
        <h1>All Inclusive Package</h1>
        <p>On the sand shore of Goa</p>
        <div className='img-container'>
          <img className='span-3 image-grid-row-2' src={picture} alt='/' />
          <img  src={picture2} alt='/' />
          <img src={picture3} alt='/' />
          <img src={picture4} alt='/' />
          <img src={picture} alt='/' />
        </div>
      </div>
    </div>
  )
}

export default Destinations