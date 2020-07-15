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
              <a href="#" className="icon-fa icon-alarm-exclamation">
                <span className="group-hide">My Holds</span>
              </a>
            </li>

            <li className="disabled-link">
              >
              <a href="#" className="icon-fa icon-usd-square">
                <span className="group-hide"> My Financials</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-user-chart">
                <span className="group-hide"> My Academics</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-solar-system">
                <span className="group-hide"> My Groups</span>
              </a>
            </li>
            <li className="disabled-link">
              <a href="#" className="icon-fa icon-book-medical">
                <span className="group-hide"> Course Registration</span>
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
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-alarm-exclamation">
                      <span className="group-hide">My Holds</span>
                    </a>
                  </li>

                  <li className="disabled-link">
                    >
                    <a href="#" className="icon-fa icon-usd-square">
                      <span className="group-hide"> My Financials</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-user-chart">
                      <span className="group-hide"> My Academics</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-solar-system">
                      <span className="group-hide"> My Groups</span>
                    </a>
                  </li>
                  <li className="disabled-link">
                    <a href="#" className="icon-fa icon-book-medical">
                      <span className="group-hide"> Course Registration</span>
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
                                        color: "#ea8f3d",
                                        display: "inline-block",
                                        textDecoration: "underline",
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
                                        color: "#0693f4",
                                        display: "inline-block",
                                        textDecoration: "underline",
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
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">My Courses</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Ethics in Multinational Management</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Discussion</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Are ethical and legal the same thing
                      </li>
                    </ol>
                  </nav>
                  <section className="row row-custom announcements mb-4">
                    <div className="col-lg-12">
                      <div className="box box-border-radius box-shadow bg-white w-100">
                        <h2 className="box-subhead pl-0 font30 mw-100 mb-2">
                          BUS 131-02: Ethics in Multinational Management
                        </h2>
                        <h3 className="color-orange font24 mb-3">
                          Location: Online
                        </h3>
                        <h5 className="color-grey font18">Spring 2020</h5>
                      </div>
                    </div>
                  </section>
                  <section className="three-columns">
                    <div className="row row-custom mb-4 sortable">
                      <div className="col-lg-12 mb-4">
                        <div className="box box-border-radius box-shadow bg-white height-auto">
                          <h2 className="box-subhead pl-0 font30 mw-100 mb-2 color-orange">
                            Join in the Ethics in Multinational Management
                            Discussions?
                          </h2>
                          <h3 className="color-grey-2 mb-3">
                            Share your thoughts, ideas, and concerns here. You
                            must make at least two posts.
                          </h3>
                          <a
                            href="#"
                            className="btn btn-blue btn-w-100 font18"
                            style={{ lineHeight: "1 !important" }}
                          >
                            Add
                          </a>

                          <div className="table-wrapper-scroll-x my-custom-scrollbar">
                            <table
                              width="100%"
                              className="table-course"
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                            >
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Discussion</th>
                                  <th>Started By</th>
                                  <th>Created</th>
                                  <th>Last Post</th>
                                  <th>Replies</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className="star">
                                    <i className="fas fa-star"></i>
                                  </td>
                                  <td className="discussion">
                                    Are ethical and legal the same thing
                                  </td>
                                  <td valign="middle">
                                    <a href="#">
                                      <img
                                        width="50"
                                        src="images/Bradley.png"
                                      />{" "}
                                      Bradley Dexter
                                    </a>
                                  </td>
                                  <td>2020-03-06 10:02 AM </td>
                                  <td>
                                    <div className="td-img">
                                      <img
                                        width="50"
                                        src="images/Victoria.png"
                                      />
                                    </div>
                                    <div className="td-text">
                                      <a href="#">Victoria Banks </a>
                                      <br />
                                      2020-03-09 12:17 PM
                                    </div>
                                  </td>
                                  <td>1</td>
                                </tr>
                                <tr className="even">
                                  <td className="star">
                                    <i className="far fa-star"></i>
                                  </td>
                                  <td className="discussion">
                                    Lab 1: Introducing myself
                                  </td>
                                  <td valign="middle">
                                    <a href="#">
                                      <img width="50" src="images/Sean.png" />{" "}
                                      Sean Johnson
                                    </a>
                                  </td>
                                  <td>2020-03-07 3:17 PM </td>
                                  <td>
                                    <div className="td-img">
                                      <img width="50" src="images/Tim.png" />
                                    </div>
                                    <div className="td-text">
                                      <a href="#">Timothy Parker </a>
                                      <br />
                                      2020-03-04 8:03 AM
                                    </div>
                                  </td>
                                  <td>6</td>
                                </tr>
                                <tr className="odd">
                                  <td className="star">
                                    <i className="far fa-star"></i>
                                  </td>
                                  <td className="discussion">
                                    Test message - hi everyone
                                  </td>
                                  <td valign="middle">
                                    <a href="#">
                                      <img
                                        width="50"
                                        src="images/William.png"
                                      />{" "}
                                      William Sandler
                                    </a>
                                  </td>
                                  <td>2020-03-03 11:46 AM </td>
                                  <td>
                                    <div className="td-img">
                                      <img
                                        width="50"
                                        src="images/Merrill.png"
                                      />
                                    </div>
                                    <div className="td-text">
                                      <a href="#">Merrill Winston </a>
                                      <br />
                                      2020-03-03 1:37 PM
                                    </div>
                                  </td>
                                  <td>2</td>
                                </tr>
                                <tr className="even">
                                  <td className="star">
                                    <i className="far fa-star"></i>
                                  </td>
                                  <td className="discussion">Welcome</td>
                                  <td valign="middle">
                                    <a href="#">
                                      <img
                                        width="50"
                                        src="images/Bradley.png"
                                      />{" "}
                                      Bradley Dexter
                                    </a>
                                  </td>
                                  <td>2020-03-02 2:13 PM </td>
                                  <td>
                                    <div className="td-img">
                                      <img
                                        width="50"
                                        src="images/Jessica.png"
                                      />
                                    </div>
                                    <div className="td-text">
                                      <a href="#">Jessica Thompson</a>
                                      <br />
                                      2020-03-04 6:12 PM
                                    </div>
                                  </td>
                                  <td>12</td>
                                </tr>
                              </tbody>
                            </table>
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
