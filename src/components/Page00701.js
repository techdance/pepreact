import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";

import InsitutionProfilePageContainer from "./Page/00701_showInstitutionProfilePage/showInstitutionProfilePageContainer.js";
import { menuItems } from "../data/institution.js";

const breadCrumbList = ["Home", "Institution Profiles", "AHEA University"];

class Page00701 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      institution: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/institution-profile")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            institution: result.data,
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { pageOwner, alerts, messages, badges } = this.props.pageOwner;
    let institution = this.props.institution;
    let apiInstitution = this.state.institution;

    if (this.state.isLoaded) {
      const {
        academicDetails,
        accrediations,
        collegeSchools,
        degrees,
        facultyDetails,
        institutionContact,
        institutionLocation,
        recognitions,
        studentDetails,
      } = this.state.institution;

      // where does institutionName from db map to? it shows in the breadcrumb

      institution.Overview.academicCalendar = apiInstitution.academicCalendar;
      institution.Overview.foundedYear = apiInstitution.founded;
      institution.Overview.alumni = apiInstitution.alumini;
      institution.Overview.primaryLanguage = apiInstitution.language;
      // comes in json as single string entry but need an array of strings. Need to remove the "Primary:" from the db field.
      institution.Overview.otherLanguages = [];
      institution.Overview.otherLanguages.push(apiInstitution.otherLanguages);

      // need to fix overview text so that it's not split across two fields.
      institution.Overview.description1 = apiInstitution.overview;
      institution.Overview.description2 = "";

      institution.Overview.president = apiInstitution.president;
      institution.Overview.employees = apiInstitution.totalEmployees;

      //  only 1 db field but should be able to store more.
      institution.Overview.type = [];
      institution.Overview.type.push(apiInstitution.insType);

      institution.ContactInfo.Locations[0].name = apiInstitution.campusName;

      // missing country and continent
      institution.ContactInfo.address.name1 = institutionContact.mailingName;
      institution.ContactInfo.address.name2 = institutionContact.department;
      institution.ContactInfo.address.address1 = institutionContact.address1;
      institution.ContactInfo.address.address2 = institutionContact.address2;
      institution.ContactInfo.address.city = institutionContact.city;
      institution.ContactInfo.address.zipcode = institutionContact.postalCode;
      institution.ContactInfo.address.state = institutionContact.state;
      institution.ContactInfo.email = institutionContact.email;
      institution.ContactInfo.phone = institutionContact.officeNumber;
      institution.ContactInfo.fax = institutionContact.faxNumber;
      institution.ContactInfo.url = institutionContact.website;

      // prototype shows multiple location addresses but db only has one.
      //  database record contains timezone field but nothing on prototype
      institution.ContactInfo.Locations[0].name =
        institutionLocation.mailingName;
      institution.ContactInfo.Locations[0].institution =
        institutionLocation.department;
      institution.ContactInfo.Locations[0].address1 =
        institutionLocation.address1;
      institution.ContactInfo.Locations[0].address2 =
        institutionLocation.address2;
      institution.ContactInfo.Locations[0].city = institutionLocation.city;
      institution.ContactInfo.Locations[0].zipcode =
        institutionLocation.postalCode;
      institution.ContactInfo.Locations[0].state = institutionLocation.state;
      institution.ContactInfo.Locations[0].country =
        institutionLocation.country;
      institution.ContactInfo.Locations[0].continent =
        institutionLocation.region;

      //  updated fields for student body, faculty information and academic information.
      institution.StudentBodyInfo.asofTerm = studentDetails.term;
      institution.StudentBodyInfo.asofYear = studentDetails.term;
      institution.StudentBodyInfo.fullTime = studentDetails.fullTimeStudents;
      institution.StudentBodyInfo.graduate = studentDetails.gradStudents;
      institution.StudentBodyInfo.inState = studentDetails.inStateStudents;
      institution.StudentBodyInfo.international =
        studentDetails.interNationalStudents;
      institution.StudentBodyInfo.female.number = studentDetails.femaleStudents;
      institution.StudentBodyInfo.male.number = studentDetails.maleStudents;
      institution.StudentBodyInfo.other.number = studentDetails.otherStudents;
      institution.StudentBodyInfo.outofState =
        studentDetails.outOfStateStudents;
      institution.StudentBodyInfo.partTime = studentDetails.partTimeStudents;
      institution.StudentBodyInfo.total = studentDetails.totalStudents;
      institution.StudentBodyInfo.undergraduate =
        studentDetails.undergradStudents;

      // calculate and format percentages used
      institution.StudentBodyInfo.female.percent = (
        (institution.StudentBodyInfo.female.number /
          institution.StudentBodyInfo.total) *
        100
      ).toLocaleString(undefined, { maximumFractionDigits: 1 });
      institution.StudentBodyInfo.male.percent = (
        (institution.StudentBodyInfo.male.number /
          institution.StudentBodyInfo.total) *
        100
      ).toLocaleString(undefined, { maximumFractionDigits: 1 });
      institution.StudentBodyInfo.other.percent = (
        (institution.StudentBodyInfo.other.number /
          institution.StudentBodyInfo.total) *
        100
      ).toLocaleString(undefined, { maximumFractionDigits: 1 });

      institution.FacultyInfo.asofTerm = facultyDetails.term;
      institution.FacultyInfo.asofYear = facultyDetails.year;
      institution.FacultyInfo.averageUndergraduateClassSize =
        facultyDetails.avgUGClassSize;
      institution.FacultyInfo.fullTime = facultyDetails.fullTimeFaculty;
      institution.FacultyInfo.studentFacultyRatio =
        facultyDetails.studentFacultyRatio + ":1";
      institution.FacultyInfo.highestDegreeField.number =
        facultyDetails.facultyHigherDegree;

      institution.Academic.degreesGranted.Year = academicDetails.academicYear;

      //  some odd reason I used numbers for these fields instead of strings - maybe jschart restriction?
      institution.Academic.degreesGranted.Associate = Number(
        academicDetails.associateDegrees
      );
      institution.Academic.degreesGranted.Bachelor = Number(
        academicDetails.bachelorsDegrees
      );
      institution.Academic.degreesGranted.Doctorate = Number(
        academicDetails.doctorateDegrees
      );
      institution.Academic.degreesGranted.Master = Number(
        academicDetails.masterDegrees
      );

      institution.Academic.degreePrograms.undergraduate =
        academicDetails.underGraduate;
      institution.Academic.degreePrograms.graduate = academicDetails.graduate;

      institution.Academic.asofTerm = academicDetails.term;
      institution.Academic.asofYear = academicDetails.year;

      // comes in json as an array of objects but just need an array of strings.
      institution.Academic.accreditations = [];
      accrediations.map((accreditation) =>
        institution.Academic.accreditations.push(accreditation.accrediation)
      );

      institution.Academic.collegeAndSchools = [];
      collegeSchools.map((collegeAndSchool) =>
        institution.Academic.collegeAndSchools.push(
          collegeAndSchool.collegeSchoolName
        )
      );

      institution.Academic.degreesOffered = [];
      degrees.map((degree) =>
        institution.Academic.degreesOffered.push(degree.degreeName)
      );

      institution.Academic.recognitions = [];
      recognitions.map((recognition) =>
        institution.Academic.recognitions.push(recognition.recognition)
      );
    }

    return (
      <>
        <div className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <div id="wrap-logo">
              <a href="#0">
                <img src="images/logo.png" alt="" />
              </a>
              <a href="#0" id="menu-button-responsive">
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <ShowMobileSideBarMenu />
          <div id="container">
            <ShowSideBarMenu
              owner={pageOwner}
              menuItems={menuItems}
              activeMenuItem={"Home"}
            />
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu
                      owner={pageOwner}
                      alerts={alerts}
                      messages={messages}
                      badges={badges}
                    />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />

                    <InsitutionProfilePageContainer institution={institution} />
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

export default Page00701;
