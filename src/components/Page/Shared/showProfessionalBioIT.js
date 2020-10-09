import React from "react";

class ShowProfessionalBio extends React.Component {
  render() {
    const { professionalBio } = this.props;

    return (
      <>
        <div class="col-lg-12 mb-4">
          <div class="profesional box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-user-secret"></span>{" "}
                  Professional Bio
                </h2>
              </div>
              <div class="box-middle">
                <div class="row row-custom mb-4">
                  <div class="col-md-12">
                    <span class="icon-regular icon-camcorder"></span>{" "}
                    <strong>Introduction Video</strong>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="wrap-video img-resp mb-2 position-relative">
                          <img src={professionalBio.introVideo} alt="" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="content-icon position-relative">
                          <a
                            href={professionalBio.cvLink}
                            className="btn btn-blue view-cv"
                          >
                            View CV
                          </a>
                        </div>

                        <div class="content-icon position-relative">
                          <div>
                            <span class="icon-regular icon-user-ninja"></span>{" "}
                            <strong>Areas of Expertise</strong>
                          </div>
                          <p class="blue-color pl-4">
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
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="content-icon">
                      <div>
                        <span class="icon-regular icon-book-user"></span>{" "}
                        <strong>Bio</strong>
                      </div>
                      <div class="text pl-4">
                        <p>{professionalBio.bio}</p>
                      </div>
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

export default ShowProfessionalBio;
