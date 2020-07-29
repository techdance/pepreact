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
    this.setState({ ["locationSelected"]: value });
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
