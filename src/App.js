import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/style-register.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Register from "./components/Register";
import Login from "./components/Login";
import registerImg from "./assets/images/logo-tower-register.png";

import AreaInterestVmModal from "./areaInterestVmModal.js";

import ExampleTriggerModal from "./exampleTriggerModal.js";

const modal_example_1 = {
  projectType: "Research",
  description:
    "I am interested in finding one or two partners to conduct a longitudinal study on the impact of Brexit of the EU and what changes will take place in the economy as a result.",
  discipline: "Economic",
  deliveryMethod: "Online",
  collaborationType: "Global",
  region: "Europe",
  programLength: "Semester",
  preferredLanguage: "English",
  credits: "4",
  programLevel: "Undergraduate",
  dateRange: "Today 2020",
};

const modal_example_2 = {
  projectType: "Academic Journal",
  description:
    "I am looking for partners to help author an article on the impact of mobile technology on business acumen. There is a lot of literature on international business acumen, but nothing has been updated since the onset of our 24/7 connectivity with mobile devices.",
  discipline: "Business",
  deliveryMethod: "Online",
  collaborationType: "Global",
  region: "All",
  programLength: "Semester",
  preferredLanguage: "English",
  credits: "4",
  programLevel: "Undergraduate",
  dateRange: "Today 2020",
};

const modal_example_3 = {
  projectType: "Course Development",
  description:
    "I would like to co-develop a business ethics class focused on multinational corporations and how ethics may or may not conflict with the culture in countries where MNCs are located.",
  discipline: "Business",
  deliveryMethod: "Online",
  collaborationType: "Global",
  region: "All",
  programLength: "Semester",
  preferredLanguage: "English",
  credits: "3",
  programLevel: "Undergraduate",
  dateRange: "Today 2020",
};

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/trigger1">
            <ExampleTriggerModal modal={modal_example_1} example={"1"} />
          </Route>
          <Route exact path="/trigger2">
            <ExampleTriggerModal modal={modal_example_1} example={"2"} />
          </Route>
          <Route exact path="/trigger3">
            <ExampleTriggerModal modal={modal_example_1} example={"3"} />
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
