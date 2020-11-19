import React from "react";

class ShowInstitutionOverview extends React.Component {
  render() {
    return (
      <>
        <section className="wrap-institution">
          <div className="row row-custom ">
            <div className="col-lg-12 mb-4">
              <div className="personal box box-border-radius box-shadow bg-white position-relative">
                <div className="inner-wrap">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-school"></span>
                      Institution Overview
                    </h2>
                  </div>
                  <div className="box-middle">
                    <div className="row row-custom">
                      <div className="col-md-9">
                        <p>{this.props.overview.description1}</p>
                        <p>{this.props.overview.description2}</p>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="mb-2">
                              <strong>Founded</strong>
                              <br />
                              {this.props.overview.foundedYear}
                            </div>
                            <div className="mb-2">
                              <strong>Academic Calendar</strong>
                              <br />
                              {this.props.overview.academicCalendar}
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mb-2">
                              <strong>Type</strong>

                              {this.props.overview.type.map(
                                (institutionType, index) => (
                                  <>
                                    <br key={index} /> {institutionType}{" "}
                                  </>
                                )
                              )}
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mb-2">
                              <strong>Language</strong>
                              <br />
                              Primary: {this.props.overview.primaryLanguage}
                            </div>
                            <div className="mb-2">
                              <strong>Other Languages</strong>

                              {this.props.overview.otherLanguages.map(
                                (language, index) => (
                                  <>
                                    {" "}
                                    <br key={index} /> {language}{" "}
                                  </>
                                )
                              )}
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mb-2">
                              <strong>President</strong>
                              <br />
                              {this.props.overview.president}
                            </div>
                            <div className="mb-2">
                              <strong>
                                Total Employees: {this.props.overview.employees}
                              </strong>
                              <br />
                              Alumni: {this.props.overview.alumni}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 img-resp">
                        <img
                          src={this.props.overview.image}
                          className="img-responsive"
                          alt=""
                        />
                        <div className="ahea-icons">
                          {/* if the link is an empty string "", then don't show the social media icon */}
                          {this.props.overview.facebookLink && (
                            <a href={this.props.overview.facebookLink}>
                              <i className="fab fa-facebook-square"></i>
                            </a>
                          )}

                          {this.props.overview.twitterLink && (
                            <a href={this.props.overview.twitterLink}>
                              <i className="fab fa-twitter-square"></i>
                            </a>
                          )}

                          {this.props.overview.instagramLink && (
                            <a href={this.props.overview.instagramLink}>
                              <i className="fab fa-instagram-square"></i>
                            </a>
                          )}

                          {this.props.overview.linkedinLink && (
                            <a href={this.props.overview.linkeinLink}>
                              <i className="fab fa-linkedin"></i>
                            </a>
                          )}

                          {this.props.overview.youtubeLink && (
                            <a href={this.props.overview.youtubeLink}>
                              <i className="fab fa-youtube-square"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ShowInstitutionOverview;
