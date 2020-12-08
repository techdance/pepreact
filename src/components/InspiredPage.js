import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowTowerLogo from "./Navigation/showTowerLogo.js";

class InspiredPage extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;

    const breadCrumb = this.props.breadcrumb;
    const menuItems = this.props.menuItems;
    const edit = this.props.edit;

    console.log(this.props.render);
    return (
      <>
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
      </>
    );
  }
}

export default InspiredPage;
