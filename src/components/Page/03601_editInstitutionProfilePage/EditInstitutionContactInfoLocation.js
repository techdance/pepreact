import React from "react";

import { InstitutionLocation } from "../../../classes/Institution.js";
import EditInstitutionContactInfoLocationModal from "./EditInstitutionContactInfoLocationModal.js";

import ModalPortal from "../Shared/UI/ModalPortal";
import { removeFromArray } from "../Shared/usefulFunctions.js";

// EditInstitutionContactInfoLocationOld shows the institution locations using a dropdown.
//  It receives as props the array of locations stored in the Institution data object.
//  When a location name is selected the address information is displayed and is editable.
//
// EditInstitutionContactInfoLocation all locations as single lines and shows an "edit" icon that needs to be clicked to edit
//

export default class EditInstitutionContactInfoLocationOld extends React.Component {
  constructor(props) {
    //  state contains array of all locations of the institution and the index of the current viewed (selected) location
    super(props);
    this.state = { locations: this.props.locations, locationSelected: 0 };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleFieldChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    //  first get current state
    let locations = this.state.locations;
    let locationSelected = this.state.locationSelected;

    // get location currently selected, update the field and then update state
    let location = locations[locationSelected];
    location[name] = value;
    this.setState({ locations: locations });

    /// pass current state up to parent to propogate changes
    this.props.onChange("locations", locations);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component
    // This function is not used because there are no child objects to the locations data object.
  };

  handleSelectChange = (event) => {
    // set state to the selected location

    // get user input change from the synthetic event; value contains the index in locations which is currently selected.
    const { value } = event.target;

    //  set local state
    this.setState({ locationSelected: value });
  };

  render() {
    //  locations contains all locations for this institution
    //  locationSelected contains the index in locations for the current selected location
    //  location contains details to display for the current selected location.
    const locations = this.state.locations;
    const locationSelected = this.state.locationSelected;
    const location = locations[locationSelected];

    const {
      name,
      institution,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      continent,
    } = location;

    return (
      <div className="col-lg-6 mb-4">
        <div className="institution box box-border-radius box-shadow bg-white">
          <div className="inner-wrap">
            <div className="box-top position-relative">
              <h2 className="box-subhead">
                <span className="icon-regular icon-globe-americas"></span>{" "}
                Location
              </h2>
            </div>

            <div className="box-middle">
              <div className="row row-custom">
                <div className="col-md-6">
                  <div className="form-group mb-2">
                    <select
                      value={locationSelected}
                      className="select border-grey"
                      onChange={this.handleSelectChange}
                    >
                      {locations.map((location, index) => (
                        <option key={index} name={index} value={index}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group mb-2">
                    <label>Institution Name</label>
                    <input
                      type="text"
                      name="institution"
                      value={institution}
                      onChange={this.handleFieldChange}
                      className="input"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label>Address 1</label>
                    <input
                      type="text"
                      name="address1"
                      value={address1}
                      onChange={this.handleFieldChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.481551809667!2d-9.160433684653919!3d38.75265777959329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330333cd63e3%3A0xe69947220603097!2sUniversidade%20de%20Lisboa!5e0!3m2!1ses-419!2sus!4v1587495092967!5m2!1ses-419!2sus"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row row-custom">
                <div className="col-md-6">
                  <div className="form-group mb-2">
                    <label>Address 2</label>
                    <input
                      type="text"
                      name="address2"
                      value={address2}
                      onChange={this.handleFieldChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-2">
                    <label>Region</label>
                    <input
                      type="text"
                      name="continent"
                      value={continent}
                      onChange={this.handleFieldChange}
                      className="input"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-custom">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="pr-2">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.handleFieldChange}
                        className="input"
                      />
                    </div>
                    <div className="pr-2">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={this.handleFieldChange}
                        className="input"
                      />
                    </div>
                    <div>
                      <label>Postal C.</label>
                      <input
                        type="text"
                        name="zipcode"
                        value={zipcode}
                        onChange={this.handleFieldChange}
                        className="input"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      value={country}
                      onChange={this.handleFieldChange}
                      className="input"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <a
                    href="#0"
                    className="btn btn-blue btn-w-100"
                    data-target="#modalAddNewCampus"
                    data-toggle="modal"
                  >
                    ADD NEW CAMPUS
                  </a>
                </div>
              </div>

              <ModalPortal>
                <EditInstitutionContactInfoLocationModal
                  location={new InstitutionLocation()}
                  index={locations ? locations.length : 0}
                  title="Create New Campus Location"
                  onChange={this.passChangeUp}
                  // onDelete={removeLocation}
                />
              </ModalPortal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function EditInstitutionContactInfoLocation(props) {
  let { locations, onChange } = props;

  const passChangeUp = (location, index) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    /// pass current state up to parent to propogate changes
    locations[index] = location;
    onChange("Locations", locations);
  };

  function removeLocation(index) {
    locations = removeFromArray(locations, index);
    onChange("Locations", locations);
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="institution box box-border-radius box-shadow bg-white">
        <div className="inner-wrap">
          <div className="box-top position-relative">
            <h2 className="box-subhead">
              <span className="icon-regular icon-globe-americas"></span>{" "}
              Location
            </h2>
          </div>
          <div className="box-middle mb-0">
            <div className="row row-custom">
              <div className="col-md-6">
                {locations.map((location, index) => (
                  <div className="form-group mb-2" key={index}>
                    <span className="position-relative d-block">
                      <input
                        type="text"
                        name=""
                        value={location.name}
                        className="input"
                        readOnly
                      />

                      <span>
                        <a
                          href="#0"
                          className="icon-solid icon-pen color-blue icon-pen-custom"
                          data-target={"#modalEditCampus" + index}
                          data-toggle="modal"
                        >
                          {" "}
                        </a>
                      </span>
                    </span>
                    <ModalPortal>
                      <EditInstitutionContactInfoLocationModal
                        location={location}
                        index={index}
                        title={"Edit Campus Location"}
                        onChange={passChangeUp}
                        onDelete={removeLocation}
                      />
                    </ModalPortal>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.481551809667!2d-9.160433684653919!3d38.75265777959329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330333cd63e3%3A0xe69947220603097!2sUniversidade%20de%20Lisboa!5e0!3m2!1ses-419!2sus!4v1587495092967!5m2!1ses-419!2sus"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    width="100%"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <a
                  href="#0"
                  className="btn btn-blue btn-w-100"
                  data-target={
                    "#modalEditCampus" +
                    String(locations ? locations.length : 0)
                  }
                  data-toggle="modal"
                >
                  ADD NEW CAMPUS
                </a>
              </div>
              <ModalPortal>
                <EditInstitutionContactInfoLocationModal
                  location={new InstitutionLocation()}
                  index={locations ? locations.length : 0}
                  title="Create New Campus Location"
                  onChange={passChangeUp}
                  onDelete={removeLocation}
                />
              </ModalPortal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
