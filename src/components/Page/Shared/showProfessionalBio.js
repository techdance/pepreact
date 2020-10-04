import React from "react";

class ShowProfessionalBio extends React.Component {
  render() {
    const { professionalBio } = this.props;

    return (
      <>
        <div className="col-lg-6 mb-4" draggable="true">
          <div className="profesional box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-user-secret"></span>{" "}
                  Professional Bio
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom mb-4">
                  <div className="col-md-12">
                    <h4>
                      <span className="icon-regular icon-camcorder"></span>{" "}
                      <strong>Introduction Video</strong>
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <div className="wrap-video img-resp mb-2">
                      <img src={professionalBio.introVideo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="content-icon position-relative">
                  <div>
                    <span className="icon-regular icon-shield-check"></span>{" "}
                    <strong>Discipline</strong>
                  </div>

                  <p className="blue-color pl-4">
                    <a href="#0">{professionalBio.discipline}</a>
                  </p>
                </div>
                <div className="content-icon position-relative">
                  <div>
                    <span className="icon-regular icon-user-ninja"></span>{" "}
                    <strong>Areas of Expertise</strong>
                  </div>
                  <p className="blue-color pl-4">
                    {professionalBio.areasOfExpertise.map(
                      (expertise, index) => (
                        <>
                          <a key={index} href="#0">
                            {expertise}
                          </a>
                          <br />
                        </>
                      )
                    )}
                  </p>
                </div>
                <div className="content-icon plane">
                  {professionalBio.internationalExperience ? (
                    <p>
                      <span className="icon-regular icon-globe-stand"></span>{" "}
                      <strong>{professionalBio.internationalExperience}</strong>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="content-icon">
                  <div>
                    <span className="icon-regular icon-book-user"></span>{" "}
                    <strong>Bio</strong>
                  </div>
                  <div className="text pl-4">
                    <p>{professionalBio.bio}</p>
                  </div>
                </div>

                <a
                  href={professionalBio.cvLink}
                  className="btn btn-blue view-cv"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowProfessionalBio;
