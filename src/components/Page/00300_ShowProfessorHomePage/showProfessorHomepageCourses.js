import React from "react";

class ShowProfessorHomepageCourses extends React.Component {
  render() {
    const { courses } = this.props;
    return (
      <>
        <div className="col-lg-9 mb-4 my-projects">
          <div className="box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead icon-fa-box icon-book-alt-light pl-4">
                  My Courses
                </h2>
                <a href="#0" className="icon-setting icon-box btn-menu">
                  <i className="fas fa-cog"></i>
                </a>
              </div>
              <div className="box-middle">
                <div className="table-wrapper-scroll-x my-custom-scrollbar">
                  <table className="table table2 table-sm">
                    <thead>
                      <tr>
                        <th align="left" className="text-left">
                          COURSE NAME AND NUMBER
                        </th>
                        <th align="center">SCHEDULE</th>
                        <th align="center">LOCATION</th>
                        <th align="center">ROSTER</th>
                        <th align="center">SYLLABUS</th>
                        <th align="center">ATTENDANCE</th>
                        <th align="center">GRADEBOOK</th>
                        <th align="center">REPORTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course, index) => (
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
                          <td>
                            {course.name}
                            <br />
                            {course.code}
                          </td>
                          <td className="align-center">
                            {course.days.map((day, index) => (
                              <span key={index} className="square">
                                {day}
                              </span>
                            ))}
                            <span className="d-block">
                              {course.start}&ndash;{course.end}
                            </span>
                          </td>

                          <td className="align-center">
                            <a href="#0">
                              <i className="fad fa-backpack icon-size-40"></i>
                            </a>
                          </td>
                          <td className="align-center font20">
                            <a href="#0">
                              <i className="fad fa-user-check icon-size-40"></i>
                            </a>
                          </td>
                          <td className="align-center">
                            <a href="#0">
                              <i className="fad fa-tasks icon-size-40"></i>
                            </a>
                          </td>
                          <td className="align-center">
                            <a href="#0">
                              <i className="fad fa-ballot-check icon-size-40"></i>
                            </a>
                          </td>
                          <td className="align-center">
                            <a href="#0">
                              <i className="fad fa-address-book icon-size-40"></i>
                            </a>
                          </td>
                          <td className="align-center">
                            <a href="#0">
                              <i className="fad fa-file-chart-pie icon-size-40"></i>
                            </a>
                          </td>
                        </tr>
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

export default ShowProfessorHomepageCourses;
