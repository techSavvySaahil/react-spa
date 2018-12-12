import React, { Component } from 'react';
import '../styles/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import About from "./about";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <ul className="links">
          <div className="project">Project X</div>
          <div><NavLink exact to="/">Home</NavLink></div>
          <div><NavLink to="/about">About</NavLink></div>
          <div><NavLink to="/login">Login</NavLink></div>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
