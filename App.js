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
                                <div className="toltip-image">
                                  <img
                                    src="images/karthik-koothrappali.png"
                                    width="48"
                                  />
                                </div>
                                <div className="toltip-text">
                                  <p>
                                    Karthik Koothrappali declined your
                                    Invitation
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
                                    Randy Wolff uploaded a doc in What
                                    Artificial Intelligence Can Do for Small
                                    Business Project
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
                                    Karthic Koothrappali, Joanne Byrne and
                                    others have matched with you as recommended
                                    partners
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
                        <a href="bradley home screen.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="bradley home screen.html">Resources</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Templates
                      </li>
                    </ol>
                  </nav>
                  <section className="wrap-best-practices">
                    <div className="row row-custom sortable">
                      <div className="col-lg-4 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead mw-100">
                                <i className="fas fa-cogs"></i>
                                <a
                                  href="#"
                                  className="color-black hover-underline color-blue-light-hover"
                                >
                                  Course Development
                                </a>
                              </h2>
                            </div>
                          </div>
                          <div className="box-middle list-bullet">
                            <ul>
                              <li>
                                <a href="#">Course Control Document</a>
                              </li>
                              <li>
                                <a href="#">Course Evaluation Sheet</a>
                              </li>
                              <li>
                                <a href="#">Teaching Plan</a>
                              </li>
                              <li>
                                <a href="#">Syllabus</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>{" "}
                      {/* col-lg-4 */}
                      <div className="col-lg-4 mb-4">
                        <div className="resources box box-border-radius box-shadow bg-white">
                          <div className="inner-wrap">
                            <div className="box-top position-relative">
                              <h2 className="box-subhead">
                                <i className="fas fa-globe-americas"></i>
                                <a
                                  href="#"
                                  className="color-black hover-underline color-blue-light-hover"
                                >
                                  Study Abroad
                                </a>
                              </h2>
                            </div>
                          </div>
                          <div className="box-middle list-bullet">
                            <ul>
                              <li>
                                <a href="#">Health Form</a>
                              </li>
                              <li>
                                <a href="#">Parent Guide</a>
                              </li>
                              <li>
                                <a href="#">Program Fact Sheet</a>
                              </li>
                              <li>
                                <a href="#">Study Abroad Packing Checklist</a>
                              </li>
                              <li>
                                <a href="#">
                                  Study Abroad Pre-Departure Checklist
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>{" "}
                      {/* col-lg-4 */}
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
