import React from "react";

import StudentHomePageContainer from "./Page/00300_showStudentHomePage/studentHomePageContainer.js";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowTowerLogo from "./Navigation/showTowerLogo.js";

import { student, menuItems } from "../data/student.js";

const breadCrumbList = ["Home"];

class ExampleBrittany00300Page extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = student;

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

                    <StudentHomePageContainer student={student} />
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

export default ExampleBrittany00300Page;
