import React from "react";

import "./assets/css/style.css";

//  Modal Areas of interest - view more 1

class AreaInterestVmModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade modalToltip"
        id="areaInterestVm1Modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="box-border-radius box-shadow interest-modal">
                <div className="view-more-interest-modal-inner position-relative">
                  <div className="toltip-close2">
                    <a href="#" data-dismiss="modal">
                      <i className="fa fa-times-circle"></i>
                    </a>
                  </div>
                  <div className="view-more-interest-modal-inner-content text-left">
                    <div className="row mb-2">
                      {/* <div className="col-md-6"> */}
                      <div className="td100">
                        <strong>Project</strong>
                        <br />
                        {this.props.modal.projectType}
                      </div>
                    </div>
                    <div className="row  mb-2">
                      <div className="col-md-6">
                        <strong>Discipline</strong>
                        <br />
                        {this.props.modal.discipline}
                      </div>
                      <div className="col-md-6">
                        <strong>Delivery Method</strong>
                        <br />
                        {this.props.modal.deliveryMethod}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-12">
                        <strong>Description</strong>
                        <br />
                        {this.props.modal.description}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Collaboration Type</strong>
                        <br />
                        {this.props.modal.collaborationType}
                      </div>
                      <div className="col-md-4">
                        <strong>Program Level</strong>
                        <br />
                        {this.props.modal.programLevel}
                      </div>
                      <div className="col-md-4">
                        <strong>Program Length</strong>
                        <br />
                        {this.props.modal.programLength}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Credits</strong>
                        <br />
                        {this.props.modal.credits}
                      </div>
                      <div className="col-md-4">
                        <strong>Preferred Language</strong>
                        <br />
                        {this.props.modal.preferredLanguage}
                      </div>
                      <div className="col-md-4">
                        <strong>Preferred Location</strong>
                        <br />
                        All
                      </div>
                    </div>
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

export default AreaInterestVmModal;
