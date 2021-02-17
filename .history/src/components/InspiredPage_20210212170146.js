import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowInstitutionLogo from "./Navigation/showInstitutionLogo.js";

import { InstitutionLogoContext } from "../App.js";
import { withRouter } from 'react-router-dom';

class InspiredPage extends React.Component {


  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;

    const breadCrumb = this.props.breadcrumb;
    const menuItems = this.props.menuItems;
    const edit = this.props.edit;

    // console.log(' props: ', this.props);

    // backward compatibility - not all pageowner data objects contain logo - if it doesn't exist then default to AHEA
    const logo =
      pageOwner.Institution.logo !== undefined
        ? pageOwner.Institution.logo
        : "./images/logo.png";
    return (
      <>
        <InstitutionLogoContext.Provider value={logo}>
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
              <div className="container-fluid" id="test">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu
                      owner={pageOwner}
                      alerts={alerts}
                      messages={messages}
                      badges={badges}
                      edit={edit}
                      history={this.props.history}
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

export default withRouter(InspiredPage);
