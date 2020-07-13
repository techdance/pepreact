import React from "react";

class ShowPersonalInformation extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-12 mb-4">
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
                  <div className="bg-profile no-bg">
                    <img src={this.props.professor.image} width="141" />
                  </div>
                </div>
                <div className="content-right" style={{ width: "50%" }}>
                  <div className="profile-info profile-name">
                    <div className="title">
                      <span className="icon-regular icon-user-alt"></span> Name
                    </div>
                    <div className="text">
                      <a href="#" className="cl-gray">
                        {this.props.professor.name}
                      </a>
                    </div>
                  </div>
                  <div className="profile-info profile-title">
                    <div className="title">
                      <span className="icon-regular icon-user-tie"></span> Title
                    </div>
                    <div className="text">
                      <a href="#" className="cl-gray">
                        {this.props.professor.title}
                      </a>
                    </div>
                  </div>
                  <div className="profile-info profile-title mt-2">
                    <a href="#">
                      <img
                        className="message-info mr-3"
                        src="./images/message-info.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-middle">
                <h4>
                  <span className="icon-regular icon-user-cog"></span> My
                  Thoughts
                </h4>
                <p>{this.props.professor.personalMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowPersonalInformation;
