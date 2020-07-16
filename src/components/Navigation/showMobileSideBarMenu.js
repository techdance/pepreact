import React from "react";

import towerEdLogoA from "../../assets/images/logo-tower-education-a.png";
import towerEdLogoB from "../../assets/images/logo-tower-education-b.png";

class ShowMobileSideBarMenu extends React.Component {
  render() {
    return (
      <>
        <div id="sidebar-content-mobile" className="menu-mobile">
          <ul id="nav-mobile" className="nav">
            <li className="active">
              <a href="#" className="icon-fa icon-home">
                <span className="group-hide">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-calendar">
                <span className="group-hide">My Calendar</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-user-group">
                <span className="group-hide">Committees & Teams</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-book-reader icon-solid">
                <span className="group-hide">My Advisees</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-book">
                <span className="group-hide">My Courses</span>
              </a>
            </li>
            <li className="">
              <a href="#" className="icon-fa icon-book-title">
                <span className="group-hide">My Projects</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-copy">
                <span className="group-hide"> My Files</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-th-large">
                <span className="group-hide">Resources</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-sun-haze">
                <span className="group-hide">Opportunities</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-user-friends icon-solid">
                <span className="group-hide">Recommended Partners</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-settings">
                <span className="group-hide">Settings</span>
              </a>
            </li>
          </ul>
          <div className="footer-sidebar-mobile">
            <div id="wrap-Logobottom" className="text-center">
              <a href="#">
                <img src={towerEdLogoA} width="50" />
                <img className="group-hide" src={towerEdLogoB} width="100" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowMobileSideBarMenu;
