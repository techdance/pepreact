import React from "react";

class AreaInterestModal extends React.Component {
  render() {
    const {
      projectType,
      description,
      discipline,
      deliveryMethod,
      collaborationType,
      region,
      programLength,
      preferredLanguage,
      credits,
      programLevel,
      dateRange,
      created,
    } = this.props.modal;

    const editMode = this.props.editMode;
    const id = this.props.id;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id={"areaInterestModal" + id}
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
                {projectType}
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
                        {description}
                      </div>
                    </div>
                    <div className="row  mb-2">
                      <div className="col-md-6">
                        <strong>Discipline</strong>
                        <br />
                        {discipline}
                      </div>
                      <div className="col-md-6">
                        <strong>Delivery Method</strong>
                        <br />
                        {deliveryMethod}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Collaboration Type</strong>
                        <br />
                        {collaborationType}
                      </div>
                      <div className="col-md-4">
                        <strong>Region</strong>
                        <br />
                        {region}
                      </div>
                      <div className="col-md-4">
                        <strong>Program Length</strong>
                        <br />
                        {programLength}
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <strong>Preferred Language</strong>
                        <br />
                        {preferredLanguage}
                      </div>
                      <div className="col-md-4">
                        <strong>Credits</strong>
                        <br />
                        {credits}
                      </div>
                      <div className="col-md-4">
                        <strong>Program Level</strong>
                        <br />
                        {programLevel}
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
                      {editMode === "true" ? (
                        <>
                          {" "}
                          <div class="col-md-6 ac">
                            <a
                              href="#0"
                              id="btn-research-project"
                              data-toggle="modal"
                              data-target={"#areaInterestModalEdit" + id}
                              class="btn btn-blue btn-w-100 m-auto"
                            >
                              Edit
                            </a>
                          </div>
                          <div class="col-md-6 ac">
                            <a href="#0" class="btn btn-blue btn-w-100 m-auto">
                              Find Matches
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="col-md-12 ac">
                          <a
                            href="#0"
                            className="btn btn-blue btn-w-100 m-auto"
                          >
                            Find Matches
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12 ac mt-3">
                        <strong>Created: 2019-07-15</strong>
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
