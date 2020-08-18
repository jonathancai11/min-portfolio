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
      <Router>

      <div className="Body">
      <Sidebar/>
        <div className="Content">
          <Switch>
              <Route exact path="/about" component={About}/>
              <Route exact path="/work" component={Work}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/contact" component={Contact}/>
              {/* <Route exact path="/write/:post" component={Write}/> */}
              <Route exact path="/read" component={Read}/>
              <Route path="/"/>
          </Switch>
        </div>
      </div>

      </Router>
    </div>
  );
}

export default App;
