import React from 'react'
import './Connect.css'

export const Connect = () => {
  return (
    <div className='Welcome'>
      <div className='WelcomeBox1'>
        <div className='Subtitle'>
          <ul> <a className='ConnectLinks' href=" " rel="noreferrer"> RESUME </a> </ul>
          <ul> <a className='ConnectLinks' href="https://www.linkedin.com/in/cleveland-ticoalu/" rel="noreferrer"> LINKEDIN </a> </ul>
          <ul> <a className='ConnectLinks' href="https://github.com/cleveland231" rel="noreferrer"> GITHUB </a> </ul>
          <ul> <a className='ConnectLinks' href="https://www.strava.com/athletes/107712270" rel="noreferrer"> STRAVA </a> </ul>
        </div>
        <img className='ProfilePic' src={'https://github.com/turingschool-examples/whats-cookin-starter-kit/assets/96998327/a8e19c56-2750-40d2-a053-5f86d35721f3'} alt="Greeley" />
      </div>
    </div>
  )
}

