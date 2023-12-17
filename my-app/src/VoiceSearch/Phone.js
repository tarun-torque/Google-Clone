import React from 'react'
import './voice.css'
import Mic from '../Home/Mic.png'

function Phone() {
  return (
    <div className='phone'>
      <p>Speak ...</p>
      <img src={Mic} alt="" />
    </div>
  )
}

export default Phone
