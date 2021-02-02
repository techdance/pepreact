import React from "react";

export default class ProjectLabCertificateShowStandards extends React.Component {
  render() {
    const { standards } = this.props;

    return (
      <div className="col-md-12">
        <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
          <table className="table table4">
            <thead>
              <tr>
                <th className="title-head-th">Certificate Standards</th>
                <th className="text-right text-right">
                  <a
                    href="#0"
                    data-target="#modalCertificateStandards"
                    data-toggle="modal"
                  >
                    <i className="fas fa-edit"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {standards.map((standard, index) => (
                <tr key={index}>
                  <td colSpan="2">
                    <strong>{index + 1 + ":"} </strong>
                    {standard}
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
