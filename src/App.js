import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import Register from "./components/Register";
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

import Page03601 from "./components/Page03601.js";

import Page00511 from "./components/Page00511.js";
import Page00108 from "./components/Page00108.js";

import Page00701 from "./components/Page00701.js";
// CollaboratedPage shows the left menu, top menu and breadcrumb; Then it renders the page body (old name container) using a render prop component
import CollaboratedPage from "./components/CollaboratedPage.js";
import CreateProject from "./components/Page/0103X/createProject.js";
import EditProject from "./components/Page/0103X/editProject.js";

import InspiredPage from "./components/InspiredPage.js";
import EditProfileContainer from "./components/Page/00600_editProfile/editProfileContainer.js";
import ViewProfileContainer from "./components/Page/00500_viewProfile/viewProfileContainer.js";

import {
  gordonPageOwner,
  inezPageOwner,
  bradleyPageOwner,
  pamelaPageOwner,
} from "./data/pageOwner.js";
import {
  gordonProfessor,
  bradleyProfessor,
  pamelaIT,
  inezProfessor,
} from "./data/professor";
import { institution } from "./data/institution.js";

import { menuItems } from "./data/institution.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/register">
            <Register />
          </Route> */}

          {/* Inez Pages */}
          <Route exact path="/ExampleInez-00108">
            <Page00108 pageOwner={inezPageOwner} />
          </Route>
          <Route exact path="/ExampleInez-00511">
            <Page00511 pageOwner={inezPageOwner} profile={bradleyProfessor} />
          </Route>
          <Route exact path="/ExampleInez-00701">
            <Page00701 pageOwner={inezPageOwner} institution={institution} />
          </Route>

          {/* Pamela Pages */}
          <Route exact path="/18IN_00500">
            {/* <Page00500
              pageOwner={pamelaPageOwner}
              profile={pamelaIT}
              IT="true"
            /> */}
            <InspiredPage
              render={(profile, IT) => (
                <ViewProfileContainer profile={pamelaIT} IT="true" />
              )}
              breadcrumb={["Home", "Profile"]}
              menuItems={menuItems}
              pageOwner={pamelaPageOwner}
            />
          </Route>
          <Route exact path="/18IN_00600">
            {/* <Page00600
              pageOwner={pamelaPageOwner}
              profile={pamelaIT}
              IT="true"
            /> */}
            <InspiredPage
              render={(profile, IT) => (
                <EditProfileContainer profile={pamelaIT} IT="true" />
              )}
              breadcrumb={["Home", "Profile", "Edit Profile"]}
              menuItems={menuItems}
              pageOwner={pamelaPageOwner}
            />
          </Route>
          <Route exact path="/ExamplePamela-00701">
            <Page00701 pageOwner={pamelaPageOwner} institution={institution} />
          </Route>
          <Route exact path="/ExamplePamela-03601">
            <Page03601
              pageOwner={pamelaPageOwner}
              institution={institution}
              IT="true"
            />
          </Route>

          {/* Gordon Pages */}
          <Route exact path="/ExampleGordon-01404">
            <ExampleGordon01404Page />
          </Route>
          <Route exact path="/ExampleGordon-00300">
            <ExampleGordon00300Page />
          </Route>
          <Route exact path="/02IN_00500">
            {/* <Page00500
              pageOwner={gordonPageOwner}
              profile={gordonProfessor}
              IT="false"
            /> */}
            <InspiredPage
              render={(profile, IT) => (
                <ViewProfileContainer profile={gordonProfessor} IT="false" />
              )}
              breadcrumb={["Home", "Profile"]}
              menuItems={menuItems}
              pageOwner={gordonPageOwner}
            />
          </Route>
          <Route exact path="/02IN_00600">
            {/* <Page00600 pageOwner={gordonPageOwner} profile={gordonProfessor} /> */}
            <InspiredPage
              render={(profile, IT) => (
                <EditProfileContainer profile={gordonProfessor} IT="false" />
              )}
              breadcrumb={["Home", "Profile", "Edit Profile"]}
              menuItems={menuItems}
              pageOwner={gordonPageOwner}
            />
          </Route>
          <Route exact path="/ExampleGordon-01404">
            <ExampleGordon01404Page />
          </Route>

          {/* Bradley Pages */}
          <Route exact path="/01IN_00500">
            {/* <Page00500
              pageOwner={bradleyPageOwner}
              profile={bradleyProfessor}
              IT="false"
            /> */}
            <InspiredPage
              render={(profile, IT) => (
                <ViewProfileContainer profile={bradleyProfessor} IT="false" />
              )}
              breadcrumb={["Home", "Profile"]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/ExampleBradley-00511">
            <Page00511 pageOwner={bradleyPageOwner} profile={inezProfessor} />
          </Route>
          <Route exact path="/01IN_00600">
            <InspiredPage
              render={(profile, IT) => (
                <EditProfileContainer profile={bradleyProfessor} IT={IT} />
              )}
              breadcrumb={["Home", "Profile", "Edit Profile"]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/ExampleBradley-00701">
            <Page00701 pageOwner={bradleyPageOwner} institution={institution} />
          </Route>

          {/* Bradley CollaboratED pages */}
          <Route exact path="/01CL_01033">
            <CollaboratedPage
              render={() => <CreateProject />}
              breadcrumb={["Home", "My Projects", "New Project"]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_01034">
            <CollaboratedPage
              render={() => <EditProject />}
              breadcrumb={["Home", "My Projects", "Edit Project"]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
          </Route>

          {/* Brittany Pages */}
          <Route exact path="/ExampleBrittany-00300">
            <ExampleBrittany00300Page />
          </Route>
          <Route exact path="/ExampleBrittany-0120X">
            <ExampleBrittany0120XPage />
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
