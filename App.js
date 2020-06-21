import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="menu-top-responsive" className="">
          <div id="wrap-logo">
            <a href="#" logo>
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
                <a href="#" logo>
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
                                  <img src="images/randy.png" width="48" />
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Randy Wolff uploaded a document in What
                                    Artificial Intelligence Can Do for Small
                                    Business project{" "}
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
                                  <p>
                                    Inez Campos was added to the Ethics in
                                    Multinational Management project{" "}
                                  </p>
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
                                  <p>Missed call from Li Wei </p>
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
                      <li className="breadcrumb-item active">
                        <a href="#">Home</a>
                      </li>
                    </ol>
                  </nav>
                  <section className="row row-custom announcements mb-4">
                    <div className="col-lg-12">
                      <div className="box box-border-radius box-shadow bg-white w-100">
                        <h2 className="box-subhead">
                          <i className="fas fa-bullhorn"></i> Announcements
                        </h2>

                        <div id="wrap-owl-announcement">
                          <div
                            id="owl-announcement"
                            className="owl-carousel owl-theme"
                          >
                            <div className="item">
                              <p>
                                Fall Term registration is open Wednesday,
                                2020-04-01 to 2020-05-01.{" "}
                                <a href="#">Learn More</a>.{" "}
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                AHEA Conference Grant Deadline is 2020-08-26.
                                <br /> <a href="#">Learn More</a>.{" "}
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                Help us welcome our newest CollaboratED members:
                                Georgia International University; Ballsbridge
                                University, Dominica; and Edinburgh Institute
                                for Global Affairs.{" "}
                                <a href="https://en.wikipedia.org/w/index.php?title=Ballsbridge_University,_Dominica&amp;action=edit&amp;redlink=1">
                                  Learn More
                                </a>
                                .{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div id="dots-number"></div>
                      </div>
                    </div>
                  </section>
                  <section className="three-columns">
                    <div className="row row-custom mb-4 sortable">
                      <div className="col-lg-4 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="fas fa-cogs"></i>Resources
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="box-image text-center">
                              <img src="images/icon-resources.png" alt=" " />
                            </div>
                          </div>
                          <div className="box-bottom list-bullet">
                            <ul>
                              <li>
                                <a href="#">Getting Started</a>
                              </li>
                              <li>
                                <a href="#">Best Practices</a>
                              </li>
                              <li>
                                <a href="#">Templates</a>
                              </li>
                              <li>
                                <a href="#">Tutorial</a>
                              </li>
                              <li>
                                <a href="#">
                                  More Resources{" "}
                                  <i className="fas fa-angle-double-right fa-xs"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead pl-0">
                                <img
                                  src="images/icon-refresh-black.png"
                                  className="mr-2"
                                  width="25"
                                />
                                Committees &amp; Teams
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="box-image text-center">
                              <img src="images/icon-committees.png" alt="" />
                            </div>
                          </div>
                          <div className="box-bottom list-bullet">
                            <ul>
                              <li>
                                <a href="#">International Business Partners</a>
                              </li>
                              <li>
                                <a href="#">MBA Online Exploratory</a>
                              </li>
                              <li>
                                <a href="#">New Faculty Mentors</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-4">
                        <div className="calendar box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="far fa-calendar-alt"></i>My
                                Calendar
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle">
                            {/* define the calendar element */}
                            <div id="my-calendar-container">
                              <div id="my-calendar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 mb-4 my-projects">
                        <div className="box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="fas fa-address-card"></i> My
                                Courses
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box btn-menu"
                              >
                                <i className="fas fa-cog"></i>
                              </a>

                              <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                                <ul>
                                  <li>
                                    <a href="#">Create New Course</a>
                                  </li>
                                  <li>
                                    <a href="#">Go to My Course</a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn-remove"
                                    >
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-middle">
                              <div className="table-wrapper-scroll-x my-custom-scrollbar">
                                <table className="table table2 table-sm">
                                  <thead>
                                    <th align="left">COURSE NAME/NUMBER</th>
                                    <th align="center">SCHEDULE</th>
                                    <th align="center">LOCATION</th>
                                    <th align="center">ROSTER</th>
                                    <th align="center">SYLLABUS</th>
                                    <th align="center">ATTENDANCE</th>
                                    <th align="center">GRADEBOOK</th>
                                    <th align="center">REPORTS</th>
                                  </thead>
                                  <tbody>
                                    <tr className="row-color-blue">
                                      <td>
                                        BUSINESS IN THE GLOBAL POLITICAL
                                        ENVIRONMENT
                                        <br />
                                        BUS105
                                      </td>
                                      <td className="align-center">
                                        <span className="txt">T</span>
                                        <span className="txt">TH</span>
                                        <span className="d-block">
                                          10:00-11:00 AM
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <i
                                          className="fa fa-university font20"
                                          aria-hidden="true"
                                        ></i>
                                        <span className="d-block">
                                          McMurtry Hall-Room 32
                                        </span>
                                      </td>
                                      <td className="align-center font20">
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#rosterModal"
                                        >
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-blue.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-check-blue.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                      <td className="align-center">
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#gradebookModal"
                                        >
                                          <img
                                            src="images/icon-doc-list-blue.png"
                                            height="40"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-stat-blue.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                    </tr>
                                    <tr className="row-color-green">
                                      <td>
                                        EMERGING ECONOMICS
                                        <br />
                                        BUS110
                                      </td>
                                      <td className="align-center">
                                        <span className="txt">M</span>
                                        <span className="txt">W</span>
                                        <span className="txt">F</span>
                                        <span className="d-block">
                                          2:30-3:30 PM
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <i
                                          className="fa fa-university font20"
                                          aria-hidden="true"
                                        ></i>
                                        <span className="d-block">
                                          McMurtry Hall-Room 47
                                        </span>
                                      </td>
                                      <td className="align-center font20">
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#rosterModal"
                                        >
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-green.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-check-green.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                      <td className="align-center">
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#gradebookModal"
                                        >
                                          <img
                                            src="images/icon-doc-list-green.png"
                                            height="40"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-stat-green.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                    </tr>
                                    <tr className="row-color-orange">
                                      <td>
                                        <a
                                          href="bradley blendED course screen.html"
                                          className="color-inherit link"
                                        >
                                          ETHICS IN MULTINATIONAL MANAGEMENT
                                          <br />
                                          BUS131
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <span className="txt">M</span>
                                        <span className="txt">W</span>
                                        <span className="txt">F</span>
                                        <span className="d-block">
                                          1:00 PM - 2:00 PM PM
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <i className="font20">
                                          <img
                                            src="images/Ethics-online-orange.png"
                                            width="22"
                                          />
                                        </i>
                                        <span className="d-block">
                                          Online Learning-Room 6
                                        </span>
                                      </td>
                                      <td className="align-center font20">
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#rosterModal"
                                        >
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fas fa-male"
                                            aria-hidden="true"
                                          ></i>
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-orange.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                      <td className="align-center">
                                        <img
                                          src="images/icon-doc-check-orange.png"
                                          height="40"
                                          alt=""
                                        />
                                      </td>
                                      <td className="align-center">
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#gradebookModal"
                                        >
                                          <img
                                            src="images/icon-doc-list-orange.png"
                                            height="40"
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td className="align-center">
                                        <div className="dropdown">
                                          <a href="javascript:void(0);">
                                            <img
                                              src="images/icon-doc-stat-orange.png"
                                              height="40"
                                              alt="stat"
                                            />
                                          </a>

                                          <div
                                            className="dropdown-menu dropdown-menu-toltip"
                                            aria-labelledby="dropdownMenu2"
                                          >
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              className="reportStat"
                                            >
                                              <tr>
                                                <td
                                                  className="first"
                                                  valign="middle"
                                                >
                                                  <i className="fas fa-sliders-h"></i>
                                                </td>
                                                <td className="second">
                                                  <a href="#">
                                                    <strong>
                                                      Add, Drop, or Withdraw
                                                    </strong>
                                                    <br />
                                                    <em>
                                                      Last Accessed 1/31/2020
                                                    </em>
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  className="first"
                                                  valign="middle"
                                                >
                                                  <i className="fas fa-user-plus"></i>
                                                </td>
                                                <td className="second">
                                                  <a href="#">
                                                    <strong>
                                                      Student Engagement
                                                    </strong>
                                                    <br />
                                                    <em>
                                                      Last Accessed 2/25/2020
                                                    </em>
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  className="first"
                                                  valign="middle"
                                                >
                                                  <i className="fas fa-flag-checkered"></i>
                                                </td>
                                                <td className="second">
                                                  <a href="#">
                                                    <strong>
                                                      Plagiarism Tracker
                                                    </strong>
                                                    <br />
                                                    <em>
                                                      Last Accessed 1/31/2020
                                                    </em>
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4 my-projects">
                        <div className="recommended box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i
                                  className="fa fa-users"
                                  aria-hidden="true"
                                ></i>
                                My Advisees
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>

                            <div className="box-middle">
                              <div className="item d-flex">
                                <div className="item-img partner-img position-relative">
                                  <a href="javascript:void(0);">
                                    <img src="images/Erika.png" width="59" />
                                  </a>
                                  <div className="toltip3 any-toltip">
                                    <div className="d-flex">
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-1.png"
                                          width="50"
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-2.png"
                                          width="50"
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-3.png"
                                          width="50"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-text">
                                  <a href="#">
                                    <span className="partner partner-name color-black">
                                      Erika Anderson
                                    </span>
                                  </a>
                                  <span className="partner partner-title color-black">
                                    Sophomore, Economics​
                                  </span>
                                </div>
                              </div>
                              <div className="item d-flex">
                                <div className="item-img partner-img position-relative">
                                  <a href="javascript:void(0);">
                                    <img src="images/Brittany.png" width="59" />
                                  </a>
                                  <div className="toltip3 any-toltip">
                                    <div className="d-flex">
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-1.png"
                                          width="50"
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-2.png"
                                          width="50"
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-3.png"
                                          width="50"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-text">
                                  <a href="#">
                                    <span className="partner partner-name color-black">
                                      Brittany Simms
                                    </span>
                                  </a>
                                  <span className="partner partner-title color-black">
                                    Sophomore, Business
                                  </span>
                                </div>
                              </div>
                              <div className="item d-flex">
                                <div className="item-img partner-img position-relative">
                                  <a href="javascript:void(0);">
                                    <img src="images/Tedd.png" width="59" />
                                  </a>
                                  <div className="toltip3 any-toltip">
                                    <div className="d-flex">
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-1.png"
                                          width="50"
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-2.png"
                                          width="50"
                                        />
                                      </a>
                                      <a href="#">
                                        <img
                                          src="images/contact-partner-3.png"
                                          width="50"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-text">
                                  <a href="#">
                                    <span className="partner partner-name color-black">
                                      Tedd Warner
                                    </span>
                                  </a>
                                  <span className="partner partner-title color-black">
                                    Sophomore, Business
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="box-bottom text-center font-weight-bold position-relative pt-4">
                              <a
                                href="javascript:void();"
                                className="btn btn-blue btn-w-100"
                                id="partner-search"
                              >
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="news box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="fas fa-comments"></i>News
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box"
                              >
                                <i className="fas fa-cog"></i>
                              </a>
                              <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                                <ul>
                                  <li>
                                    <a href="#">More News</a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn-remove"
                                    >
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="item link-tw">
                              <a href="#">
                                <span className="sp-tw">Inside Higher Ed</span>
                                <span className="details">
                                  Study of Student Learning Outcomes
                                </span>
                              </a>
                            </div>
                            <div className="item link-tw">
                              <a href="#">
                                <span className="sp-tw">AHEA</span>
                                <span className="details">
                                  2020 Study Abroad Outlook
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="news box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="fa fa-users"></i>Professional
                                Events
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box"
                              >
                                <i className="fas fa-cog"></i>
                              </a>
                              <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                                <ul>
                                  <li>
                                    <a href="#">Sort by Newest </a>
                                  </li>
                                  <li>
                                    <a href="#">Sort by Oldest</a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn-remove"
                                    >
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="item link-tw">
                              <a href="#">
                                <span className="sp-tw">
                                  NBEA 2020 Annual Convention and Tradeshow
                                </span>
                                <span className="color-black">
                                  2020-04-02 to 2020-04-11 Boston, MA, USA{" "}
                                </span>
                              </a>
                            </div>
                            <div className="item link-tw">
                              <a href="#">
                                <span className="sp-tw">
                                  AACSB International Conference and Annual
                                  Meeting
                                </span>
                                <span className="color-black">
                                  2020-04-26 to 2020-04-28 Denver, CO, USA{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="box-bottom text-center">
                            <a href="#" className="view-more">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="communicate box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="fas fa-wifi rotate45deg"></i>
                                Communicate Now
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box"
                              >
                                <i className="fas fa-cog"></i>
                              </a>
                              <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                                <ul>
                                  <li>
                                    <a href="#">View Messages</a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="btn-remove"
                                    >
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box-middle text-center wrap-images d-flex justify-content-between">
                            <a href="#">
                              <img src="images/desktop.png" width="62" />
                            </a>
                            <a href="#">
                              <img src="images/sms-circle.png" alt="" />
                            </a>
                            <a href="#">
                              <img src="images/phone-circle.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="create-new box box-border-radius box-shadow bg-blue-light">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead color-white">
                                <i className="fas fa-copy"></i>Create New Course
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog color-white"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle color-white text-center">
                            Take your course to the classroom with BlendED.
                          </div>
                          <div className="box-bottom text-center">
                            <a href="#" className="btn btn-green">
                              Start Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
