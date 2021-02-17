import React from "react";

import ProgressBar from "progressbar.js";

class ShowPersonalInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { percent: this.props.progress };
  }

  componentDidMount() {
    const { sameUser } = this.props;

    if (sameUser === "true") {
      let bar = new ProgressBar.Circle("#progress", {
        strokeWidth: 15,
        easing: "easeInOut",
        duration: 1400,
        color: "#299EFF",
        trailColor: "#eee",
        trailWidth: 1,
        svgStyle: null,
      });

      bar.animate(this.state.percent);
    }
  }

  render() {
    const { personalInformation, sameUser } = this.props;

    return (
      <>
        <div className="col-lg-6 mb-4" draggable="true">
          <div className="personal box box-border-radius box-shadow bg-white position-relative">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-user-circle"></span>
                  Personal Information
                </h2>
              </div>
              <div className="box-middle d-flex align-items-center">
                <div className="content-left">
                  <div className="bg-profile no-bg" id="progress">
                    {/* <img src={personalInformation?.image} width="141" alt="" /> */}
                    <img source={`data:image/jpeg;base64,${personalInformation?.blobData}`}  width="141" alt=""  />

                  </div>
                </div>
                <div className="content-right">
                  <div className="profile-info profile-name">
                    <div className="title">
                      <span className="icon-regular icon-user-alt"></span> Name
                    </div>
                    <div className="text">
                      <a href="#0" className="cl-gray">
                        {personalInformation?.name}
                      </a>
                    </div>
                  </div>
                  <div className="profile-info profile-name">
                    <div className="title">
                      <span className="icon-regular icon-user-tie"></span>{" "}
                      Position
                    </div>
                    <div className="text">
                      <a href="#0" className="cl-gray">
                        {personalInformation?.position}
                      </a>
                    </div>
                  </div>
                  <div className="profile-info profile-name">
                    <div className="title">
                      <span className="icon-regular icon-business-time"></span>{" "}
                      Department
                    </div>
                    <div className="text">
                      <a href="#0" className="cl-gray">
                        {personalInformation?.department}
                      </a>
                    </div>
                  </div>
                  {sameUser === "true" ? (
                    ""
                  ) : (
                    <div className="profile-info profile-title mt-2">
                      <a href="#0">
                        <img
                          className="message-info mr-3"
                          src="./images/message-info.png"
                          alt=""
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="box-middle">
                <h4>
                  <span className="icon-regular icon-user-cog"></span> My
                  Thoughts
                </h4>
                <p>{personalInformation?.thoughts}</p>
              </div>
            </div>
            {sameUser === "true" ? (
              <a
                href="/edit-profile"
                className="btn btn-blue position-absolute btn-edit-profile"
              >
                <span className="position-relative">
                  Edit Profile
                  <span className="link-toltip">Profile 100% Complete</span>
                </span>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ShowPersonalInformation;
