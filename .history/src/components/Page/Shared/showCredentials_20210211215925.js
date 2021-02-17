import React from "react";

class ShowCredentials extends React.Component {
  render() {
    const disable = {
      "pointer-events": "none",
      "color": "#ccc"
    };
    return (
      <>
        <div className="col-lg-6 mb-4" draggable="true">
          <div className="credentials box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-id-card"></span>{" "}
                  Credentials
                </h2>
              </div>
              <div className="box-middle">
                <div className="content-icon">
                  <p className="mb-0">
                    <span className="icon-regular icon-user-graduate"></span>{" "}
                    <strong>Highest Education Level</strong>
                  </p>
                  <p className="cl-gray pl-4">
                    {this.props.credentials?.educationLevel}
                  </p>
                </div>
                <div className="content-icon">
                  <p className="mb-0">
                    <span className="icon-regular icon-trophy-alt"></span>{" "}
                    <strong>Professional Memberships</strong>
                  </p>
                  {this.props.credentials?.professionalMemberships?.map(
                    (professionalMembership, index) => (
                      <p className="blue-color pl-4" key={index}>
                        <a href={professionalMembership.link}>
                          {professionalMembership.name}
                        </a>
                      </p>
                    )
                  )}
                </div>
                <div className="content-icon">
                  <p className="mb-0">
                    <span className="icon-regular icon-file-certificate"></span>{" "}
                    <strong>Certificates</strong>
                  </p>
                  {this.props.credentials?.certificates.map(
                    (certificate, index) => (
                      <p key={index} className="cl-gray pl-4">
                        {certificate}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="box-bottom text-center">
                <a href="#0" className="btn btn-blue" style={disable}>
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCredentials;
