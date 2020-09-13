import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Projects/Projects';
import Read from './components/Read/Read';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Body">
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="work">
            <Work />
          </section>
          <section id="read">
            <Read />
          </section>
          <section id="projects">
            <Projects />
          </section>

          <p style={{textAlign: "center"}}>
            <i>Website last updated 8/17/20</i>
          </p>
      </div>
    </div>
  );
}

export default App;
