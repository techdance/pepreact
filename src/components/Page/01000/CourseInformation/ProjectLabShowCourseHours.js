import React from "react";

export default class ProjectLabShowCourseHours extends React.Component {
  render() {
    const { hours } = this.props;

    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <table className="table table4">
              <thead>
                <tr>
                  <th className="title-head-th" scope="col">
                    Course Hours
                  </th>
                  <th className="text-right">
                    <a
                      href="#0"
                      data-toggle="modal"
                      data-target="#courseHoursModal"
                    >
                      <i className="fas fa-edit"></i>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="title-row-th" scope="row">
                    Credit Hours:
                  </th>
                  <td>{hours.creditHours}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Contact Hours:
                  </th>
                  <td>{hours.contactHours}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Lecture Hours:
                  </th>
                  <td>{hours.lectureHours}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Laboratory Hours:
                  </th>
                  <td>{hours.labHours}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
