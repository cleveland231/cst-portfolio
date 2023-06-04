import React from 'react'
import { NavLink } from 'react-router-dom'
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <div className='WelcomeBox1'>
        <div className='Subtitle'>
          <h2 className='WelcomeText'> Hello friends! I’m Cleveland, a </h2>
          <h2 className='WelcomeText'> software engineer based in Denver. </h2>
        </div>
        <img className='ProfilePic' src={'https://github.com/turingschool-examples/whats-cookin-starter-kit/assets/96998327/a8e19c56-2750-40d2-a053-5f86d35721f3'} alt="Greeley" />  
      </div>
    </div>
  )
}

export default Welcome

/*

Have resume open in new tab

*/