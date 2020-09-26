import React from "react";

class ShowProfessionalBio extends React.Component {
  render() {
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
                      <img src={this.props.professor.introVideo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="content-icon position-relative">
                  <div>
                    <span className="icon-regular icon-shield-check"></span>{" "}
                    <strong>Discipline</strong>
                  </div>
                  {this.props.professor.disciplines.map((discipline, index) => (
                    <p className="blue-color pl-4">
                      <a key={index} href="#0">
                        {discipline}
                      </a>
                    </p>
                  ))}
                </div>
                <div className="content-icon position-relative">
                  <div>
                    <span className="icon-regular icon-user-ninja"></span>{" "}
                    <strong>Areas of Expertise</strong>
                  </div>
                  <p className="blue-color pl-4">
                    {this.props.professor.areasOfExpertise.map(
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
                  {this.props.professor.internationalExperience ? (<p>
                    <span className="icon-regular icon-globe-stand"></span>{" "}
                    <strong>
                      {this.props.professor.internationalExperience}
                    </strong>
                  </p>) : ""}

                </div>
                <div className="content-icon">
                  <div>
                    <span className="icon-regular icon-book-user"></span>{" "}
                    <strong>Bio</strong>
                  </div>
                  <div className="text pl-4">
                    <p>{this.props.professor.bio}</p>
                  </div>
                </div>

                <a
                  href={this.props.professor.cvLink}
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
