import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import Register from "./components/Register";
import Login from "./components/Login";

import "./assets/css/fontawesome-all.css";

import "./assets/css/sidebar.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/style-custom-icon.css";

import "./assets/css/style-resources.css";
import "./assets/css/style-profile.css";
import "./assets/css/react-select.css";

import ExampleBrittany00300Page from "./components/ExampleBrittany00300Page.js";

// these two pages use backend API so don't change yet.
import Page03601 from "./components/Page03601.js";
import Page00701 from "./components/Page00701.js";

// CollaboratedPage and InspiredPage shows the left menu, top menu and breadcrumb; Then it renders the page body (old name container) using a render prop component
import CollaboratedPage from "./components/CollaboratedPage.js";
import CreateProject from "./components/Page/0103X/createProject.js";
import EditProject from "./components/Page/0103X/editProject.js";

import InspiredPage from "./components/InspiredPage.js";
import EditProfileContainer from "./components/Page/00600_editProfile/editProfileContainer.js";
import ViewProfileContainer from "./components/Page/00500_viewProfile/viewProfileContainer.js";
import ViewProfileOtherUserContainer from "./components/Page/00501_viewProfileOtherUser/viewProfileOtherUserContainer.js";
import ProfessorMessagesReceivedContainer from "./components/Page/00108_showProfessorMessagesReceived/professorMessagesReceivedContainer.js";
import AdministratorHomePageContainer from "./components/Page/00300_showAdminHomePage/adminHomePageContainer.js";
import ReportDrillDownContainer from "./components/Page/01404_reportDrillDown/reportDrillDownContainer.js";
import CourseDiscussionContainer from "./components/Page/0120X_CourseDiscussion.js/courseDiscussionContainer.js";
import ShowMatches from "./components/Page/01300/ShowMatches.js";
import ShowMyProjects from "./components/Page/03100/ShowMyProjects.js";

import {
  gordonPageOwner,
  inezPageOwner,
  bradleyPageOwner,
  pamelaPageOwner,
  brittanyPageOwner,
} from "./data/pageOwner.js";
import {
  gordonProfessor,
  bradleyProfessor,
  pamelaIT,
  inezProfessor,
} from "./data/professor";
import { administratorGordon } from "./data/administrator.js";
import { student } from "./data/student.js";
import { institution } from "./data/institution.js";

import { menuItems } from "./data/menuItems.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/register">
            <Register />
          </Route> */}

          {/* Inez Pages */}
          <Route exact path="/05IN_00108">
            {/* <Page00108 pageOwner={inezPageOwner} /> */}

            <InspiredPage
              render={(professor) => (
                <ProfessorMessagesReceivedContainer professor={inezPageOwner} />
              )}
              breadcrumb={["Home", "Messages", "Received"]}
              menuItems={menuItems}
              pageOwner={inezPageOwner}
            />
          </Route>
          <Route exact path="/05IN_00511">
            {/* <Page00511 pageOwner={inezPageOwner} profile={bradleyProfessor} /> */}

            <InspiredPage
              render={(profile) => (
                <ViewProfileOtherUserContainer profile={bradleyProfessor} />
              )}
              breadcrumb={[
                "Home",
                "Messages",
                "Project Invites",
                "Bradley Dexter",
              ]}
              menuItems={menuItems}
              pageOwner={inezPageOwner}
            />
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
          <Route exact path="/02IN_01404">
            {/* <ExampleGordon01404Page /> */}

            <InspiredPage
              render={() => <ReportDrillDownContainer />}
              breadcrumb={[
                "Home",
                "Reports & Assessment",
                "Retention Rates by College",
              ]}
              menuItems={menuItems}
              pageOwner={gordonPageOwner}
            />
          </Route>
          <Route exact path="/02IN_00300">
            {/* <ExampleGordon00300Page /> */}

            <InspiredPage
              render={(administrator) => (
                <AdministratorHomePageContainer
                  administrator={administratorGordon}
                />
              )}
              breadcrumb={["Home"]}
              menuItems={menuItems}
              pageOwner={gordonPageOwner}
            />
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
          <Route exact path="/01IN_00511">
            {/* <Page00511 pageOwner={bradleyPageOwner} profile={inezProfessor} /> */}
            <InspiredPage
              render={(profile) => (
                <ViewProfileOtherUserContainer profile={inezProfessor} />
              )}
              breadcrumb={[
                "Home",
                "Messages",
                "Project Invites",
                "Inez Campos",
              ]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
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

          {/* Brittany Pages */}
          <Route exact path="/ExampleBrittany-00300">
            <ExampleBrittany00300Page />
          </Route>
          <Route exact path="/03IN_01206">
            {/* <ExampleBrittany0120XPage /> */}
            <InspiredPage
              render={(course, location, term, screen) => (
                <CourseDiscussionContainer
                  course={student.courses[1]}
                  location={"Online"}
                  term={"Spring 2020"}
                  screen={1}
                />
              )}
              breadcrumb={[
                "Home",
                "My Courses",
                "Ethics in Multinational Management",
                "Discussion",
              ]}
              menuItems={menuItems}
              pageOwner={brittanyPageOwner}
            />
          </Route>

          {/* CollaboratED pages */}
          {/* Bradley */}
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
          <Route exact path="/01CL_01300">
            <CollaboratedPage
              render={() => <ShowMatches />}
              breadcrumb={["Home", "Profile", "Matches"]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_03100">
            {/* "id" is the id of the professor record for whom we need to show the projects. Here "1" is a dummy for Bradley */}
            <CollaboratedPage
              render={() => <ShowMyProjects id="1" />}
              breadcrumb={["Home", "My Projects"]}
              menuItems={menuItems}
              pageOwner={bradleyPageOwner}
            />
          </Route>

          {/* Inez */}
          <Route exact path="/05CL_03100a">
            <CollaboratedPage
              render={() => <ShowMyProjects id="2" />}
              breadcrumb={["Home", "My Projects"]}
              menuItems={menuItems}
              pageOwner={inezPageOwner}
            />
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
