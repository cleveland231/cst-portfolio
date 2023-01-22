import React from 'react'
import './Navigation.css';
import { NavLink , Route } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className='Navigation'>
        <NavLink className="NavigationText" to="/"> Welcome </NavLink>
        <NavLink className="NavigationText" to="/projects"> Projects </NavLink>
        <NavLink className="NavigationText" to="/software-skills"> Software Skills </NavLink>
        <NavLink className="NavigationText" to="/hobbies"> Hobbies </NavLink>
        <NavLink className="NavigationText" to="/connect"> Connect </NavLink>
    </div>
  )
}




