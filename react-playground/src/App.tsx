import React from 'react';
import './App.css';
import Home from './sections/home';
import Dashboard from './sections/dashboard';
import About from './sections/about';
import Items from './sections/Items';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const App: React.FC = () => {
  return (
      <Router>
       
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/Items">Items</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Items">
              <Items />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
