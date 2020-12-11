import React from "react";
import Knob from "../../UI/Knob.js";

class ShowStudentHomePageCourses extends React.Component {
  render() {
    const courses = this.props.courses;

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
                      {courses.map((course, index) => (
                        <>
                          {/* row color is to distinguish between rows and is set in className of tr element */}
                          <tr
                            key={index}
                            className={
                              {
                                0: "row-color row-color-blue",
                                1: "row-color row-color-green",
                                2: "row-color row-color-orange",
                                3: "row-color row-color-blue-light",
                                4: "row-color row-color-brown",
                              }[index % 5]
                            }
                          >
                            <td className="bold">
                              {course.name}
                              <br />
                              <span>{course.code} </span>
                            </td>
                            <td className="align-center">
                              {course.days.map((day, index) => (
                                <span key={index} className="square">
                                  {day}
                                </span>
                              ))}
                              <br />
                              {course.start}&ndash;{course.end}
                            </td>
                            <td className="align-center">
                              <div className="t-location">
                                <a href="#0">
                                  <span
                                    className={
                                      "icon-duotone icon-" +
                                      course.location.type +
                                      " icon-size-40"
                                    }
                                  ></span>
                                </a>
                              </div>
                            </td>
                            <td className="align-center">
                              <span className="wrap-image">
                                <img
                                  src={course.instructor.image}
                                  width="34"
                                  alt=""
                                />
                              </span>
                              <span className="org-name">
                                {course.instructor.name}
                              </span>
                            </td>
                            <td className="align-center">
                              <span className="icon-duotone icon-tasks icon-size-40"></span>
                            </td>
                            <td className="align-center td-person-icon">
                              <span className="icon-duotone icon-user-graduate icon-size-40"></span>
                            </td>
                            {/* <td className="align-center">
                              <span className="icon-duotone icon-file-download icon-size-40"></span>
                            </td> */}

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
                                  {course.assignmentsExams.map(
                                    (assignment, index) => (
                                      <div
                                        key={index}
                                        id={"toltip-item-course-" + index + 1}
                                        className="toltip-item toltip-overlay d-flex p-0"
                                      >
                                        <a
                                          href="#0"
                                          className="close-times"
                                          data-id={index + 1}
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
                                            <strong>{assignment.name}</strong>
                                            <br />
                                            <span>{assignment.due}</span>
                                          </p>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </td>

                            <td className="align-center">
                              <input
                                type="text"
                                className="knob"
                                value={course.progress}
                                data-width="50"
                                data-height="50"
                                // knob colors need to match row colors. See <tr> element above
                                data-fgColor={
                                  {
                                    0: "#084265",
                                    1: "#339900",
                                    2: "#ff993e",
                                    3: "#009fff",
                                    4: "#9f5a14",
                                  }[index % 5]
                                }
                                disabled=""
                              />
                              {/* javascript code to render course progress knob */}
                              <Knob tag={".knob"} />
                            </td>
                          </tr>
                        </>
                      ))}
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

export default ShowStudentHomePageCourses;
