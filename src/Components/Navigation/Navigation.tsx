import React from 'react'
import './Navigation.css';
import { NavLink , Route } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className='Navigation'>
        <NavLink to="/"> Welcome </NavLink>
        <NavLink to="/software-skills"> Software Skills </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
        <NavLink to="/hobbies"> Hobbies </NavLink>
        <NavLink to="/connect"> Connect </NavLink>
    </div>
  )
}


