import React from 'react'
import './SelectsStyle.css'

import IMG1 from '../../asstes/pexel.jpg'
import IMG2 from '../../asstes/pexels.jpg'
import IMG3 from '../../asstes/image1.jpg'
import IMG4 from '../../asstes/pic1.jpg'
import IMG5 from '../../asstes/pic2.jpg'
import IMG6 from '../../asstes/pic3.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'


const Selects = () => {
  return (
    <div className='selects'>
      <div className='container'>
        <SelectsImg bgImg={IMG1} text='camping' />
        <SelectsImg bgImg={IMG2} text='cuisine' />
        <SelectsImg bgImg={IMG3} text='barbeque' />
        <SelectsImg bgImg={IMG4} text='cultures' />
        <SelectsImg bgImg={IMG5} text='colors' />
        <SelectsImg bgImg={IMG6} text='fireworks' />
      </div>
    </div>
  )
}

export default Selects