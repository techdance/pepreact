import React from "react";

import ShowCollaborationInterests from "../Shared//showCollaborationInterests.js";

import ShowCredentials from "../Shared/showCredentials.js";
import ShowInstitutionProfle from "../Shared/showInstitutionProfile.js";
import ShowPersonalInformation from "../Shared/showPersonalInformation.js";
import ShowCommunicationPreferences from "../Shared/showCommunicationPreferences.js";
import ShowProfessionalBio from "../Shared/showProfessionalBio.js";

//  TLM: constants below represent sample DB records.

import { gordonProfessor } from "../../../data/professor.js";

// sameUser flag is used to distinguish when those component are viewed by the page owner or not.
//  sameUser = "true" when page owner and profile owner are the same person. Otherwise, sameUser = "false"
//  for example, in page 00501, page owner and profile owner are two different people.

class ViewProfileContainer extends React.Component {
  render() {
    let progress = 0;

    if (gordonProfessor.personalInformation.name !== null) progress += 0.1;
    if (gordonProfessor.personalInformation.title !== null) progress += 0.1;
    if (gordonProfessor.personalInformation.image !== null) progress += 0.1;
    if (gordonProfessor.communicationPreferences.languages.length)
      progress += 0.1;
    if (gordonProfessor.communicationPreferences.emailAddress !== null)
      progress += 0.1;
    if (gordonProfessor.communicationPreferences.phoneNumbers.length)
      progress += 0.1;
    if (gordonProfessor.professionalBio.introVideo !== null) progress += 0.1;
    if (gordonProfessor.professionalBio.discipline) progress += 0.1;
    if (gordonProfessor.professionalBio.areasOfExpertise.length)
      progress += 0.1;
    if (gordonProfessor.professionalBio.internationalExperience !== null)
      progress += 0.1;
    // if (gordonProfessor.bio !== null) progress += 10;
    // if (gordonProfessor.personalMessage !== null) progress += 10;
    // if (gordonProfessor.cvLink) progress += 10;

    return (
      <>
        <section class="wrap-profile">
          <div class="row row-custom sortable">
            <ShowPersonalInformation
              personalInformation={gordonProfessor.personalInformation}
              sameUser="true"
              progress={progress}
            />
            <ShowInstitutionProfle
              institutionProfile={gordonProfessor.institutionProfile}
            />
            <ShowCommunicationPreferences
              communicationPreferences={
                gordonProfessor.communicationPreferences
              }
            />
            <ShowCredentials credentials={gordonProfessor.credentials} />
            <ShowProfessionalBio
              professionalBio={gordonProfessor.professionalBio}
            />
            <ShowCollaborationInterests
              areaofinterest_list={gordonProfessor.areaofinterest_list}
            />
          </div>
        </section>
      </>
    );
  }
}

export default ViewProfileContainer;
