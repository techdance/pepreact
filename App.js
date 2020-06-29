import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="menu-top-responsive" className="">
          <div id="wrap-logo">
            <a href="#" logo="true">
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
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-user-group">
                <span className="group-hide">Committees & Teams</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-book-reader">
                <span className="group-hide">My Advisees</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-book">
                <span className="group-hide">My Courses</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-book-title">
                <span className="group-hide">My Projects</span>
              </a>
            </li>

            <li className="disabled-link">
              <a href="#" className="icon-fa icon-clone">
                <span className="group-hide"> My Tiles</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-copy">
                <span className="group-hide"> My Files</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-th-large">
                <span className="group-hide">Resources</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-sun-haze">
                <span className="group-hide">Opportunities</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-users">
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
        <div id="container">
          <div id="sidebar" className="sidebar-fixed">
            <div id="sidebar-wrap">
              <div id="wrap-logo">
                <a href="#" logo="true">
                  <img src="images/logo-a.png" />
                  <img className="group-hide" src="images/logo-b.png" />
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
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-user-group">
                      <span className="group-hide">Committees &amp; Teams</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-book-reader">
                      <span className="group-hide">My Advisees</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon-fa icon-book">
                      <span className="group-hide">My Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon-fa icon-book-title">
                      <span className="group-hide">My Projects</span>
                    </a>
                  </li>

                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-clone">
                      <span className="group-hide"> My Tiles</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon-fa icon-copy">
                      <span className="group-hide"> My Files</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-th-large">
                      <span className="group-hide">Resources</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-sun-haze">
                      <span className="group-hide">Opportunities</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-users">
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
                  <img src="images/logo-tower-education-a.png" width="50" />
                  <img
                    className="group-hide"
                    src="images/logo-tower-education-b.png"
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
                  <section className="top">
                    <div className="top-icon top-icon-badges">
                      <div className="btn-group btn-group-menu">
                        <a
                          href="javascript:void(0);"
                          type="button"
                          className="top-icon-fa top-icon-award"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="note">
                            <span className="outer">1</span>
                          </span>
                        </a>
                        <div className="dropdown-menu">
                          <div className="toltip toltip-overlay p-3">
                            <div className="toltip-header">
                              <div className="toltip-title icon-fa-box icon-award pl-4">
                                Badges
                              </div>
                              <div className="toltip-close">
                                <a href="#" data-dismiss="modal">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                              </div>
                            </div>
                            <div className="toltip-body text-center">
                              <div className="wrap-icon">
                                <i
                                  className="fad fa-chart-network icon-size-120 mt-3 mb-3"
                                  style={{ color: "#6C389B" }}
                                ></i>
                              </div>
                              <p>
                                Congratulations! You Earned a Networking Badge.
                              </p>
                            </div>
                            <div className="toltip-footer text-center">
                              <a href="#" className="btn btn-blue m-auto">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="top-icon ">
                      <div className="btn-group btn-group-menu">
                        <a
                          href="javascript:void(0);"
                          className="top-icon-fa top-icon-bell"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="note">
                            <span className="outer">5</span>
                          </span>
                        </a>
                        <div className="dropdown-menu">
                          <div id="notification-toltip" className="toltip">
                            <div className="toltip-body">
                              <div
                                id="toltip-item-1"
                                className="toltip-item toltip-overlay d-flex"
                              >
                                <a href="#" className="close-times" data-id="1">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-image">
                                  <img src="images/bradley.png" width="48" />
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Bradley has started the Ethics in
                                    Multinational Management project
                                  </p>
                                </div>
                              </div>
                              <div
                                id="toltip-item-2"
                                className="toltip-item toltip-overlay d-flex"
                              >
                                <a href="#" className="close-times" data-id="2">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-icon toltip-icon-green">
                                  <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Karthic Koothrappali, Joanne Byrne and
                                    others have matched with you as suggested
                                    partners{" "}
                                  </p>
                                </div>
                              </div>
                              <div
                                id="toltip-item-3"
                                className="toltip-item toltip-overlay d-flex"
                              >
                                <a href="#" className="close-times" data-id="3">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-image">
                                  <img src="images/Inez.png" width="48" />
                                </div>
                                <div className="toltip-text">
                                  <p>Bradley sent you an invitation </p>
                                </div>
                              </div>
                              <div
                                id="toltip-item-4"
                                className="toltip-item toltip-overlay d-flex"
                              >
                                <a href="#" className="close-times" data-id="4">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-icon toltip-icon-blue">
                                  <i
                                    className="fas fa-bullhorn"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Register today for the International
                                    Conference on Big Data in Business{" "}
                                  </p>
                                </div>
                              </div>
                              <div
                                id="toltip-item-5"
                                className="toltip-item toltip-overlay d-flex"
                              >
                                <a href="#" className="close-times" data-id="5">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-image">
                                  <img src="images/Li.png" width="48" />
                                </div>
                                <div className="toltip-text">
                                  <p>Missed call from Randy Wolff</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="top-icon top-icon-message">
                      <div className="btn-group btn-group-menu">
                        <a
                          href="javascript:void(0);"
                          className="top-icon-fa top-icon-comment"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="note">
                            <span className="outer">3</span>
                          </span>
                        </a>
                        <div className="dropdown-menu">
                          <div id="email-toltip" className="toltip">
                            <div className="toltip-body">
                              <div
                                id="toltip-item-1"
                                className="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5"
                              >
                                <a href="#" className="close-times" data-id="1">
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="status-email"></div>
                                <div className="toltip-text p-2 pl-4">
                                  <div className="toltip-header">
                                    <div className="toltip-header-left p0">
                                      <p>Clinton Harris</p>
                                    </div>
                                    <div className="toltip-header-right text-right p0">
                                      <p>9:08 PM </p>
                                    </div>
                                  </div>
                                  <div className="toltip-subhead p0">
                                    <p>Welcome to AHEA</p>
                                  </div>
                                  <div className="toltip-content p0">
                                    <p>
                                      We’re so glad you are taking advantage of
                                      the benefits of AHEA membership. Enclosed
                                      please find…
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="toltip-item-2"
                                className="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5"
                              >
                                <a href="#" className="close-times" data-id="2">
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="status-email"></div>
                                <div className="toltip-text p-2 pl-4">
                                  <div className="toltip-header">
                                    <div className="toltip-header-left p0">
                                      <p>Clinton Harris</p>
                                    </div>
                                    <div className="toltip-header-right text-right p0">
                                      <p>4:12 PM </p>
                                    </div>
                                  </div>
                                  <div className="toltip-subhead p0">
                                    <p>Your syllabus is available.</p>
                                  </div>
                                  <div className="toltip-content p0">
                                    <p>
                                      Your syllabus template for the global
                                      business course is currently attached for
                                      review.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="toltip-item-3"
                                className="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5"
                              >
                                <a href="#" className="close-times" data-id="3">
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="status-email"></div>
                                <div className="toltip-text p-2 pl-4">
                                  <div className="toltip-header">
                                    <div className="toltip-header-left p0">
                                      <p>Inez Campos </p>
                                    </div>
                                    <div className="toltip-header-right text-right p0">
                                      <p>2:23 PM </p>
                                    </div>
                                  </div>
                                  <div className="toltip-subhead p0">
                                    <p>Academic Paper</p>
                                  </div>
                                  <div className="toltip-content p0">
                                    <p>
                                      Hello Bradley. I found an academic paper
                                      that would support our collaboration –
                                      relatively new and incorporates the cloud.{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="toltip-item-4"
                                className="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5"
                              >
                                <a href="#" className="close-times" data-id="4">
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="toltip-text p-2 pl-4">
                                  <div className="toltip-header">
                                    <div className="toltip-header-left p0">
                                      <p>Brittany Simms</p>
                                    </div>
                                    <div className="toltip-header-right text-right p0">
                                      <p>11:46 PM </p>
                                    </div>
                                  </div>
                                  <div className="toltip-subhead p0">
                                    <p>Chapter 1 Questions</p>
                                  </div>
                                  <div className="toltip-content p0">
                                    <p>
                                      Hi Dr. Dexter – Chapter 1 has me wondering
                                      about the implications of regulations
                                      globally as well.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="toltip-item-5"
                                className="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5"
                              >
                                <a href="#" className="close-times" data-id="5">
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="toltip-text p-2 pl-4">
                                  <div className="toltip-header">
                                    <div className="toltip-header-left p0">
                                      <p>Inez Campos </p>
                                    </div>
                                    <div className="toltip-header-right text-right p0">
                                      <p>8:59 PM </p>
                                    </div>
                                  </div>
                                  <div className="toltip-subhead p0">
                                    <p>Review Questions</p>
                                  </div>
                                  <div className="toltip-content p0">
                                    <p>
                                      Hello Bradley. Looking forward to
                                      consolidating our review questions into a
                                      central area.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="top-icon top-icon-user">
                      <div className="btn-group btn-group-menu">
                        <a
                          href="javascript:void(0);"
                          className="btn-menu"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            className="img-circle img-border-blue"
                            src="images/bradley.png"
                            alt=""
                          />
                          <span className="user-name">Hello, Bradley</span>
                        </a>
                        <div className="dropdown-menu">
                          <div id="notification-toltip" className="toltip">
                            <div
                              id="user-toltip"
                              className="toltip menu-toltip toltip-overlay"
                            >
                              <ul>
                                <li>
                                  <a href="bradley profile 1 screen.html">
                                    My Profile
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Settings &amp; Privacy</a>
                                </li>
                                <li>
                                  <a
                                    id="btn-sign-out"
                                    href="javascript:void(0);"
                                    data-toggle="modal"
                                    data-target="#signOutModal"
                                  >
                                    Sign Out
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-top-search">
                      <div className="top-search">
                        <div className="box-search">
                          <form action="">
                            <input type="text" placeholder="Search" />
                            <button type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </div>
                        <div className="box-question">
                          <a href="#">
                            <span className="icon-solid icon-input-search"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Profile</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Matches</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Inez Campos
                      </li>
                    </ol>
                  </nav>
                  <section className="wrap-profile">
                    <div className="row row-custom ">
                      <div className="col-lg-6">
                        <div className="row row-custom sortable">
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Personal Information  */}
                            <div className="personal box box-border-radius box-shadow bg-white position-relative">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <span className="icon-regular icon-user-circle"></span>
                                    Personal Information
                                  </h2>
                                </div>
                                <div className="box-middle d-flex align-items-center">
                                  <div className="content-left">
                                    <div className="bg-profile no-bg">
                                      <img src="images/Inez.png" width="141" />
                                    </div>
                                  </div>
                                  <div className="content-right">
                                    <div className="profile-info profile-name">
                                      <div className="title">
                                        <span className="icon-regular icon-user-alt"></span>{" "}
                                        Name
                                      </div>
                                      <div className="text">
                                        <a href="#" className="cl-gray">
                                          Dr. Inez Campos
                                        </a>
                                      </div>
                                    </div>
                                    <div className="profile-info profile-title">
                                      <div className="title">
                                        <span className="icon-regular icon-user-tie"></span>{" "}
                                        Position
                                      </div>
                                      <div className="text">
                                        <a href="#" className="cl-gray">
                                          Professor
                                        </a>
                                      </div>
                                    </div>
                                    <div className="mt-2 d-flex">
                                      <a href="#">
                                        <span className="wrap-fa-comment">
                                          <i className="far fa-comment-alt-lines"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-blue ml-3"
                                        data-toggle="modal"
                                        data-target="#inviteModal"
                                      >
                                        INVITE
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="box-middle">
                                  <h4>
                                    <span className="icon-regular icon-user-cog"></span>{" "}
                                    Status
                                  </h4>
                                  <p>
                                    "Education is not the filling of a pail, but
                                    the lighting of a fire." — W.B. Yeats
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/*END COL */}
                          <div className="col-lg-12 mb-4">
                            {/* Communication Preferences */}
                            <div className="institution box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead mw-100">
                                    <span className="icon-regular icon-comment-dots"></span>{" "}
                                    Communication Preferences
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="content-icon">
                                    <p className="mb-1">
                                      <span className="icon-regular icon-comment-check"></span>{" "}
                                      <span className="cl-gray">
                                        Portuguese
                                      </span>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-1">
                                      <span className="icon-regular icon-comment-medical"></span>{" "}
                                      <span className="cl-gray">English</span>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-1">
                                      <span className="icon-regular icon-comment-medical"></span>{" "}
                                      <span className="cl-gray">Spanish</span>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-1">
                                      <span className="icon-regular icon-envelope"></span>{" "}
                                      <a
                                        href="mailto:ICampos@ULisboa.pt"
                                        className="dont-break-out"
                                      >
                                        ICampos@ULisboa.pt
                                      </a>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-1">
                                      <span className="icon-regular icon-phone-office"></span>{" "}
                                      <a href="tel:+13512112345">
                                        +1 351-21-12345
                                      </a>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-1">
                                      <span className="icon-regular icon-desktop-alt"></span>{" "}
                                      <a
                                        href="www.ulisboa.pt"
                                        className="dont-break-out"
                                      >
                                        www.ulisboa.pt
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END COL */}
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Professional Bio */}
                            <div className="profesional box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <span className="icon-regular icon-user-secret"></span>{" "}
                                    Professional Bio
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="row row-custom mb-4">
                                    <div className="col-md-12">
                                      <span className="icon-regular icon-camcorder"></span>{" "}
                                      <h4>
                                        <strong>Introduction Video</strong>
                                      </h4>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="wrap-video img-resp mb-2">
                                        <img src="images/Inez-video.png" />
                                        {/* <a href="http://youtube.com/jkfvljfg786" target="_blank">http://youtube.com/jkfvljfg786</a> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-icon position-relative">
                                    <div>
                                      <span className="icon-regular icon-user-ninja"></span>{" "}
                                      <strong>Areas of Expertise</strong>
                                    </div>
                                    <p className="blue-color pl-4">
                                      <a href="#">Entrepreneurship</a>
                                      <br />
                                      <a href="#">Organizational Management</a>
                                      <br />
                                      <a href="#">Quantitative Methods</a>
                                    </p>
                                  </div>
                                  <div className="content-icon plane">
                                    <p>
                                      <span className="icon-regular icon-globe-stand"></span>{" "}
                                      <strong>
                                        7+ Years of International Experience
                                      </strong>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <div>
                                      <span className="icon-regular icon-book-user"></span>{" "}
                                      <strong>Bio</strong>
                                    </div>
                                    <div className="text pl-4">
                                      <p>
                                        I have been with Universidade de
                                        Lisboa's Higher Institute of Economics
                                        and Management for the past 7 years as a
                                        full professor. I have authored over a
                                        dozen reviewed publications.
                                      </p>
                                    </div>
                                  </div>

                                  <a href="#" className="btn btn-blue view-cv">
                                    View CV
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END COL */}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row row-custom sortable">
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Institution Profile */}
                            <div className="comunication box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap position-relative">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <span className="icon-regular icon-hospital-user"></span>
                                    Institution Profile
                                  </h2>
                                </div>
                                <div id="profile-map">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.481551809667!2d-9.160433684653919!3d38.75265777959329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330333cd63e3%3A0xe69947220603097!2sUniversidade%20de%20Lisboa!5e0!3m2!1ses-419!2sus!4v1587495092967!5m2!1ses-419!2sus"
                                    frameBorder="0"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                  ></iframe>
                                </div>
                                <div className="box-middle">
                                  <div className="content-icon">
                                    <span className="icon-regular icon-user-shield"></span>{" "}
                                    <a href="">Universidade de Lisboa</a>
                                  </div>
                                  <div className="content-icon">
                                    <span className="icon-regular icon-calendar-check"></span>{" "}
                                    4-year Institution
                                  </div>
                                  <div className="content-icon">
                                    <span className="icon-regular icon-globe"></span>{" "}
                                    <a
                                      target="_blank"
                                      href="https://www.google.com/maps/place/Universidade+de+Lisboa/@38.7526578,-9.1604337,17z/data=!3m1!4b1!4m5!3m4!1s0xd19330333cd63e3:0xe69947220603097!8m2!3d38.7526578!4d-9.158245"
                                    >
                                      Lisbon, PRT
                                    </a>
                                  </div>
                                  <div className="content-icon">
                                    <span className="icon-regular icon-globe-americas"></span>{" "}
                                    <a
                                      target="_blank"
                                      href="https://www.google.com/maps/place/Universidade+de+Lisboa/@38.7526578,-9.1604337,17z/data=!3m1!4b1!4m5!3m4!1s0xd19330333cd63e3:0xe69947220603097!8m2!3d38.7526578!4d-9.158245"
                                    >
                                      Europe
                                    </a>
                                  </div>
                                  <div className="content-icon">
                                    <span className="icon-regular icon-calendar-week"></span>{" "}
                                    Semester
                                  </div>
                                  <div className="content-icon">
                                    <span className="icon-regular icon-business-time"></span>{" "}
                                    Higher Institute of Economics and Management
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* END COL */}
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Credentials */}
                            <div className="credentials box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <span className="icon-regular icon-id-card"></span>{" "}
                                    Credentials
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="content-icon">
                                    <p className="mb-0">
                                      <span className="icon-regular icon-trophy-alt"></span>{" "}
                                      <strong>Professional Memberships</strong>
                                    </p>
                                    <p className="blue-color pl-4">
                                      <a href="#">
                                        European University Association
                                        <br />
                                        ​League of European Research
                                        Universities
                                      </a>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-0">
                                      <span className="icon-regular icon-file-certificate"></span>{" "}
                                      <strong>Certificates</strong>
                                    </p>
                                    <p className="cl-gray pl-4">NA</p>
                                  </div>
                                  <div className="content-icon">
                                    <p className="mb-0">
                                      <span className="icon-regular icon-user-graduate"></span>{" "}
                                      <strong>Highest Education Level</strong>
                                    </p>
                                    <p className="cl-gray pl-4">BusD</p>
                                  </div>
                                </div>
                                <div className="box-bottom text-center">
                                  <a href="#" className="icon-solid icon-more">
                                    View More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END COL */}
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Collaboration Interests */}
                            <div className="collaboration box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead mw-100">
                                    <span className="icon-regular icon-comment-smile"></span>{" "}
                                    Collaboration Interests
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="row row-custom">
                                    <div className="col-md-12">
                                      <h4 className="mb-3">
                                        <span className="icon-regular icon-s-search pr-3"></span>{" "}
                                        Areas of interest
                                      </h4>
                                      <div className="row">
                                        <div
                                          className="col-md-6"
                                          id="areas-of-interest-1"
                                        >
                                          <div className="areas-of-interest">
                                            <div className="row row-custom position-relative">
                                              <span className="left-corner">
                                                1
                                              </span>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Project</strong>
                                                  <br />
                                                  <small>
                                                    Course Development
                                                  </small>
                                                </p>
                                                <p>
                                                  <strong>
                                                    Preferred Language
                                                  </strong>
                                                  <br />
                                                  <small>Portuguese</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Discipline</strong>
                                                  <br />
                                                  <small>Business</small>
                                                </p>
                                                <p>
                                                  <strong>Region</strong>
                                                  <br />
                                                  <small>North America</small>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row row-custom mt-2">
                                              <div className="col-md-12 d-flex justify-content-between">
                                                <div className="text-center">
                                                  <a
                                                    href="javascript:void(0);"
                                                    data-toggle="modal"
                                                    data-target="#areaInterestVm1Modal"
                                                  >
                                                    View more
                                                  </a>
                                                </div>
                                                {/* <div className="text-center">
																						<a href="javascript:void(0);" data-id="1" className="remove-interest">Remove</a>
																					</div> */}
                                              </div>
                                            </div>
                                            {/* Modal Areas of interest - modalareainterestview more 1 */}
                                            <div
                                              className="modal fade modalToltip modalareainterest"
                                              id="areaInterestVm1Modal"
                                              tabIndex="-1"
                                              role="dialog"
                                              aria-labelledby="modalLabel"
                                              aria-hidden="true"
                                            >
                                              <div
                                                className="modal-dialog"
                                                role="document"
                                              >
                                                <div className="modal-content">
                                                  <div className="modal-header position-relative">
                                                    <div className="toltip-close3">
                                                      <a
                                                        href="javascript:void(0);"
                                                        data-dismiss="modal"
                                                      >
                                                        <i className="fa fa-times-circle"></i>
                                                      </a>
                                                    </div>
                                                    <div className="text-left font15">
                                                      <strong>Project</strong>
                                                      <br />
                                                      Research
                                                    </div>
                                                  </div>
                                                  <div className="modal-body">
                                                    <div className="interest-modal">
                                                      <div className="view-more-interest-modal-inner">
                                                        <div className="view-more-interest-modal-inner-content text-left">
                                                          <div className="row mb-2">
                                                            <div className="col-md-12">
                                                              <strong>
                                                                Descripcion
                                                              </strong>
                                                              <br />I am
                                                              interested in
                                                              finding one or two
                                                              partners to
                                                              conduct a
                                                              longitudinal study
                                                              on the impact of
                                                              Brexit on the EU
                                                              and what changes
                                                              will take place in
                                                              the economy as a
                                                              result.
                                                            </div>
                                                          </div>
                                                          <div className="row  mb-2">
                                                            <div className="col-md-6">
                                                              <strong>
                                                                Discipline
                                                              </strong>
                                                              <br />
                                                              Economic
                                                            </div>
                                                            <div className="col-md-6">
                                                              <strong>
                                                                Delivery Method
                                                              </strong>
                                                              <br />
                                                              Online
                                                            </div>
                                                          </div>
                                                          <div className="row mb-2">
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Collaboration
                                                                Type
                                                              </strong>
                                                              <br />
                                                              Global
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Region
                                                              </strong>
                                                              <br />
                                                              Europe
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Program Length
                                                              </strong>
                                                              <br />
                                                              Semester
                                                            </div>
                                                          </div>
                                                          <div className="row mb-2">
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Preferred
                                                                Language
                                                              </strong>
                                                              <br />
                                                              English
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Credits
                                                              </strong>
                                                              <br />4
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Program Level
                                                              </strong>
                                                              <br />
                                                              Undergraduate
                                                            </div>
                                                          </div>

                                                          <div className="row mb-2">
                                                            <div className="col-md-12">
                                                              <strong>
                                                                Project Date
                                                                Range
                                                              </strong>
                                                              <div className="top-label-range">
                                                                <div className="year-init-range">
                                                                  Today 2020
                                                                </div>
                                                                <div className="year-last-range">
                                                                  2021
                                                                </div>
                                                              </div>
                                                              <div className="wrap-range">
                                                                <input
                                                                  type="range"
                                                                  min="1"
                                                                  max="16"
                                                                  defaultValue="12"
                                                                />
                                                              </div>
                                                              <div className="wrap-range-label width-inherit">
                                                                <ul className="d-flex">
                                                                  <li>Jan</li>
                                                                  <li>Feb</li>
                                                                  <li>Mar</li>
                                                                  <li>Apr</li>
                                                                  <li>May</li>
                                                                  <li>Jun</li>
                                                                  <li>Jul</li>
                                                                  <li>Aug</li>
                                                                  <li>Sep</li>
                                                                  <li>Oct</li>
                                                                  <li>Nov</li>
                                                                  <li>Dec</li>
                                                                  <li>Jan</li>
                                                                  <li>Feb</li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="row text-center pt-2 mt-3">
                                                            <div className="col-md-12 ac">
                                                              <div className="mt-2">
                                                                Created:
                                                                10-31-2019
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* areas of interest */}
                                        </div>
                                        <div
                                          className="col-md-6"
                                          id="areas-of-interest-2"
                                        >
                                          <div className="areas-of-interest">
                                            <div className="row row-custom position-relative">
                                              <span className="left-corner">
                                                2
                                              </span>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Project</strong>
                                                  <br />
                                                  <small>
                                                    General Publication
                                                  </small>
                                                </p>
                                                <p>
                                                  <strong>
                                                    Preferred Language
                                                  </strong>
                                                  <br />
                                                  <small>Portuguese</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Discipline</strong>
                                                  <br />
                                                  <small>Business</small>
                                                </p>
                                                <p>
                                                  <strong>Region</strong>
                                                  <br />
                                                  <small>North America</small>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row row-custom mt-2">
                                              <div className="col-md-12 d-flex justify-content-between">
                                                <div className="text-center">
                                                  <a
                                                    href="javascript:void(0);"
                                                    data-toggle="modal"
                                                    data-target="#areaInterestVm1Modal-2"
                                                  >
                                                    View more
                                                  </a>
                                                </div>
                                                {/* <div className="text-center">
																						<a href="javascript:void(0);" data-id="2" className="remove-interest">Remove</a>
  </div> */}
                                              </div>
                                            </div>
                                            {/* Modal Areas of interest - modalareainterestview more 1 */}
                                            <div
                                              className="modal fade modalToltip modalareainterest"
                                              id="areaInterestVm1Modal-2"
                                              tabIndex="-1"
                                              role="dialog"
                                              aria-labelledby="modalLabel"
                                              aria-hidden="true"
                                            >
                                              <div
                                                className="modal-dialog"
                                                role="document"
                                              >
                                                <div className="modal-content">
                                                  <div className="modal-header position-relative">
                                                    <div className="toltip-close3">
                                                      <a
                                                        href="javascript:void(0);"
                                                        data-dismiss="modal"
                                                      >
                                                        <i className="fa fa-times-circle"></i>
                                                      </a>
                                                    </div>
                                                    <div className="text-left font15">
                                                      <strong>Project</strong>
                                                      <br />
                                                      Academic Journal
                                                    </div>
                                                  </div>
                                                  <div className="modal-body">
                                                    <div className="interest-modal">
                                                      <div className="view-more-interest-modal-inner">
                                                        <div className="view-more-interest-modal-inner-content text-left">
                                                          <div className="row mb-2">
                                                            <div className="col-md-12">
                                                              <strong>
                                                                Descripcion
                                                              </strong>
                                                              <br />I am looking
                                                              for partners to
                                                              help author an
                                                              article on the
                                                              impact of mobile
                                                              technology on
                                                              business acumen.
                                                              There is a lot of
                                                              literature on
                                                              international
                                                              business acumen,
                                                              but nothing has
                                                              been updated since
                                                              the onset of our
                                                              24/7 connectivity
                                                              with mobile
                                                              devices.
                                                            </div>
                                                          </div>
                                                          <div className="row  mb-2">
                                                            <div className="col-md-6">
                                                              <strong>
                                                                Discipline
                                                              </strong>
                                                              <br />
                                                              Business
                                                            </div>
                                                            <div className="col-md-6">
                                                              <strong>
                                                                Delivery Method
                                                              </strong>
                                                              <br />
                                                              Online
                                                            </div>
                                                          </div>
                                                          <div className="row mb-2">
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Collaboration
                                                                Type
                                                              </strong>
                                                              <br />
                                                              Global
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Region
                                                              </strong>
                                                              <br />
                                                              All
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Program Length
                                                              </strong>
                                                              <br />
                                                              Semester
                                                            </div>
                                                          </div>
                                                          <div className="row mb-2">
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Preferred
                                                                Language
                                                              </strong>
                                                              <br />
                                                              English
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Credits
                                                              </strong>
                                                              <br />4
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Program Level
                                                              </strong>
                                                              <br />
                                                              Undergraduate
                                                            </div>
                                                          </div>

                                                          <div className="row mb-2">
                                                            <div className="col-md-12">
                                                              <strong>
                                                                Project Date
                                                                Range
                                                              </strong>
                                                              <div className="top-label-range">
                                                                <div className="year-init-range">
                                                                  Today 2020
                                                                </div>
                                                                <div className="year-last-range">
                                                                  2021
                                                                </div>
                                                              </div>
                                                              <div className="wrap-range">
                                                                <input
                                                                  type="range"
                                                                  min="1"
                                                                  max="100"
                                                                  defaultValue="90"
                                                                />
                                                              </div>
                                                              <div className="wrap-range-label width-inherit">
                                                                <ul className="d-flex">
                                                                  <li>Jan</li>
                                                                  <li>Feb</li>
                                                                  <li>Mar</li>
                                                                  <li>Apr</li>
                                                                  <li>May</li>
                                                                  <li>Jun</li>
                                                                  <li>Jul</li>
                                                                  <li>Aug</li>
                                                                  <li>Sep</li>
                                                                  <li>Oct</li>
                                                                  <li>Nov</li>
                                                                  <li>Dec</li>
                                                                  <li>Jan</li>
                                                                  <li>Feb</li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-12 ac">
                                                            <div className="mt-2">
                                                              Created:
                                                              10-31-2019
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>{" "}
                                          {/* areas of interest */}
                                        </div>
                                        <div
                                          className="col-md-6"
                                          id="areas-of-interest-3"
                                        >
                                          <div className="areas-of-interest">
                                            <div className="row row-custom position-relative">
                                              <span className="left-corner">
                                                2
                                              </span>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Project</strong>
                                                  <br />
                                                  <small>Peer Review</small>
                                                </p>
                                                <p>
                                                  <strong>
                                                    Preferred Language
                                                  </strong>
                                                  <br />
                                                  <small>Portuguese</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Discipline</strong>
                                                  <br />
                                                  <small>Business</small>
                                                </p>
                                                <p>
                                                  <strong>Region</strong>
                                                  <br />
                                                  <small>All</small>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row row-custom mt-2">
                                              <div className="col-md-12 d-flex justify-content-between">
                                                <div className="text-center">
                                                  <a
                                                    href="javascript:void(0);"
                                                    data-toggle="modal"
                                                    data-target="#areaInterestVm1Modal-2"
                                                  >
                                                    View more
                                                  </a>
                                                </div>
                                                {/* <div className="text-center">
																						<a href="javascript:void(0);" data-id="3" className="remove-interest">Remove</a>
  </div> */}
                                              </div>
                                            </div>
                                            {/* Modal Areas of interest - modalareainterestview more 1 */}
                                            <div
                                              className="modal fade modalToltip modalareainterest"
                                              id="areaInterestVm1Modal-3"
                                              tabIndex="-1"
                                              role="dialog"
                                              aria-labelledby="modalLabel"
                                              aria-hidden="true"
                                            >
                                              <div
                                                className="modal-dialog"
                                                role="document"
                                              >
                                                <div className="modal-content">
                                                  <div className="modal-header position-relative">
                                                    <div className="toltip-close3">
                                                      <a
                                                        href="javascript:void(0);"
                                                        data-dismiss="modal"
                                                      >
                                                        <i className="fa fa-times-circle"></i>
                                                      </a>
                                                    </div>
                                                    <div className="text-left font15">
                                                      <strong>Project</strong>
                                                      <br />
                                                      Academic Journal
                                                    </div>
                                                  </div>
                                                  <div className="modal-body">
                                                    <div className="interest-modal">
                                                      <div className="view-more-interest-modal-inner">
                                                        <div className="view-more-interest-modal-inner-content text-left">
                                                          <div className="row mb-2">
                                                            <div className="col-md-12">
                                                              <strong>
                                                                Description
                                                              </strong>
                                                              <br />I am looking
                                                              for partners to
                                                              help author an
                                                              article on the
                                                              impact of mobile
                                                              technology on
                                                              business acumen.
                                                              There is a lot of
                                                              literature on
                                                              international
                                                              business acumen,
                                                              but nothing has
                                                              been updated since
                                                              the onset of our
                                                              24/7 connectivity
                                                              with mobile
                                                              devices.
                                                            </div>
                                                          </div>
                                                          <div className="row  mb-2">
                                                            <div className="col-md-6">
                                                              <strong>
                                                                Discipline
                                                              </strong>
                                                              <br />
                                                              Business
                                                            </div>
                                                            <div className="col-md-6">
                                                              <strong>
                                                                Delivery Method
                                                              </strong>
                                                              <br />
                                                              Online
                                                            </div>
                                                          </div>
                                                          <div className="row mb-2">
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Collaboration
                                                                Type
                                                              </strong>
                                                              <br />
                                                              Global
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Region
                                                              </strong>
                                                              <br />
                                                              All
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Program Length
                                                              </strong>
                                                              <br />
                                                              Semester
                                                            </div>
                                                          </div>
                                                          <div className="row mb-2">
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Preferred
                                                                Language
                                                              </strong>
                                                              <br />
                                                              English
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Credits
                                                              </strong>
                                                              <br />4
                                                            </div>
                                                            <div className="col-md-4">
                                                              <strong>
                                                                Program Level
                                                              </strong>
                                                              <br />
                                                              Undergraduate
                                                            </div>
                                                          </div>

                                                          <div className="row mb-2">
                                                            <div className="col-md-12">
                                                              <strong>
                                                                Project Date
                                                                Range
                                                              </strong>
                                                              <div className="top-label-range">
                                                                <div className="year-init-range">
                                                                  Today 2020
                                                                </div>
                                                                <div className="year-last-range">
                                                                  2021
                                                                </div>
                                                              </div>
                                                              <div className="wrap-range">
                                                                <input
                                                                  type="range"
                                                                  min="1"
                                                                  max="100"
                                                                  defaultValue="90"
                                                                />
                                                              </div>
                                                              <div className="wrap-range-label width-inherit">
                                                                <ul className="d-flex">
                                                                  <li>Jan</li>
                                                                  <li>Feb</li>
                                                                  <li>Mar</li>
                                                                  <li>Apr</li>
                                                                  <li>May</li>
                                                                  <li>Jun</li>
                                                                  <li>Jul</li>
                                                                  <li>Aug</li>
                                                                  <li>Sep</li>
                                                                  <li>Oct</li>
                                                                  <li>Nov</li>
                                                                  <li>Dec</li>
                                                                  <li>Jan</li>
                                                                  <li>Feb</li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-12 ac">
                                                            <div className="mt-2">
                                                              Created:
                                                              10-31-2019
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>{" "}
                                          {/* areas of interest */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END COL */}
                        </div>
                      </div>
                    </div>
                    {/* row */}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
