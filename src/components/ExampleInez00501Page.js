import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import ViewProfileOtherUserContainer from "./Page/00501_viewProfileOtherUser/viewProfileOtherUserContainer.js";

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

const menuItems = [
  { name: "Home", link: "#0", icon: "icon-home" },
  { name: "My Calendar", link: "#0", icon: "icon-calendar" },
  { name: "Committees & Teams", link: "#0", icon: "icon-user-group" },
  { name: "My Advisees", link: "#0", icon: "icon-book-reader icon-solid" },
  { name: "My Courses", link: "#0", icon: "icon-book" },
  { name: "My Projects", link: "#0", icon: "icon-book-title" },
  { name: "My Files", link: "#0", icon: "icon-copy" },
  { name: "Resources", link: "#0", icon: "icon-th-large" },
  { name: "Opportunities", link: "#0", icon: "icon-sun-haze" },
  {
    name: "Recommended Partners",
    link: "#0",
    icon: "icon-user-friends icon-solid",
  },
  { name: "Settings", link: "#0", icon: "icon-settings" },
];

class ExampleInez00501Page extends React.Component {
  render() {
    return (
      <>
        <div className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <div id="wrap-logo">
              <a href="#0">
                <img src="images/logo.png" alt="" />
              </a>
              <a href="#0" id="menu-button-responsive">
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

                    <ViewProfileOtherUserContainer />
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

export default ExampleInez00501Page;
