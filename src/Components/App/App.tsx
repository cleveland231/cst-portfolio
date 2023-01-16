import React from 'react';
import './App.css';
import { Connect } from '../Connect/Connect';
import { Hobbies } from '../Hobbies/Hobbies';
import { Navigation } from '../Navigation/Navigation';
import { Projects } from '../Projects/Projects';
import { SoftwareSkills } from '../SoftwareSkills/SoftwareSkills';
import Welcome from '../Welcome/Welcome';
import { Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Left"></div>
      <div className="Center">
          <Navigation/>
        <Switch>
          <Route exact path="/" render={()=> <Welcome/>}/>
          <Route exact path="/software-skills" render={()=> <SoftwareSkills/>}/>
          <Route exact path="/projects" render={()=> <Projects/>}/>
          <Route exact path="/hobbies" render={()=> <Hobbies/>}/>
          <Route exact path="/connect" render={()=> <Connect/>}/>
        </Switch>
      </div>
      <div className="Right"></div>
    </div>
  );
}

export default App;
