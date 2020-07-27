import React from "react";

import EditInstitutionOverview from "./editInstitutionProfileOverview.js";
import EditInstitutionContactInfo from "./editInstitutionProfileContactInfo.js";
import EditInstitutionStudentBodyInfo from "./editInstitutionProfileStudentBodyInfo.js";
import EditInstitutionFacultyInfo from "./editInstitutionProfileFacultyInfo.js";
import EditInstitutionAcademic from "./editInstitutionProfileAcademic.js";

var institution = {
  Overview: {
    description1:
      "AHEA University (AU) is a private, not-for-profit institution, offering an array of innovative academic programs that complement on-campus educational opportunities and resources with accessible distance learning programs to foster academic excellence, intellectual inquiry, leadership, research, and commitment to community through engagement of students and faculty.",
    description2:
      "AU has always had an inclusive and unique approach to education. It offers a personal, nurturing atmosphere. With so many traditional and non-traditional learning opportunities, AU is the ideal place for students of any age to reach their potential.",
    foundedYear: "1997",
    academicCalendar: "Semester",
    type: ["Private", "Not-for-Profit", "Coed"],
    primaryLanguage: "English",
    otherLanguages: ["Spanish", "Mandarin"],
    president: "Sean Gladwell",
    employees: "86",
    alumni: "20,783",
    image: "images/AHEA.png",
    facebookLink: "#0",
    twitterLink: "#0",
    instagramLink: "#0",
    linkedinLink: "#0",
    youtubeLink: "#0",
  },
  ContactInfo: {
    phone: "+1 800 902 5555",
    fax: "+1 561 555 1234",
    url: "https://www.ahea.edu",
    email: "info@ahea.edu",
    address: {
      name1: "AHEA University",
      name2: "Main Office",
      address1: "101 N. Federal Hwy",
      address2: "Suite 600",
      city: "Boca Raton",
      state: "FL",
      country: "USA",
      zipcode: "33432",
      continent: "North America",
    },
  },
  StudentBodyInfo: {
    asof: "Fall 2020",
    updated: "2020-03-16",
    total: "6,793",
    undergraduate: "4,912",
    graduate: "1,881",
    female: {
      number: "3,610",
      percent: "53",
    },
    male: {
      number: "3,173",
      percent: "46.7",
    },
    other: {
      number: "10",
      percent: "0.3",
    },
    fullTime: "5911",
    partTime: "882",
    inState: "2873",
    outofState: "3100",
    international: "820",
  },
  FacultyInfo: {
    asof: "Fall 2020",
    updated: "2020-03-16",
    fullTime: "364",
    studentFacultyRatio: "24:1",
    highestDegreeField: {
      number: "236",
      percent: "84.9",
    },
    averageUndergraduateClassSize: "20",
  },

  Academic: {
    asof: "Fall 2020",
    updated: "2020-03-16",
    collegesAndSchools: [
      "College of Arts and Sciences",
      "College of Business",
      "Henry C. Lee College of Criminal Justice and Forensic Science",
      "School of Health Sciences",
      "Tagliatela College of Engineering",
    ],
    degreeProgramsChart: {
      animationEnabled: true,
      height: 300,
      colorSet: "customColorSet",
      title: {
        dockInsidePlotArea: true,
        fontSize: 75,
        fontWeight: "normal",
        horizontalAlign: "center",
        verticalAlign: "center",
        text: "88",
      },
      legend: {
        cursor: "pointer",
      },
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize: 17,
          indexLabel: "{y}",
          toolTipContent: "{y} (#percent%)",
          dataPoints: [
            { y: 33, name: "Undergraduate" },
            { y: 55, name: "Graduate" },
          ],
        },
      ],
      indexLabelPlacement: "inside",
      indexLabelFontColor: "#fff",
      indexLabelFontSize: 11,
      indexLabelFontWeight: "bolder",
    },

    degreesGranted: {
      Year: "2018-2019",
      Associate: "38",
      Bachelor: "1,189",
      Master: "731",
      Doctorate: "13",
    },

    degreesGrantedChart: {
      animationEnabled: true,
      height: 170,
      data: [
        {
          type: "bar",
          name: "companies",
          axisYType: "secondary",
          color: "#0a4366",
          dataPoints: [
            { y: 38, label: "Doctorate Degrees" },
            { y: 1189, label: "Master's Degrees" },
            { y: 731, label: "Bachelor's Degrees" },
            { y: 13, label: "Associate Degrees" },
          ],
        },
      ],
    },
    accreditations: [
      "Counsel for the Accreditation of Educator Preparation",
      "Accreditation Board for Engineering and Technology (ABET)",
      "ANSI National Accreditation Board Certified (ANAB)",
      "Commission on English Language Accreditation (CEA)",
    ],
    recognitions: [
      "Leah Meyer Austin Award (2019)",
      "Top Producer of Fulbright U.S. Students (2019)",
      "Institution of the Year, Dive Awards (2017)",
      "Sustainability and Sustainable Development Award, AASCU (2016)",
    ],
    degreesOffered: [
      "Associate",
      "Undergraduate",
      "Graduate",
      "Doctorate, Criminal Justice",
      "Dual Degree Programs",
    ],
  },
};

class EditInstitutionProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = institution;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let institution = this.state;
    institution[name] = value;
    this.setState({ institution });

    // This is the parent component so instead of passing change up just update the parent object state.
    this.passChangeUp("institution", institution);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    let institution = this.state;
    institution[field] = value;
    this.setState({ institution });
  };

  handleSubmit = (event) => {
    // event.preventDefault();

    console.log("Submit current state");

    // this.state contains the current revised version of the institution object so should store to institution data.
  };

  render() {
    const {
      Overview,
      ContactInfo,
      StudentBodyInfo,
      FacultyInfo,
      Academic,
    } = this.state;

    return (
      <>
        <EditInstitutionOverview
          Overview={Overview}
          onChange={this.passChangeUp}
        />

        <section class="wrap-profile">
          <div class="row row-custom ">
            <div class="col-lg-12">
              <div class="row row-custom sortable">
                <EditInstitutionContactInfo
                  ContactInfo={ContactInfo}
                  onChange={this.passChangeUp}
                />
              </div>
              <EditInstitutionStudentBodyInfo
                StudentBodyInfo={StudentBodyInfo}
                onChange={this.passChangeUp}
              />
              <EditInstitutionFacultyInfo
                FacultyInfo={FacultyInfo}
                onChange={this.passChangeUp}
              />

              {/* Passing onSubmit function here because "Save" button is buried in this last section.
      When button is clicked it will call back to the parent component onSubmit here  */}
              <EditInstitutionAcademic
                Academic={Academic}
                onChange={this.passChangeUp}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EditInstitutionProfileForm;
