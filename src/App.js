import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Register from "./components/Register";
import Login from "./components/Login";

import "./assets/css/react-select.css";
import "./assets/css/sidebar.css";
import "./assets/css/style.css";
import "./assets/css/style-custom-icon.css";
import "./assets/css/responsive.css";
import "./assets/css/style-resources.css";
import "./assets/css/style-profile.css";
import "./assets/css/fontawesome-all.css";

import ExampleGordon00300Page from "./components/ExampleGordon00300Page.js";
import ExampleBrittany00300Page from "./components/ExampleBrittany00300Page.js";
import ExampleBrittany0120XPage from "./components/ExampleBrittany0120XPage.js";
import ExampleGordon01404Page from "./components/ExampleGordon01404Page.js";
import Page00701 from "./components/Page00701.js";
import ExamplePamela03601Page from "./components/ExamplePamela03601Page.js";

import Page00500 from "./components/page00500.js";
import Page00501 from "./components/Page00501.js";
import Page00108 from "./components/Page00108.js";
import Page00600 from "./components/Page00600.js";

import {
  gordonPageOwner,
  inezPageOwner,
  bradleyPageOwner,
  pamelaPageOwner,
} from "./data/pageOwner.js";
import { gordonProfessor, bradleyProfessor, pamelaIT } from "./data/professor";
import { institution } from "./data/institution.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/ExampleInez-00108">
            <Page00108 pageOwner={inezPageOwner} />
          </Route>
          <Route exact path="/ExampleInez-00501">
            <Page00501 pageOwner={inezPageOwner} profile={bradleyProfessor} />
          </Route>
          <Route exact path="/ExampleInez-00701">
            <Page00701 pageOwner={inezPageOwner} institution={institution} />
          </Route>
          <Route exact path="/ExamplePamela-00701">
            <Page00701 pageOwner={pamelaPageOwner} institution={institution} />
          </Route>
          <Route exact path="/ExamplePamela-03601">
            <ExamplePamela03601Page />
          </Route>
          <Route exact path="/ExampleGordon-00300">
            <ExampleGordon00300Page />
          </Route>
          <Route exact path="/ExampleGordon-00500">
            <Page00500
              pageOwner={gordonPageOwner}
              profile={gordonProfessor}
              IT="false"
            />
          </Route>
          <Route exact path="/ExampleBradley-00500">
            <Page00500
              pageOwner={bradleyPageOwner}
              profile={bradleyProfessor}
              IT="false"
            />
          </Route>
          <Route exact path="/ExamplePamela-00500">
            <Page00500
              pageOwner={pamelaPageOwner}
              profile={pamelaIT}
              IT="true"
            />
          </Route>
          <Route exact path="/ExampleGordon-00600">
            <Page00600 pageOwner={gordonPageOwner} profile={gordonProfessor} />
          </Route>
          <Route exact path="/ExampleBradley-00600">
            <Page00600
              pageOwner={bradleyPageOwner}
              profile={bradleyProfessor}
            />
          </Route>
          <Route exact path="/ExampleBrittany-00300">
            <ExampleBrittany00300Page />
          </Route>
          <Route exact path="/ExampleBrittany-0120X">
            <ExampleBrittany0120XPage />
          </Route>
          <Route exact path="/ExampleGordon-01404">
            <ExampleGordon01404Page />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
