import React from "react";

import EditProfilePersonalInformation from "./editProfilePersonalInformation.js";
import EditProfileInstitutionProfile from "./editProfileInstitutionProfile.js";
import EditProfileCommunicationPreferences from "./editProfileCommunicationPreferences.js";
import EditProfileCredentials from "./editProfileCredentials.js";
import EditProfileProfessionalBio from "./editProfileProfessionalBio.js";
import EditProfileProfessionalBioIT from "./editProfileProfessionalBioIT.js";
import EditProfileCollaborationInterests from "./editProfileCollaborationInterests.js";
import {connect} from "react-redux";
import {
  thoughtSave,

} from "../../../redux/actions/users";
import AuthService from "../../../services/AuthService";
import { ToastContainer } from "react-toastr";
import useService from '../../../services/User';
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
    console.log(' Profile Data: ', this.state)

    // let { profile } = this.state
    // this.state contains the current revised version of the professor object so should store to database.
  //   useService.thoughtSave({ params: {token:  AuthService.getToken(), 
  //                            thought: profile?.personalInformation?.personalMessage, onlinestatus: 1 
  // }, dataObj: ''}).then( (res) => {
  //         if(!res.status){
  //           ToastContainer.error(" unable to save thoughts")
  //         }
  //   })

  axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]
    // use/access the results 
  })).catch(errors => {
    // react on errors.
  })


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

    const IT = this.props.IT;

    return (
      <>
        <section className="wrap-profile">
          <form onSubmit={this.handleSubmit}>
            <div className="row row-custom ">
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
              {IT === "true" ? (
                <EditProfileProfessionalBioIT
                  professionalBio={professionalBio}
                  onChange={this.passChangeUp}
                />
              ) : (
                <>
                  <EditProfileProfessionalBio
                    professionalBio={professionalBio}
                    onChange={this.passChangeUp}
                  />
                  <EditProfileCollaborationInterests
                    areaofinterest_list={areaofinterest_list}
                    onChange={this.passChangeUp}
                  />
                </>
              )}
            </div>
            <div className="row row-custom ">
              <div className="col-lg-12 mb-4 text-right">
                <button className="btn btn-blue" type="submit">
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

// export default EditProfileContainer;
const mapStateToProps = state => {
  return {
    app: state.users
  }
}


export default connect(mapStateToProps, {
  thoughtSave
})(EditProfileContainer)
