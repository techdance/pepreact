import React from "react";

// import Iframe from "react-iframe";

class ShowInstitutionProfle extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-6 mb-4" draggable="true">
          <div className="comunication box box-border-radius box-shadow bg-white">
            <div className="inner-wrap position-relative">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-hospital-user"></span>
                  Institution Profile
                </h2>
              </div>
              <div id="profile-map">
                <iframe
                  title="ShowInstitutionProfileTile"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11922.656204986277!2d-91.534944!3d41.663!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1578620721149!5m2!1sen!2sus"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                />
              </div>
              <div className="box-middle">
                <div className="content-icon">
                  <span className="icon-regular icon-user-shield"></span>{" "}
                  <a href="#0">{this.props.institutionProfile.name}</a>
                </div>
                <div className="content-icon">
                  <span className="icon-regular icon-calendar-check"></span>{" "}
                  {this.props.institutionProfile.type}
                </div>
                <div className="content-icon">
                  <span className="icon-regular icon-globe"></span>{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Iowa+City,+Iowa,+EE.+UU./@41.6470317,-91.6094033,12z/data=!3m1!4b1!4m5!3m4!1s0x87e441c16a208817:0x6d711867870582b0!8m2!3d41.6611277!4d-91.5301683"
                  >
                    {this.props.institutionProfile.location}
                  </a>
                </div>
                <div className="content-icon">
                  <span className="icon-regular icon-globe-americas"></span>{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Iowa+City,+IA/@41.6470317,-91.6094032,12z/data=!3m1!4b1!4m5!3m4!1s0x87e441c16a208817:0x6d711867870582b0!8m2!3d41.6611277!4d-91.5301683"
                  >
                    {this.props.institutionProfile.continent}
                  </a>
                </div>
                <div className="content-icon">
                  <span className="icon-regular icon-calendar-week"></span>{" "}
                  {this.props.institutionProfile.calendar}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowInstitutionProfle;
