import React from "react";

export default class ProjectLabShowQualifications extends React.Component {
  constructor(props) {
    super(props);

    const { qualifications } = this.props;

    this.state = {
      qualifications: qualifications,
    };
  }

  render() {
    const { qualifications } = this.state;

    return (
      <div className="col-md-12">
        <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
          <table className="table table4">
            <thead>
              <tr>
                <th className="title-head-th" scope="col">
                  Instructor Qualifications
                </th>
                <th className="text-right text-right">
                  <a
                    href="#0"
                    data-target="#modalInstructorQualifications"
                    data-toggle="modal"
                  >
                    <i className="fas fa-edit"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((qualification, index) => (
                <tr key={index}>
                  <th className="title-row-th" scope="row">
                    {"Instructor " + (index + 1) + ":"}{" "}
                  </th>
                  <td>{qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
