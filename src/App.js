import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Compoent/Home";
import About from './Compoent/About';
import Services from './Compoent/Services';
import Contact from './Compoent/Contact';
import Engine from './Compoent/Engine';
import Solution from './Compoent/Solution';
import Navbar from './Compoent/Navbar';

 
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <>
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/solution" component={Solution} />
        <Route exact path="/engine" component={Engine} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to='/'/>
      </Switch>
    </>
  );
};

export default App;
