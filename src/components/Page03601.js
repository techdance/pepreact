import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import EditInstitutionProfileForm from "./Page/03601_editInstitutionProfilePage/editInstitutionProfilePageContainer.js";
import { menuItems } from "../data/institution.js";

const breadCrumbList = [
  "Home",
  "Instituion Profiles",
  "AHEA University",
  "Edit Profile",
];

class ExamplePamela03601Page extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;
    let institution = this.props.institution;

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
                      edit="true"
                    />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />

                    <EditInstitutionProfileForm institution={institution} />
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
