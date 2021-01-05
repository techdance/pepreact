import React from "react";

export default class ProjectLabCertificateShowObjectives extends React.Component {
  constructor(props) {
    super(props);

    const { objectives } = this.props;

    this.state = {
      objectives: objectives,
    };
  }
  render() {
    const { objectives } = this.state;

    return (
      <div className="col-md-12 mb-4">
        <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
          <table className="table table4">
            <thead>
              <tr>
                <th className="title-head-th">Certificate Objectives</th>
                <th className="text-right">
                  <a
                    href="#0"
                    data-target="#modalCertificateObjectives"
                    data-toggle="modal"
                  >
                    <i className="fas fa-edit"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {objectives.map((objective, index) => (
                <tr key={index}>
                  <td colSpan="2">
                    <strong>{index + 1 + ":"} </strong>
                    {objective}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
