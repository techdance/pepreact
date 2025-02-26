export const institution = {
  Overview: {
    description1:
      "AHEA University (AU) is a private, not-for-profit institution, offering an array of innovative academic programs that complement on-campus educational opportunities and resources with accessible distance learning programs to foster academic excellence, intellectual inquiry, leadership, research, and commitment to community through engagement of students and faculty.",
    description2:
      "AU has always had an inclusive and unique approach to education. It offers a personal, nurturing atmosphere. With so many traditional and non-traditional learning opportunities, AU is the ideal place for students of any age to reach their potential.",
    foundedYear: "1997",
    academicCalendar: "Semester",
    type: ["Private"],
    primaryLanguage: "English",
    otherLanguages: ["Spanish", "Mandarin"],
    president: "Sean Gladwell",
    employees: "86",
    alumni: "20,783",
    image: "images/AHEA.png",
    facebookLink: "https://facebook.com/AHEAUniversity",
    twitterLink: "https://twitter.com/AHEAU",
    instagramLink: "https://instagram.com/AHEAU",
    linkedinLink: "http://linkedin.com/AHEAUniversity",
    youtubeLink: "http://youtube.com/channel/AHEAU",
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
    Locations: [
      {
        mainCampus: true,
        name: "Main Campus",
        institution: "AHEA University",
        address1: "101 N. Federal Hwy",
        address2: "Suite 600",
        city: "Boca Raton",
        state: "FL",
        country: "US",
        zipcode: "33432",
        continent: "North America",
      },
      {
        mainCampus: false,
        name: "North Campus",
        institution: "AHEA University",
        address1: "601 N. Federal Hwy",
        address2: "Suite 600",
        city: "Boca Raton",
        state: "FL",
        country: "USA",
        zipcode: "33432",
        continent: "North America",
      },
      {
        name: "South Campus",
        institution: "AHEA University",
        address1: "401 N. Federal Hwy",
        address2: "Suite 600",
        city: "Boca Raton",
        state: "FL",
        country: "USA",
        zipcode: "33432",
        continent: "North America",
      },
    ],
  },
  StudentBodyInfo: {
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
  },
  FacultyInfo: {
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
  },

  Academic: {
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
  },
};

// TODO - read this from backend API so that the loop is closed.

export const institutionTypes = [
  { value: "Private", label: "Private" },
  { value: "Public", label: "Public" },
  { value: "Not-for-Profit", label: "Not-for-Profit" },
  { value: "Coed", label: "Coed" },
  { value: "Female-only", label: "Female-only" },
  { value: "Male-only", label: "Male-only" },
];
