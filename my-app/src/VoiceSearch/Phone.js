import React, { useState } from 'react'
import './voice.css'
import Mic from '../Home/Mic.png';
import { RxCross1 } from "react-icons/rx";

function Phone({clearVoiceSearch}) {


  return (
    <div className='phone'>
      <RxCross1 onClick={clearVoiceSearch}/>
      <p>Speak ...</p>
      <img src={Mic} alt="" />
    </div>
  )
}

export default Phone
