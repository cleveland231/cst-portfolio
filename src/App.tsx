import React from 'react';
import './App.css';
import { Connect } from './Connect';
import { Hobbies } from './Hobbies';
import { Navigation } from './Navigation';
import { Projects } from './Projects';
import { SoftwareSkills } from './SoftwareSkills';
import Welcome from './Welcome';

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
