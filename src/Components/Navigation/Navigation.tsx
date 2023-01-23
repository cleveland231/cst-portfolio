import React from 'react'
import './Navigation.css';
import { NavLink , Route } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className='Navigation'>
        <NavLink className="NavigationText" to="/"> <h1> Welcome </h1> </NavLink>
        <NavLink className="NavigationText" to="/projects"> <h1> Projects </h1>  </NavLink>
        <NavLink className="NavigationText" to="/software-skills"> <h1> Software Skills </h1> </NavLink>
        <NavLink className="NavigationText" to="/hobbies"> <h1> Hobbies </h1> </NavLink>
        <NavLink className="NavigationText" to="/connect"> <h1> Connect </h1> </NavLink>
    </div>
  )
}




