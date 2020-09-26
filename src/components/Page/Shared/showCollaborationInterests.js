import React from "react";

//  Used for the modal triggered on clicking "View More" link
import AreaInterestModal from "./areaInterestModal.js";

//  Window to show collaboration interests

class ShowCollaborationInterests extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-6 mb-4" draggable="true">
          <div className="collaboration box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead mw-100">
                  <span className="icon-regular icon-comment-smile"></span>{" "}
                  Collaboration Interests
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-12">
                    <h4 className="mb-3">
                      <span className="icon-regular icon-s-search pr-3"></span>{" "}
                      Areas of interest
                    </h4>

                    {/*  Props contains an array of AOI db records used to display collaboration interests */}
                    {/*  For each db record show data */}
                    <div className="row">
                      {this.props.areaofinterest_list.map(
                        (areaofinterest, index) => (

                          <div className="col-md-6" id={"areas-of-interest-".index + 1}>
                            <div className="areas-of-interest">
                              <div className="row row-custom position-relative">
                                <span className="left-corner" key={index}>
                                  {index + 1}
                                </span>
                                <div className="col-md-8">
                                  <p>
                                    <strong>Project</strong>
                                    <br />
                                    <small key={index}>
                                      {areaofinterest.projectType}
                                    </small>
                                  </p>
                                  <p>
                                    <strong>Preferred Language</strong>
                                    <br />
                                    <small key={index}>
                                      {areaofinterest.preferredLanguage}
                                    </small>
                                  </p>
                                </div>
                                <div className="col-md-4">
                                  <p>
                                    <strong>Discipline</strong>
                                    <br />
                                    <small key={index}>
                                      {areaofinterest.discipline}
                                    </small>
                                  </p>
                                  <p>
                                    <strong>Region</strong>
                                    <br />
                                    <small key={index}>
                                      {areaofinterest.region}
                                    </small>
                                  </p>
                                </div>
                              </div>
                              {/* <div class="row row-custom mt-2">
                                <div class="col-md-12 d-flex justify-content-between align-items-center">
                                  <a href="#0" data-toggle="modal" data-target="#areaInterestVm1Modal">View more</a>

                                  
                                </div>
                              </div> */}
                              <div className="row row-custom mt-2">
                                <div className="col-md-12 d-flex justify-content-between align-items-center">

                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    // data target is the same as ID used to create modal in AreaInterestModal class component.

                                    data-target={"#areaInterestModal" + index}
                                  >
                                    View more
                                    </a>
                                  {areaofinterest.created ? <a href="#0" class="btn btn-blue btn-w-100">Project Created</a> : ""}

                                </div>
                              </div>
                              {/* Shows modal if the View More link is clicked.  */}
                              <AreaInterestModal
                                modal={areaofinterest}
                                id={index}
                              />
                            </div>
                          </div>

                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCollaborationInterests;
