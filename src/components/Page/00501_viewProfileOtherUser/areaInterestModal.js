import React from "react";

//  Modal Areas of interest - view more 1

class AreaInterestModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id={"areaInterestModal" + this.props.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative">
              <div className="toltip-close3">
                <a href="#0" data-dismiss="modal">
                  <i className="fa fa-times-circle"></i>
                </a>
              </div>
              <div className="text-left font15">
                <strong>Project</strong>
                <br />
                {this.props.modal.projectType}
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal">
                <div className="view-more-interest-modal-inner">
                  <div className="view-more-interest-modal-inner-content text-left">
                    <div className="row mb-2">
                      <div className="col-md-12">
                        <strong>Description</strong>
                        <br />
                        {this.props.modal.description}
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
                      <div className="col-md-4">
                        <strong>Collaboration Type</strong>
                        <br />
                        {this.props.modal.collaborationType}
                      </div>
                      <div className="col-md-4">
                        <strong>Region</strong>
                        <br />
                        {this.props.modal.region}
                      </div>
                      <div className="col-md-4">
                        <strong>Program Length</strong>
                        <br />
                        {this.props.modal.programLength}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Preferred Language</strong>
                        <br />
                        {this.props.modal.preferredLanguage}
                      </div>
                      <div className="col-md-4">
                        <strong>Credits</strong>
                        <br />
                        {this.props.modal.credits}
                      </div>
                      <div className="col-md-4">
                        <strong>Program Level</strong>
                        <br />
                        {this.props.modal.programLevel}
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-md-12">
                        <strong>Project Date Range</strong>
                        <div className="top-label-range">
                          <div className="year-init-range">Today 2020</div>
                          <div className="year-last-range">2021</div>
                        </div>
                        <div className="wrap-range">
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="90"
                          ></input>
                        </div>
                        <div className="wrap-range-label width-inherit">
                          <ul className="d-flex">
                            <li>Jan</li>
                            <li>Feb</li>
                            <li>Mar</li>
                            <li>Apr</li>
                            <li>May</li>
                            <li>Jun</li>
                            <li>Jul</li>
                            <li>Aug</li>
                            <li>Sep</li>
                            <li>Oct</li>
                            <li>Nov</li>
                            <li>Dec</li>
                            <li>Jan</li>
                            <li>Feb</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row text-center pt-2 mt-3">
                      <div className="col-md-12 ac">
                        <a href="#0" className="btn btn-blue btn-w-100 m-auto">
                          Find Matches
                        </a>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12 ac mt-3">
                        <strong>Create: 2019-07-15</strong>
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

export default AreaInterestModal;
