import React, {PureComponent} from "react";

import ProgressBar from "progressbar.js";
import ImageShow from "../../Page/Shared/UI/ProfilePic";

class ShowPersonalInformation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { percent: this.props.percentage, bar: "", count:0 };
  }

  componentDidMount() {
    let { sameUser , percentage}= this.props;
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

      this.setState({bar: bar});
    }
  }


  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.percentage){
      const { bar, count } = this.state;
      this.setState({count: count+1});
      if(count==2){ 
        bar.animate(nextProps.percentage-1);
      };
   
    }
  }


  render() {
    const { personalInformation, sameUser , CollaboratedUserProfileimage, percentage } = this.props;
   const { bar } = this.state;
    const imageSrc =  CollaboratedUserProfileimage?.blobData;
    const disable = {
      "pointer-events": "none",
      "color": "#ccc"
    };
    const styleImgae = {
      "display": "inline-block",
      "width": "141px"
    };

  
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
                    <ImageShow  image={imageSrc} styletag={styleImgae} alt="profile Picture" />
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
                      <a href="#0" style={disable} >
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
