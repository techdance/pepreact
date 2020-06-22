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
                <span className="group-hide">Committees &amp; Teams</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-chart-pie">
                <span className="group-hide">Program Management</span>
              </a>
            </li>

            <li>
              <a href="#" className="icon-fa icon-copy">
                <span className="group-hide"> My Tiles</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon-fa icon-clone">
                <span className="group-hide"> My Files</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-th-large">
                <span className="group-hide">Resources</span>
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
                    <a href="#" className="icon-fa icon-chart-pie">
                      <span className="group-hide">Program Management</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="icon-fa icon-copy">
                      <span className="group-hide"> My Tiles</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon-fa icon-clone">
                      <span className="group-hide"> My Files</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-th-large">
                      <span className="group-hide">Resources</span>
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
                                    others have matched with you as recommended
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
                            src="images/Gordon.png"
                            alt=""
                          />
                          <span className="user-name">Hello, Gordon</span>
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
                      <li className="breadcrumb-item active">Home</li>
                    </ol>
                  </nav>
                  <section className="row row-custom announcements mb-4">
                    <div className="col-lg-12">
                      <div className="box box-border-radius box-shadow bg-white w-100">
                        <h2 className="box-subhead icon-fa-box icon-bullhorn">
                          {" "}
                          Announcements
                        </h2>

                        <div id="wrap-owl-announcement">
                          <div
                            id="owl-announcement"
                            className="owl-carousel owl-theme"
                          >
                            <div className="item">
                              <p>
                                Fall Term registration is open 2020-04-01 to
                                2020-05-01. <a href="#">Learn More</a>.{" "}
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
                                <a href="https://en.wikipedia.org/w/index.php?title=Ballsbridge_University,_Dominica&action=edit&redlink=1">
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
                      <div className="col-lg-3 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead icon-fa-box icon-chart-pie">
                                {" "}
                                <a
                                  href="#"
                                  className="hover-underline color-black"
                                >
                                  Program Management
                                </a>
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="box-image text-center">
                              <i className="fad fa-chart-pie icon-size-50 color-blue-light-2"></i>
                            </div>
                          </div>
                          <div className="box-bottom list-bullet">
                            <ul>
                              <li>
                                <a href="#">Budget vs. Actuals</a>
                              </li>
                              <li>
                                <a href="bradley best practices screen.html">
                                  Faculty and Course Matrix
                                </a>
                              </li>
                              <li>
                                <a href="bradley templates screen.html">
                                  Program and Space Optimization
                                </a>
                              </li>
                            </ul>
                            <div className="mt-4 text-center">
                              <a href="#" className="btn btn-blue mt-3">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead icon-fa-box icon-clipboard-list-check">
                                <a
                                  href="#"
                                  className="hover-underline color-black"
                                >
                                  Tasks &amp; Overrides
                                </a>
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="box-image text-center">
                              <i className="fad fa-clipboard-list-check icon-size-50 color-blue-light-2"></i>
                            </div>
                          </div>
                          <div className="box-bottom list-bullet">
                            <ul>
                              <li>
                                <a href="#">Adjunct Contracts Approvals</a>
                              </li>
                              <li>
                                <a href="bradley best practices screen.html">
                                  Faculty Evaluations
                                </a>
                              </li>
                              <li>
                                <a href="bradley templates screen.html">
                                  Expense Report Approvals
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Approve Fall Term Schedule &amp; Rosters
                                </a>
                              </li>
                            </ul>

                            <div className="mt-4 text-center">
                              <a href="#" className="btn btn-blue mt-3">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead icon-fa-box icon-user-className pl-45">
                                <a
                                  href="#"
                                  className="hover-underline color-black"
                                >
                                  Committees &amp; Teams
                                </a>
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle">
                            <div className="box-image text-center">
                              <i className="fad fa-users-className icon-size-50 color-blue-light-2"></i>
                            </div>
                          </div>
                          <div className="box-bottom list-bullet">
                            <ul>
                              <li>
                                <a href="#">Student Success Committee</a>
                              </li>
                              <li>
                                <a href="bradley best practices screen.html">
                                  Cross-Department Collaboration
                                </a>
                              </li>
                              <li>
                                <a href="bradley templates screen.html">
                                  Curriculum Committee
                                </a>
                              </li>
                              <li>
                                <a href="bradley templates screen.html">
                                  Accreditation Task Force
                                </a>
                              </li>
                            </ul>
                            <div className="mt-4 text-center">
                              <a href="#" className="btn btn-blue mt-3">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="calendar box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top2 position-relative">
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog"></i>
                              </a>

                              <div className="btn-group btn-group-menu">
                                <h2 className="box-subhead icon-fa-box icon-calendar-regular pl-4">
                                  My Calendar
                                </h2>
                                <a
                                  className="icon-certificate-bg"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  3
                                </a>
                                <div className="dropdown-menu">
                                  <div className="toltip-body">
                                    <div
                                      id="toltip-my-calendar"
                                      className="toltip toltip-1-2"
                                    >
                                      <div
                                        id="toltip-item-1001"
                                        className="toltip-item toltip-overlay mb-1"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          className="close-times"
                                          data-id="1001"
                                        >
                                          <i className="fas fa-times-circle"></i>
                                        </a>
                                        <a
                                          href="#"
                                          className="d-flex align-items-center"
                                        >
                                          <div className="toltip-icon toltip-icon2 toltip-icon-brown">
                                            <i className="far fa-calendar-alt color-white"></i>
                                          </div>
                                          <div className="toltip-text color-white">
                                            <p>College of communications</p>
                                          </div>
                                        </a>
                                      </div>
                                      <div
                                        id="toltip-item-1002"
                                        className="toltip-item toltip-overlay mb-1"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          className="close-times"
                                          data-id="1002"
                                        >
                                          <i className="fas fa-times-circle"></i>
                                        </a>
                                        <a
                                          href="#"
                                          className="d-flex align-items-center"
                                        >
                                          <div className="toltip-icon toltip-icon2 toltip-icon-blue-light">
                                            <i className="far fa-calendar-alt color-white"></i>
                                          </div>
                                          <div className="toltip-text color-white">
                                            <p>College of Business</p>
                                          </div>
                                        </a>
                                      </div>
                                      <div
                                        id="toltip-item-1003"
                                        className="toltip-item toltip-overlay mb-1"
                                      >
                                        <a
                                          href="javascript:void(0)"
                                          className="close-times"
                                          data-id="1003"
                                        >
                                          <i className="fas fa-times-circle"></i>
                                        </a>
                                        <a
                                          href="#"
                                          className="d-flex align-items-center"
                                        >
                                          <div className="toltip-icon toltip-icon2 toltip-icon-green">
                                            <i className="far fa-calendar-alt color-white"></i>
                                          </div>
                                          <div className="toltip-text color-white">
                                            <p>
                                              College of Science &amp;
                                              Engineering
                                            </p>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-middle">
                            {/* define the calendar element */}
                            <div id="my-calendar-container">
                              <div id="my-calendar"></div>
                            </div>

                            <div className="col-md-4 img-resp ac">
                              <div
                                id="chartContainer1"
                                className="resp-mb-4"
                                style={{ height: "300px; width: 100%" }}
                              ></div>
                              <div className="mt-3">
                                Business Communications - COM201
                              </div>
                            </div>
                            <div className="col-md-4 img-resp ac">
                              <div
                                id="chartContainer2"
                                className="resp-mb-4"
                                style={{ height: "300px; width: 100%" }}
                              ></div>
                              <a href="#" className="btn btn-blue mt-3">
                                View More
                              </a>
                            </div>
                            <div className="col-md-4 img-resp">
                              <div
                                id="chartContainer3"
                                className="resp-mb-4"
                                style={{ height: "300px; width: 100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 mb-4">
                        <div className="news box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead icon-fa-box icon-signal-stream pl-45">
                                News
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
                              <h2 className="box-subhead icon-fa-box icon-briefcase-light pl-45">
                                Professional Events
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
                            <a href="#" className="btn btn-blue mt-3">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 mb-4">
                        <div className="communicate box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap mb-4">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead icon-fa-box icon-broadcast-tower-light pl-45">
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
                              <i
                                className="fad fa-desktop icon-size-45"
                                style={{ color: "#008ffa" }}
                              ></i>
                            </a>
                            <a href="#">
                              <i
                                className="fad fa-comments-alt icon-size-45"
                                style={{ color: "#008ffa" }}
                              ></i>
                            </a>
                            <a href="#">
                              <i
                                className="fad fa-phone-volume icon-size-45"
                                style={{ color: "#008ffa" }}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 mb-4">
                        <div className="create-new box box-border-radius box-shadow bg-green">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead icon-fa-box icon-handshake-light pl-45 color-black">
                                ENGAGE YOUR TEAM?
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <i className="fas fa-cog color-white"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle color-black text-center">
                            Share Interests and Collaborate!
                          </div>
                          <div className="box-bottom text-center d-flex justify-content-center">
                            <a href="#" className="btn btn-blue btn-w-100 mr-4">
                              Collaborate Now
                            </a>
                            <i className="fas fa-handshake icon-size-40 color-white"></i>
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
