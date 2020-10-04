import React from "react";

import ShowCollaborationInterests from "../Shared/showCollaborationInterests.js";
import ShowCredentials from "../Shared/showCredentials.js";
import ShowInstitutionProfle from "../Shared/showInstitutionProfile.js";
import ShowPersonalInformation from "../Shared/showPersonalInformation.js";
import ShowCommunicationPreferences from "../Shared/showCommunicationPreferences.js";
import ShowProfessionalBio from "../Shared/showProfessionalBio.js";

//  TLM: constants below represent sample DB records.

import { bradleyProfessor } from "../../../data/professor.js";

class ViewProfileOtherUserContainer extends React.Component {
  render() {
    let progress = 0;

    if (bradleyProfessor.personalInformation.name !== null) progress += 0.1;
    if (bradleyProfessor.personalInformation.title !== null) progress += 0.1;
    if (bradleyProfessor.personalInformation.image !== null) progress += 0.1;
    if (bradleyProfessor.communicationPreferences.languages.length)
      progress += 0.1;
    if (bradleyProfessor.communicationPreferences.emailAddress !== null)
      progress += 0.1;
    if (bradleyProfessor.communicationPreferences.phoneNumbers.length)
      progress += 0.1;
    if (bradleyProfessor.professionalBio.introVideo !== null) progress += 0.1;
    if (bradleyProfessor.professionalBio.discipline) progress += 0.1;
    if (bradleyProfessor.professionalBio.areasOfExpertise.length)
      progress += 0.1;
    if (bradleyProfessor.professionalBio.internationalExperience !== null)
      progress += 0.1;
    // if (bradleyProfessor.bio !== null) progress += 10;
    // if (bradleyProfessor.personalMessage !== null) progress += 10;
    // if (bradleyProfessor.cvLink) progress += 10;

    return (
      <>
        <section class="wrap-profile">
          <div class="row row-custom sortable">
            <ShowPersonalInformation
              personalInformation={bradleyProfessor.personalInformation}
              sameUser="false"
              progress={progress}
            />
            <ShowInstitutionProfle
              institutionProfile={bradleyProfessor.institutionProfile}
            />
            <ShowCommunicationPreferences
              communicationPreferences={
                bradleyProfessor.communicationPreferences
              }
            />
            <ShowCredentials credentials={bradleyProfessor.credentials} />
            <ShowProfessionalBio
              professionalBio={bradleyProfessor.professionalBio}
            />
            <ShowCollaborationInterests
              areaofinterest_list={bradleyProfessor.areaofinterest_list}
            />
          </div>
        </section>
      </>
    );
  }
}

export default ViewProfileOtherUserContainer;
