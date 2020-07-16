import React from "react";

class ShowCommunicationPreferences extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-12 mb-4">
          <div className="institution box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead mw-100">
                  <span className="icon-regular icon-comment-dots"></span>{" "}
                  Communication Preferences
                </h2>
              </div>
              <div className="box-middle">
                <div className="content-icon">
                  {this.props.professor.communicationPreferences.map(
                    (language, index) => (
                      <p className="mb-1">
                        <span className="icon-regular icon-comment-check"></span>{" "}
                        <span key={index} className="cl-gray">
                          {language}
                        </span>
                      </p>
                    )
                  )}
                </div>

                <div className="content-icon">
                  <p className="mb-1">
                    <span className="icon-regular icon-envelope"></span>{" "}
                    <a
                      href="mailto:bdexter@ahea.edu"
                      className="dont-break-out"
                    >
                      {this.props.professor.emailAddress}
                    </a>
                  </p>
                </div>

                {this.props.professor.phoneNumbers.map((phoneNumber, index) => (
                  <div className="content-icon">
                    <p className="mb-1">
                      <span className="icon-regular icon-phone-office"></span>{" "}
                      <a key={index} href={"tel:" + phoneNumber}>
                        {phoneNumber}
                      </a>
                    </p>
                  </div>
                ))}

                <div className="content-icon">
                  <p className="mb-1">
                    <span className="icon-regular icon-desktop-alt"></span>{" "}
                    <a
                      href={this.props.professor.url}
                      className="dont-break-out"
                    >
                      {this.props.professor.url}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCommunicationPreferences;
