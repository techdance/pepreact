import React from "react";

class ShowProfessorHomepageTeams extends React.Component {
  render() {
    return (
      <div className="col-lg-3 mb-4">
        <div className="resources box box-border-radius box-shadow bg-white">
          <div className="inner-wrap">
            <div className="box-top position-relative">
              <h2 className="box-subhead icon-fa-box icon-user-class pl-45">
                Teams
              </h2>
              <a href="#0" className="icon-setting icon-box">
                <i className="fas fa-cog"></i>
              </a>
            </div>
          </div>
          <div className="box-middle">
            <div className="box-image text-center">
              <i
                className="fad fa-users-class icon-size-60"
                style={{ color: "#008ffa" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProfessorHomepageTeams;
