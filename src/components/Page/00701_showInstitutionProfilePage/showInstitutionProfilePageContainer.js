import React from "react";

import ShowInstitutionOverview from "./showInstitutionOverview.js";
import ShowInstitutionContactInfo from "./showInstitutionContactInfo.js";
import ShowInstitutionLocation from "./showInstitutionLocation.js";
import ShowInstitutionStudentBody from "./showInstitutionStudentBodyInfo.js";
import ShowInstituionFacultyInfo from "./showInstitutionFacultyInfo.js";
import ShowInstitutionAcademicInfo from "./showInstitutionAcademicInfo";

class InsitutionProfilePageContainer extends React.Component {
  render() {
    let institution = this.props.institution;
    return (
      <>
        <ShowInstitutionOverview overview={institution.Overview} />
        <section className="wrap-profile">
          <div className="row row-custom ">
            <div className="col-lg-12">
              <div className="row row-custom sortable">
                <ShowInstitutionContactInfo info={institution.ContactInfo} />
                <ShowInstitutionLocation
                  locations={institution.ContactInfo.Locations}
                />
              </div>
            </div>
          </div>

          <ShowInstitutionStudentBody
            studentBodyInfo={institution.StudentBodyInfo}
          />

          <ShowInstituionFacultyInfo facultyInfo={institution.FacultyInfo} />
          <ShowInstitutionAcademicInfo academic={institution.Academic} />
        </section>
      </>
    );
  }
}

export default InsitutionProfilePageContainer;
