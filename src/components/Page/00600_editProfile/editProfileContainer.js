import React from "react";

import EditProfilePersonalInformation from "./editProfilePersonalInformation.js";
import EditProfileInstitutionProfile from "./editProfileInstitutionProfile.js";
import EditProfileCommunicationPreferences from "./editProfileCommunicationPreferences.js";
import EditProfileCredentials from "./editProfileCredentials.js";
import EditProfileProfessionalBio from "./editProfileProfessionalBio.js";
import EditProfileCollaborationInterests from "./editProfileCollaborationInterests.js";

//  TLM: constants below represent sample DB records.

// sameUser flag is used to distinguish when those component are viewed by the page owner or not.
//  sameUser = "true" when page owner and profile owner are the same person. Otherwise, sameUser = "false"
//  for example, in page 00501, page owner and profile owner are two different people.

class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let profile = this.state;
    profile[name] = value;
    this.setState({ profile });

    // This is the parent component so instead of passing change up just update the parent object state.
    this.passChangeUp("profile", profile);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    let profile = this.state;
    profile[field] = value;
    this.setState({ profile });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit current state");

    // this.state contains the current revised version of the professor object so should store to database.
  };

  render() {
    const {
      personalInformation,
      institutionProfile,
      communicationPreferences,
      credentials,
      professionalBio,
      areaofinterest_list,
    } = this.state;

    return (
      <>
        <section class="wrap-profile">
          <form onSubmit={this.handleSubmit}>
            <div class="row row-custom ">
              <EditProfilePersonalInformation
                personalInformation={personalInformation}
                onChange={this.passChangeUp}
              />
              <EditProfileInstitutionProfile
                institutionProfile={institutionProfile}
                onChange={this.passChangeUp}
              />

              <EditProfileCommunicationPreferences
                communicationPreferences={communicationPreferences}
                onChange={this.passChangeUp}
              />
              <EditProfileCredentials
                credentials={credentials}
                onChange={this.passChangeUp}
              />
              <EditProfileProfessionalBio
                professionalBio={professionalBio}
                onChange={this.passChangeUp}
              />
              <EditProfileCollaborationInterests
                areaofinterest_list={areaofinterest_list}
                onChange={this.passChangeUp}
              />
            </div>
            <div class="row row-custom ">
              <div class="col-lg-12 mb-4 text-right">
                <a class="btn btn-blue" href="#0">
                  Save Profile
                </a>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default EditProfileContainer;
