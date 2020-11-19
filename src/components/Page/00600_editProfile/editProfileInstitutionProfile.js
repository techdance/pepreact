import React from "react";

class EditProfileInstitutionProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.institutionProfile;

    // initialize icon states to match current values of links in the "Overview" data object.
    //  if the link is an empty string "", then icon is plus otherwise is minus.

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let institutionProfile = this.state;
    institutionProfile[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("institutionProfile", institutionProfile);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let institutionProfile = this.state;
    institutionProfile[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("institutionProfile", institutionProfile);
  };

  render() {
    const { name, calendar } = this.state;

    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="comunication box box-border-radius box-shadow bg-white">
            <div className="inner-wrap position-relative">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-hospital-user"></span>
                  Institution Profile
                </h2>
              </div>
              <div id="profile-map">
                <iframe
                  title="profile-map"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11922.656204986277!2d-91.534944!3d41.663!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1578621477242!5m2!1sen!2sus"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                ></iframe>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Institution</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        className="input"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Academic Calendar</label>
                      <input
                        type="text"
                        name="calendar"
                        value={calendar}
                        className="input"
                        onChange={this.handleChange}
                      />
                    </div>
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

export default EditProfileInstitutionProfile;
