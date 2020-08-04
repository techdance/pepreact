import React from "react";

import towerEdLogoA from "../../assets/images/logo-tower-education-a.png";
import towerEdLogoB from "../../assets/images/logo-tower-education-b.png";

class WrapLogo extends React.Component {
  render() {
    return (
      <div id="wrap-logo">
        <a href="#0">
          <img src={this.props.logoA2} alt="" />
          <img className="group-hide ml-1" src={this.props.logoB2} alt="" />
        </a>
      </div>
    );
  }
}

class WrapLogoBottom extends React.Component {
  render() {
    return (
      <>
        <div id="wrap-logo-bottom" className="text-center">
          <a href="#0">
            <img src={towerEdLogoA} width="50" alt="" />
            <img className="group-hide" src={towerEdLogoB} width="100" alt="" />
          </a>
        </div>
      </>
    );
  }
}

class ShowSideBarMenu extends React.Component {
  render() {
    let activeMenuItem = this.props.activeMenuItem;

    return (
      <>
        <div id="sidebar" className="sidebar-fixed">
          <div id="sidebar-wrap">
            <WrapLogo
              logoA2={this.props.owner.Institution.logoA2}
              logoB2={this.props.owner.Institution.logoB2}
            />
            <div id="sidebar-content" className="aux">
              <ul id="nav" className="nav">
                <li className="wrap-menu-button">
                  <a
                    href="#0"
                    id="menu-button-hide-show"
                    className="icon-fa icon-arrow-left"
                  ></a>
                </li>
                {this.props.menuItems.map((menuItem, index) => (
                  // set class to active if menu name is "Home"
                  <li
                    key={index}
                    className={activeMenuItem === menuItem.name ? "active" : ""}
                  >
                    <a href="#0" className={"icon-fa " + menuItem.icon}>
                      <span className="group-hide">{menuItem.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <WrapLogoBottom />
          </div>
        </div>
      </>
    );
  }
}

export default ShowSideBarMenu;
