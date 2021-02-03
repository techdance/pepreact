//  TODO - modify Professor object so that institutionProfile points to an Institution object.
// TODO - reconcile and integrate PersonRecord class with Professor class

class Professor {
  personalInformation = {
    namePrefix: "",
    firstName: "",
    lastName: "",
    name: "",
    title: "",
    image: "",
    department: "",
    personalMessage: "",
    onlineStatus: "",
    timezone: "",
  };

  communicationPreferences = {
    languages: ["English", "NA"],
    primaryLanguage: "English",
    secondaryLanguage: "",
    tertiaryLanguage: "",
    emailAddress: "gstanley@ahea.edu",
    phoneNumbers: ["+1 555-432-7788", "+1 555-432-1100"],
    officePhone: "+1 555-432-7788",
    mobilePhone: "+1 555-432-1100",
    url: "https://www.ahea.edu/about-ahea/provost-office/provost",
    receiveSMS: false,
  };
  professionalBio = {
    introVideo: "./images/Gordon-video.png",
    discipline: "Business",
    areasOfExpertise: [
      "Institutional Research",
      "Graduate Research Funding",
      "Accrediting Standards Planning and Execution",
    ],
    areaOfExpertise1: "Institutional Research",
    areaOfExpertise2: "Graduate Research Funding",
    areaOfExpertise3: "Accrediting Standards Planning and Execution",
    internationalExperience: "",
    bio:
      "Dr. Stanley began his tenure as AHEA University's provost on July 1, 2012, following a 24-plus year career at Center State University, where he served as the George and Sadye Joy Raye Professor of Economics and editor of the Journal of Small Public Universities. From 2000-2005 Dr. Stanley served as dean of the College of Business and Entrepreneurialship, Central State's largest academic unit with more than 400 faculty and 5,500 students. He also chaired the economics department from 1995 to 1999 and directed the honors program from 1999 to 2005. An honors graduate in economics from the University of North Dakota, Dr. Stanley received his Ph.D. from the same institution, specializing in Global Affairs.",
    cvLink: "#",
  };

  // below should point to an Institution object.
  institutionProfile = {
    name: "AHEA University, Iowa City Campus",
    type: "4-year Institution",
    location: "Iowa City, IA USA",
    continent: "North America",
    calendar: "Semester",
  };

  credentials = {
    educationLevel: "Phd",
    professionalMemberships: [
      {
        name: "Association of College Administration Professionals (ACAP)",
        link: "#",
      },
      {
        name:
          "Council for the Advancement of Standards in Higher Education (CAS)",
        link: "#",
      },
    ],
    links: ["#", "#"],
    certificates: ["Internationalization of Higher Education"],
  };

  areaofinterest_list = [
    {
      projectType: "Research",
      description:
        "I am interested in finding one or two partners to conduct a longitudinal study on the impact of Brexit of the EU and what changes will take place in the economy as a result.",
      discipline: "Economic",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "Europe",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "4",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: true,
    },
  ];

  setProfessor(professor) {
    this.personalInformation = professor.personalInformation;
    this.personalInformation.namePrefix =
      professor.personalInformation.namePrefix;
    this.personalInformation.firstName =
      professor.personalInformation.firstName;
    this.personalInformation.lastName = professor.personalInformation.lastName;
    // name: "Dr. Bradley Dexter",
    // title: "Professor",
    // image: "./images/bradley.png",
    // department: "College of Business",
    // personalMessage:
    //   '"Success in business requires training and discipline and hard work." David Rockefeller',
    // onlineStatus: "public",
    // timezone: "EST",
  }

  addProfessor() {
    // call post method in API to save a project
    window.confirm(
      this.firstName + " " + this.lastName + " has been saved to the db"
    );

    //  simulates returning the id of the saved record;
    let id = 1;
    return id;
  }

  updateProfessor(id) {
    // call post method in API to save a project

    window.confirm(
      this.firstName + " " + this.lastName + " has been updated in the db"
    );
  }
}

export default Professor;
