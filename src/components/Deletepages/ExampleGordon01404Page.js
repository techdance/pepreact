import React from "react";

import ReportDrillDownContainer from "./Page/01404_reportDrillDown/reportDrillDownContainer.js";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import { administratorGordon, menuItems } from "../data/administrator.js";

const breadCrumbList = [
  "Home",
  "Reports & Assessment",
  "Retention Rates by College",
];

class ExampleGordon01404Page extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = administratorGordon;

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
              owner={pageOwner}
              menuItems={menuItems}
              activeMenuItem={"Reports"}
            />
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu
                      owner={pageOwner}
                      alerts={alerts}
                      messages={messages}
                      badges={badges}
                    />
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
