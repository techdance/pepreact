import React from "react";

export default class ProjectLabCertificateShowDetails extends React.Component {
  constructor(props) {
    super(props);

    const { details } = this.props;

    this.state = {
      details: details,
    };

    this.showDetailsHeader = this.showDetailsHeader.bind(this);
    this.showDetailsBody = this.showDetailsBody.bind(this);
  }

  showDetailsHeader() {
    return (
      <thead>
        <tr>
          <th className="title-head-th" scope="col">
            Certificate Details
          </th>
          <th className="text-right">
            <a
              href="#0"
              data-target="#modalCertificateDetails"
              data-toggle="modal"
            >
              <i className="fas fa-edit"></i>
            </a>
          </th>
        </tr>
      </thead>
    );
  }

  showDetailsBody() {
    const { details } = this.props;

    return (
      <tbody>
        <tr>
          <th className="title-row-th" scope="row" style={{ width: "100px" }}>
            Units:
          </th>
          <td>{details.units}</td>
        </tr>
        <tr>
          <th className="title-row-th" scope="row">
            Certificate Level:
          </th>
          <td>{details.certificateLevel}</td>
        </tr>
        <tr>
          <th className="title-row-th" scope="row">
            Time Commitment:
          </th>
          <td>{details.timeCommitment + " " + details.timeCommitmentUnit}</td>
        </tr>
      </tbody>
    );
  }
  render() {
    const { details } = this.props;
    return (
      <div className="col-md-12 mb-5">
        <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
          <table className="table table4">
            {this.showDetailsHeader()}
            {this.showDetailsBody()}
          </table>
        </div>
      </div>
    );
  }
}
