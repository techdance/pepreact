import React from "react";

export class CertificateIdentificationModal extends React.Component {
  constructor(props) {
    super(props);

    const { identification } = this.props;
    this.state = identification;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const identification = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCertificateIdentification"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Certificate Identification</strong>
              </div>
              <div className="toltip-close3">
                <a href="#0" data-dismiss="modal">
                  <i className="fa fa-times-circle"></i>
                </a>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-white">
                {/* using Event delegation to cover send all onChange states to handleChange */}
                <div className="row" onChange={this.handleChange}>
                  <div className="col-md-12">
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Certificate Name</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={identification.certificateTitle}
                          name="certificateTitle"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Certificate Number</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={identification.certificateNumber}
                          name="certificateNumber"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Prerequisites</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={identification.prerequisites}
                          name="prerequisites"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">
                        Certificate Description
                      </label>
                      <div className="col-md-8">
                        <textarea
                          className="w-100"
                          value={identification.description}
                          name="description"
                        >
                          {identification.description}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 text-right">
                    <a
                      href="#0"
                      className="btn btn-grey mr-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <a href="#0" className="btn btn-blue" data-dismiss="modal">
                      Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class CertificateDetailsModal extends React.Component {
  constructor(props) {
    super(props);

    const { details } = this.props;
    this.state = details;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(Object.values(name));
    // name is length 0 if either the input control didn't define it or it came from the select statement
    if (name) this.setState({ [name]: value });
  }

  handleChangeSingleSelect(field, event) {
    const { value } = event.target;
    this.setState({ [field]: value });
  }

  render() {
    const details = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCertificateDetails"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Certificate Details</strong>
              </div>
              <div className="toltip-close3">
                <a href="#0" data-dismiss="modal">
                  <i className="fa fa-times-circle"></i>
                </a>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-white">
                {/* using Event delegation to cover send all onChange states to handleChange */}
                <div className="row" onChange={this.handleChange}>
                  <div className="col-md-12">
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Units</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={details.units}
                          name="units"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Certificate Level</label>
                      <div className="col-md-8">
                        <input
                          className="w-100"
                          type="text"
                          value={details.certificateLevel}
                          name="certificateLevel"
                        />
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <label className="col-md-4">Time Commitment</label>
                      <div className="col-md-8">
                        <input
                          type="number"
                          value={details.timeCommitment}
                          name="timeCommitment"
                          style={{ width: "70px" }}
                          className="mr-2"
                        />

                        <select
                          style={{ height: "27px" }}
                          onChange={(e) =>
                            this.handleChangeSingleSelect(
                              "timeCommitmentUnit",
                              e
                            )
                          }
                          defaultValue={details.timeCommitmentUnit}
                        >
                          <option value="Hours">Hours</option>
                          <option value="Days">Days</option>
                          <option value="Weeks">Weeks</option>
                          <option value="Months">Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 text-right">
                    <a
                      href="#0"
                      className="btn btn-grey mr-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <a href="#0" className="btn btn-blue" data-dismiss="modal">
                      Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
