import React from "react";

class ShowInstituionContactInfo extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="institution box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead mw-100">
                  <span className="icon-regular icon-comment-dots"></span>{" "}
                  Contact info
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-6">
                    <div className="content-icon content-icon2">
                      <p className="mb-1">
                        <span className="icon-solid icon-phone-alt"></span>{" "}
                        <a href="#">{this.props.info.phone}</a>
                      </p>
                      <p className="mb-1">
                        <span className="icon-solid icon-phone-office"></span>{" "}
                        <a href="#">{this.props.info.fax} </a>
                      </p>
                      <p className="mb-1">
                        <span className="icon-solid fa-desktop-alt"></span>{" "}
                        <a href={this.props.info.url}>{this.props.info.url}</a>
                      </p>
                      <p className="mb-1">
                        <span className="icon-solid icon-envelope"></span>{" "}
                        <a href={"mailto:" + this.props.info.email}>
                          {this.props.info.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mp0 line-height-15">
                    <strong>{this.props.info.address.name1}</strong>
                    <p>{this.props.info.address.name2} </p>
                    <p>{this.props.info.address.address1}</p>
                    <p>{this.props.info.address.address2}</p>
                    <p>
                      {this.props.info.address.city +
                        ", " +
                        this.props.info.address.state +
                        " " +
                        this.props.info.address.country +
                        " " +
                        this.props.info.address.zipcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowInstituionContactInfo;
