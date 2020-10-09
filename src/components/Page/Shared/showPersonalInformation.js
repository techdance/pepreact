import React from "react";

import ProgressBar from "progressbar.js";

class ShowPersonalInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { percent: this.props.progress };
  }

  componentDidMount() {
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
                    <img src={personalInformation.image} width="141" alt="" />
                  </div>
                </div>
                <div className="content-right">
                  <div className="profile-info profile-name">
                    <div className="title">
                      <span className="icon-regular icon-user-alt"></span> Name
                    </div>
                    <div className="text">
                      <a href="#0" className="cl-gray">
                        {personalInformation.name}
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
                        {personalInformation.title}
                      </a>
                    </div>
                  </div>
                  <div class="profile-info profile-name">
                    <div class="title">
                      <span class="icon-regular icon-business-time"></span>{" "}
                      Department
                    </div>
                    <div class="text">
                      <a href="#0" class="cl-gray">
                        {personalInformation.department}
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
                <p>{personalInformation.personalMessage}</p>
              </div>
            </div>
            <a href="#" class="btn btn-blue position-absolute btn-edit-profile">
              <span class="position-relative">
                Edit Profile
                <span class="link-toltip">Profile 100% Complete</span>
              </span>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ShowPersonalInformation;
