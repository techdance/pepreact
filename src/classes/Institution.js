export class InstitutionLocation {
  mainCampus = false;
  name = "";
  institution = "";
  address1 = "";
  address2 = "";
  city = "";
  state = "";
  country = "";
  zipcode = "";
  continent = "";
  constructor(location) {
    if (location) {
      this.name = location.name;
      this.institution = location.institution;
      this.address1 = location.address1;
      this.address2 = location.address2;
      this.city = location.city;
      this.state = location.state;
      this.country = location.country;
      this.zipcode = location.zipcode;
      this.continent = location.continent;
    }
  }

  setInstitutionLocation(location) {
    this.name = location.name;
    this.institution = location.institution;
    this.address1 = location.address1;
    this.address2 = location.address2;
    this.city = location.city;
    this.state = location.state;
    this.country = location.country;
    this.zipcode = location.zipcode;
    this.continent = location.continent;
  }
}

export default class Institution {
  Overview = {
    description1: "",
    description2: "",
    foundedYear: "",
    academicCalendar: "",
    type: [],
    primaryLanguage: "",
    otherLanguages: [],
    president: "",
    employees: "",
    alumni: "",
    image: "",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
    linkedinLink: "",
    youtubeLink: "",
  };
  ContactInfo = {
    phone: "",
    fax: "",
    url: "",
    email: "",
    address: {
      name1: "",
      name2: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      continent: "",
    },
    Locations: [], // array of InstitutionLocation objects
  };
  StudentBodyInfo = {
    asofTerm: "Fall",
    asofYear: "2020",
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
  };
  FacultyInfo = {
    asofTerm: "Fall",
    asofYear: "2020",
    updated: "2020-03-16",
    fullTime: "364",
    studentFacultyRatio: "24:1",
    highestDegreeField: {
      number: "236",
      percent: "84.9",
    },
    averageUndergraduateClassSize: "20",
  };

  Academic = {
    asofTerm: "Fall",
    asofYear: "2020",
    updated: "2020-03-16",
    collegesAndSchools: [
      "College of Arts and Sciences",
      "College of Business",
      "Henry C. Lee College of Criminal Justice and Forensic Science",
      "School of Health Sciences",
      "Tagliatela College of Engineering",
    ],
    degreePrograms: {
      undergraduate: "33",
      graduate: "55",
    },

    degreesGranted: {
      Year: "2018-2019",
      Associate: 38,
      Bachelor: 1189,
      Master: 731,
      Doctorate: 13,
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
  };
}
