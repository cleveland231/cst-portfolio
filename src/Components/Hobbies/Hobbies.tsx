import React from 'react'
import './Hobbies.css'
// import SandDunePic from '../../Assets/HobbiePhotos/SandDunePic.jpeg';

export const Hobbies = () => {
  return (
    <div className='Hobbies'>

      <div className="HobbiesBox">
        <h2 className='LeftTitle'> Photography </h2>
        <div className="PhotoBox">
          <div className='AboutPhotos'>
            <h4> "TUA PANCE" </h4>
            <h4> 2017 </h4>
            <h4> Mandado, Indonesia </h4>
          </div>
          <img className='HobbiePhotos' src={"https://user-images.githubusercontent.com/96998327/214158768-a03523e8-df53-4e12-bf49-fd80ae07c029.jpg"} alt="unlce"/>
        </div>
      </div>

      <div className="HobbiesBox">
        <h2 className='LeftTitle'> Playlists </h2>
        <div className='Link'>
        <h4> Music Playlists for Different Moods and Workouts </h4>
          <a className="Links" href="https://open.spotify.com/user/ayocleveland?si=7ca91bc2d07d46c6" rel="noreferrer"> <h3 className="Links"> Spotify </h3> </a> 
        </div>
      </div>

      <div className="HobbiesBox">
        <h2 className='LeftTitle'> Fitness </h2>
        <div className='Link'>
          <h4> Let's Connect and Train Together </h4>
          <a className="Links" href="https://www.strava.com/athletes/107712270" rel="noreferrer"> <h3 className='Links'> Strava </h3> </a> 
        </div>
      </div>

      <div className="HobbiesBox">
        <h2 className='LeftTitle'> Blog </h2>
        <div className='Link'>
          <h4> Coming Soon... </h4>
        </div>
      </div>
    </div>
  )
}


/*

https://javascript.plainenglish.io/strava-api-react-app-326e63527e2c

*/