import React from "react";

import Example05IN_00511 from "../example05IN_00511.js";
import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import towerEdLogoA from "../assets/images/logo-tower-education-a.png";
import towerEdLogoB from "../assets/images/logo-tower-education-b.png";

const breadCrumbList = [
  "Home",
  "Messages",
  "Project Invites",
  "Bradley Dexter",
];

const owner = {
  Institution: {
    logoA2: "./images/logo-a2.png",
    logoB2: "./images/logo-b2.png",
  },
  Person: { firstName: "Inez", iconImage: "./images/Inez.png" },
};

class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <body className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <div id="wrap-logo">
              <a href="#">
                <img src="images/logo.png" />
              </a>
              <a href="#" id="menu-button-responsive">
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <ShowMobileSideBarMenu />
          <div id="container">
            <ShowSideBarMenu owner={owner} />
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu owner={owner} />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />
                  </div>
                  <Example05IN_00511 />
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default ExamplePage;
