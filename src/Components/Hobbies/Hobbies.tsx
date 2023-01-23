import React from 'react'
import './Hobbies.css'
// import SandDunePic from '../../Assets/HobbiePhotos/SandDunePic.jpeg';

export const Hobbies = () => {
  return (
    <div>
      <div className="Photos">
        <div className="PhotoBox">
          <img className='HobbiePhotos' src={"https://user-images.githubusercontent.com/96998327/214158768-a03523e8-df53-4e12-bf49-fd80ae07c029.jpg"} alt="unlce"/>
          <div className='AboutPhotos'>
            <h4>Tua Pance is his name.</h4>
          </div>
        </div>
      </div>
      <div>Playlists</div>
      <div>Training</div>
      <div>Blog</div>
    </div>
  )
}
