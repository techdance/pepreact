import React from "react";

import ShowCollaborationInterests from "../Shared/showCollaborationInterests.js";

import ShowCredentials from "../Shared/showCredentials.js";
import ShowInstitutionProfle from "../Shared/showInstitutionProfile.js";
import ShowPersonalInformation from "../Shared/showPersonalInformation.js";
import ShowCommunicationPreferences from "../Shared/showCommunicationPreferences.js";
import ShowProfessionalBio from "../Shared/showProfessionalBio.js";
import ShowProfessionalBioIT from "../Shared/showProfessionalBioIT.js";

import UserService from "../../../services/User";
import AuthService from "../../../services/AuthService";
import {connect} from "react-redux";
import { getUserData, getPersonalInformation,
  getInstitutionProfileData,
  getCommunicationPreferences, getCollaborateduserprofessionalbio, getCollaboratedProfileAreaofInterestAll, getCollaboratedUserProfileimage, getCollaboratedUsercredential } from "../../../redux/actions/users"
//  TLM: constants below represent sample DB records.

// sameUser flag is used to distinguish when those component are viewed by the page owner or not.
//  sameUser = "true" when page owner and profile owner are the same person. Otherwise, sameUser = "false"
//  for example, in page 00501, page owner and profile owner are two different people.

class ViewProfileContainer extends React.Component {


  constructor(props) {
    super(props);

    this.state = {profile: this.props.profile};
    let paramiter = {token: AuthService.getToken() } ;
    this.props.getPersonalInformation(paramiter);
    this.props.getInstitutionProfileData(paramiter);
    this.props.getCommunicationPreferences(paramiter);
    this.props.getCollaborateduserprofessionalbio(paramiter);
    this.props.getCollaboratedProfileAreaofInterestAll(paramiter);
    this.props.getCollaboratedUserProfileimage(paramiter);
    this.props.getCollaboratedUsercredential(paramiter);
  }


  componentDidMount() {
    // this.getingProfiuleData();
    console.log(' Pogrom Redux: ', this.props);
  }

  getingProfiuleData = () => {
     UserService.getPersonalInformation({ params: {token: AuthService.getToken() }
      }).then( (res) => {

         if(res.status){
           this.setState((preV)=>
               ({ profile: Object.assign(preV.profile, {personalInformation: res.data,
           })})
           )
         }

     })
  }


  render() {
    let progress = 0;
    let {profile } = this.props.app;
    const IT = this.props.IT;

    if (profile.personalInformation?.name !== null) progress += 0.1;
    if (profile.personalInformation?.title !== null) progress += 0.1;
    if (profile.personalInformation?.image !== null) progress += 0.1;
    if (profile.communicationPreferences?.languages?.length) progress += 0.1;
    if (profile.communicationPreferences?.emailAddress !== null) progress += 0.1;
    if (profile.communicationPreferences?.phoneNumbers?.length) progress += 0.1;
    if (profile.professionalBio?.introVideo !== null) progress += 0.1;
    if (profile.professionalBio?.discipline) progress += 0.1;
    if (profile.professionalBio?.areasOfExpertise?.length) progress += 0.1;
    if (profile.professionalBio?.internationalExperience !== null)
      progress += 0.1;
    // if (profile.bio !== null) progress += 10;
    // if (profile.personalMessage !== null) progress += 10;
    // if (profile.cvLink) progress += 10;

    console.log(' profile:props ', profile);

    return (
      <>
        <section className="wrap-profile">
          <div className="row row-custom sortable">
            <ShowPersonalInformation
              personalInformation={profile.personalInformation}
              CollaboratedUserProfileimage={profile.CollaboratedUserProfileimage}
              sameUser="true"
              progress={progress}
            />
            <ShowInstitutionProfle
              institutionProfile={profile.institutionProfile}
            />
            <ShowCommunicationPreferences
              communicationPreferences={profile.communicationPreferences}
            />
            <ShowCredentials credentials={profile.credentials} />
            {IT === "false" ? (
              <>
                <ShowProfessionalBio
                  professionalBio={profile.professionalBio}
                />
                <ShowCollaborationInterests
                  areaofinterest_list={profile.areaofinterest_list}
                />
              </>
            ) : (
              <ShowProfessionalBioIT
                professionalBio={profile.professionalBio}
              />
            )}
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.users
  }
}

// export default ViewProfileContainer;
export default connect(mapStateToProps, {
  getUserData,
  getPersonalInformation,
  getInstitutionProfileData,
  getCommunicationPreferences,
  getCollaborateduserprofessionalbio,
  getCollaboratedProfileAreaofInterestAll,
  getCollaboratedUserProfileimage,
  getCollaboratedUsercredential
})(ViewProfileContainer)
