import React from "react";

import InsitutionProfilePageContainer from "./Page/institutionProfilePageContainer.js";
import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import towerEdLogoA from "../assets/images/logo-tower-education-a.png";
import towerEdLogoB from "../assets/images/logo-tower-education-b.png";

const breadCrumbList = ["Home", "Instituion Profiles", "AHEA University"];

const owner = {
  Institution: {
    logoA2: "./images/logo-a.png",
    logoB2: "./images/logo-b.png",
  },
  Person: { firstName: "Inez", iconImage: "./images/Inez.png" },
};

const menuItems = [
  { name: "Home", link: "#", icon: "icon-home" },
  { name: "My Calendar", link: "#", icon: "icon-calendar" },
  { name: "Committees & Teams", link: "#", icon: "icon-user-group" },
  { name: "My Advisees", link: "#", icon: "icon-book-reader icon-solid" },
  { name: "My Courses", link: "#", icon: "icon-book" },
  { name: "My Projects", link: "#", icon: "icon-book-title" },
  { name: "My Files", link: "#", icon: "icon-copy" },
  { name: "Resources", link: "#", icon: "icon-th-large" },
  { name: "Opportunities", link: "#", icon: "icon-sun-haze" },
  {
    name: "Recommended Partners",
    link: "#",
    icon: "icon-user-friends icon-solid",
  },
  { name: "Settings", link: "#", icon: "icon-settings" },
];

class ExampleInez00701Page extends React.Component {
  render() {
    return (
      <>
        <div className="bg-grey-popup">
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
            <ShowSideBarMenu
              owner={owner}
              menuItems={menuItems}
              activeMenuItem={"Home"}
            />
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu owner={owner} />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />

                    <InsitutionProfilePageContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ExampleInez00701Page;
