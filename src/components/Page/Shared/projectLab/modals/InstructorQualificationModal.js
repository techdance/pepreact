import React from "react";

export default class InstructorQualificationsModal extends React.Component {
  constructor(props) {
    super(props);
    const { qualifications } = this.props;
    this.state = { qualifications: qualifications };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index, event) {
    // get user input change from the synthetic event;
    const { value } = event.target;
    let { qualifications } = this.state;
    qualifications[index] = value;
    this.setState({ qualifications: qualifications });
  }

  render() {
    const { qualifications } = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalInstructorQualifications"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Instructor Qualifications</strong>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-12">
                    {qualifications.map((qualification, index) => (
                      <div className="row align-items-center mb-3" key={index}>
                        <label className="col-md-4">
                          {"Instructor " + (index + 1) + " Qualifications"}
                        </label>
                        <div className="col-md-8">
                          <textarea
                            className="w-100"
                            type="text"
                            value={qualification}
                            onChange={(e) => this.handleChange(index, e)}
                          />
                        </div>
                      </div>
                    ))}
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
