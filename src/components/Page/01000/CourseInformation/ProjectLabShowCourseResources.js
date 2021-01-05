import React from "react";

export default class ProjectLabShowCourseResources extends React.Component {
  render() {
    const { resources } = this.props;

    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <table className="table table4">
              <thead>
                <tr>
                  <th className="title-head-th" scope="col">
                    Course Resources
                  </th>
                  <th className="text-right">
                    <a
                      href="#0"
                      data-target="#modalCourseResources"
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
                    Textbook Title:
                  </th>
                  <td>{resources.textbookTitle}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Publisher's Name:
                  </th>
                  <td>{resources.publisher}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    Author:
                  </th>
                  <td>{resources.author}</td>
                </tr>
                <tr>
                  <th className="title-row-th" scope="row">
                    ISBN:
                  </th>
                  <td>{resources.isbn}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
