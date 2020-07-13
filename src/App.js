import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/style-register.css";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Register from "./components/Register";
import Login from "./components/Login";
import registerImg from "./assets/images/logo-tower-register.png";

import "./assets/css/style.css";
import "./assets/css/style-custom-icon.css";
import "./assets/css/fontawesome-all.css";

import Example05IN_00511 from "./example05IN_00511.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/trigger">
            <Example05IN_00511 />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        <footer className="wrap-logo-bottom">
          <img
            src={registerImg}
            alt="Tower Education Technologies"
            className="block"
          />
        </footer>
      </div>
    </Router>
  );
}

export default App;
