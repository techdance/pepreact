import React from "react";

class ShowBadges extends React.Component {
  render() {
    return (
      <>
        <div className="top-icon top-icon-badges">
          <div className="btn-group btn-group-menu">
            <a
              href="javascript:void(0);"
              type="button"
              className="top-icon-fa top-icon-award"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="note">
                <span className="outer">{this.props.badges.length}</span>
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="toltip toltip-overlay p-3">
                <div className="toltip-header">
                  <div className="toltip-title icon-fa-box icon-award pl-4">
                    Badges
                  </div>
                  <div className="toltip-close">
                    <a href="#" data-dismiss="modal">
                      <i className="fa fa-times-circle"></i>
                    </a>
                  </div>
                </div>
                <div className="toltip-body text-center">
                  <div className="wrap-icon">
                    <i
                      className="fad fa-chart-network icon-size-120 mt-3 mb-3"
                      style={{ color: "#6C389B" }}
                    ></i>
                  </div>
                  <p>
                    {"Congratulations! You earned a " +
                      this.props.badges[0] +
                      " Badge."}
                  </p>
                </div>
                <div className="toltip-footer text-center">
                  <a href="#" className="btn btn-blue m-auto">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowBadges;
