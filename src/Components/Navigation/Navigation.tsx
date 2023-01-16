import React from 'react'
import './Navigation.css';
import { NavLink , Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import { SoftwareSkills } from '../SoftwareSkills/SoftwareSkills';
import { Projects } from '../Projects/Projects';
import { Hobbies } from '../Hobbies/Hobbies';
import { Connect } from '../Connect/Connect';

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


/*
        <Switch>
          <Route exact path="/" render={()=> <Welcome/>}/>
          <Route exact path="/software-skills" render={()=> <SoftwareSkills/>}/>
          <Route exact path="/projects" render={()=> <Projects/>}/>
          <Route exact path="/hobbies" render={()=> <Hobbies/>}/>
          <Route exact path="/connect" render={()=> <Connect/>}/>
        </Switch>


        <NavLink to="/"> <Welcome/> Welcome </NavLink>
        <NavLink to="/software-skills"> <SoftwareSkills/> Software Skills </NavLink>
        <NavLink to="/projects"> <Projects/> Projects </NavLink>
        <NavLink to="/hobbies"> <Hobbies/> Hobbies </NavLink>
        <NavLink to="/connect"> <Connect/> Connect </NavLink>
*/