import React from "react";

class ShowStudentHomePageAcademics extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-9 mb-4 my-projects">
          <div className="box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <a href="#0" className="icon-setting icon-box btn-menu">
                  <span className="icon-solid fa-cog"></span>
                </a>

                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#0">Create New Project</a>
                    </li>
                    <li>
                      <a href="#0">Go to My Projects</a>
                    </li>
                    <li>
                      <a href="#0" className="btn-remove">
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
                      <th align="left">
                        <h2 className="box-subhead">
                          <span className="icon-regular icon-book-alt"></span>My
                          Courses
                        </h2>
                      </th>
                      <th align="center" className="text-center">
                        SCHEDULE
                      </th>
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
                        CLASSMATES
                      </th>
                      <th align="center" className="text-center">
                        ASSIGNMENTS & EXAMS
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
                            <a href="#0">
                              <span className="icon-duotone icon-backpack icon-size-40"></span>
                            </a>
                          </div>
                        </td>
                        <td className="align-center">
                          <span className="wrap-image">
                            <img src="images/Chem.png" width="34" />
                          </span>
                          <span className="org-name">Shaina Berube</span>
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
                          <input
                            type="text"
                            className="knob"
                            value="61%"
                            data-width="50"
                            data-height="50"
                            data-fgColor="#084265"
                            disabled=""
                          />
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
                            <a href="#0">
                              <span className="icon-duotone icon-browser icon-size-40"></span>
                            </a>
                          </div>
                        </td>
                        <td className="align-center">
                          <span className="wrap-image">
                            <img src="images/bradley.png" width="34" />
                          </span>
                          <span className="org-name">Bradley Dexter</span>
                        </td>
                        <td className="align-center">
                          <span className="icon-duotone icon-tasks icon-size-40"></span>
                        </td>
                        <td className="align-center td-person-icon">
                          <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                        </td>
                        <td className="align-center position-relative">
                          <a
                            href="#0"
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
                                  href="#0"
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
                                      Just Business: Multinational Corporation
                                      and Human Rights, Chapter 4
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
                                  href="#0:void(0)"
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
                                    <strong>Unit 1, Quiz #2, 2020-03-13</strong>
                                    <br />
                                    <span>3-13-2020</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-center">
                          <input
                            type="text"
                            className="knob"
                            value="39%"
                            data-width="50"
                            data-height="50"
                            data-fgColor="#339900"
                            disabled=""
                          />
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
                            <a href="#0">
                              <span className="icon-duotone icon-browser icon-size-40"></span>
                            </a>
                          </div>
                        </td>
                        <td className="align-center">
                          <span className="wrap-image">
                            <img src="images/Daniel.png" width="34" />
                          </span>
                          <span className="org-name">Daniel Kearney</span>
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
                          <input
                            type="text"
                            className="knob"
                            value="70%"
                            data-width="50"
                            data-height="50"
                            data-fgColor="#ff993e"
                            disabled=""
                          />
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
                            <a href="#0">
                              <span className="icon-duotone icon-backpack icon-size-40"></span>
                            </a>
                          </div>
                        </td>
                        <td className="align-center">
                          <span className="wrap-image">
                            <img src="images/Sam.png" width="34" />
                          </span>
                          <span className="org-name">Sam Cushman</span>
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
                          <input
                            type="text"
                            className="knob"
                            value="67%"
                            data-width="50"
                            data-height="50"
                            data-fgColor="#009fff"
                            disabled=""
                          />
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
                            <a href="#0">
                              <span className="icon-duotone icon-backpack icon-size-40"></span>
                            </a>
                          </div>
                        </td>
                        <td className="align-center">
                          <span className="wrap-image">
                            <img src="images/Li.png" width="34" />
                          </span>
                          <span className="org-name">Li Kwak</span>
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
                          <input
                            type="text"
                            className="knob"
                            value="67%"
                            data-width="50"
                            data-height="50"
                            data-fgColor="#9f5a14"
                            disabled=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageAcademics;
