import React from 'react'
import { NavLink } from 'react-router-dom'
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <div className='WelcomeBox'>
      </div>

      <div className='WelcomeBox'>
        Hello friend! My name is Cleveland Ticoalu and I am a freelance software engineer. I just graduated from Turing School of 
        Software and Design with a focus in Front-End development. Prior to studying at Turing I worked in health care and 
        in oil and energy. These busy environments taught me how to quickly adapt and communicate on different teams. This new trajectory has been 
        immensely rewarding and I look forward to broadening and sharpening my skill set in the future.
      </div>
    </div>
  )
}

export default Welcome