import React from "react";

class EditInstitution_ContactInfo_MailingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.address;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let address = this.state;
    address[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("address", address);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component
    //  this function is not used.
  };

  render() {
    const {
      name1,
      name2,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      continent,
    } = this.state;

    return (
      <div className="col-md-6">
        <div className="form-group mb-2">
          <label>Mailing Name</label>
          <input
            type="text"
            name="name1"
            value={name1}
            onChange={this.handleChange}
            className="input"
          />
        </div>
        <div className="form-group mb-2">
          <label>Department</label>
          <input
            type="text"
            name="name2"
            value={name2}
            onChange={this.handleChange}
            className="input"
          />
        </div>
        <div className="form-group mb-2">
          <label>Address 1</label>
          <input
            type="text"
            name="address1"
            value={address1}
            onChange={this.handleChange}
            className="input"
          />
        </div>

        <div className="form-group mb-2">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            value={address2}
            onChange={this.handleChange}
            className="input"
          />
        </div>
        <div className="form-group mb-2">
          <label>Region</label>
          <input
            type="text"
            name="continent"
            value={continent}
            onChange={this.handleChange}
            className="input"
          />
        </div>
        <div className="form-group d-flex">
          <div className="pr-2">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div className="pr-2">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div>
            <label>Postal C.</label>
            <input
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={this.handleChange}
              className="input"
            />
          </div>
        </div>
      </div>
    );
  }
}

class EditInstitution_ContactInfo_Location extends React.Component {
  constructor(props) {
    //  state contains array of all locations of the institution and the index of the current viewed (selected) location
    super(props);
    this.state = { locations: this.props.locations, locationSelected: 0 };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
    this.setState({ ["locations"]: locations });

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
    this.setState({ ["locationSelected"]: value });
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class EditInstitutionContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.ContactInfo;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let ContactInfo = this.state;
    ContactInfo[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("ContactInfo", ContactInfo);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let ContactInfo = this.state;
    ContactInfo[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("ContactInfo", ContactInfo);
  };

  render() {
    const { phone, fax, url, email, address, Locations } = this.state;

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
                    <div className="form-group mb-2">
                      <label>Office</label>
                      <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                        className="input"
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label>Fax</label>
                      <input
                        type="text"
                        name="fax"
                        value={fax}
                        onChange={this.handleChange}
                        className="input"
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label>Website</label>
                      <input
                        type="text"
                        name="url"
                        value={url}
                        onChange={this.handleChange}
                        className="input"
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        className="input"
                      />
                    </div>
                  </div>
                  <EditInstitution_ContactInfo_MailingAddress
                    address={address}
                    onChange={this.passChangeUp}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <EditInstitution_ContactInfo_Location
          locations={Locations}
          onChange={this.passChangeUp}
        />
      </>
    );
  }
}

export default EditInstitutionContactInfo;
