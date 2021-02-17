import React from "react";

import $ from "jquery";

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
      startDate,
      endDate,
      createdDate,
    } = this.props.modal;

    const editMode = this.props.editMode;
    const id = this.props.id;

    // below is for backward compatibility - startDate, endDate and createdDate should be in collaboration interest data object
    const startDateValue = startDate !== undefined ? startDate : "2020-11-01";
    const endDatevalue = endDate !== undefined ? endDate : "2021-02-28";
    const createdDateValue =
      createdDate !== undefined ? createdDate : "2019-01-01";
    console.log(' edit mode: ', this.props);


    let styleContainer = {
      "background-color":"rgba(129, 140, 147, 0.9)"
    }

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id={"areaInterestModal" + id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        // aria-hidden="true"
      >
        <div className="modal-dialog" role="document" >
          <div className="modal-content">
            <div className="modal-header position-relative">
              <div className="toltip-close3">
                <a href="#0" data-dismiss="modal">
                  <i className="fa fa-times-circle"></i>
                </a>
              </div>
              <div className="text-center w-100 font15">
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
                      <div className="col-md-4">
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
                        <div className="row mb-3">
                          <div className="col-md-4">
                            <strong>Start Date</strong>
                            <br />
                            {startDateValue}
                          </div>
                          <div className="col-md-4">
                            <strong>End Date</strong>
                            <br />
                            {endDatevalue}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row text-center pt-2 mt-3">
                      {editMode === "true" ? (
                        <>
                          {" "}
                          <div className="col-md-6 ac">
                            <a
                              href="#0"
                              id="btn-research-project"
                              data-toggle="modal"
                              data-dismiss="modal"
                              data-target={"#areaInterestModalEdit" + id}
                              className="btn btn-blue btn-w-100 m-auto"
                            >
                              Edit
                            </a>
                          </div>
                          <div className="col-md-6 ac">
                            <a
                              href="#0"
                              className="btn btn-blue btn-w-100 m-auto"
                            >
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
                        <strong>Created: {createdDateValue}</strong>
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
