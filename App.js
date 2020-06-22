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
            <li>
              <a href="#" className="icon-fa icon-book">
                <span className="group-hide">My Courses</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-alarm-clock">
                <span className="group-hide">My Holds</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-usd-square">
                <span className="group-hide">My Financials</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-user-chart">
                <span className="group-hide">My Academics</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-solar-system">
                <span className="group-hide">My Groups</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-book-medical">
                <span className="group-hide">Course Registration</span>
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
                  <li>
                    <a href="#" className="icon-fa icon-book">
                      <span className="group-hide">My Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon-fa icon-alarm-clock">
                      <span className="group-hide">My Holds</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-usd-square">
                      <span className="group-hide">My Financials</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-user-chart">
                      <span className="group-hide">My Academics</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-solar-system">
                      <span className="group-hide">My Groups</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-book-medical">
                      <span className="group-hide">Course Registration</span>
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
                          <div className="toltip toltip-1-3 any-toltip">
                            <div className="toltip-item toltip-overlay d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="toltip-icon toltip-icon-green">
                                  <i className="fas fa-route"></i>
                                </div>
                                <div className="toltip-text font18">
                                  <p>Tour Guide</p>
                                </div>
                              </div>
                              <div className="text-right pr-3">
                                <a href="#" className="color-white">
                                  View More
                                </a>
                              </div>
                            </div>
                            <div className="toltip-item toltip-overlay d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="toltip-icon toltip-icon-blue">
                                  <i className="fas fa-award"></i>
                                </div>
                                <div className="toltip-text font18">
                                  <p>3.5 GPA</p>
                                </div>
                              </div>
                              <div className="text-right pr-3">
                                <a
                                  href="sanaa badges screen.html"
                                  className="color-white"
                                >
                                  View More
                                </a>
                              </div>
                            </div>
                            <div className="toltip-item toltip-overlay d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="toltip-icon toltip-icon-brown">
                                  <i className="fas fa-medal"></i>
                                </div>
                                <div className="toltip-text font18">
                                  <p>Sholar-Athlete</p>
                                </div>
                              </div>
                              <div className="text-right pr-3">
                                <a href="#" className="color-white">
                                  View More
                                </a>
                              </div>
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
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="toltip-icon toltip-icon-green">
                                  <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Summer term tuition payment due May 1, 2020.{" "}
                                    <a
                                      href="#"
                                      style={{
                                        color:
                                          "#ea8f3d;display: inline-block;text-decoration: underline",
                                      }}
                                    >
                                      Pay now.
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div
                                id="toltip-item-2"
                                className="toltip-item toltip-overlay d-flex"
                              >
                                <a href="#" className="close-times" data-id="2">
                                  <i className="fas fa-times-circle"></i>
                                </a>
                                <div className="toltip-icon toltip-icon-blue">
                                  <i
                                    className="fas fa-bullhorn"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Alert! Your passport expires in 120 days.
                                    Click{" "}
                                    <a
                                      href="#"
                                      style={{
                                        color:
                                          "#0693f4;display: inline-block;text-decoration: underline",
                                      }}
                                    >
                                      here
                                    </a>{" "}
                                    for renevwal.
                                  </p>
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
                            src="images/Brittany.png"
                            alt=""
                          />
                          <span className="user-name">Hello, Brittany</span>
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
                          Announcements
                        </h2>

                        <div id="wrap-owl-announcement">
                          <div
                            id="owl-announcement"
                            className="owl-carousel owl-theme"
                          >
                            <div className="item">
                              <p>
                                Fall Term Registration is open Wednesday, open
                                2020-04-01 to 2020-05-01.{" "}
                                <a href="#">Learn More</a>.{" "}
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                Study Skills Workshops have begun for Spring
                                2020.
                                <br /> <a href="#">Learn More</a>.
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                Career &amp; Internship Fair is on Friday,
                                2020-03-13 from 1:00-5:00 PM.{" "}
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
                      <div className="col-lg-3 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-regular icon-solar-system"></span>
                                <a
                                  href="#"
                                  className="hover-underline color-black"
                                >
                                  My Groups
                                </a>
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <span className="icon-solid fa-cog"></span>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle pt-3">
                            <div className="box-image text-center">
                              <span className="icon-duotone icon-solar-system icon-size-60 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
                            </div>
                          </div>
                          <div className="box-bottom list-bullet mt-5">
                            <ul>
                              <li>
                                <a href="#">CHE 200-01 Study Group</a>
                              </li>
                              <li>
                                <a href="#">WESLIT 201-01 Study Group</a>
                              </li>
                              <li>
                                <a href="#">
                                  Beta Gamma Sigma International Business Honor
                                  Society
                                </a>
                              </li>
                              <li>
                                <a href="#">Tidbits and Training</a>
                              </li>
                            </ul>
                          </div>
                          <div className="box-bottom text-center mt-3">
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
                      <div className="col-lg-3 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-regular icon-alarm-clock"></span>
                                My Holds
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <span className="icon-solid fa-cog"></span>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle pt-3">
                            <div className="box-image text-center">
                              <span className="icon-duotone icon-alarm-clock icon-size-60 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
                            </div>
                          </div>
                          <div className="box-bottom list-bullet mt-5">
                            <ul>
                              <li>
                                <a href="#">Financial Holds</a>
                              </li>
                              <li>
                                <a href="#">Academic Holds</a>
                              </li>
                              <li>
                                <a href="#">Other Holds</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-solid icon-usd-square"></span>
                                My Financial
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <span className="icon-solid fa-cog"></span>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle pt-3">
                            <div className="box-image text-center">
                              <span className="icon-duotone icon-usd-square icon-size-60 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
                            </div>
                          </div>
                          <div className="box-bottom list-bullet mt-5">
                            <ul>
                              <li>
                                <a href="#">Financial Aid Summary</a>
                              </li>
                              <li>
                                <a href="#">Financial Aid Award Letter</a>
                              </li>
                              <li>
                                <a href="#">Pay My Bill</a>
                              </li>
                              <li>
                                <a href="#">Refunds</a>
                              </li>
                              <li>
                                <a href="#">Online Support</a>
                              </li>
                              <li>
                                <a href="#">Contact Financial Aid Office</a>
                              </li>
                            </ul>
                          </div>
                          <div className="box-bottom text-center mt-3">
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
                      <div className="col-lg-3 mb-4">
                        <div className="box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-solid icon-user-chart"></span>
                                My Academics
                              </h2>

                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box btn-menu"
                              >
                                <span className="icon-solid fa-cog"></span>
                              </a>
                              <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                                <ul>
                                  <li>
                                    <a href="#">Edit Profile</a>
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

                            <div className="box-middle d-flex">
                              <div className="profile-image position-relative font14 text-center">
                                <a
                                  href="javascript:void(0);"
                                  data-toggle="modal"
                                  data-target="#virtualOfficeModal"
                                  className="color-black"
                                >
                                  <img
                                    src="images/Bradley.png"
                                    alt=""
                                    width="80"
                                  />
                                  <br />
                                  <div className="font12">
                                    <strong>Your Advisor</strong>
                                    <br />
                                    <span>Bradley Dexter</span>
                                  </div>
                                </a>
                              </div>
                              <div className="profile-text font14 list-bullets2">
                                <ul>
                                  <li>
                                    <a href="#">Program Overview</a>
                                  </li>
                                  <li className="mb-2">
                                    <a href="brittany academic progress screen.html">
                                      Academic Progress
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      data-toggle="modal"
                                      data-target="#generalEducationRequirementsModal"
                                    >
                                      Academic Standing
                                    </a>
                                    <br />
                                  </li>
                                  <li className="mb-2">
                                    <a href="#">View Grades</a>
                                  </li>
                                  <li>
                                    <a href="#">Request Credit Evaluation</a>
                                  </li>
                                  <li>
                                    <a href="#">Request Transcript</a>
                                  </li>
                                  <li>
                                    <a href="#">Apply for Graduation</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-bottom">
                              <div className="bg-grey-2 p-2 box-border-radius">
                                <strong>What if I Change My Program?</strong>
                                <p>
                                  <a href="#">Scenario Runner</a>
                                </p>
                                <p className="ac">
                                  <a
                                    href="javascript:void();"
                                    className="btn btn-blue btn-w-100"
                                    id="partner-search"
                                  >
                                    View More
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-9 mb-4 my-projects">
                        <div className="box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box btn-menu"
                              >
                                <span className="icon-solid fa-cog"></span>
                              </a>

                              <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                                <ul>
                                  <li>
                                    <a href="#">Create New Project</a>
                                  </li>
                                  <li>
                                    <a href="#">Go to My Projects</a>
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
                                    <tr align="left">
                                      <h2 className="box-subhead">
                                        <span className="icon-regular icon-book-alt"></span>
                                        My Courses
                                      </h2>
                                    </tr>
                                    <tr align="center" className="text-center">
                                      SCHEDULE
                                    </tr>
                                    <th align="center" className="text-center">
                                      LOCATION
                                    </th>
                                    <th align="center" className="text-center">
                                      INSTRUCTOR
                                    </th>
                                    <th align="center" className="text-center">
                                      SYLLABUS
                                    </th>
                                    <th align="center" className="text-center">
                                      classNameMATES
                                    </th>
                                    <th align="center" className="text-center">
                                      ASSIGNMENTS &amp; EXAMS
                                    </th>
                                    <th align="center" className="text-center">
                                      COURSE PROGRESS
                                    </th>
                                  </thead>
                                  <tbody>
                                    <tr className="row-color row-color-blue">
                                      <td className="bold">
                                        CHEMISTRY
                                        <br />
                                        <span>CHE 200-01</span>
                                      </td>
                                      <td className="align-center">
                                        <span className="square">M</span>
                                        <span className="square">W</span>
                                        <span className="square">F</span>
                                        <br />
                                        2:30&ndash;3:30 PM
                                      </td>
                                      <td className="align-center">
                                        <div className="t-location">
                                          <a href="#">
                                            <span className="icon-duotone icon-backpack icon-size-40"></span>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="align-center">
                                        <span className="wrap-image">
                                          <img
                                            src="images/Chem.png"
                                            width="34"
                                          />
                                          <span className="user-active"></span>
                                        </span>
                                        <span className="org-name">
                                          Shaina Berube
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-tasks icon-size-40"></span>
                                      </td>
                                      <td className="align-center td-person-icon">
                                        <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-file-download icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <div
                                          className="circular-chart"
                                          data-percent="61"
                                          data-size="60"
                                          data-bar-color="#084265"
                                        >
                                          61%
                                        </div>
                                      </td>
                                    </tr>

                                    <tr className="row-color row-color-green">
                                      <td className="bold">
                                        ETHICS IN MULTINATIONAL MGMT
                                        <br />
                                        <span>BUS 131-02</span>
                                      </td>
                                      <td className="align-center">
                                        <span className="square">M</span>
                                        <span className="square">W</span>
                                        <span className="square">F</span>
                                        <br />
                                        1:00&ndash;2:00 PM
                                      </td>
                                      <td className="align-center">
                                        <div className="t-location">
                                          <a href="#">
                                            <span className="icon-duotone icon-browser icon-size-40"></span>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="align-center">
                                        <span className="wrap-image">
                                          <img
                                            src="images/bradley.png"
                                            width="34"
                                          />
                                          <span className="user-active"></span>
                                        </span>
                                        <span className="org-name">
                                          Bradley Dexter
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-tasks icon-size-40"></span>
                                      </td>
                                      <td className="align-center td-person-icon">
                                        <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                                      </td>
                                      <td className="align-center position-relative">
                                        <a
                                          href="#"
                                          type="button"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <span className="icon-duotone icon-file-download icon-size-40"></span>
                                        </a>
                                        <div className="dropdown-menu color-white dropdown-menu-course">
                                          <div className="width-350 toltip-body">
                                            <div
                                              id="toltip-item-course-1"
                                              className="toltip-item toltip-overlay d-flex p-0"
                                            >
                                              <a
                                                href="javascript:void(0)"
                                                className="close-times"
                                                data-id="1"
                                              >
                                                <i className="fas fa-times-circle"></i>
                                              </a>
                                              <div className="p-2 pl-3">
                                                <div className="wrap-icon-hover text-center">
                                                  <i className="fas fa-file-edit fa-2x"></i>
                                                </div>
                                              </div>
                                              <div className="toltip-text text-left p-2 pr-3">
                                                <p>
                                                  <strong>
                                                    Just Business: Multinational
                                                    Corporation and Human
                                                    Rights, Chapter 4
                                                  </strong>
                                                  <br />
                                                  <span>Due 2020-03-13</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              id="toltip-item-course-2"
                                              className="toltip-item toltip-overlay d-flex p-0"
                                            >
                                              <a
                                                href="javascript:void(0)"
                                                className="close-times"
                                                data-id="2"
                                              >
                                                <i className="fas fa-times-circle"></i>
                                              </a>
                                              <div className="p-2 pl-3">
                                                <div className="wrap-icon-hover text-center">
                                                  <i className="fas fa-calendar-check fa-2x"></i>
                                                </div>
                                              </div>
                                              <div className="toltip-text text-left p-2 pr-3">
                                                <p>
                                                  <strong>
                                                    Unit 1, Quiz #2, 2020-03-13
                                                  </strong>
                                                  <br />
                                                  <span>3-13-2020</span>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-center">
                                        <div
                                          className="circular-chart"
                                          data-percent="39"
                                          data-size="60"
                                          data-bar-color="#339900"
                                        >
                                          39%
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="row-color row-color-orange">
                                      <td className="bold">
                                        WETERN LITERATURE
                                        <br />
                                        <span>WEST LIT 201-01</span>
                                      </td>
                                      <td className="align-center">
                                        <span className="square">T</span>
                                        <span className="square">TH</span>
                                        <br />
                                        9:30&ndash;11:00 AM
                                      </td>
                                      <td className="align-center">
                                        <div className="t-location">
                                          <a href="#">
                                            <span className="icon-duotone icon-browser icon-size-40"></span>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="align-center">
                                        <span className="wrap-image">
                                          <img
                                            src="images/Daniel.png"
                                            width="34"
                                          />
                                          <span className="user-active"></span>
                                        </span>
                                        <span className="org-name">
                                          Daniel Kearney
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-tasks icon-size-40"></span>
                                      </td>
                                      <td className="align-center td-person-icon">
                                        <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-file-download icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <div
                                          className="circular-chart"
                                          data-percent="70"
                                          data-size="60"
                                          data-bar-color="#ff993e"
                                        >
                                          70%
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="row-color row-color-blue-light">
                                      <td className="bold">
                                        CHEMISTRY LAB
                                        <br />
                                        <span>CHE 200L-03</span>
                                      </td>
                                      <td className="align-center">
                                        <span className="square">T</span>
                                        <span className="square">TH</span>
                                        <br />
                                        11:30&ndash;1:00 PM
                                      </td>
                                      <td className="align-center">
                                        <div className="t-location">
                                          <a href="#">
                                            <span className="icon-duotone icon-backpack icon-size-40"></span>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="align-center">
                                        <span className="wrap-image">
                                          <img
                                            src="images/Sam.png"
                                            width="34"
                                          />
                                          <span className="user-active"></span>
                                        </span>
                                        <span className="org-name">
                                          Sam Cushman
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-tasks icon-size-40"></span>
                                      </td>
                                      <td className="align-center td-person-icon">
                                        <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-file-download icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <div
                                          className="circular-chart"
                                          data-percent="67"
                                          data-size="60"
                                          data-bar-color="#009fff"
                                        >
                                          67%
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="row-color row-color-brown">
                                      <td className="bold">
                                        CALCULUS 201
                                        <br />
                                        <span>CAL201-04</span>
                                      </td>
                                      <td className="align-center">
                                        <span className="square">T</span>
                                        <span className="square">TH</span>
                                        <br />
                                        3:00&ndash;4:30 PM
                                      </td>
                                      <td className="align-center">
                                        <div className="t-location">
                                          <a href="#">
                                            <span className="icon-duotone icon-backpack icon-size-40"></span>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="align-center">
                                        <span className="wrap-image">
                                          <img src="images/Li.png" width="34" />
                                          <span className="user-active"></span>
                                        </span>
                                        <span className="org-name">
                                          Li Kwak
                                        </span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-tasks icon-size-40"></span>
                                      </td>
                                      <td className="align-center td-person-icon">
                                        <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <span className="icon-duotone icon-file-download icon-size-40"></span>
                                      </td>
                                      <td className="align-center">
                                        <div
                                          className="circular-chart"
                                          data-percent="67"
                                          data-size="60"
                                          data-bar-color="#9f5a14"
                                        >
                                          67%
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
                      <div className="col-lg-3 mb-4">
                        <div className="calendar box box-border-radius box-shadow bg-white height-auto">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-regular fa-calendar-alt"></span>
                                My Calendar
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <span className="icon-solid fa-cog"></span>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle mb-0">
                            {/*	 define the calendar element */}
                            <div id="my-calendar-container">
                              <div id="my-calendar"></div>
                            </div>
                          </div>
                        </div>
                        <div className="box box-border-radius box-shadow bg-white height-auto mt-4">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-regular icon-book-medical"></span>
                                Course Registration
                              </h2>
                              <a href="#" className="icon-setting icon-box">
                                <span className="icon-solid fa-cog"></span>
                              </a>
                            </div>
                          </div>
                          <div className="box-middle mb-0 list-bullet">
                            <ul>
                              <li>
                                <a href="#">Register for Next Term</a>
                              </li>
                              <li>
                                <a href="#">Add/Drop Courses</a>
                              </li>
                              <li>
                                <a href="#">Withdraw from a Course</a>
                              </li>
                              <li>
                                <a href="#">Waitlist Status</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-solid icon-sun-haze"></span>
                                Opportunities
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box"
                              >
                                <span className="icon-solid fa-cog"></span>
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
                            <div className="d-flex ml-2">
                              <div>
                                <div className="item-link">
                                  <a href="#">
                                    <i className="fas fa-circle color-blue-light mr-1"></i>{" "}
                                    Campus Jobs
                                  </a>
                                </div>
                                <div className="item-link">
                                  <a href="#">
                                    <i className="fas fa-circle color-yellow mr-1"></i>{" "}
                                    Study Abroad
                                  </a>
                                </div>
                                <div className="item-link">
                                  <a href="#">
                                    <i className="fas fa-circle color-green mr-1"></i>{" "}
                                    Internships and Externships
                                  </a>
                                </div>
                              </div>
                              <div>
                                <img src="images/Britt.png" width="60" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-regular icon-id-card-alt"></span>
                                Campus Services
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box"
                              >
                                <span className="icon-solid fa-cog"></span>
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
                            <div className="list-bullet">
                              <ul>
                                <li>
                                  <a href="#">Book Store</a>
                                </li>
                                <li>
                                  <a href="#">Library and Lending Services</a>
                                </li>
                                <li>
                                  <a href="#">Career Services</a>
                                </li>
                                <li>
                                  <a href="#">Campus Security</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <span className="icon-regular icon-wifi rotate45deg"></span>
                                Campus Feeds
                              </h2>
                              <a
                                href="javascript:void(0);"
                                className="icon-setting icon-box"
                              >
                                <span className="icon-solid fa-cog"></span>
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
                            <div>
                              <div className="item-link">
                                <a href="#">
                                  <span className="icon-solid icon-wifi rotate45deg color-green-light mr-1"></span>{" "}
                                  Bus Schedule
                                </a>
                              </div>
                              <div className="item-link">
                                <a href="#">
                                  <span className="icon-solid icon-wifi rotate45deg color-green-light mr-1"></span>{" "}
                                  Dining Menu
                                </a>
                              </div>
                              <div className="item-link">
                                <a href="#">
                                  <span className="icon-solid icon-wifi rotate45deg color-green-light mr-1"></span>{" "}
                                  Campus News
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <div className="create-new box box-border-radius box-shadow bg-brown-light">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead color-white">
                                <span className="icon-solid icon-cloud-download-alt"></span>
                                Download Sherpa App
                              </h2>
                              {/* a href="#" className="icon-setting icon-box"><span className="icon-solid fa-cog color-white"></span></a> */}
                            </div>
                          </div>
                          <div className="box-middle color-white text-center mb-0">
                            <div className="d-flex ml-3">
                              <div className="al ml-4">
                                <em>Elevate Global Engagement with Sherpa</em>
                              </div>
                              <div className="ac ml-3">
                                <img src="images/Sherpa.png" className="mb-3" />
                                <br />
                                <a style={{ color: "black" }} href="#">
                                  Download Now
                                </a>
                              </div>
                            </div>
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
