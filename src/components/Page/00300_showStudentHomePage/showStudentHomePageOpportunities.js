import React from "react";

import Britt from "../../../assets/images/Britt.png";

class ShowStudentHomePageOpportunities extends React.Component {
  render() {
    const { disabled } = this.props;
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div
            className={
              "box box-border-radius box-shadow bg-white" +
              (disabled ? "  disabled" : "")
            }
          >
            <div className={disabled ? "disabled-overlay" : ""}></div>
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-solid icon-sun-haze"></span>
                  Opportunities
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#0">Sort by Newest </a>
                    </li>
                    <li>
                      <a href="#0">Sort by Oldest</a>
                    </li>
                    <li>
                      <a href="#0" className="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-middle">
              <div className="d-flex ml-2">
                <div>
                  <div className="item-link">
                    <a href="#0">
                      <i className="fas fa-circle color-blue-light mr-1"></i>{" "}
                      Campus Jobs
                    </a>
                  </div>
                  <div className="item-link">
                    <a href="#0">
                      <i className="fas fa-circle color-yellow mr-1"></i>{" "}
                      Virtual Exchange Programs
                    </a>
                  </div>
                  <div className="item-link">
                    <a href="#0">
                      <i className="fas fa-circle color-green mr-1"></i>{" "}
                      Internships and Externships
                    </a>
                  </div>
                </div>
                <div>
                  <img src={Britt} width="60" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageOpportunities;
