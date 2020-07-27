import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import EditInstitutionProfileForm from "./Page/editInstitutionProfilePageContainer.js";

const breadCrumbList = [
  "Home",
  "Instituion Profiles",
  "AHEA University",
  "Edit Profile",
];

const owner = {
  Institution: {
    logoA2: "./images/logo-a.png",
    logoB2: "./images/logo-b.png",
  },
  Person: { firstName: "Pamela", iconImage: "./images/Pamela.png" },
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

class ExamplePamela03601Page extends React.Component {
  render() {
    return (
      <>
        <div className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <div id="wrap-logo">
              <a href="#0">
                <img src="images/logo.png" alt="AHEA University" />
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

                    <EditInstitutionProfileForm />
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

export default ExamplePamela03601Page;
