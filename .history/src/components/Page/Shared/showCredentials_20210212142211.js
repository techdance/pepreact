import React from "react";

class ShowCredentials extends React.Component {
  render() {
    const disable = {
      "pointer-events": "none",
      "color": "#ccc"
    };

    let { credentials = null} = this.props;

    console.log(' membership: ', credentials);
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
                    {this.props.credentials?.educationallevel}
                  </p>
                </div>
                <div className="content-icon">
                  <p className="mb-0">
                    <span className="icon-regular icon-trophy-alt"></span>{" "}
                    <strong>Professional Memberships</strong>
                  </p>
                  { credentials?.membership && Object.keys(credentials?.membership)?.map(
                    (PMembershipKey, index) => (
                      <p className="blue-color pl-4" key={index}>
                        <a href={credentials?.membership[PMembershipKey]}>
                          {credentials?.membership[PMembershipKey]}
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
                  {credentials && Object.keys(credentials?.certificates)?.map(
                    (certificateNum, index) => (
                      <p key={index} className="cl-gray pl-4">
                        {credentials?.certificates[certificateNum]}
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
