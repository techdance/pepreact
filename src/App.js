import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import Register from "./components/Register";
// import Login from "./components/Login";

import "./assets/css/fontawesome-all.css";

import "./assets/css/sidebar.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/style-lab.css";
import "./assets/css/style-custom-icon.css";

import "./assets/css/style-resources.css";
import "./assets/css/style-profile.css";
import "./assets/css/react-select.css";

import "./assets/css/bootstrap-datetimepicker.min.css";

// these two pages use backend API so don't change yet.
import Page03601 from "./components/Page03601.js";
import Page00701 from "./components/Page00701.js";

// CollaboratedPage and InspiredPage shows the left menu, top menu and breadcrumb; Then it renders the page body (old name container) using a render prop component
import CollaboratedPage from "./components/CollaboratedPage.js";
import CreateProject from "./components/Page/0103X/createProject.js";
import EditProject from "./components/Page/0103X/editProject.js";

import InspiredPage from "./components/InspiredPage.js";
import EditProfileContainer from "./components/Page/00600_editProfile/editProfileContainer";
import ViewProfileContainer from "./components/Page/00500_viewProfile/viewProfileContainer.js";
import ViewProfileOtherUserContainer from "./components/Page/00501_viewProfileOtherUser/viewProfileOtherUserContainer.js";
import ProfessorMessagesReceivedContainer from "./components/Page/00108_showProfessorMessagesReceived/professorMessagesReceivedContainer.js";
import AdministratorHomePageContainer from "./components/Page/00300_showAdminHomePage/adminHomePageContainer.js";
import ReportDrillDownContainer from "./components/Page/01404_reportDrillDown/reportDrillDownContainer.js";
import CourseDiscussionContainer from "./components/Page/0120X_CourseDiscussion/courseDiscussionContainer.js";
import InsitutionProfilePageContainer from "./components/Page/00701_showInstitutionProfilePage/showInstitutionProfilePageContainer.js";
import EditInstitutionProfileForm from "./components/Page/03601_editInstitutionProfilePage/editInstitutionProfilePageContainer.js";
import ShowTemplatesPageContainer from "./components/Page/00400/ShowTemplatesPageContainer.js";

import ShowMatches from "./components/Page/01300/ShowMatches.js";
import ShowMyProjects from "./components/Page/03100/ShowMyProjects.js";
import StudentHomePageContainer from "./components/Page/00300_showStudentHomePage/studentHomePageContainer.js";
import ShowProfessorHomePage from "./components/Page/00300_ShowProfessorHomePage/showProfessorHomepage.js";
import EditProjectLabCourse from "./components/Page/01000/editProjectLabCourse";
import EditProjectLabCertificate from "./components/Page/04200/editProjectLabCertificate.js";

import ShowResources from "./components/Page/00400/ShowResources";
import ManageTemplates from "./components/Page/00400/ManageTemplates";
import NewTemplate from "./components/Page/00400/NewTemplate";
import EditTemplate from "./components/Page/00400/EditTemplate";

import ViewPersonRecord from "./components/Page/00610/ViewPersonRecord";
import EditPersonRecord from "./components/Page/00610/EditPersonRecord";

import TestState from "./TestState.js";

import {
  gordonPageOwner,
  inezPageOwner,
  bradleyPageOwner,
  pamelaPageOwner,
  brittanyPageOwner,
  tomPageOwner,
  sidneyPageOwner,
} from "./data/pageOwner.js";
import {
  gordonProfessor,
  bradleyProfessor,
  pamelaIT,
  inezProfessor,
} from "./data/professor";
import { administratorGordon } from "./data/administrator.js";
import { brittanyStudent } from "./data/student.js";
import { institution } from "./data/institution.js";

import {
  menuItemsProfessor,
  menuItemsAdministrator,
  menuItemsStudent,
  menuItems,
  menuItemsLMSAdmin,
  menuItemsWhateverRoleSidney,
} from "./data/menuItems.js";

