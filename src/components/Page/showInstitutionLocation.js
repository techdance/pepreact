import React from "react";

class ShowInstitutionLocation extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="comunication box box-border-radius box-shadow bg-white">
            <div className="inner-wrap position-relative">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-globe-americas"></span>{" "}
                  Location
                </h2>
                <div className="form-group">
                  <select className="select border-grey">
                    <option>Main Campus</option>
                  </select>
                </div>
              </div>
              <div id="profile-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.223709997125!2d-80.08920788445147!3d26.35162538337247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21b52df2431%3A0x287ee0d28d668b01!2s101%20N%20Federal%20Hwy%2C%20Boca%20Raton%2C%20FL%2033432%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sbo!4v1594939087559!5m2!1ses-419!2sbo"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div className="box-middle">
                <div className="content-icon line-height-15">
                  <i className="fas fa-map"></i>{" "}
                  <strong>{this.props.location.name1}</strong> <br />
                  {this.props.location.address1} <br />
                  {this.props.location.city +
                    ", " +
                    this.props.location.state +
                    " " +
                    this.props.location.country +
                    " " +
                    this.props.location.zipcode}{" "}
                  <br />
                </div>
                <div className="content-icon line-height-15">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{this.props.location.continent}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowInstitutionLocation;
