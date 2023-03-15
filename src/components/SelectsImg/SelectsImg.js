import React from 'react'
import './SelectsImgStyle.css'

const SelectsImg = (props) => {
  return (
    <div name='social' className='selects-location'>
      <img src={props.bgImg} alt='/' />
      <div className='overlay'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default SelectsImg