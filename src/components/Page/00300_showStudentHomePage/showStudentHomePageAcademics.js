import React from "react";

class ShowStudentHomePageAcademics extends React.Component {
  render() {
    const { advisor, academics, disabled } = this.props;
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
                  <span className="icon-solid icon-user-chart"></span>
                  My Academics
                </h2>

                <a href="#0" className="icon-setting icon-box btn-menu">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#0">Edit Profile</a>
                    </li>
                    <li>
                      <a href="#0" className="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="box-middle d-flex">
                <div className="profile-image position-relative font14 text-center">
                  <a
                    href="#0"
                    data-toggle="modal"
                    data-target="#virtualOfficeModal"
                    className="color-black"
                  >
                    <img src={advisor.image} alt="" width="80" />
                    <br />
                    <div className="font12">
                      <strong>Your Advisor</strong>
                      <br />
                      <span>{advisor.name}</span>
                    </div>
                  </a>
                </div>
                <div className="profile-text font14 list-bullet">
                  <ul>
                    {academics.map((academic, index) => (
                      <li key={index}>
                        <a href={academic.link}>{academic.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="box-bottom">
                <div className="bg-grey-2 p-2 box-border-radius">
                  <strong>What if I Change My Program?</strong>
                  <p>
                    <a href="#0">Scenario Runner</a>
                  </p>
                </div>
              </div>
              <div className="box-bottom text-center mt-3">
                <p className="ac">
                  <a
                    href="#0"
                    className="btn btn-blue btn-w-100"
                    id="partner-search"
                  >
                    View More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageAcademics;
