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
                      <div className="d-flex">
                        <div className="top-search">
                          <div className="box-search">
                            <form action="" className="d-flex">
                              <input type="text" placeholder="Search" />
                              <button type="submit">
                                <i className="fas fa-search"></i>
                              </button>
                            </form>
                          </div>
                          <div className="box-question">
                            <a href="#">
                              <img src="images/search-icon.png" width="38" />
                            </a>
                          </div>
                        </div>
                        <a href="#" className="btn btn-grey btn-w-100 ml-3">
                          Submit for Review{" "}
                          <i className="far fa-arrow-alt-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </section>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="bradley home screen.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Profile
                      </li>
                    </ol>
                  </nav>
                  <section className="wrap-profile">
                    <div className="row row-custom ">
                      <div className="col-lg-6">
                        <div className="row row-custom sortable">
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/*  Personal Information */}
                            <div className="personal box box-border-radius box-shadow bg-white position-relative">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <i className="fas fa-user"></i>Personal
                                    Information
                                  </h2>
                                </div>
                                <div className="box-middle d-flex align-items-center">
                                  <div className="content-left">
                                    <div className="bg-profile">
                                      <img
                                        src="images/bradley.png"
                                        width="141"
                                      />
                                    </div>
                                  </div>
                                  <div className="content-right">
                                    <div className="profile-info profile-name">
                                      <div className="title">
                                        <i className="fas fa-user"></i> Name
                                      </div>
                                      <div className="text">
                                        <a href="#" className="cl-gray">
                                          Dr. Bradley Dexter
                                        </a>
                                      </div>
                                    </div>
                                    <div className="profile-info profile-title">
                                      <div className="title">
                                        <i className="fa fa-users"></i> Title
                                      </div>
                                      <div className="text">
                                        <a href="#" className="cl-gray">
                                          Professor
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="box-middle">
                                  <h4>
                                    <i className="far fa-user-cog"></i> My
                                    Thoughts
                                  </h4>
                                  <p>
                                    "Success in business requires training and
                                    discipline and hard work." David Rockefeller
                                  </p>
                                </div>
                              </div>
                              <a
                                href="bradley edit profile screen.html"
                                className="btn btn-blue position-absolute btn-edit-profile"
                              >
                                <span className="position-relative">
                                  Edit Profile
                                  <span className="link-toltip">
                                    Profile 100% Complete
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>{" "}
                          {/* END COL */}
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Communication Preferences */}
                            <div className="institution box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <i className="far fa-comment-dots"></i>{" "}
                                    Communication Preferences
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="row row-custom">
                                    <div className="col-md-12">
                                      <div className="content-icon content-icon2 mb-2 line-height-15">
                                        <i className="far fa-comment-check"></i>{" "}
                                        English
                                      </div>
                                      <div className="content-icon content-icon2 mb-2 line-height-15">
                                        <i className="far fa-comment-plus"></i>{" "}
                                        Spanish
                                      </div>
                                      <div className="content-icon content-icon2 mb-2 line-height-15">
                                        <i className="far fa-envelope"></i>{" "}
                                        <a href="mailto:bdexter@ahea.edu">
                                          bdexter@ahea.edu
                                        </a>
                                      </div>
                                      <div className="content-icon content-icon2 mb-2 line-height-15">
                                        <i className="far fa-phone-office"></i>{" "}
                                        <a href="tel:+1 555-432-1100">
                                          +1 555-432-1100
                                        </a>
                                      </div>
                                      <div className="content-icon content-icon2 mb-2 line-height-15">
                                        <i className="far fa-phone-laptop"></i>{" "}
                                        <a href="tel:+1 555-432-1122">
                                          +1 555-432-1122
                                        </a>
                                      </div>
                                      <div className="content-icon content-icon2 mb-2 line-height-15">
                                        <i className="far fa-desktop-alt"></i>{" "}
                                        <a href="https://www.ahea.edu/about-ahea/college-of-business/bdexter">
                                          https://www.ahea.edu/about-ahea/college-of-business/bdexter
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/*  END COL */}
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Professional Bio */}
                            <div className="profesional box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <i className="fas fa-user"></i>Professional
                                    Bio
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="row row-custom mb-4">
                                    <div className="col-md-12">
                                      <h4 className="mb-3">
                                        <i className="fab fa-youtube"></i>{" "}
                                        Introduction Video
                                      </h4>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="wrap-video img-resp mb-2">
                                        <img src="images/video-bradley.png" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-icon position-relative">
                                    <div>
                                      <i className="fas fa-binoculars"></i>
                                      <strong>Areas of Expertise</strong>
                                    </div>
                                    <p className="blue-color ml20">
                                      <a href="#">
                                        Business Analytics &#38; Intelligence
                                      </a>
                                      <br />
                                      <a href="#">Business Ethics</a>
                                      <br />
                                      <a href="#">
                                        International​ Operations Research &#38;
                                        Management
                                      </a>
                                    </p>
                                  </div>
                                  <div className="content-icon plane">
                                    <p>
                                      <i className="fas fa-plane rotate320deg"></i>
                                      1-2 Years of International Experience
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <div>
                                      <i className="fas fa-portrait"></i>
                                      <strong>Bio</strong>
                                    </div>
                                    <div className="text">
                                      <p>
                                        Divides professional time between
                                        teaching undergraduate courses in both
                                        classroom and online settings, and
                                        providing private consulting
                                        specializing in the growth and
                                        globalization of small businesses. I
                                        also serve on the editorial board of 
                                        <em>
                                          The Academy of Management Journal
                                        </em>
                                        .
                                      </p>
                                    </div>
                                  </div>

                                  <a href="#" className="btn btn-blue view-cv">
                                    View CV
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
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
                                    <i className="fas fa-comments"></i>
                                    Institution Profile
                                  </h2>
                                </div>
                                <div id="profile-map">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11922.656204986277!2d-91.534944!3d41.663!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1578620786378!5m2!1sen!2sus"
                                    frameBorder="0"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                  ></iframe>
                                </div>
                                <div className="box-middle">
                                  <div className="content-icon">
                                    <i className="fas fa-shield-alt"></i>
                                    <a href="">
                                      AHEA University, Iowa City Campus
                                    </a>
                                  </div>
                                  <div className="content-icon">
                                    <i className="fas fa-map"></i>
                                    <a href="#">Google Maps</a>
                                  </div>
                                  <div className="content-icon">
                                    <i className="far fa-building"></i>4-year
                                    Institution
                                  </div>
                                  <div className="content-icon">
                                    <i className="fas fa-globe-americas"></i>
                                    <a href="#">Iowa City, IA USA</a>
                                  </div>
                                  <div className="content-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    North America
                                  </div>
                                  <div className="content-icon">
                                    <i className="far fa-calendar-check"></i>
                                    Semester
                                  </div>
                                  <div className="content-icon">
                                    <i className="fa fa-address-card-o"></i>
                                    College of Business
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/*  END COL */}
                          <div className="col-lg-12 mb-4">
                            {" "}
                            {/* Credentials */}
                            <div className="credentials box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead">
                                    <i className="fas fa-user"></i>Credentials
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="content-icon">
                                    <p>
                                      <i className="fas fa-trophy"></i>
                                      <strong>Professional Memberships</strong>
                                    </p>
                                    <p className="blue-color ml20">
                                      <a href="#">
                                        Academy of International Business
                                        <br />
                                        ​American Management Association
                                      </a>
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p>
                                      <i
                                        className="fas fa-certificate"
                                        aria-hidden="true"
                                      ></i>
                                      <strong>Certificates</strong>
                                    </p>
                                    <p className="ml20 cl-gray">
                                      Business Data Analytics Certification
                                    </p>
                                  </div>
                                  <div className="content-icon">
                                    <p>
                                      <i className="fas fa-graduation-cap"></i>
                                      <strong>Highest Education Level</strong>
                                    </p>
                                    <p className="ml20 cl-gray">PhD</p>
                                  </div>
                                </div>
                                <div className="box-bottom text-center">
                                  <a href="#" className="view-more">
                                    View More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* END COL */}
                          <div className="col-lg-12 mb-4">
                            {/* Collaboration Interests */}
                            <div className="collaboration box box-border-radius box-shadow bg-white">
                              <div className="inner-wrap">
                                <div className="box-top position-relative">
                                  <h2 className="box-subhead mw-100">
                                    <i className="fas fa-user"></i>Collaboration
                                    Interests
                                  </h2>
                                </div>
                                <div className="box-middle">
                                  <div className="row row-custom">
                                    <div className="col-md-12">
                                      <h4 className="mb-3">
                                        Areas of Interest
                                      </h4>
                                      <div className="row">
                                        <div
                                          className="col-md-6 mb-2"
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
                                                  <small>Research</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Discipline</strong>
                                                  <br />
                                                  <small>Economic</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>
                                                    Preferred Language
                                                  </strong>
                                                  <br />
                                                  <small>English</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Region</strong>
                                                  <br />
                                                  <small>Europe</small>
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
                                                <div className="text-center">
                                                  <a
                                                    href="#"
                                                    data-id="2"
                                                    className="btn btn-blue btn-w-100"
                                                  >
                                                    FIND MATCHES
                                                  </a>
                                                </div>
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
                                                                Description
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
                                                              Trimester
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
                                          className="col-md-6 mb-2"
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
                                                    Academic Journal
                                                  </small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Discipline</strong>
                                                  <br />
                                                  <small>Business</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>
                                                    Preferred Language
                                                  </strong>
                                                  <br />
                                                  <small>English</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
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
                                                <div className="text-center">
                                                  <a
                                                    href="#"
                                                    data-id="2"
                                                    className="btn btn-blue btn-w-100"
                                                  >
                                                    FIND MATCHES
                                                  </a>
                                                </div>
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
                                                              Trimester
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
                                          className="col-md-6 mb-2"
                                          id="areas-of-interest-3"
                                        >
                                          <div className="areas-of-interest">
                                            <div className="row row-custom position-relative">
                                              <span className="left-corner">
                                                3
                                              </span>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Project</strong>
                                                  <br />
                                                  <small>
                                                    Course Development
                                                  </small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>Discipline</strong>
                                                  <br />
                                                  <small>Business</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
                                                <p>
                                                  <strong>
                                                    Preferred Language
                                                  </strong>
                                                  <br />
                                                  <small>English</small>
                                                </p>
                                              </div>
                                              <div className="col-md-6">
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
                                                    data-target="#areaInterestVm1Modal-3"
                                                  >
                                                    View more
                                                  </a>
                                                </div>
                                                <div className="text-center">
                                                  <a
                                                    href="#"
                                                    data-id="2"
                                                    className="btn btn-blue btn-w-100"
                                                  >
                                                    START PROJECT
                                                  </a>
                                                </div>
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
                                                      Course Development
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
                                                              <br />I would like
                                                              to co-develop a
                                                              business ethics
                                                              className focused
                                                              on multinational
                                                              corporations and
                                                              how ethics may or
                                                              may not conflict
                                                              with the culture
                                                              in countries where
                                                              MNCs are located.
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
                                                              Trimester
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
                                                              <br />3
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
                                                                  defaultValue="25"
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
