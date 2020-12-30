// import React, { Fragment } from 'react'

import './App.scss';

import Navbar from './Navbar';
import Summary from './Summary';
import Info from './Info';
import Languages from './Languages';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Divider from './Divider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Summary />
      <Divider />
      <div className="Information">
        <Languages />
      </div>
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Experience />
    </div>
  );
}

export default App;
