import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowTowerLogo from "./Navigation/showTowerLogo.js";

import EditProfileContainer from "./Page/00600_editProfile/editProfileContainer.js";
import { menuItems } from "../data/administrator.js";

const breadCrumbList = ["Home", "Profile", "Edit Profile"];

class Page00600 extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;
    let profile = this.props.profile;
    const IT = this.props.IT;

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
                      edit="true"
                    />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />

                    <EditProfileContainer profile={profile} IT={IT} />
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

export default Page00600;
