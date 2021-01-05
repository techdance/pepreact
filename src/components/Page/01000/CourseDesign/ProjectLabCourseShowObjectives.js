import React from "react";

export default class ProjectLabCourseShowObjectives extends React.Component {
  render() {
    const { objectives } = this.props;

    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <table className="table table4">
              <thead>
                <tr>
                  <th className="title-head-th-1" scope="col">
                    Course Objectives
                  </th>
                  <th scope="col" className="text-right">
                    <a
                      href="#0"
                      data-toggle="modal"
                      data-target="#modalCourseObjectives"
                    >
                      <i className="fas fa-edit"></i>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {objectives.map((objective, index) => (
                  <tr key={index}>
                    <th className="title-row-th-1" scope="row"></th>
                    <td>{objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
