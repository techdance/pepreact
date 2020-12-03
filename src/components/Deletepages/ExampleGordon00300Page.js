import React from "react";

import AdministratorHomePageContainer from "./Page/00300_showAdminHomePage/adminHomePageContainer.js";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowTowerLogo from "./Navigation/showTowerLogo.js";

import { administratorGordon, menuItems } from "../data/administrator.js";

const breadCrumbList = ["Home"];

class ExampleGordon00300Page extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = administratorGordon;

    return (
      <>
        <body className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <ShowTowerLogo />
          </div>
          <ShowMobileSideBarMenu />
          <div id="container">
            <ShowSideBarMenu
              owner={pageOwner}
              menuItems={menuItems}
              activeMenuItem={"Home"}
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

                    <AdministratorHomePageContainer
                      administrator={administratorGordon}
                    />
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

export default ExampleGordon00300Page;
