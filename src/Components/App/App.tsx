import React from 'react';
import './App.css';
import { Connect } from '../Connect/Connect';
import { Hobbies } from '../Hobbies/Hobbies';
import { Navigation } from '../Navigation/Navigation';
import { Projects } from '../Projects/Projects';
import { SoftwareSkills } from '../SoftwareSkills/SoftwareSkills';
import Welcome from '../Welcome/Welcome';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Left"></div>
      <div className="Center">
        <Navigation/>
        <Welcome/>
        <SoftwareSkills/>
        <Projects/>
        <Hobbies/>
        <Connect/>
      </div>
      <div className="Right"></div>
    </div>
  );
}

export default App;
