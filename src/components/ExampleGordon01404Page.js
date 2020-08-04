import React from "react";

import ReportDrillDownContainer from "./Page/01404_reportDrillDown/reportDrillDownContainer.js";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

const breadCrumbList = [
  "Home",
  "Reports & Assessment",
  "Retention Rates by College",
];

const owner = {
  Institution: {
    logoA2: "./images/logo-a.png",
    logoB2: "./images/logo-b.png",
  },
  Person: { firstName: "Gordon", iconImage: "./images/Gordon.png" },
};

const menuItems = [
  { name: "Home", link: "#0", icon: "icon-home" },
  { name: "Calendar", link: "#0", icon: "icon-calendar" },
  { name: "Tasks & Overrides", link: "#0", icon: "icon-clipboard-list" },
  { name: "Committees & Teams", link: "#0", icon: "icon-users-class" },
  { name: "Reports & Assessments", link: "#0", icon: "icon-chart-bar" },
  { name: "Program Management", link: "#0", icon: "icon-chart-pie" },
  { name: "My Tiles", link: "#0", icon: "icon-clone" },
  { name: "My Files", link: "#0", icon: "icon-copy" },
  { name: "Resources", link: "#0", icon: "icon-th-large" },
  { name: "Settings", link: "#0", icon: "icon-settings" },
];

class ExampleGordon01404Page extends React.Component {
  render() {
    return (
      <>
        <body className="bg-grey-popup">
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
              activeMenuItem={"Reports & Assessments"}
            />
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu owner={owner} />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />

                    <ReportDrillDownContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default ExampleGordon01404Page;
