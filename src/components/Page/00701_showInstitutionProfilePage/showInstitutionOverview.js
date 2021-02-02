import React from "react";

export default function ShowInstitutionOverview(props) {
  const { overview } = props;

  const edit = "edit" in props ? props.edit : false; // new versions pass "edit=true" if the "Edit Profile" button needs to show

  return (
    <>
      <section className="wrap-institution">
        <div className="row row-custom ">
          <div className="col-lg-12 mb-4">
            <div className="personal box box-border-radius box-shadow bg-white position-relative">
              <div className="inner-wrap">
                <div className="box-top position-relative">
                  <h2 className="box-subhead d-inline">
                    <span className="icon-regular icon-school"></span>
                    Institution Overview
                  </h2>
                  {edit ? (
                    <a
                      href="#0"
                      className="btn btn-blue btn-w-100 ml-3 mb-3 d-inline"
                    >
                      Edit Profile
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="box-middle mt-3">
                  <div className="row row-custom">
                    <div className="col-md-9">
                      <p>{overview.description1}</p>
                      <p>{overview.description2}</p>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mb-2">
                            <strong>Founded</strong>
                            <br />
                            {overview.foundedYear}
                          </div>
                          <div className="mb-2">
                            <strong>Academic Calendar</strong>
                            <br />
                            {overview.academicCalendar}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-2">
                            <strong>Type</strong>

                            {overview.type.map((institutionType, index) => (
                              <>
                                <br key={index} /> {institutionType}{" "}
                              </>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-2">
                            <strong>Primary Language</strong>
                            <br />
                            {overview.primaryLanguage}
                          </div>
                          <div className="mb-2">
                            <strong>Secondary Languages</strong>

                            {overview.otherLanguages.map((language, index) => (
                              <>
                                {" "}
                                <br key={index} /> {language}{" "}
                              </>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-2">
                            <strong>President</strong>
                            <br />
                            {overview.president}
                          </div>
                          <div className="mb-2">
                            <strong>
                              Total Employees: {overview.employees}
                            </strong>
                            <br />
                            Alumni: {overview.alumni}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 img-resp">
                      <img
                        src={overview.image}
                        className="img-responsive"
                        alt=""
                      />
                      <div className="ahea-icons">
                        {/* if the link is an empty string "", then don't show the social media icon */}
                        {overview.facebookLink && (
                          <a href={overview.facebookLink}>
                            <i className="fab fa-facebook-square"></i>
                          </a>
                        )}

                        {overview.twitterLink && (
                          <a href={overview.twitterLink}>
                            <i className="fab fa-twitter-square"></i>
                          </a>
                        )}

                        {overview.instagramLink && (
                          <a href={overview.instagramLink}>
                            <i className="fab fa-instagram-square"></i>
                          </a>
                        )}

                        {overview.linkedinLink && (
                          <a href={overview.linkeinLink}>
                            <i className="fab fa-linkedin"></i>
                          </a>
                        )}

                        {overview.youtubeLink && (
                          <a href={overview.youtubeLink}>
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
