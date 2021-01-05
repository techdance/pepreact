import React from "react";
import {
  ShowListModalHeader,
  ShowListModalSavedItems,
  ShowListModalButtons,
} from "../../Shared/projectLab/modals/ShowListModal.js";

export class CertificateTopicsModal extends React.Component {
  constructor(props) {
    super(props);

    const { topics } = this.props;

    this.state = {
      topics: topics,
    };
  }

  render() {
    const { topics } = this.state;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCertificateTopics"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <ShowListModalHeader headerString={"Certificate Topics"} />
            <div className="modal-body">
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="color-white font24">Certificate Topics</h3>
                  </div>
                </div>

                <ShowListModalSavedItems
                  items={topics}
                  placeholderString={"Enter Certificate Topics Here"}
                />
                <ShowListModalButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class CertificateObjectivesModal extends React.Component {
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
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCertificateObjectives"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <ShowListModalHeader headerString={"Certificate Objectives"} />

            <div className="modal-body">
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="color-white font24">
                      Certificate Objectives
                    </h3>
                  </div>
                </div>

                <ShowListModalSavedItems
                  items={objectives}
                  placeholderString={"Enter Certificate Objectives Here"}
                />
                <ShowListModalButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class CertificateStandardsModal extends React.Component {
  render() {
    const { standards } = this.props;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCertificateStandards"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <ShowListModalHeader headerString={"Certificate Standards"} />
            <div className="modal-body">
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="color-white font24">
                      Certificate Standards
                    </h3>
                  </div>
                </div>

                <ShowListModalSavedItems
                  items={standards}
                  placeholderString={"Enter Certificate Standard Here"}
                />
                <ShowListModalButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
