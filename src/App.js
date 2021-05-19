import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Photos from './Photos';
import Contact from './Contact';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/photos">Photos</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>


          </Switch>
          </div>
            );
  }
}

export default App;