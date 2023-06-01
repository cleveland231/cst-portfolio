import React from 'react'
import './Projects.css'

export const Projects = () => {
  return (
    <div className='Projects'>
      <div className='ProjectBox'>
        <h2 className='LeftTitle'>
          <img className='ProfilePic' src={'https://github.com/turingschool-examples/whats-cookin-starter-kit/assets/96998327/a8e19c56-2750-40d2-a053-5f86d35721f3'} alt="Greeley" />
        </h2>
        <div className='ProjectSpot'>
          <div className='ProjectTitle'>
            <h3> Open Planes </h3>
          </div>
          <div className='ProjectDescription'>
            <ul>Design websites with best UI/UX and Accessibility practices</ul>
          </div>
        </div>
      </div>

      <div className='ProjectBox'>
        <h2 className='LeftTitle'>
          <img className='ProfilePic' src={'https://github.com/turingschool-examples/whats-cookin-starter-kit/assets/96998327/a8e19c56-2750-40d2-a053-5f86d35721f3'} alt="Greeley" />
        </h2>

        <div className='ProjectSpot'>
          <div className='ProjectTitle'>
            <h3> Heat Check </h3>
          </div>
          <div className='ProjectDescription'>
            <p>
              Visit HeatCheck to explore the spiciest restaurants by location and add reviews, ratings, or dishes to our menu!
            </p>
          </div>
        </div>
      </div>

      <div className='ProjectBox'>
        <h2 className='LeftTitle'>
          <img className='ProfilePic' src={'https://github.com/turingschool-examples/whats-cookin-starter-kit/assets/96998327/a8e19c56-2750-40d2-a053-5f86d35721f3'} alt="Greeley" />
        </h2>

        <div className='ProjectSpot'>
          <div className='ProjectTitle'>
            <h3> Zenton </h3>
          </div>
          <div className='ProjectDescription'>
            Visit Zenton to write, view, and favorite quotes in a zen way.
          </div>
        </div>
      </div>

    </div>
  )
}
