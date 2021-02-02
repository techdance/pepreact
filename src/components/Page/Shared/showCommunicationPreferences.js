import React from "react";

class ShowCommunicationPreferences extends React.Component {
  render() {
    const { communicationPreferences } = this.props;

    return (
      <>
        <div className="col-lg-6 mb-4" draggable="true">
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
                  {communicationPreferences.languages.map((language, index) => (
                    <p className="mb-1" key={index}>
                      <span className="icon-regular icon-comment-check"></span>{" "}
                      <span key={index} className="cl-gray">
                        {language}
                      </span>
                    </p>
                  ))}
                </div>

                <div className="content-icon">
                  <p className="mb-1">
                    <span className="icon-regular icon-envelope"></span>{" "}
                    <a
                      href="mailto:bdexter@ahea.edu"
                      className="dont-break-out"
                    >
                      {communicationPreferences.emailAddress}
                    </a>
                  </p>
                </div>

                {communicationPreferences.phoneNumbers.map(
                  (phoneNumber, index) => (
                    <div className="content-icon" key={index}>
                      <p className="mb-1">
                        <span className="icon-regular icon-phone-office"></span>{" "}
                        <a key={index} href={"tel:" + phoneNumber}>
                          {phoneNumber}
                        </a>
                      </p>
                    </div>
                  )
                )}

                <div className="content-icon">
                  <p className="mb-1">
                    <span className="icon-regular icon-desktop-alt"></span>{" "}
                    <a
                      href={communicationPreferences.url}
                      className="dont-break-out"
                    >
                      {communicationPreferences.url}
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
