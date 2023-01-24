import React from 'react'
import { NavLink } from 'react-router-dom'
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <div className='WelcomeBox1'>
        <img className='ProfilePic' src={'https://user-images.githubusercontent.com/96998327/214164763-fbf43bbe-e8ce-4be4-ad3a-b934f8ffe7ad.jpeg'} alt="Profile pic" />  
      </div>

      <div className='WelcomeBox2'>
        <h2>
          Hello friend!
        </h2>
        <p>
          My name is Cleveland Ticoalu and I'm a software engineer based in Denver, Colorado. I just graduated from Turing School of 
          Software and Design with a focus in Front-End development. Prior to studying at Turing I worked in health care and 
          in oil and energy. These busy environments taught me how to quickly adapt and communicate on different teams. This new trajectory has been 
          immensely rewarding and I look forward to broadening and sharpening my skill set in the future. I'm looking for a full time position. I open to Thank you visiting my page!
        </p>

        <div>
          <h2> Resume </h2>
        </div>
      </div>
    </div>
  )
}

export default Welcome

/*

Have resume open in new tab

*/