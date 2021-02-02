import React from "react";

export default class ProjectLabCertificateShowCertificateIdentification extends React.Component {
  constructor(props) {
    super(props);

    const { identification } = this.props;
    this.state = {
      identification: identification,
    };

    this.showIdentificationHeader = this.showIdentificationHeader.bind(this);
    this.showIdentificationBody = this.showIdentificationBody.bind(this);
  }

  showIdentificationHeader() {
    return (
      <thead>
        <tr>
          <th className="title-head-th" scope="col">
            Certificate Identification
          </th>
          <th className="text-right">
            <a
              href="#0"
              data-target="#modalCertificateIdentification"
              data-toggle="modal"
            >
              <i className="fas fa-edit"></i>
            </a>
          </th>
        </tr>
      </thead>
    );
  }

  showIdentificationBody() {
    const { identification } = this.state;
    return (
      <tbody>
        <tr>
          <th className="title-row-th" scope="row">
            Certificate Name:
          </th>
          <td>{identification.certificateTitle}</td>
        </tr>
        <tr>
          <th className="title-row-th" scope="row">
            Certificate Number:
          </th>
          <td>{identification.certificateNumber}</td>
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
    );
  }

  render() {
    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <table className="table table4">
              {this.showIdentificationHeader()}
              {this.showIdentificationBody()}
            </table>
          </div>
        </div>
      </>
    );
  }
}
