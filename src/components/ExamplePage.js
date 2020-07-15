import React from "react";

import Example05IN_00511 from "../example05IN_00511.js";
import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";

import towerEdLogoA from "../assets/images/logo-tower-education-a.png";
import towerEdLogoB from "../assets/images/logo-tower-education-b.png";

const breadCrumbList = [
  "Home",
  "Messages",
  "Project Invites",
  "Bradley Dexter",
];

class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <body className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <div id="wrap-logo">
              <a href="#">
                <img src="images/logo.png" />
              </a>
              <a href="#" id="menu-button-responsive">
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
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
          <div id="container">
            <div id="sidebar" className="sidebar-fixed">
              <div id="sidebar-wrap">
                <div id="wrap-logo">
                  <a href="#">
                    <img src="images/logo-a2.png" />
                    <img className="group-hide ml-1" src="images/logo-b2.png" />
                  </a>
                </div>
                <div id="sidebar-content" className="aux">
                  <ul id="nav" className="nav">
                    <li className="wrap-menu-button">
                      <a
                        href="#"
                        id="menu-button-hide-show"
                        className="icon-fa icon-arrow-left"
                      ></a>
                    </li>

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
                      <a
                        href="#"
                        className="icon-fa icon-book-reader icon-solid"
                      >
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
                      <a
                        href="#"
                        className="icon-fa icon-user-friends icon-solid"
                      >
                        <span className="group-hide">Recommended Partners</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-fa icon-settings">
                        <span className="group-hide">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="wrap-logo-bottom" className="text-center">
                  <a href="#">
                    <img src={towerEdLogoA} width="50" />
                    <img
                      className="group-hide"
                      src={towerEdLogoB}
                      width="100"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />
                  </div>
                  <Example05IN_00511 />
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default ExamplePage;
