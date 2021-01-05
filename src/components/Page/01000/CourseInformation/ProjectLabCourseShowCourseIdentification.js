import React from "react";

export default class ProjectLabCourseShowCourseIdentification extends React.Component {
  render() {
    const { identification } = this.props;

    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <table className="table table4">
              <thead>
                <tr>
                  <th className="title-head-th" scope="col">
                    Course Identification
                  </th>
                  <th className="text-right">
                    <a
                      href="#0"
                      data-target="#modalCourseIdentification"
                      data-toggle="modal"
                    >
                      <i className="fas fa-edit"></i>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="title-row-th" scope="row">
                    Course Title:
                  </th>
                  <td>{identification.courseTitle}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Course Number:
                  </th>
                  <td>{identification.courseNumber}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Prerequisites:
                  </th>
                  <td>{identification.prerequisites}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Course Description:
                  </th>
                  <td>{identification.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
