import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowTowerLogo from "./Navigation/showTowerLogo.js";

// React global variables
// Institution Logo for current page owner
export const InstitutionLogoContext = React.createContext(
  "./images/logo-a2.png"
);
InstitutionLogoContext.displayName = "LogoContext";

class InspiredPage extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;

    const breadCrumb = this.props.breadcrumb;
    const menuItems = this.props.menuItems;
    const edit = this.props.edit;

    return (
      <>
        <InstitutionLogoContext.Provider value={pageOwner.Institution.logoA2}>
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
                      edit={edit}
                    />
                    <ShowBreadCrumb breadCrumbList={breadCrumb} />

                    {this.props.render()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InstitutionLogoContext.Provider>
      </>
    );
  }
}

export default InspiredPage;
