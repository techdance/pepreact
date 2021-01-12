import React from "react";

class ShowInstitutionLocation extends React.Component {
  constructor(props) {
    // state contains the currently selected location name. Default to the first location.
    super(props);
    this.state = { locationSelected: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // set state to the selected location

    // get user input change from the synthetic event; value contains the index in locations which is currently selected.
    const { value } = event.target;

    //  set local state
    this.setState({ locationSelected: value });
  };

  render() {
    //   locations contains all locations for this institution
    //  state contains the index in locations for the current selected location
    //  location contains details to display for the current selected location.
    const { locations } = this.props;
    const locationSelected = this.state.locationSelected;
    const location = locations[locationSelected];

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
                  {/* Select drop down showing all locations with the currently selected location as the default value */}
                  <select
                    value={locationSelected}
                    className="select border-grey"
                    onChange={this.handleChange}
                  >
                    {locations.map((location, index) => (
                      <option key={index} name={index} value={index}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div id="profile-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.223709997125!2d-80.08920788445147!3d26.35162538337247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21b52df2431%3A0x287ee0d28d668b01!2s101%20N%20Federal%20Hwy%2C%20Boca%20Raton%2C%20FL%2033432%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sbo!4v1594939087559!5m2!1ses-419!2sbo"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="box-middle">
                <div className="content-icon line-height-15">
                  <i className="fas fa-map"></i>{" "}
                  <strong>{location.institution}</strong> <br />
                  {location.address1} <br />
                  {location.city +
                    ", " +
                    location.state +
                    " " +
                    location.country +
                    " " +
                    location.zipcode}{" "}
                  <br />
                </div>
                <div className="content-icon line-height-15">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{location.continent}</strong>
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
