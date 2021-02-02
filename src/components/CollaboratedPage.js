import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowInstitutionLogo from "./Navigation/showInstitutionLogo.js";

import { InstitutionLogoContext } from "../App.js";

class Page extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;
    const breadCrumb = this.props.breadcrumb;
    const menuItems = this.props.menuItems;

    // backward compatibility - not all pageowner data objects contain logo - if it doesn't exist then default to AHEA
    const logo =
      pageOwner.Institution.logo !== undefined
        ? pageOwner.Institution.logo
        : "./images/logo.png";
    return (
      <>
        <InstitutionLogoContext.Provider value={logo}>
          value={pageOwner.Institution.logoB2}>
          <div id="menu-top-responsive">
            <ShowInstitutionLogo
              logoA={pageOwner.Institution.logoA2}
              logoB={pageOwner.Institution.logoB2}
            />
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

export default Page;
