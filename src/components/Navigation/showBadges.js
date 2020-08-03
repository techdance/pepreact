import React from "react";

function RenderCongratsMessage(props) {
  const { badge } = props;

  return (
    <div className="toltip toltip-overlay p-3">
      <div className="toltip-header">
        <div className="toltip-title icon-fa-box icon-award pl-4">Badges</div>
        <div className="toltip-close">
          <a href="#0" data-dismiss="modal">
            <i className="fa fa-times-circle"></i>
          </a>
        </div>
      </div>
      <div className="toltip-body text-center">
        <div className="wrap-icon">
          <i
            className={"fad " + badge.icon + " icon-size-120 mt-3 mb-3"}
            style={{ color: badge.iconColor }}
          ></i>
        </div>
        <p>{"Congratulations! You earned a " + badge.name + " Badge."}</p>
      </div>
      <div className="toltip-footer text-center">
        <a href="#0" className="btn btn-blue m-auto">
          View More
        </a>
      </div>
    </div>
  );
}

function RenderBadgeList(props) {
  const { badges } = props;

  return (
    <div className="toltip toltip-1-3 any-toltip">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="toltip-item toltip-overlay d-flex justify-content-between"
        >
          <div className="d-flex align-items-center">
            <div className={"toltip-icon " + badge.iconColor}>
              <i className={"fas " + badge.icon}> </i>
            </div>
            <div className="toltip-text font18">
              <p>{badge.name}</p>
            </div>
          </div>
          <div className="text-right pr-3">
            <a href="#0" className="color-white">
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

class ShowBadges extends React.Component {
  render() {
    const { badges } = this.props;

    return (
      <>
        <div className="top-icon top-icon-badges">
          <div className="btn-group btn-group-menu">
            <a
              href="#0"
              type="button"
              className="top-icon-fa top-icon-award"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={this.handleClick}
            >
              <span className="note">
                <span className="outer">{badges.length}</span>
              </span>
            </a>
            <div className="dropdown-menu">
              {badges.length === 1 ? (
                <RenderCongratsMessage badge={badges[0]} />
              ) : (
                <RenderBadgeList badges={badges} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowBadges;