// React global variables
// Institution Logo for current page owner. Logo refers to the combined logoA and logoB file.
export const InstitutionLogoContext = React.createContext("");
InstitutionLogoContext.displayName = "LogoContext";

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
          <Route exact path="/05IN_00500">
            <InspiredPage
              render={(profile, IT) => (
                <ViewProfileContainer profile={inezProfessor} IT="false" />
              )}
              breadcrumb={["Home", "Profile"]}
              menuItems={menuItemsProfessor}
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
                <ViewProfileContainer profile={pamelaIT} IT={true} />
              )}
              breadcrumb={["Home", "Profile"]}
              menuItems={menuItems}
              pageOwner={pamelaPageOwner}
            />
          </Route>
          <Route exact path="/18IN_00600">
            <InspiredPage
              render={(profile, IT) => (
                <EditProfileContainer profile={pamelaIT} IT="true" />
              )}
              breadcrumb={["Home", "Profile", "Edit Profile"]}
              menuItems={menuItems}
              pageOwner={pamelaPageOwner}
              edit="true"
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
              edit="true"
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
              menuItems={menuItemsAdministrator}
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
              menuItems={menuItemsAdministrator}
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
              menuItems={menuItemsAdministrator}
              pageOwner={gordonPageOwner}
            />
          </Route>
          <Route exact path="/02IN_00600">
            <InspiredPage
              render={(profile, IT) => (
                <EditProfileContainer profile={gordonProfessor} IT="false" />
              )}
              breadcrumb={["Home", "Profile", "Edit Profile"]}
              menuItems={menuItemsAdministrator}
              pageOwner={gordonPageOwner}
              edit="true"
            />
          </Route>

          {/* Bradley Pages */}
          <Route exact path="/01IN_00300">
            <InspiredPage
              render={(id) => <ShowProfessorHomePage id="1" />}
              breadcrumb={["Home"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>

          <Route exact path="/01IN_00409">
            <InspiredPage
              render={() => <ShowTemplatesPageContainer />}
              breadcrumb={["Home", "Resources", "Templates"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>

          <Route exact path="/01IN_00500">
            <InspiredPage
              render={(profile, IT) => (
                <ViewProfileContainer profile={bradleyProfessor} IT="false" />
              )}
              breadcrumb={["Home", "Profile"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01IN_00511">
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
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01IN_00600">
            {/* 0060 now supports url parameters professorId='id'&IT='true/false' e.g. /O1IN_00600?professorId='1'&IT='false' */}
            <InspiredPage
              render={() => (
                // <EditProfileContainer profile={bradleyProfessor} IT="false" />
                <EditProfileContainer />
              )}
              breadcrumb={["Home", "Profile", "Edit Profile"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
              edit="true"
            />
          </Route>
          <Route exact path="/ExampleBradley-00701">
            <Page00701 pageOwner={bradleyPageOwner} institution={institution} />
          </Route>

          {/* Brittany Pages */}
          <Route exact path="/03IN_00300">
            {/* <ExampleBrittany00300Page /> */}

            <InspiredPage
              render={(student) => (
                <StudentHomePageContainer student={brittanyStudent} />
              )}
              breadcrumb={["Home"]}
              menuItems={menuItemsStudent}
              pageOwner={brittanyPageOwner}
            />
          </Route>
          <Route exact path="/03IN_01206">
            {/* 03IN_01207 and 03IN_01209 get called from links in the Discussion column shown in 03IN_01206. Id=1 is 01207 and Id=2 is 01209  */}
            {/* 03IN_01208 gets called from the Reply link within 03IN_01207 (id=1) in Victoria's Post or within 03IN_01209 (03IN_01207 id=2) in Victoria's or Brittany's Post.  */}
            <InspiredPage
              render={() => (
                <CourseDiscussionContainer
                  courseId="1" // dummy id for Ethics in Multinational Management Course
                />
              )}
              breadcrumb={[
                "Home",
                "My Courses",
                "Ethics in Multinational Management",
                "Discussion",
              ]}
              menuItems={menuItemsStudent}
              pageOwner={brittanyPageOwner}
            />
          </Route>

          {/* Tom pages */}
          <Route exact path="/19IN_00701">
            <InspiredPage
              render={() => (
                <InsitutionProfilePageContainer
                  institution={institution}
                  edit={true}
                />
              )}
              breadcrumb={["Home", "Institution Profiles", "AHEA University"]}
              menuItems={menuItemsLMSAdmin}
              pageOwner={tomPageOwner}
            />
          </Route>

          <Route exact path="/19IN_03601">
            <InspiredPage
              render={() => (
                <EditInstitutionProfileForm institution={institution} />
              )}
              breadcrumb={[
                "Home",
                "Institution Profiles",
                "AHEA University",
                "Edit Profile",
              ]}
              menuItems={menuItemsLMSAdmin}
              pageOwner={tomPageOwner}
            />
          </Route>
          <Route exact path="/19IN_00612">
            {/* called with query string parameters ?personrecordid=X  */}
            <InspiredPage
              render={() => <ViewPersonRecord />}
              breadcrumb={["Home", "Person Record", "Bradley Dexter"]}
              menuItems={menuItemsLMSAdmin}
              pageOwner={tomPageOwner}
            />
          </Route>
          <Route exact path="/19IN_00613">
            {/* called with query string parameters ?personrecordid=X  */}
            <InspiredPage
              render={() => <EditPersonRecord />}
              breadcrumb={[
                "Home",
                "Person Record",
                "Bradley Dexter",
                "Edit Record",
              ]}
              menuItems={menuItemsLMSAdmin}
              pageOwner={tomPageOwner}
            />
          </Route>

          {/* Sidney Pages */}
          <Route exact path="/20IN_00400">
            <InspiredPage
              render={() => <ShowResources />}
              breadcrumb={["Home", "Resources"]}
              menuItems={menuItemsWhateverRoleSidney}
              pageOwner={sidneyPageOwner}
            />
          </Route>
          <Route exact path="/20IN_00413">
            <InspiredPage
              render={() => <ManageTemplates />}
              breadcrumb={["Home", "Resources", "Manage Templates"]}
              menuItems={menuItemsWhateverRoleSidney}
              pageOwner={sidneyPageOwner}
            />
          </Route>
          <Route exact path="/20IN_00414">
            {/* called with no query string parameters */}
            <InspiredPage
              render={() => <NewTemplate />}
              breadcrumb={[
                "Home",
                "Resources",
                "Manage Templates",
                "New Templates",
              ]}
              menuItems={menuItemsWhateverRoleSidney}
              pageOwner={sidneyPageOwner}
            />
          </Route>
          <Route exact path="/20IN_00415">
            {/* called with query string parameters ?templateid=X  */}
            <InspiredPage
              render={() => <EditTemplate />}
              breadcrumb={[
                "Home",
                "Resources",
                "Manage Templates",
                "Edit Templates",
              ]}
              menuItems={menuItemsWhateverRoleSidney}
              pageOwner={sidneyPageOwner}
            />
          </Route>

          {/* CollaboratED pages */}
          {/* Bradley */}
          <Route exact path="/01CL_01000">
            {/* called with query string parameters ?projectid=1&step=X where X is 1-4 representing 1=courseinformation, 2=coursedesign, etc. */}
            <CollaboratedPage
              render={() => <EditProjectLabCourse />}
              breadcrumb={[
                "Home",
                "My Projects",
                "Ethics in Multinational Management",
              ]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_01033">
            <CollaboratedPage
              render={() => <CreateProject />}
              breadcrumb={["Home", "My Projects", "New Project"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_01034">
            <CollaboratedPage
              render={() => <EditProject />}
              breadcrumb={["Home", "My Projects", "Edit Project"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_01035">
            <CollaboratedPage
              render={() => <EditProject />}
              breadcrumb={["Home", "My Projects", "Edit Project"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_01300">
            <CollaboratedPage
              render={() => <ShowMatches />}
              breadcrumb={["Home", "Profile", "Matches"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>
          <Route exact path="/01CL_03100">
            {/* "id" is the id of the professor record for whom we need to show the projects. Here "1" is a dummy for Bradley */}
            <CollaboratedPage
              render={() => <ShowMyProjects id="1" />}
              breadcrumb={["Home", "My Projects"]}
              menuItems={menuItemsProfessor}
              pageOwner={bradleyPageOwner}
            />
          </Route>

          {/* Inez */}
          <Route exact path="/05CL_03100a">
            <CollaboratedPage
              render={() => <ShowMyProjects id="2" />}
              breadcrumb={["Home", "My Projects"]}
              menuItems={menuItemsProfessor}
              pageOwner={inezPageOwner}
            />
          </Route>
          <Route exact path="/05CL_04200">
            {/* called with query string parameters ?projectid=2&step=X where X is 1-4 representing 1=certificateinformation, 2=certificatedesign, etc. */}
            <CollaboratedPage
              render={() => <EditProjectLabCertificate />}
              breadcrumb={[
                "Home",
                "My Projects",
                "Cross-Cultural Business Management Certification",
              ]}
              menuItems={menuItemsProfessor}
              pageOwner={inezPageOwner}
            />
          </Route>

          <Route path="/">
            <TestState />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
