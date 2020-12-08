import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

class Page extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;
    const breadCrumb = this.props.breadcrumb;
    const menuItems = this.props.menuItems;

    return (
      <>
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
      </>
    );
  }
}

export default Page;
