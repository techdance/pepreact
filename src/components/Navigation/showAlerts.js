import React from "react";

class CompareAlertTypes extends React.Component {
  render() {
    let alertType = this.props.alert.type;
    switch (alertType) {
      case "matches":
        return (
          <div className="toltip-icon toltip-icon-green">
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
        );

      case "bullhorn":
        return (
          <div className="toltip-icon toltip-icon-blue">
            <i className="fas fa-bullhorn" aria-hidden="true"></i>
          </div>
        );

      default:
        return (
          <div className="toltip-image">
            <img
              key={this.props.index}
              src={this.props.alert.image}
              width="48"
              alt=""
            />
          </div>
        );
    }
  }
}

class ShowAlerts extends React.Component {
  render() {
    return (
      <>
        <div className="top-icon icon-2">
          <div className="btn-group btn-group-menu">
            <a
              href="#0"
              className="top-icon-fa top-icon-bell"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="note">
                <span className="outer">{this.props.alerts.length}</span>
              </span>
            </a>
            <div className="dropdown-menu">
              <div id="notification-toltip" className="toltip">
                <div className="toltip-body">
                  {this.props.alerts.map((alert, index) => (
                    <div
                      key={index}
                      id={"toltip-item-" + index}
                      className="toltip-item toltip-overlay d-flex"
                    >
                      <a href="#0" className="close-times" data-id={index}>
                        <i className="fa fa-times-circle"></i>
                      </a>
                      <CompareAlertTypes alert={alert} index={index} />

                      <div key={index} className="toltip-text">
                        <p>{alert.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowAlerts;
