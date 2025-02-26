import React from "react";

import ShowCollaborationInterests from "../Shared/showCollaborationInterests.js";
import ShowCredentials from "../Shared/showCredentials.js";
import ShowInstitutionProfle from "../Shared/showInstitutionProfile.js";
import ShowPersonalInformation from "../Shared/showPersonalInformation.js";
import ShowCommunicationPreferences from "../Shared/showCommunicationPreferences.js";
import ShowProfessionalBio from "../Shared/showProfessionalBio.js";

//  TLM: constants below represent sample DB records.

class ViewProfileOtherUserContainer extends React.Component {
  render() {
    let progress = 0;

    let profile = this.props.profile;

    if (profile.personalInformation.name !== null) progress += 0.1;
    if (profile.personalInformation.title !== null) progress += 0.1;
    if (profile.personalInformation.image !== null) progress += 0.1;
    if (profile.communicationPreferences.languages.length) progress += 0.1;
    if (profile.communicationPreferences.emailAddress !== null) progress += 0.1;
    if (profile.communicationPreferences.phoneNumbers.length) progress += 0.1;
    if (profile.professionalBio.introVideo !== null) progress += 0.1;
    if (profile.professionalBio.discipline) progress += 0.1;
    if (profile.professionalBio.areasOfExpertise.length) progress += 0.1;
    if (profile.professionalBio.internationalExperience !== null)
      progress += 0.1;
    // if (profile.bio !== null) progress += 10;
    // if (profile.personalMessage !== null) progress += 10;
    // if (profile.cvLink) progress += 10;

    return (
      <>
        <section className="wrap-profile">
          <div className="row row-custom sortable">
            <ShowPersonalInformation
              personalInformation={profile.personalInformation}
              sameUser="false"
              progress={progress}
            />
            <ShowInstitutionProfle
              institutionProfile={profile.institutionProfile}
            />
            <ShowCommunicationPreferences
              communicationPreferences={profile.communicationPreferences}
            />
            <ShowCredentials credentials={profile.credentials} />
            <ShowProfessionalBio professionalBio={profile.professionalBio} />
            <ShowCollaborationInterests
              areaofinterest_list={profile.areaofinterest_list}
            />
          </div>
        </section>
      </>
    );
  }
}

export default ViewProfileOtherUserContainer;
