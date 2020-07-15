<<<<<<< Updated upstream
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './assets/css/style-register.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';	 
import Register from './components/Register';
import Login from './components/Login';
import registerImg from './assets/images/logo-tower-register.png';

=======
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Register from "./components/Register";
import Login from "./components/Login";
import registerImg from "./assets/images/logo-tower-register.png";

import "./assets/css/sidebar.css";
import "./assets/css/style.css";
import "./assets/css/style-custom-icon.css";
import "./assets/css/responsive.css";
import "./assets/css/style-profile.css";
import "./assets/css/fontawesome-all.css";

// import "./assets/css/style-register.css";

import Example05IN_00511 from "./example05IN_00511.js";
import ExamplePage from "./components/ExamplePage.js";
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
<<<<<<< Updated upstream
=======
          <Route exact path="/ExamplePage">
            <ExamplePage />
          </Route>
>>>>>>> Stashed changes
          <Route path="/">
            <Login />
          </Route>
        </Switch>
<<<<<<< Updated upstream
        <footer class="wrap-logo-bottom">
          <img src={registerImg} class="block" />
        </footer>
=======
        {/* <footer className="wrap-logo-bottom">
          <img
            src={registerImg}
            alt="Tower Education Technologies"
            className="block"
          />
        </footer> */}
>>>>>>> Stashed changes
      </div>
    </Router>
  );
}

export default App;
