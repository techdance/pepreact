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
import "./assets/css/style-resources.css";
import "./assets/css/style-profile.css";
import "./assets/css/fontawesome-all.css";

// import "./assets/css/style-register.css";

import ExamplePage from "./components/ExamplePage.js";
import ExampleGordon00300Page from "./components/ExampleGordon00300Page.js";
import ExampleGordon01404Page from "./components/ExampleGordon01404Page.js";
import ExampleInez00701Page from "./components/ExampleInez00701Page.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/ExampleInez-00501">
            <ExamplePage />
          </Route>
          <Route exact path="/ExampleInez-00701">
            <ExampleInez00701Page />
          </Route>
          <Route exact path="/ExampleGordon-00300">
            <ExampleGordon00300Page />
          </Route>
          <Route exact path="/ExampleGordon-01404">
            <ExampleGordon01404Page />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        {/* <footer className="wrap-logo-bottom">
          <img
            src={registerImg}
            alt="Tower Education Technologies"
            className="block"
          />
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
