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
                                  style="color:#6C389B;"
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
                                className="toltip-item toltip-overlay d-flex cursor-pointer"
                                onClick="location.href='messages 01IN_03003 - 01IN_03004.html'"
                              >
                                <a href="#" className="close-times" data-id="1">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-image">
                                  <img src="images/Inez.png" width="48" />
                                </div>
                                <div className="toltip-text">
                                  <p>Inez Campos accepted your Invitation</p>
                                </div>
                              </div>
                              <div
                                id="toltip-item-1"
                                className="toltip-item toltip-overlay d-flex cursor-pointer"
                                onClick="location.href='messages 01IN_03003 - 01IN_03004.html'"
                              >
                                <a href="#" className="close-times" data-id="1">
                                  <i className="fa fa-times-circle"></i>
                                </a>
                                <div className="toltip-image"> /</div>
                                <img
                                  src="images/karthik-koothrappali.png"
                                  width="48"
                                />
                              </div>
                              <div className="toltip-text">
                                <p>
                                  Karthik Koothrappali declined your Invitation
                                </p>
                              </div>
                            </div>
                            <div
                              id="toltip-item-1"
                              className="toltip-item toltip-overlay d-flex"
                            >
                              <a href="#" className="close-times" data-id="1">
                                <i className="fa fa-times-circle"></i>
                              </a>
                              <div className="toltip-image">
                                <img src="images/Inez.png" width="48" />
                              </div>
                              <div className="toltip-text">
                                <p>
                                  Your Invitation to Inez Campos has been sent
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
                                  className="fa fa-book"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="toltip-text">
                                <p>
                                  You were assigned a Task in Ethics in
                                  Multinational Management
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
                                  className="fa fa-book"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="toltip-text">
                                <p>
                                  Inez Campos completed Determine
                                  <br />
                                  Credit Hours in Ethics in Multinational
                                  Management
                                </p>
                              </div>
                            </div>

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
                                  Randy Wolff uploaded a doc in What Artificial
                                  Intelligence Can Do for Small Business Project
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
                              <div className="toltip-icon toltip-icon-orange">
                                <i
                                  className="fa fa-book"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="toltip-text">
                                <p>
                                  Karthic Koothrappali, Joanne Byrne and others
                                  have matched with you as recommended partners
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
                                  Conference on Big Data in Business
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
                                <p>Missed call from Li Wei</p>
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
                      </div>
                    </div>
                  </section>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="bradley home screen.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="bradley profile screen.html">Profile</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Edit Profile
                      </li>
                    </ol>
                  </nav>
                  <section className="wrap-profile">
                    <form action="" id="form-profile">
                      <div className="row row-custom ">
                        <div className="col-lg-6 mb-4">
                          <div className="personal box box-border-radius box-shadow bg-white">
                            <div className="inner-wrap">
                              <div className="box-top position-relative">
                                <h2 className="box-subhead">
                                  <i className="fas fa-user"></i>Personal
                                  Information
                                </h2>
                              </div>
                              <div className="box-middle">
                                <div className="row row-custom">
                                  <div className="col-md-6">
                                    <div className="bg-profile">
                                      <img
                                        src="images/brad-change.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Prefix</label>
                                      <select className="input select">
                                        <option value="Dr.">Dr.</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Miss">Mr.</option>
                                        <option value="Miss">Mrs.</option>
                                        <option value="Miss">Ms.</option>
                                        <option value="Miss">Mx.</option>
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input
                                        type="text"
                                        name=""
                                        value="Bradley"
                                        className="input"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        type="text"
                                        name=""
                                        value="Dexter"
                                        className="input"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Title</label>
                                      <input
                                        type="text"
                                        name=""
                                        value="Professor"
                                        className="input"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-bottom">
                                <div className="form-group mb-3">
                                  <label>My Thoughts</label>
                                  <textarea className="input textarea">
                                    "Success in business requires training and
                                    discipline and hard work." David Rockefeller
                                  </textarea>
                                </div>
                                <div className="form-group">
                                  <label className="d-inline mr-2">
                                    Online Status
                                  </label>
                                  <input
                                    type="radio"
                                    name="online-status"
                                    checked
                                  />{" "}
                                  Public{" "}
                                  <input
                                    type="radio"
                                    name="online-status"
                                    className="ml-2"
                                  />{" "}
                                  Private
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* END COL */}
                        <div className="col-lg-6 mb-4">
                          <div className="comunication box box-border-radius box-shadow bg-white">
                            <div className="inner-wrap position-relative">
                              <div className="box-top position-relative">
                                <h2 className="box-subhead">
                                  <i className="fas fa-user"></i>Institution
                                  Profile
                                </h2>
                              </div>
                              <div id="profile-map">
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11922.656204986277!2d-91.534944!3d41.663!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1578621477242!5m2!1sen!2sus"
                                  frameborder="0"
                                  style="border:0;"
                                  allowfullscreen=""
                                ></iframe>
                              </div>
                              <div className="box-middle">
                                <div className="row row-custom">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Institution</label>
                                      <input
                                        type="text"
                                        name=""
                                        value="AHEA University, lowa Campus"
                                        className="input"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Academic Calendar</label>
                                      <input
                                        type="text"
                                        name=""
                                        value="Semester"
                                        className="input"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Departament</label>
                                      <textarea
                                        className="input textarea"
                                        style="min-height: 120px;"
                                      >
                                        College of Business
                                      </textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* END COL */}
                        <div className="col-lg-6 mb-4">
                          <div className="institution box box-border-radius box-shadow bg-white">
                            <div className="inner-wrap">
                              <div className="box-top position-relative">
                                <h2 className="box-subhead mw-100">
                                  <i className="fas fa-user"></i>Communication
                                  Preferences
                                </h2>
                              </div>
                              <div className="box-middle">
                                <div className="row row-custom">
                                  <div className="col-md-6">
                                    <h4 className="mb-3">Languages</h4>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        name=""
                                        value="bdexter@ahea.edu"
                                        className="input"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Primary Language</label>
                                      <select className="input select">
                                        <option value=""></option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Bengali">Bengali</option>
                                        <option value="English" selected="">
                                          English
                                        </option>
                                        <option value="French">French</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Japanese">
                                          Japanese
                                        </option>
                                        <option value="Mandarin">
                                          Mandarin
                                        </option>
                                        <option value="Norweigian">
                                          Norweigian
                                        </option>
                                        <option value="Portuguese">
                                          Portuguese
                                        </option>
                                        <option value="Punjabi">Punjabi</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Spanish">Spanish</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div
                                      className="form-group"
                                      id="profile-phone"
                                    >
                                      <label>Office</label>
                                      <input
                                        type="tel"
                                        name="phone"
                                        value="1-555-432-1100"
                                        className="input"
                                        maxlength="15"
                                        onkeypress="return onlyNumber(event);"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Secondary Language</label>
                                      <select className="input select">
                                        <option value=""></option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Bengali">Bengali</option>
                                        <option value="English">English</option>
                                        <option value="French">French</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Japanese">
                                          Japanese
                                        </option>
                                        <option value="Mandarin">
                                          Mandarin
                                        </option>
                                        <option value="Norweigian">
                                          Norweigian
                                        </option>
                                        <option value="Portuguese">
                                          Portuguese
                                        </option>
                                        <option value="Punjabi">Punjabi</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Spanish" selected="">
                                          Spanish
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div
                                      className="form-group"
                                      id="profile-mobile"
                                    >
                                      <label>Mobile</label>
                                      <input
                                        type="tel"
                                        name="phone"
                                        value="1-555-432-1100"
                                        className="input"
                                        maxlength="15"
                                        onkeypress="return onlyNumber(event)"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Tertiary Language</label>
                                      <select className="input select">
                                        <option value=""></option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Bengali">Bengali</option>
                                        <option value="English">English</option>
                                        <option value="French">French</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Japanese">
                                          Japanese
                                        </option>
                                        <option value="Mandarin">
                                          Mandarin
                                        </option>
                                        <option value="Norweigian">
                                          Norweigian
                                        </option>
                                        <option value="Portuguese">
                                          Portuguese
                                        </option>
                                        <option value="Punjabi">Punjabi</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Spanish" selected="">
                                          Spanish
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>&nbsp;</label>
                                      <input type="checkbox" name="" />{" "}
                                      <span className="font-weight-bold">
                                        Receive SMS Notifications
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label>Website</label>
                                      <input
                                        type="url"
                                        name=""
                                        value="https://www.ahea.edu/about-ahea/college-of-huma"
                                        className="input"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* END COL */}
                        <div className="col-lg-6 mb-4">
                          <div className="credentials box box-border-radius box-shadow bg-white">
                            <div className="inner-wrap">
                              <div className="box-top position-relative">
                                <h2 className="box-subhead">
                                  <i className="fas fa-user"></i>Credentials
                                </h2>
                              </div>
                              <div className="box-middle">
                                <div className="row row-custom">
                                  <div className="col-md-6">
                                    <h4
                                      className="mb-3"
                                      style="min-height: 44px"
                                    >
                                      Professional Memberships
                                    </h4>
                                    <div className="form-group">
                                      <label>Membership &ndash; 1</label>
                                      <div className="d-flex">
                                        <a
                                          href="javascript::void(0);"
                                          id="add-membership"
                                          className="color-black font20 mr-1"
                                        >
                                          <i className="fas fa-plus-circle"></i>
                                        </a>
                                        <input
                                          type="text"
                                          name=""
                                          value="Academy of International Business"
                                          className="input"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      id="membership-2"
                                      className="form-group membership"
                                      style="display:none"
                                    >
                                      <label>Membership &ndash; 2</label>
                                      <div className="d-flex">
                                        <a
                                          href="javascript::void(0);"
                                          id="remove-membership-2"
                                          className="color-black font20 mr-1"
                                        >
                                          <i className="fas fa-minus-circle"></i>
                                        </a>
                                        <input
                                          type="text"
                                          name=""
                                          value="Academy of International Business"
                                          className="input"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      id="membership-3"
                                      className="form-group membership"
                                      style="display:none"
                                    >
                                      <label>Membership &ndash; 3</label>
                                      <div className="d-flex">
                                        <a
                                          href="javascript::void(0);"
                                          id="remove-membership-3"
                                          className="color-black font20 mr-1"
                                        >
                                          <i className="fas fa-minus-circle"></i>
                                        </a>
                                        <input
                                          type="text"
                                          name=""
                                          value=""
                                          className="input"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label>Highest Education Level</label>
                                      <div className="d-flex">
                                        <input
                                          type="text"
                                          name=""
                                          value="PhD"
                                          className="input"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    f
                                    <h4
                                      className="mb-3"
                                      style="min-height: 44px"
                                    >
                                      Certificates
                                    </h4>
                                    <div className="form-group">
                                      <label>Certificate - 1</label>
                                      <div className="d-flex">
                                        <a
                                          href="javascript::void(0);"
                                          id="add-certificate"
                                          className="color-black font20 mr-1"
                                        >
                                          <i className="fas fa-plus-circle"></i>
                                        </a>
                                        <input
                                          type="text"
                                          name=""
                                          value="Business Data Analytics"
                                        />
                                        <ul>
                                          <li>1 &ndash; 2 Years</li>
                                          <li>3 &ndash; 7 Years</li>
                                          <li>7+ Years</li>
                                        </ul>
                                      </div>
                                      <div className="wrap-range">
                                        <input type="range" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group w-100">
                                      <label>Link Your CV</label>
                                      <input
                                        type="url"
                                        name=""
                                        value="http://www.abcdefge/hijk/lmnop/tuvw.xyz"
                                        className="input"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row row-custom">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label>Bio</label>
                                      <textarea
                                        className="input textarea"
                                        style={{ minHeight: "100px" }}
                                      >
                                        Divides professional time between
                                        teaching undergraduate courses in both
                                        classNameroom and online settings, and
                                        providing private consulting
                                        specializing in the growth and
                                        globalization of small businesses. I
                                        also serve on the editorial board of The
                                        Academy of Management Journal.
                                      </textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* END COL */}
                        <div className="col-lg-6 mb-4">
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
                                    <h4 className="mb-3">Areas of interest</h4>
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
                                                <small>Research</small>
                                              </p>
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
                                                <strong>Discipline</strong>
                                                <br />
                                                <small>Economic</small>
                                              </p>
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
                                                  href="javascript:void(0);"
                                                  data-id="1"
                                                  className="remove-interest"
                                                >
                                                  Remove
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          {/*	Modal Areas of interest - modalareainterestview more 1 */}
                                          <div
                                            className="modal fade modalToltip modalareainterest"
                                            id="areaInterestVm1Modal"
                                            tabindex="-1"
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
                                                            partners to conduct
                                                            a longitudinal study
                                                            on the impact of
                                                            Brexit on the EU and
                                                            what changes will
                                                            take place in the
                                                            economy as a result.
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
                                                              Collaboration Type
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
                                                              Preferred Language
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
                                                              Project Date Range
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
                                                              <input type="range" />
                                                            </div>
                                                            <div className="wrap-range-label width-inherit">
                                                              <ul className="d-flex">
                                                                <li>Jan</li>
                                                                <li>Feb</li>
                                                                <li>Mar</li>
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
                                                          <div className="col-md-6 ac">
                                                            <a
                                                              href="javascript:void(0);"
                                                              id="btn-research-project"
                                                              data-toggle="modal"
                                                              data-target="#researchProjectEditModal"
                                                              className="btn btn-blue btn-w-100 m-auto"
                                                            >
                                                              Edit
                                                            </a>
                                                          </div>
                                                          <div className="col-md-6 ac">
                                                            <a
                                                              href="#"
                                                              className="btn btn-blue btn-w-100 m-auto"
                                                            >
                                                              Find Matches
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/*	 Modal what type of  project */}
                                          <div
                                            className="modal fade modalToltip"
                                            id="researchProjectEditModal"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-labelledby="modalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              className="modal-dialog"
                                              role="document"
                                            >
                                              <div className="modal-content">
                                                <div className="modal-body">
                                                  <div
                                                    id="add-interest-modal"
                                                    className="font14 interest-modal bg-grey no-border"
                                                  >
                                                    <div className="view-more-interest-modal-inner position-relative">
                                                      <div className="toltip-close2">
                                                        <a
                                                          href="javascript:void(0);"
                                                          data-dismiss="modal"
                                                        >
                                                          <i className="fa fa-times-circle"></i>
                                                        </a>
                                                      </div>
                                                      <div className="view-more-interest-modal-inner-content w-100">
                                                        <div className="row mb-2">
                                                          <div className="col-md-12">
                                                            <div className="form-group w-100">
                                                              <label>
                                                                What type of
                                                                project are you
                                                                interest in?
                                                              </label>
                                                              <select
                                                                onChange="project_type(this.value)"
                                                                className="input select"
                                                              >
                                                                <option value="Select a Project">
                                                                  Select a
                                                                  Project
                                                                </option>
                                                                <option value="Academic Journal">
                                                                  Academic
                                                                  Journal
                                                                </option>
                                                                <option value="Best Practices">
                                                                  Best Practices
                                                                </option>
                                                                <option value="Course Development">
                                                                  Course
                                                                  Development
                                                                </option>
                                                                <option value="Curriculum Development">
                                                                  Curriculum
                                                                  Development
                                                                </option>
                                                                <option value="General Publication">
                                                                  General
                                                                  Publication
                                                                </option>
                                                                <option value="Mentorship">
                                                                  Mentorship
                                                                </option>
                                                                <option value="Peer Review">
                                                                  Peer Review
                                                                </option>
                                                                <option
                                                                  value="Research"
                                                                  selected
                                                                >
                                                                  Research
                                                                </option>
                                                                <option value="Study Abroad">
                                                                  Study Abroad
                                                                </option>
                                                                <option value="Other">
                                                                  Other
                                                                </option>
                                                              </select>
                                                            </div>

                                                            <div className="form-group">
                                                              <label>
                                                                Description:
                                                              </label>
                                                              <textarea
                                                                className="input textarea"
                                                                style="height: 65px;min-height: auto;"
                                                              >
                                                                I am interested
                                                                in finding one
                                                                or two partners
                                                                to conduct a
                                                                longitudinal
                                                                study on the
                                                                impact of Brexit
                                                                on the EU and
                                                                what changes
                                                                will take place
                                                                in the economy
                                                                as a result.{" "}
                                                              </textarea>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          id="wrap-project-type"
                                                          className="row mb-2"
                                                        >
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Discipline:
                                                              </label>
                                                              <select className="input select">
                                                                <option value="Anthropology ">
                                                                  Anthropology{" "}
                                                                </option>
                                                                <option value="Archaeology ">
                                                                  Archaeology{" "}
                                                                </option>
                                                                <option value="Arts ">
                                                                  Arts{" "}
                                                                </option>
                                                                <option value="Biology ">
                                                                  Biology{" "}
                                                                </option>
                                                                <option value="Business ">
                                                                  Business{" "}
                                                                </option>
                                                                <option value="Chemistry ">
                                                                  Chemistry{" "}
                                                                </option>
                                                                <option value="Computer Science ">
                                                                  Computer
                                                                  Science{" "}
                                                                </option>
                                                                <option value="Earth Science ">
                                                                  Earth Science{" "}
                                                                </option>
                                                                <option
                                                                  value="Economics "
                                                                  selected
                                                                >
                                                                  Economics{" "}
                                                                </option>
                                                                <option value="Engineering ">
                                                                  Engineering{" "}
                                                                </option>
                                                                <option value="History ">
                                                                  History{" "}
                                                                </option>
                                                                <option value="Human Geography ">
                                                                  Human
                                                                  Geography{" "}
                                                                </option>
                                                                <option value="Languages ">
                                                                  Languages{" "}
                                                                </option>
                                                                <option value="Law ">
                                                                  Law{" "}
                                                                </option>
                                                                <option value="Literature ">
                                                                  Literature{" "}
                                                                </option>
                                                                <option value="Mathematics ">
                                                                  Mathematics{" "}
                                                                </option>
                                                                <option value="Medicine and Health ">
                                                                  Medicine and
                                                                  Health{" "}
                                                                </option>
                                                                <option value="Philosophy ">
                                                                  Philosophy{" "}
                                                                </option>
                                                                <option value="Physics ">
                                                                  Physics{" "}
                                                                </option>
                                                                <option value="Political Science ">
                                                                  Political
                                                                  Science{" "}
                                                                </option>
                                                                <option value="Psychology ">
                                                                  Psychology{" "}
                                                                </option>
                                                                <option value="Sociology ">
                                                                  Sociology{" "}
                                                                </option>
                                                                <option value="Space Sciences ">
                                                                  Space Sciences{" "}
                                                                </option>
                                                                <option value="Statistics ">
                                                                  Statistics{" "}
                                                                </option>
                                                                <option value="Theology ">
                                                                  Theology{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Delivery Method
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option
                                                                  value="Online"
                                                                  selected
                                                                >
                                                                  Online
                                                                </option>
                                                                <option value="Blended or Hybrid">
                                                                  Blended or
                                                                  Hybrid
                                                                </option>
                                                                <option value="On-ground">
                                                                  On-ground
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Collaboration
                                                                Type
                                                              </label>
                                                              <select className="select input">
                                                                <option value=""></option>
                                                                <option
                                                                  value="Global"
                                                                  selected
                                                                >
                                                                  Global
                                                                </option>
                                                                <option value="Departmental">
                                                                  Departmental
                                                                </option>
                                                                <option value="Institutional">
                                                                  Institutional
                                                                </option>
                                                                <option value="Regional">
                                                                  Regional
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Region:
                                                              </label>
                                                              <select className="select input">
                                                                <option value=""></option>
                                                                <option value="All">
                                                                  All
                                                                </option>
                                                                <option value="Africa ">
                                                                  Africa{" "}
                                                                </option>
                                                                <option value="Asia ">
                                                                  Asia{" "}
                                                                </option>
                                                                <option value="Central America ">
                                                                  Central
                                                                  America{" "}
                                                                </option>
                                                                <option
                                                                  value="Europe"
                                                                  selected
                                                                >
                                                                  Europe{" "}
                                                                </option>
                                                                <option value="Middle East ">
                                                                  Middle East{" "}
                                                                </option>
                                                                <option value="North America ">
                                                                  North America{" "}
                                                                </option>
                                                                <option value="Oceania ">
                                                                  Oceania{" "}
                                                                </option>
                                                                <option value="South America ">
                                                                  South America{" "}
                                                                </option>
                                                                <option value="The Caribbean ">
                                                                  The Caribbean{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Preferred
                                                                Language
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option
                                                                  value="English"
                                                                  selected
                                                                >
                                                                  English
                                                                </option>
                                                                <option value="Arabic ">
                                                                  Arabic{" "}
                                                                </option>
                                                                <option value="Bengali  ">
                                                                  Bengali{" "}
                                                                </option>
                                                                <option value="French ">
                                                                  French{" "}
                                                                </option>
                                                                <option value="Hindi ">
                                                                  Hindi{" "}
                                                                </option>
                                                                <option value="Japanese ">
                                                                  Japanese{" "}
                                                                </option>
                                                                <option value="Mandarin ">
                                                                  Mandarin{" "}
                                                                </option>
                                                                <option value="Norwegian ">
                                                                  Norwegian{" "}
                                                                </option>
                                                                <option value="Punjabi ">
                                                                  Punjabi{" "}
                                                                </option>
                                                                <option value="Russian ">
                                                                  Russian{" "}
                                                                </option>
                                                                <option value="Spanish">
                                                                  Spanish
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Program Length
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="Mini Term">
                                                                  Mini Term
                                                                </option>
                                                                <option value="Ongoing ">
                                                                  Ongoing{" "}
                                                                </option>
                                                                <option value="Quarter ">
                                                                  Quarter{" "}
                                                                </option>
                                                                <option value="Semester ">
                                                                  Semester{" "}
                                                                </option>
                                                                <option value="Summer ">
                                                                  Summer{" "}
                                                                </option>
                                                                <option
                                                                  value="Trimester"
                                                                  selected
                                                                >
                                                                  Trimester
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Credit
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="1">
                                                                  1{" "}
                                                                </option>
                                                                <option value="2">
                                                                  2{" "}
                                                                </option>
                                                                <option value="3">
                                                                  3{" "}
                                                                </option>
                                                                <option
                                                                  value="4"
                                                                  selected
                                                                >
                                                                  4{" "}
                                                                </option>
                                                                <option value="other">
                                                                  Other{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Program Level
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="Certificate ">
                                                                  Certificate{" "}
                                                                </option>
                                                                <option value="Associates ">
                                                                  Associates{" "}
                                                                </option>
                                                                <option
                                                                  value="Undergraduate "
                                                                  selected=""
                                                                >
                                                                  Undergraduate{" "}
                                                                </option>
                                                                <option value="Graduate ">
                                                                  Graduate{" "}
                                                                </option>
                                                                <option value="Masters ">
                                                                  Masters{" "}
                                                                </option>
                                                                <option value="Doctoral ">
                                                                  Doctoral{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                        </div>{" "}
                                                        {/* row */}
                                                        <div className="row mb-2">
                                                          <div className="col-md-12">
                                                            <strong>
                                                              Project Date Range
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
                                                              <input type="range" />
                                                            </div>
                                                            <div className="wrap-range-label width-inherit">
                                                              <ul className="d-flex">
                                                                <li>Jan</li>
                                                                <li>Feb</li>
                                                                <li>Mar</li>
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
                                                        <div className="row text-center pt-2">
                                                          <a
                                                            href="#"
                                                            className="btn btn-blue btn-w-100 m-auto"
                                                            data-dismiss="modal"
                                                          >
                                                            Save
                                                          </a>
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
                                                <small>Academic Journal</small>
                                              </p>
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
                                              <div className="text-center">
                                                <a
                                                  href="javascript:void(0);"
                                                  data-id="2"
                                                  className="remove-interest"
                                                >
                                                  Remove
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          {/* Modal Areas of interest - modalareainterestview more 2 */}
                                          <div
                                            className="modal fade modalToltip modalareainterest"
                                            id="areaInterestVm1Modal-2"
                                            tabindex="-1"
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
                                                            for partners to help
                                                            author an article on
                                                            the impact of mobile
                                                            technology on
                                                            business acumen.
                                                            There is a lot of
                                                            literature on
                                                            international
                                                            business acumen, but
                                                            nothing has been
                                                            updated since the
                                                            onset of our 24/7
                                                            connectivity with
                                                            mobile devices.
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
                                                              Collaboration Type
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
                                                              Preferred Language
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
                                                              Project Date Range
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
                                                              <input type="range" />
                                                            </div>
                                                            <div className="wrap-range-label width-inherit">
                                                              <ul className="d-flex">
                                                                <li>Jan</li>
                                                                <li>Feb</li>
                                                                <li>Mar</li>
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
                                                          <div className="col-md-6 ac">
                                                            <a
                                                              href="javascript:void(0);"
                                                              id="btn-academic-journal-project"
                                                              data-toggle="modal"
                                                              data-target="#academicJournalProjectEditModal"
                                                              className="btn btn-blue btn-w-100 m-auto"
                                                            >
                                                              Edit
                                                            </a>
                                                          </div>
                                                          <div className="col-md-6 ac">
                                                            <a
                                                              href="#"
                                                              className="btn btn-blue btn-w-100 m-auto"
                                                            >
                                                              Find Matches
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/*	Modal what type of  project */}
                                          <div
                                            className="modal fade modalToltip"
                                            id="academicJournalProjectEditModal"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-labelledby="modalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              className="modal-dialog"
                                              role="document"
                                            >
                                              <div className="modal-content">
                                                <div className="modal-body">
                                                  <div
                                                    id="add-interest-modal"
                                                    className="font14 interest-modal bg-grey no-border"
                                                  >
                                                    <div className="view-more-interest-modal-inner position-relative">
                                                      <div className="toltip-close2">
                                                        <a
                                                          href="javascript:void(0);"
                                                          data-dismiss="modal"
                                                        >
                                                          <i className="fa fa-times-circle"></i>
                                                        </a>
                                                      </div>
                                                      <div className="view-more-interest-modal-inner-content w-100">
                                                        <div className="row mb-2">
                                                          <div className="col-md-12">
                                                            <div className="form-group w-100">
                                                              <label>
                                                                What type of
                                                                project are you
                                                                interest in?
                                                              </label>
                                                              <select
                                                                onChange="project_type(this.value)"
                                                                className="input select"
                                                              >
                                                                <option value="Select a Project">
                                                                  Select a
                                                                  Project
                                                                </option>
                                                                <option
                                                                  value="Academic Journal"
                                                                  selected
                                                                >
                                                                  Academic
                                                                  Journal
                                                                </option>
                                                                <option value="Best Practices">
                                                                  Best Practices
                                                                </option>
                                                                <option value="Course Development">
                                                                  Course
                                                                  Development
                                                                </option>
                                                                <option value="Curriculum Development">
                                                                  Curriculum
                                                                  Development
                                                                </option>
                                                                <option value="General Publication">
                                                                  General
                                                                  Publication
                                                                </option>
                                                                <option value="Mentorship">
                                                                  Mentorship
                                                                </option>
                                                                <option value="Peer Review">
                                                                  Peer Review
                                                                </option>
                                                                <option value="Research">
                                                                  Research
                                                                </option>
                                                                <option value="Study Abroad">
                                                                  Study Abroad
                                                                </option>
                                                                <option value="Other">
                                                                  Other
                                                                </option>
                                                              </select>
                                                            </div>

                                                            <div className="form-group">
                                                              <label>
                                                                Description:
                                                              </label>
                                                              <textarea
                                                                className="input textarea"
                                                                style={{
                                                                  height:
                                                                    "65px",
                                                                  minHeight:
                                                                    "auto",
                                                                }}
                                                              >
                                                                I am looking for
                                                                partners to help
                                                                author an
                                                                article on the
                                                                impact of mobile
                                                                technology on
                                                                business acumen.
                                                                There is a lot
                                                                of literature on
                                                                international
                                                                business acumen,
                                                                but nothing has
                                                                been updated
                                                                since the onset
                                                                of our 24/7
                                                                connectivity
                                                                with mobile
                                                                devices.
                                                              </textarea>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          id="wrap-project-type"
                                                          className="row mb-2"
                                                        >
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Discipline:
                                                              </label>
                                                              <select className="input select">
                                                                <option value="Anthropology ">
                                                                  Anthropology{" "}
                                                                </option>
                                                                <option value="Archaeology ">
                                                                  Archaeology{" "}
                                                                </option>
                                                                <option value="Arts ">
                                                                  Arts{" "}
                                                                </option>
                                                                <option value="Biology ">
                                                                  Biology{" "}
                                                                </option>
                                                                <option
                                                                  value="Business "
                                                                  selected
                                                                >
                                                                  Business{" "}
                                                                </option>
                                                                <option value="Chemistry ">
                                                                  Chemistry{" "}
                                                                </option>
                                                                <option value="Computer Science ">
                                                                  Computer
                                                                  Science{" "}
                                                                </option>
                                                                <option value="Earth Science ">
                                                                  Earth Science{" "}
                                                                </option>
                                                                <option value="Economics ">
                                                                  Economics{" "}
                                                                </option>
                                                                <option value="Engineering ">
                                                                  Engineering{" "}
                                                                </option>
                                                                <option value="History ">
                                                                  History{" "}
                                                                </option>
                                                                <option value="Human Geography ">
                                                                  Human
                                                                  Geography{" "}
                                                                </option>
                                                                <option value="Languages ">
                                                                  Languages{" "}
                                                                </option>
                                                                <option value="Law ">
                                                                  Law{" "}
                                                                </option>
                                                                <option value="Literature ">
                                                                  Literature{" "}
                                                                </option>
                                                                <option value="Mathematics ">
                                                                  Mathematics{" "}
                                                                </option>
                                                                <option value="Medicine and Health ">
                                                                  Medicine and
                                                                  Health{" "}
                                                                </option>
                                                                <option value="Philosophy ">
                                                                  Philosophy{" "}
                                                                </option>
                                                                <option value="Physics ">
                                                                  Physics{" "}
                                                                </option>
                                                                <option value="Political Science ">
                                                                  Political
                                                                  Science{" "}
                                                                </option>
                                                                <option value="Psychology ">
                                                                  Psychology{" "}
                                                                </option>
                                                                <option value="Sociology ">
                                                                  Sociology{" "}
                                                                </option>
                                                                <option value="Space Sciences ">
                                                                  Space Sciences{" "}
                                                                </option>
                                                                <option value="Statistics ">
                                                                  Statistics{" "}
                                                                </option>
                                                                <option value="Theology ">
                                                                  Theology{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Delivery Method
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option
                                                                  value="Online"
                                                                  selected
                                                                >
                                                                  Online
                                                                </option>
                                                                <option value="Blended or Hybrid">
                                                                  Blended or
                                                                  Hybrid
                                                                </option>
                                                                <option value="On-ground">
                                                                  On-ground
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Collaboration
                                                                Type
                                                              </label>
                                                              <select className="select input">
                                                                <option value=""></option>
                                                                <option
                                                                  value="Global"
                                                                  selected
                                                                >
                                                                  Global
                                                                </option>
                                                                <option value="Departmental">
                                                                  Departmental
                                                                </option>
                                                                <option value="Institutional">
                                                                  Institutional
                                                                </option>
                                                                <option value="Regional">
                                                                  Regional
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Region:
                                                              </label>
                                                              <select className="select input">
                                                                <option value=""></option>
                                                                <option
                                                                  value="All"
                                                                  selected
                                                                >
                                                                  All
                                                                </option>
                                                                <option value="Africa ">
                                                                  Africa{" "}
                                                                </option>
                                                                <option value="Asia ">
                                                                  Asia{" "}
                                                                </option>
                                                                <option value="Central America ">
                                                                  Central
                                                                  America{" "}
                                                                </option>
                                                                <option value="Europe">
                                                                  Europe{" "}
                                                                </option>
                                                                <option value="Middle East ">
                                                                  Middle East{" "}
                                                                </option>
                                                                <option value="North America ">
                                                                  North America{" "}
                                                                </option>
                                                                <option value="Oceania ">
                                                                  Oceania{" "}
                                                                </option>
                                                                <option value="South America ">
                                                                  South America{" "}
                                                                </option>
                                                                <option value="The Caribbean ">
                                                                  The Caribbean{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Preferred
                                                                Language
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option
                                                                  value="English"
                                                                  selected
                                                                >
                                                                  English
                                                                </option>
                                                                <option value="Arabic ">
                                                                  Arabic{" "}
                                                                </option>
                                                                <option value="Bengali  ">
                                                                  Bengali{" "}
                                                                </option>
                                                                <option value="French ">
                                                                  French{" "}
                                                                </option>
                                                                <option value="Hindi ">
                                                                  Hindi{" "}
                                                                </option>
                                                                <option value="Japanese ">
                                                                  Japanese{" "}
                                                                </option>
                                                                <option value="Mandarin ">
                                                                  Mandarin{" "}
                                                                </option>
                                                                <option value="Norwegian ">
                                                                  Norwegian{" "}
                                                                </option>
                                                                <option value="Punjabi ">
                                                                  Punjabi{" "}
                                                                </option>
                                                                <option value="Russian ">
                                                                  Russian{" "}
                                                                </option>
                                                                <option value="Spanish">
                                                                  Spanish
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Program Length
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="Mini Term">
                                                                  Mini Term
                                                                </option>
                                                                <option value="Ongoing ">
                                                                  Ongoing{" "}
                                                                </option>
                                                                <option value="Quarter ">
                                                                  Quarter{" "}
                                                                </option>
                                                                <option value="Semester ">
                                                                  Semester{" "}
                                                                </option>
                                                                <option value="Summer ">
                                                                  Summer{" "}
                                                                </option>
                                                                <option
                                                                  value="Trimester"
                                                                  selected
                                                                >
                                                                  Trimester
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Credit
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="1">
                                                                  1{" "}
                                                                </option>
                                                                <option value="2">
                                                                  2{" "}
                                                                </option>
                                                                <option value="3">
                                                                  3{" "}
                                                                </option>
                                                                <option
                                                                  value="4"
                                                                  selected
                                                                >
                                                                  4{" "}
                                                                </option>
                                                                <option value="other">
                                                                  Other{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Program Level
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="Certificate ">
                                                                  Certificate{" "}
                                                                </option>
                                                                <option value="Associates ">
                                                                  Associates{" "}
                                                                </option>
                                                                <option
                                                                  value="Undergraduate "
                                                                  selected=""
                                                                >
                                                                  Undergraduate{" "}
                                                                </option>
                                                                <option value="Graduate ">
                                                                  Graduate{" "}
                                                                </option>
                                                                <option value="Masters ">
                                                                  Masters{" "}
                                                                </option>
                                                                <option value="Doctoral ">
                                                                  Doctoral{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                        </div>{" "}
                                                        {/* row */}
                                                        <div className="row mb-2">
                                                          <div className="col-md-12">
                                                            <strong>
                                                              Project Date Range
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
                                                              <input type="range" />
                                                            </div>
                                                            <div className="wrap-range-label width-inherit">
                                                              <ul className="d-flex">
                                                                <li>Jan</li>
                                                                <li>Feb</li>
                                                                <li>Mar</li>
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
                                                        <div className="row text-center pt-2">
                                                          <a
                                                            href="#"
                                                            className="btn btn-blue btn-w-100 m-auto"
                                                            data-dismiss="modal"
                                                          >
                                                            Save
                                                          </a>
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
                                        id="areas-of-interest-3"
                                        style={{ display: "none" }}
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
                                                  data-target="#areaInterestVm1Modal-3"
                                                >
                                                  View more
                                                </a>
                                              </div>
                                              <div className="text-center">
                                                <a
                                                  href="javascript:void(0);"
                                                  data-id="3"
                                                  className="remove-interest"
                                                >
                                                  Remove
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          {/* Modal Areas of interest - modalareainterestview more 3 */}
                                          <div
                                            className="modal fade modalToltip modalareainterest"
                                            id="areaInterestVm1Modal-3"
                                            tabindex="-1"
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
                                                            className focused on
                                                            multinational
                                                            corporations and how
                                                            ethics may or may
                                                            not conflict with
                                                            the culture in
                                                            countries where MNCs
                                                            are located.
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
                                                              Collaboration Type
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
                                                              Preferred Language
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
                                                              Project Date Range
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
                                                              <input type="range" />
                                                            </div>
                                                            <div className="wrap-range-label width-inherit">
                                                              <ul className="d-flex">
                                                                <li>Dec</li>
                                                                <li>Jan</li>
                                                                <li>Feb</li>
                                                                <li>Mar</li>
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
                                                          <div className="col-md-6 ac">
                                                            <a
                                                              href="javascript:void(0);"
                                                              id="btn-course-development-project"
                                                              data-toggle="modal"
                                                              data-target="#courseDevelopmentProjectEditModal"
                                                              className="btn btn-blue btn-w-100 m-auto"
                                                            >
                                                              Edit
                                                            </a>
                                                          </div>
                                                          <div className="col-md-6 ac">
                                                            <a
                                                              href="#"
                                                              className="btn btn-blue btn-w-100 m-auto"
                                                            >
                                                              Find Matches
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/*	Modal what type of  project */}
                                          <div
                                            className="modal fade modalToltip"
                                            id="courseDevelopmentProjectEditModal"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-labelledby="modalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              className="modal-dialog"
                                              role="document"
                                            >
                                              <div className="modal-content">
                                                <div className="modal-body">
                                                  <div
                                                    id="add-interest-modal"
                                                    className="font14 interest-modal bg-grey no-border"
                                                  >
                                                    <div className="view-more-interest-modal-inner position-relative">
                                                      <div className="toltip-close2">
                                                        <a
                                                          href="javascript:void(0);"
                                                          data-dismiss="modal"
                                                        >
                                                          <i className="fa fa-times-circle"></i>
                                                        </a>
                                                      </div>
                                                      <div className="view-more-interest-modal-inner-content w-100">
                                                        <div className="row mb-2">
                                                          <div className="col-md-12">
                                                            <div className="form-group w-100">
                                                              <label>
                                                                What type of
                                                                project are you
                                                                interest in?
                                                              </label>
                                                              <select
                                                                onChange="project_type(this.value)"
                                                                className="input select"
                                                              >
                                                                <option value="Select a Project">
                                                                  Select a
                                                                  Project
                                                                </option>
                                                                <option value="Academic Journal">
                                                                  Academic
                                                                  Journal
                                                                </option>
                                                                <option value="Best Practices">
                                                                  Best Practices
                                                                </option>
                                                                <option
                                                                  value="Course Development"
                                                                  selected
                                                                >
                                                                  Course
                                                                  Development
                                                                </option>
                                                                <option value="Curriculum Development">
                                                                  Curriculum
                                                                  Development
                                                                </option>
                                                                <option value="General Publication">
                                                                  General
                                                                  Publication
                                                                </option>
                                                                <option value="Mentorship">
                                                                  Mentorship
                                                                </option>
                                                                <option value="Peer Review">
                                                                  Peer Review
                                                                </option>
                                                                <option value="Research">
                                                                  Research
                                                                </option>
                                                                <option value="Study Abroad">
                                                                  Study Abroad
                                                                </option>
                                                                <option value="Other">
                                                                  Other
                                                                </option>
                                                              </select>
                                                            </div>

                                                            <div className="form-group">
                                                              <label>
                                                                Description:
                                                              </label>
                                                              <textarea
                                                                className="input textarea"
                                                                style={{
                                                                  height:
                                                                    "65px",
                                                                  minHeight:
                                                                    "auto",
                                                                }}
                                                              >
                                                                I would like to
                                                                co-develop a
                                                                business ethics
                                                                className
                                                                focused on
                                                                multinational
                                                                corporations and
                                                                how ethics may
                                                                or may not
                                                                conflict with
                                                                the culture in
                                                                countries where
                                                                MNCs are
                                                                located.
                                                              </textarea>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          id="wrap-project-type"
                                                          className="row mb-2"
                                                        >
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Discipline:
                                                              </label>
                                                              <select className="input select">
                                                                <option value="Anthropology ">
                                                                  Anthropology{" "}
                                                                </option>
                                                                <option value="Archaeology ">
                                                                  Archaeology{" "}
                                                                </option>
                                                                <option value="Arts ">
                                                                  Arts{" "}
                                                                </option>
                                                                <option value="Biology ">
                                                                  Biology{" "}
                                                                </option>
                                                                <option
                                                                  value="Business "
                                                                  selected
                                                                >
                                                                  Business{" "}
                                                                </option>
                                                                <option value="Chemistry ">
                                                                  Chemistry{" "}
                                                                </option>
                                                                <option value="Computer Science ">
                                                                  Computer
                                                                  Science{" "}
                                                                </option>
                                                                <option value="Earth Science ">
                                                                  Earth Science{" "}
                                                                </option>
                                                                <option value="Economics ">
                                                                  Economics{" "}
                                                                </option>
                                                                <option value="Engineering ">
                                                                  Engineering{" "}
                                                                </option>
                                                                <option value="History ">
                                                                  History{" "}
                                                                </option>
                                                                <option value="Human Geography ">
                                                                  Human
                                                                  Geography{" "}
                                                                </option>
                                                                <option value="Languages ">
                                                                  Languages{" "}
                                                                </option>
                                                                <option value="Law ">
                                                                  Law{" "}
                                                                </option>
                                                                <option value="Literature ">
                                                                  Literature{" "}
                                                                </option>
                                                                <option value="Mathematics ">
                                                                  Mathematics{" "}
                                                                </option>
                                                                <option value="Medicine and Health ">
                                                                  Medicine and
                                                                  Health{" "}
                                                                </option>
                                                                <option value="Philosophy ">
                                                                  Philosophy{" "}
                                                                </option>
                                                                <option value="Physics ">
                                                                  Physics{" "}
                                                                </option>
                                                                <option value="Political Science ">
                                                                  Political
                                                                  Science{" "}
                                                                </option>
                                                                <option value="Psychology ">
                                                                  Psychology{" "}
                                                                </option>
                                                                <option value="Sociology ">
                                                                  Sociology{" "}
                                                                </option>
                                                                <option value="Space Sciences ">
                                                                  Space Sciences{" "}
                                                                </option>
                                                                <option value="Statistics ">
                                                                  Statistics{" "}
                                                                </option>
                                                                <option value="Theology ">
                                                                  Theology{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Delivery Method
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option
                                                                  value="Online"
                                                                  selected
                                                                >
                                                                  Online
                                                                </option>
                                                                <option value="Blended or Hybrid">
                                                                  Blended or
                                                                  Hybrid
                                                                </option>
                                                                <option value="On-ground">
                                                                  On-ground
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Collaboration
                                                                Type
                                                              </label>
                                                              <select className="select input">
                                                                <option value=""></option>
                                                                <option
                                                                  value="Global"
                                                                  selected
                                                                >
                                                                  Global
                                                                </option>
                                                                <option value="Departmental">
                                                                  Departmental
                                                                </option>
                                                                <option value="Institutional">
                                                                  Institutional
                                                                </option>
                                                                <option value="Regional">
                                                                  Regional
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Region:
                                                              </label>
                                                              <select className="select input">
                                                                <option value=""></option>
                                                                <option
                                                                  value="All"
                                                                  selected
                                                                >
                                                                  All
                                                                </option>
                                                                <option value="Africa ">
                                                                  Africa{" "}
                                                                </option>
                                                                <option value="Asia ">
                                                                  Asia{" "}
                                                                </option>
                                                                <option value="Central America ">
                                                                  Central
                                                                  America{" "}
                                                                </option>
                                                                <option value="Europe">
                                                                  Europe{" "}
                                                                </option>
                                                                <option value="Middle East ">
                                                                  Middle East{" "}
                                                                </option>
                                                                <option value="North America ">
                                                                  North America{" "}
                                                                </option>
                                                                <option value="Oceania ">
                                                                  Oceania{" "}
                                                                </option>
                                                                <option value="South America ">
                                                                  South America{" "}
                                                                </option>
                                                                <option value="The Caribbean ">
                                                                  The Caribbean{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Preferred
                                                                Language
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option
                                                                  value="English"
                                                                  selected
                                                                >
                                                                  English
                                                                </option>
                                                                <option value="Arabic ">
                                                                  Arabic{" "}
                                                                </option>
                                                                <option value="Bengali  ">
                                                                  Bengali{" "}
                                                                </option>
                                                                <option value="French ">
                                                                  French{" "}
                                                                </option>
                                                                <option value="Hindi ">
                                                                  Hindi{" "}
                                                                </option>
                                                                <option value="Japanese ">
                                                                  Japanese{" "}
                                                                </option>
                                                                <option value="Mandarin ">
                                                                  Mandarin{" "}
                                                                </option>
                                                                <option value="Norwegian ">
                                                                  Norwegian{" "}
                                                                </option>
                                                                <option value="Punjabi ">
                                                                  Punjabi{" "}
                                                                </option>
                                                                <option value="Russian ">
                                                                  Russian{" "}
                                                                </option>
                                                                <option value="Spanish">
                                                                  Spanish
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Program Length
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="Mini Term">
                                                                  Mini Term
                                                                </option>
                                                                <option value="Ongoing ">
                                                                  Ongoing{" "}
                                                                </option>
                                                                <option value="Quarter ">
                                                                  Quarter{" "}
                                                                </option>
                                                                <option value="Semester ">
                                                                  Semester{" "}
                                                                </option>
                                                                <option value="Summer ">
                                                                  Summer{" "}
                                                                </option>
                                                                <option
                                                                  value="Trimester"
                                                                  selected
                                                                >
                                                                  Trimester
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Credit
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="1">
                                                                  1{" "}
                                                                </option>
                                                                <option value="2">
                                                                  2{" "}
                                                                </option>
                                                                <option
                                                                  value="3"
                                                                  selected
                                                                >
                                                                  3{" "}
                                                                </option>
                                                                <option value="4">
                                                                  4{" "}
                                                                </option>
                                                                <option value="other">
                                                                  Other{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <div className="col-md-6">
                                                            <div className="form-group">
                                                              <label>
                                                                Program Level
                                                              </label>
                                                              <select className="input select">
                                                                <option value=""></option>
                                                                <option value="Certificate ">
                                                                  Certificate{" "}
                                                                </option>
                                                                <option value="Associates ">
                                                                  Associates{" "}
                                                                </option>
                                                                <option
                                                                  value="Undergraduate "
                                                                  selected=""
                                                                >
                                                                  Undergraduate{" "}
                                                                </option>
                                                                <option value="Graduate ">
                                                                  Graduate{" "}
                                                                </option>
                                                                <option value="Masters ">
                                                                  Masters{" "}
                                                                </option>
                                                                <option value="Doctoral ">
                                                                  Doctoral{" "}
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                        </div>{" "}
                                                        {/* row */}
                                                        <div className="row mb-2">
                                                          <div className="col-md-12">
                                                            <strong>
                                                              Project Date Range
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
                                                              <input type="range" />
                                                            </div>
                                                            <div className="wrap-range-label width-inherit">
                                                              <ul className="d-flex">
                                                                <li>Jan</li>
                                                                <li>Feb</li>
                                                                <li>Mar</li>
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
                                                        <div className="row text-center pt-2">
                                                          <a
                                                            href="#"
                                                            className="btn btn-blue btn-w-100 m-auto"
                                                            data-dismiss="modal"
                                                          >
                                                            Save
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/*  areas of interest */}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="mb-2 mt-2">
                                        <a
                                          href="#"
                                          className="btn btn-blue btn-w-100 mr-1"
                                        >
                                          Learn More
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          data-toggle="modal"
                                          data-target="#whatTypeModal"
                                          className="btn btn-blue btn-w-100"
                                        >
                                          Add
                                        </a>
                                      </div>

                                      {/* Modal what type of  project */}
                                      <div
                                        className="modal fade modalToltip"
                                        id="whatTypeModal"
                                        tabindex="-1"
                                        role="dialog"
                                        aria-labelledby="modalLabel"
                                        aria-hidden="true"
                                      >
                                        <div
                                          className="modal-dialog"
                                          role="document"
                                        >
                                          <div className="modal-content">
                                            <div className="modal-body">
                                              <div
                                                id="add-interest-modal"
                                                className="font14 interest-modal bg-grey no-border"
                                              >
                                                <div className="view-more-interest-modal-inner position-relative">
                                                  <div className="toltip-close2">
                                                    <a
                                                      href="javascript:void(0);"
                                                      data-dismiss="modal"
                                                    >
                                                      <i className="fa fa-times-circle"></i>
                                                    </a>
                                                  </div>
                                                  <div className="view-more-interest-modal-inner-content w-100">
                                                    <div className="row mb-2">
                                                      <div className="col-md-12">
                                                        <div className="form-group w-100">
                                                          <label>
                                                            What type of project
                                                            are you interest in?
                                                          </label>
                                                          <select
                                                            onChange="project_type(this.value)"
                                                            className="input select"
                                                          >
                                                            <option value="Select a Project">
                                                              Select a Project
                                                            </option>
                                                            <option value=""></option>
                                                            <option value="Academic Journal">
                                                              Academic Journal
                                                            </option>
                                                            <option value="Best Practices">
                                                              Best Practices
                                                            </option>
                                                            <option
                                                              value="Course Development"
                                                              selected
                                                            >
                                                              Course Development
                                                            </option>
                                                            <option value="Curriculum Development">
                                                              Curriculum
                                                              Development
                                                            </option>
                                                            <option value="General Publication">
                                                              General
                                                              Publication
                                                            </option>
                                                            <option value="Mentorship">
                                                              Mentorship
                                                            </option>
                                                            <option value="Peer Review">
                                                              Peer Review
                                                            </option>
                                                            <option value="Research">
                                                              Research
                                                            </option>
                                                            <option value="Study Abroad">
                                                              Study Abroad
                                                            </option>
                                                            <option value="Other">
                                                              Other
                                                            </option>
                                                          </select>
                                                        </div>

                                                        <div className="form-group">
                                                          <label>
                                                            Description:
                                                          </label>
                                                          <textarea
                                                            className="input textarea"
                                                            style={{
                                                              height: "65px",
                                                              minHeight: "auto",
                                                            }}
                                                          >
                                                            I would like to
                                                            co-develop a
                                                            business ethics
                                                            className focused on
                                                            multinational
                                                            corporations and how
                                                            ethics may or may
                                                            not conflict with
                                                            the culture in
                                                            countries where MNCs
                                                            are located.
                                                          </textarea>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      id="wrap-project-type"
                                                      className="row mb-2"
                                                    >
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Preferred Language
                                                          </label>
                                                          <select className="input select">
                                                            <option value=""></option>
                                                            <option value="English">
                                                              English
                                                            </option>

                                                            <option value="Arabic ">
                                                              Arabic{" "}
                                                            </option>
                                                            <option value="Bengali  ">
                                                              Bengali{" "}
                                                            </option>
                                                            <option value="French ">
                                                              French{" "}
                                                            </option>
                                                            <option value="Hindi ">
                                                              Hindi{" "}
                                                            </option>
                                                            <option value="Japanese ">
                                                              Japanese{" "}
                                                            </option>
                                                            <option value="Mandarin ">
                                                              Mandarin{" "}
                                                            </option>
                                                            <option value="Norwegian ">
                                                              Norwegian{" "}
                                                            </option>
                                                            <option value="Punjabi ">
                                                              Punjabi{" "}
                                                            </option>
                                                            <option value="Russian ">
                                                              Russian{" "}
                                                            </option>
                                                            <option value="Spanish">
                                                              Spanish
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6"></div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Collaboration Type
                                                          </label>
                                                          <select
                                                            className="select input"
                                                            id="select_collaboration_type"
                                                            onChange="collaboration_type(this.value)"
                                                          >
                                                            <option value=""></option>
                                                            <option value="Global">
                                                              Global
                                                            </option>
                                                            <option value="Departmental">
                                                              Departmental
                                                            </option>
                                                            <option value="Institutional">
                                                              Institutional
                                                            </option>
                                                            <option value="Regional">
                                                              Regional
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Region 1:
                                                          </label>
                                                          <select
                                                            className="select input"
                                                            onchange="region_1(this.value);"
                                                            id="select_region_1"
                                                            disabled
                                                          >
                                                            <option value=""></option>
                                                            <option value="All">
                                                              All
                                                            </option>
                                                            <option value="Africa ">
                                                              Africa{" "}
                                                            </option>
                                                            <option value="Asia ">
                                                              Asia{" "}
                                                            </option>
                                                            <option value="Central America ">
                                                              Central America{" "}
                                                            </option>
                                                            <option value="Europe ">
                                                              Europe{" "}
                                                            </option>
                                                            <option value="Middle East ">
                                                              Middle East{" "}
                                                            </option>
                                                            <option value="North America ">
                                                              North America{" "}
                                                            </option>
                                                            <option value="Oceania ">
                                                              Oceania{" "}
                                                            </option>
                                                            <option value="South America ">
                                                              South America{" "}
                                                            </option>
                                                            <option value="The Caribbean ">
                                                              The Caribbean{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Discipline 1:
                                                          </label>
                                                          <select
                                                            className="input select"
                                                            onchange="discipline_1(this.value);"
                                                            id="select_discipline_1"
                                                          >
                                                            <option value=""></option>
                                                            <option value="Anthropology ">
                                                              Anthropology{" "}
                                                            </option>
                                                            <option value="Archaeology ">
                                                              Archaeology{" "}
                                                            </option>
                                                            <option value="Arts ">
                                                              Arts{" "}
                                                            </option>
                                                            <option value="Biology ">
                                                              Biology{" "}
                                                            </option>
                                                            <option value="Business ">
                                                              Business{" "}
                                                            </option>
                                                            <option value="Chemistry ">
                                                              Chemistry{" "}
                                                            </option>
                                                            <option value="Computer Science ">
                                                              Computer Science{" "}
                                                            </option>
                                                            <option value="Earth Science ">
                                                              Earth Science{" "}
                                                            </option>
                                                            <option value="Economics ">
                                                              Economics{" "}
                                                            </option>
                                                            <option value="Engineering ">
                                                              Engineering{" "}
                                                            </option>
                                                            <option value="History ">
                                                              History{" "}
                                                            </option>
                                                            <option value="Human Geography ">
                                                              Human Geography{" "}
                                                            </option>
                                                            <option value="Languages ">
                                                              Languages{" "}
                                                            </option>
                                                            <option value="Law ">
                                                              Law{" "}
                                                            </option>
                                                            <option value="Literature ">
                                                              Literature{" "}
                                                            </option>
                                                            <option value="Mathematics ">
                                                              Mathematics{" "}
                                                            </option>
                                                            <option value="Medicine and Health ">
                                                              Medicine and
                                                              Health{" "}
                                                            </option>
                                                            <option value="Philosophy ">
                                                              Philosophy{" "}
                                                            </option>
                                                            <option value="Physics ">
                                                              Physics{" "}
                                                            </option>
                                                            <option value="Political Science ">
                                                              Political Science{" "}
                                                            </option>
                                                            <option value="Psychology ">
                                                              Psychology{" "}
                                                            </option>
                                                            <option value="Sociology ">
                                                              Sociology{" "}
                                                            </option>
                                                            <option value="Space Sciences ">
                                                              Space Sciences{" "}
                                                            </option>
                                                            <option value="Statistics ">
                                                              Statistics{" "}
                                                            </option>
                                                            <option value="Theology ">
                                                              Theology{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Region 2:
                                                          </label>
                                                          <select
                                                            className="select input"
                                                            onchange="region_2(this.value);"
                                                            id="select_region_2"
                                                            disabled
                                                          >
                                                            <option value=""></option>
                                                            <option value="All">
                                                              All
                                                            </option>
                                                            <option value="Africa ">
                                                              Africa{" "}
                                                            </option>
                                                            <option value="Asia ">
                                                              Asia{" "}
                                                            </option>
                                                            <option value="Central America ">
                                                              Central America{" "}
                                                            </option>
                                                            <option value="Europe ">
                                                              Europe{" "}
                                                            </option>
                                                            <option value="Middle East ">
                                                              Middle East{" "}
                                                            </option>
                                                            <option value="North America ">
                                                              North America{" "}
                                                            </option>
                                                            <option value="Oceania ">
                                                              Oceania{" "}
                                                            </option>
                                                            <option value="South America ">
                                                              South America{" "}
                                                            </option>
                                                            <option value="The Caribbean ">
                                                              The Caribbean{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Discipline 2:
                                                          </label>
                                                          <select
                                                            className="input select"
                                                            disabled=""
                                                            id="select_discipline_2"
                                                            onchange="discipline_2(this.value);"
                                                          >
                                                            <option value=""></option>
                                                            <option value="Anthropology ">
                                                              Anthropology{" "}
                                                            </option>
                                                            <option value="Archaeology ">
                                                              Archaeology{" "}
                                                            </option>
                                                            <option value="Arts ">
                                                              Arts{" "}
                                                            </option>
                                                            <option value="Biology ">
                                                              Biology{" "}
                                                            </option>
                                                            <option value="Business ">
                                                              Business{" "}
                                                            </option>
                                                            <option value="Chemistry ">
                                                              Chemistry{" "}
                                                            </option>
                                                            <option value="Computer Science ">
                                                              Computer Science{" "}
                                                            </option>
                                                            <option value="Earth Science ">
                                                              Earth Science{" "}
                                                            </option>
                                                            <option value="Economics ">
                                                              Economics{" "}
                                                            </option>
                                                            <option value="Engineering ">
                                                              Engineering{" "}
                                                            </option>
                                                            <option value="History ">
                                                              History{" "}
                                                            </option>
                                                            <option value="Human Geography ">
                                                              Human Geography{" "}
                                                            </option>
                                                            <option value="Languages ">
                                                              Languages{" "}
                                                            </option>
                                                            <option value="Law ">
                                                              Law{" "}
                                                            </option>
                                                            <option value="Literature ">
                                                              Literature{" "}
                                                            </option>
                                                            <option value="Mathematics ">
                                                              Mathematics{" "}
                                                            </option>
                                                            <option value="Medicine and Health ">
                                                              Medicine and
                                                              Health{" "}
                                                            </option>
                                                            <option value="Philosophy ">
                                                              Philosophy{" "}
                                                            </option>
                                                            <option value="Physics ">
                                                              Physics{" "}
                                                            </option>
                                                            <option value="Political Science ">
                                                              Political Science{" "}
                                                            </option>
                                                            <option value="Psychology ">
                                                              Psychology{" "}
                                                            </option>
                                                            <option value="Sociology ">
                                                              Sociology{" "}
                                                            </option>
                                                            <option value="Space Sciences ">
                                                              Space Sciences{" "}
                                                            </option>
                                                            <option value="Statistics ">
                                                              Statistics{" "}
                                                            </option>
                                                            <option value="Theology ">
                                                              Theology{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>

                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Region 3:
                                                          </label>
                                                          <select
                                                            className="select input"
                                                            id="select_region_3"
                                                            onchange="region_3(this.value);"
                                                            disabled
                                                          >
                                                            <option value=""></option>
                                                            <option value="All">
                                                              All
                                                            </option>
                                                            <option value="Africa ">
                                                              Africa{" "}
                                                            </option>
                                                            <option value="Asia ">
                                                              Asia{" "}
                                                            </option>
                                                            <option value="Central America ">
                                                              Central America{" "}
                                                            </option>
                                                            <option value="Europe ">
                                                              Europe{" "}
                                                            </option>
                                                            <option value="Middle East ">
                                                              Middle East{" "}
                                                            </option>
                                                            <option value="North America ">
                                                              North America{" "}
                                                            </option>
                                                            <option value="Oceania ">
                                                              Oceania{" "}
                                                            </option>
                                                            <option value="South America ">
                                                              South America{" "}
                                                            </option>
                                                            <option value="The Caribbean ">
                                                              The Caribbean{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Discipline 3:
                                                          </label>
                                                          <select
                                                            className="input select"
                                                            disabled=""
                                                            id="select_discipline_3"
                                                          >
                                                            <option value=""></option>
                                                            <option value="Anthropology ">
                                                              Anthropology{" "}
                                                            </option>
                                                            <option value="Archaeology ">
                                                              Archaeology{" "}
                                                            </option>
                                                            <option value="Arts ">
                                                              Arts{" "}
                                                            </option>
                                                            <option value="Biology ">
                                                              Biology{" "}
                                                            </option>
                                                            <option value="Business ">
                                                              Business{" "}
                                                            </option>
                                                            <option value="Chemistry ">
                                                              Chemistry{" "}
                                                            </option>
                                                            <option value="Computer Science ">
                                                              Computer Science{" "}
                                                            </option>
                                                            <option value="Earth Science ">
                                                              Earth Science{" "}
                                                            </option>
                                                            <option value="Economics ">
                                                              Economics{" "}
                                                            </option>
                                                            <option value="Engineering ">
                                                              Engineering{" "}
                                                            </option>
                                                            <option value="History ">
                                                              History{" "}
                                                            </option>
                                                            <option value="Human Geography ">
                                                              Human Geography{" "}
                                                            </option>
                                                            <option value="Languages ">
                                                              Languages{" "}
                                                            </option>
                                                            <option value="Law ">
                                                              Law{" "}
                                                            </option>
                                                            <option value="Literature ">
                                                              Literature{" "}
                                                            </option>
                                                            <option value="Mathematics ">
                                                              Mathematics{" "}
                                                            </option>
                                                            <option value="Medicine and Health ">
                                                              Medicine and
                                                              Health{" "}
                                                            </option>
                                                            <option value="Philosophy ">
                                                              Philosophy{" "}
                                                            </option>
                                                            <option value="Physics ">
                                                              Physics{" "}
                                                            </option>
                                                            <option value="Political Science ">
                                                              Political Science{" "}
                                                            </option>
                                                            <option value="Psychology ">
                                                              Psychology{" "}
                                                            </option>
                                                            <option value="Sociology ">
                                                              Sociology{" "}
                                                            </option>
                                                            <option value="Space Sciences ">
                                                              Space Sciences{" "}
                                                            </option>
                                                            <option value="Statistics ">
                                                              Statistics{" "}
                                                            </option>
                                                            <option value="Theology ">
                                                              Theology{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <div className="form-group">
                                                          <label>
                                                            Region 4:
                                                          </label>
                                                          <select
                                                            className="select input"
                                                            id="select_region_4"
                                                            onchange="region_4(this.value);"
                                                            disabled
                                                          >
                                                            <option value=""></option>
                                                            <option value="All">
                                                              All
                                                            </option>
                                                            <option value="Africa ">
                                                              Africa{" "}
                                                            </option>
                                                            <option value="Asia ">
                                                              Asia{" "}
                                                            </option>
                                                            <option value="Central America ">
                                                              Central America{" "}
                                                            </option>
                                                            <option value="Europe ">
                                                              Europe{" "}
                                                            </option>
                                                            <option value="Middle East ">
                                                              Middle East{" "}
                                                            </option>
                                                            <option value="North America ">
                                                              North America{" "}
                                                            </option>
                                                            <option value="Oceania ">
                                                              Oceania{" "}
                                                            </option>
                                                            <option value="South America ">
                                                              South America{" "}
                                                            </option>
                                                            <option value="The Caribbean ">
                                                              The Caribbean{" "}
                                                            </option>
                                                          </select>
                                                        </div>
                                                      </div>
                                                    </div>{" "}
                                                    {/*  row */}
                                                    <div className="row mb-2">
                                                      <div className="col-md-12">
                                                        <strong>
                                                          Project Date Range
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
                                                          <input type="range" />
                                                        </div>
                                                        <div className="wrap-range-label width-inherit">
                                                          <ul className="d-flex">
                                                            <li>Jan</li>
                                                            <li>Feb</li>
                                                            <li>Mar</li>
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
                                                    <div className="row text-center pt-2">
                                                      <a
                                                        href="#"
                                                        id="save-what-type"
                                                        className="btn btn-blue btn-w-100 m-auto"
                                                        data-dismiss="modal"
                                                      >
                                                        Save
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <p>
                                        <a
                                          href="sanaa resources screen.html"
                                          className="no-cursor h-blue"
                                        >
                                          Learn More
                                        </a>
                                        <i
                                          className="fa fa-info-circle icon-info cl-blue"
                                          aria-hidden="true"
                                        >
                                          <span className="info-toltip">
                                            Click "Learn More" to learn about
                                            CollaboratED Projects in our
                                            Resources section.
                                          </span>
                                        </i>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END COL */}
                        </div>
                        {/*  row */}
                        <div className="row row-custom ">
                          <div className="col-lg-12 mb-4 text-right">
                            <a className="btn btn-blue" href="#">
                              Save Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
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
