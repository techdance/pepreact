import React from "react";

class ShowStudentHomePageCampusFeeds extends React.Component {
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
                  <span className="icon-regular icon-id-card-alt"></span>Campus
                  Services
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
              <div className="list-bullet">
                <ul>
                  <li>
                    <a href="#0">Book Store</a>
                  </li>
                  <li>
                    <a href="#0">Library and Lending Services</a>
                  </li>
                  <li>
                    <a href="#0">Career Services</a>
                  </li>
                  <li>
                    <a href="#0">Campus Security</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageCampusFeeds;
