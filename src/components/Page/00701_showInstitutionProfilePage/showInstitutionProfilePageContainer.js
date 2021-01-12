import React from "react";

import ShowInstitutionOverview from "./showInstitutionOverview.js";
import ShowInstitutionContactInfo from "./showInstitutionContactInfo.js";
import ShowInstitutionLocation from "./showInstitutionLocation.js";
import ShowInstitutionStudentBody from "./showInstitutionStudentBodyInfo.js";
import ShowInstituionFacultyInfo from "./showInstitutionFacultyInfo.js";
import ShowInstitutionAcademicInfo from "./showInstitutionAcademicInfo";

export default function InsitutionProfilePageContainer(props) {
  let { institution } = props;

  let edit = "edit" in props ? props.edit : false; // new versions pass "edit=true" if the "Edit Profile" button needs to show

  return (
    <>
      <ShowInstitutionOverview overview={institution.Overview} edit={edit} />
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
