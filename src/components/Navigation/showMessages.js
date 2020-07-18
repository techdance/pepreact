import React from "react";

class ShowMessages extends React.Component {
  render() {
    return (
      <>
        <div className="top-icon top-icon-message">
          <div className="btn-group btn-group-menu">
            <a
              href="javascript:void(0);"
              className="top-icon-fa top-icon-comment"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="note">
                <span className="outer">{this.props.messages.length}</span>
              </span>
            </a>
            <div className="dropdown-menu">
              <div id="email-toltip" className="toltip">
                <div className="toltip-body">
                  {this.props.messages.map((message, index) => (
                    <div
                      key={index}
                      id={"toltip-item-" + index}
                      className="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5"
                    >
                      <a href="#" className="close-times" data-id={index}>
                        <i className="fas fa-times-circle"></i>
                      </a>
                      <div className="status-email"></div>
                      <div className="toltip-text p-2 pl-4">
                        <div className="toltip-header">
                          <div className="toltip-header-left p0">
                            <p key={index}>{message.from}</p>
                          </div>
                          <div className="toltip-header-right text-right p0">
                            <p key={index}>{message.time} </p>
                          </div>
                        </div>
                        <div className="toltip-subhead p0">
                          <p key={index}>{message.subject}</p>
                        </div>
                        <div className="toltip-content p0">
                          <p key={index}>{message.text}</p>
                        </div>
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

export default ShowMessages;
