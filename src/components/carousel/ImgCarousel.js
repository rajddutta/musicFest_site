import React from 'react'
import './ImgCarouselStyle.css'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import IMG1 from '../../asstes/pexels.jpg'
import IMG2 from '../../asstes/pexel.jpg'
import IMG3 from '../../asstes/pic1.jpg'

const ImgCarousel = () => {
  return (
    <div className='container'>
      <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
       <div>
          <img src={IMG1} alt='/' />
         
       </div>
       <div>
          <img src={IMG2} alt='/' />
          
       </div>
       <div>
          <img src={IMG3} alt='/' />
          
       </div>
      
      </Carousel>
    </div>
  )
}

export default ImgCarousel