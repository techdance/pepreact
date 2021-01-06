import Professor from "../classes/Professor.js";
import Calendar from "../classes/Calendar.js";
import Announcement from "../classes/Announcement.js";
import Student from "../classes/Student.js";
import { ProfessorCourse } from "../classes/Course.js";

export const getProfessorMatches = function () {
  // simulate call to API to get matches to the current professor
  let professor = "";
  let professors = [];

  const searchResults = [
    {
      image: "images/Karthik.png",
      firstName: "Karthik",
      lastName: "Koothrappali",
      prefix: "Bus.D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Lecturer",
      department: "Business & Economics",
      institutionName: "University of Dubai",
      institutionLocation: "Dubai, UAE",
    },
    {
      image: "images/Inez.png",
      firstName: "Inez",
      lastName: "Campos",
      prefix: "Ph.D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Professor",
      department: "Business Management",
      institutionName: "Universidad de Lisboa",
      institutionLocation: "Lisbon, PRT",
    },
    {
      image: "images/Joanna.png",
      firstName: "Joanna",
      lastName: "Byrne",
      prefix: "Ph.D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Vice Dean",
      department: "Business Management",
      institutionName: "National University of Ireland, Galway",
      institutionLocation: "Galway, IRE",
    },
    {
      image: "images/Li.png",
      firstName: "Li",
      lastName: "Wei",
      prefix: "Ph.D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Management",
      department: "Professor",
      institutionName: "Shanghai University",
      institutionLocation: "Shanghai, CHN",
    },
    {
      image: "images/Denaye.png",
      firstName: "Denaye",
      lastName: "Thompson",
      prefix: "Ph.D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Senior Lecturer",
      department: "Department of Management",
      institutionName: "Charles Stuart University",
      institutionLocation: "Bathurst, AUS",
    },
    {
      image: "images/Juan.png",
      firstName: "Juan",
      lastName: "Tyler",
      prefix: "D.B.A.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Assistant Professor",
      department: "International Business",
      institutionName: "Linfield College",
      institutionLocation: "Linfield, OR, USA",
    },
    {
      image: "images/Fadhili.png",
      firstName: "Fadhili",
      lastName: "Kiserian",
      prefix: "Ph. D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Department Chair",
      department: "Economics",
      institutionName: "Maseno University",
      institutionLocation: "Maseno, Kisumu, KEN",
    },
    {
      image: "images/Sara.png",
      firstName: "Sara",
      lastName: "McCabe",
      prefix: "M.B.A.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Professor",
      department: "Business & Finance",
      institutionName: "Oklahoma City Community College",
      institutionLocation: "Oklahoma City, OK, USA",
    },
    {
      image: "images/Mani.png",
      firstName: "Mani",
      lastName: "Patel",
      prefix: "Ph. D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Faculty",
      department: "Business and Economics",
      institutionName: "The University of Winnipeg",
      institutionLocation: "Winnipeg, Manitoba, CAN",
    },
    {
      image: "images/Michael.png",
      firstName: "Michael",
      lastName: "Hauer",
      prefix: "Ph. D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Associate Professor",
      department: "Management",
      institutionName: "University of Connecticut",
      institutionLocation: "Mansfield, CT, USA",
    },
    {
      image: "images/Aileen.png",
      firstName: "Aileen",
      lastName: "Apfelbaum",
      prefix: "Ph. D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Lecturer",
      department: "Business",
      institutionName: "University of Giessen",
      institutionLocation: "Giessen, Hesse, DEU",
    },
    {
      image: "images/Rosa.png",
      firstName: "Rosalice",
      lastName: "Santos",
      prefix: "Ph. D.", // this is not correct. Not sure there is a field in professor profile that contains this.
      title: "Dean",
      department: "International Business",
      institutionName: "University of São Paulo",
      institutionLocation: "São Paulo, BRA",
    },
  ];

  for (const result of searchResults) {
    professor = new Professor();
    professor.personalInformation.image = result.image;
    professor.personalInformation.firstName = result.firstName;
    professor.personalInformation.lastName = result.lastName;
    professor.personalInformation.prefix = result.prefix;
    professor.personalInformation.title = result.title;
    professor.personalInformation.department = result.department;
    professor.institutionProfile.name = result.institutionName;
    professor.institutionProfile.location = result.institutionLocation;

    professors.push(professor);
  }

  return professors;
};

// get calendar for the Professor with id "id"
//  returns a Calendar object
export const getProfessorCalendar = function (id) {
  //  this should be deprecated because ShowMyCalendar component is now accessing Moodle API for calendar information
  let calendar = new Calendar();

  // same search results for any id for now.
  const searchResult = {
    month: "01",
    year: "2021",
    colorKeys: [],
    data: [
      //blue-event, green-event, orange-event, purple-event
      {
        date: "2019-10-15",
        badge: true,
        title: "Refine Course Description",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "http://www.google.com",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2019-10-18",
        badge: true,
        title: "Determine Credit Hours",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "#",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2019-10-25",
        badge: true,
        title: "Review Accreditation Guidelines",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "#",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2019-10-29",
        badge: true,
        title: "Write Student Learning Outcomes",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "#",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
    ],
  };

  switch (id) {
    case 1: // Bradley id
      calendar = searchResult;
      break;
    case 2: // Inez id
      calendar = searchResult;
      break;
    default:
  }

  return calendar;
};

// gets the announcements to show on Professor Homepage for Professor with id "id"
//  returns an array of Announcement objects
export const getProfessorAnnouncements = function (id) {
  let announcement = null;
  let announcements = [];

  const searchResults = [
    {
      msg:
        "We are pleased to welcome our AHEA Faculty Fellows to InspirED. Thank you for your partnership, participation, and feedback.",
      link: "http://www.ahealliance.org/virtualexchangefellowship",
    },

    {
      msg:
        "Discover tips and techniques to help you optimize InspirED. Download how-to guides, best practices, and templates from the platform’s Resources library.",
      link: "#",
    },

    {
      msg:
        "Join CONAHEC and AMPEI for the Virtual North American International Education Conference: Rebuilding the Global Village. December 1-5, 2020. Click to learn more.",
      link: "https://elnet.org",
    },
    {
      msg:
        "ISEP celebrates 40 years of collaboration and partnership. With over 350 member institutions, ISEP has provided cross-cultural experiences for over 60K students.",
      link: "https://www.isepstudyabroad.org/",
    },
  ];

  for (const result of searchResults) {
    announcement = new Announcement();
    announcement.msg = result.msg;
    announcement.link = result.link;
    announcements.push(announcement);
  }

  switch (id) {
    case 1: // Bradley id
      return announcements;

    default:
      return announcements;
  }
};

// gets the courses belonging to Professor with id "id"
//  returns an array of ProfessorCourse objects
export const getProfessorCourses = function (id) {
  let course = null;
  let courses = [];

  const searchResults = [
    {
      name: "BUSINESS IN THE GLOBAL POLITICAL ENVIRONMENT",
      code: "BUS 105",
      days: ["T", "TH"],
      start: "10:00",
      end: "11:00 AM",
      location: {
        link: "#0",
        type: "backpack",
      },
      rosterLink: "#0",
      syllabusLink: "#0",
      attendanceLink: "#0",
      gradebookLink: "#0",
      reportsLink: "#0",
    },
    {
      name: "EMERGING ECONOMICS",
      code: "BUS 110",
      days: ["M", "W", "F"],
      start: "2:30",
      end: "3:30 PM",
      location: {
        link: "#0",
        type: "laptop",
      },
      rosterLink: "#0",
      syllabusLink: "#0",
      attendanceLink: "#0",
      gradebookLink: "#0",
      reportsLink: "#0",
    },
    {
      name: "ETHICS IN MULTINATIONAL",
      code: "MANAGEMENT BUS 131",
      days: ["M", "W", "F"],
      start: "2:30",
      end: "3:30 PM",
      location: {
        link: "#0",
        type: "laptop",
      },
      rosterLink: "#0",
      syllabusLink: "#0",
      attendanceLink: "#0",
      gradebookLink: "#0",
      reportsLink: "#0",
    },
  ];
  for (const result of searchResults) {
    course = new ProfessorCourse();
    course.name = result.name;
    course.code = result.code;
    course.days = result.days;
    course.start = result.start;
    course.end = result.end;
    course.location = result.location;
    course.rosterLink = result.rosterLink;
    course.syllabusLink = result.syllabusLink;
    course.attendanceLink = result.attendanceLink;
    course.gradebookLink = result.gradebookLink;
    course.reportsLink = result.reportsLink;

    courses.push(course);
  }

  switch (id) {
    case 1: // Bradley id
      return courses;

    default:
      return courses;
  }
};

// gets the advisees belonging to Professor with id "id"
//  returns an array of Student objects
export const getProfessorAdvisees = function (id) {
  let student = null;
  let students = [];

  const searchResults = [
    {
      name: "Erika Anderson",
      image: "images/Erika.png",
      year: "Sophomore",
      major: "Economics",
      announcements: [], // array of Announcement objects
      groups: [], // array of objects with { name: , link: }
      holds: [], // array of objects with { name: , link: }
      financials: [], // array of objects with { name: , link: }
      advisor: {
        name: null,
        image: null,
      },
      academics: [], // array of objects with { name: , link: }
      courses: [], // array of StudentCourse objects
    },
    {
      name: "Brittany Simms",
      image: "images/Brittany.png",
      year: "Sophomore",
      major: "Business",
      announcements: [], // array of Announcement objects
      groups: [], // array of objects with { name: , link: }
      holds: [], // array of objects with { name: , link: }
      financials: [], // array of objects with { name: , link: }
      advisor: {
        name: null,
        image: null,
      },
      academics: [], // array of objects with { name: , link: }
      courses: [], // array of StudentCourse objects
    },
    {
      name: "Tedd Warner",
      image: "images/Tedd.png",
      year: "Sophomore",
      major: "Business",
      announcements: [], // array of Announcement objects
      groups: [], // array of objects with { name: , link: }
      holds: [], // array of objects with { name: , link: }
      financials: [], // array of objects with { name: , link: }
      advisor: {
        name: null,
        image: null,
      },
      academics: [], // array of objects with { name: , link: }
      courses: [], // array of StudentCourse objects
    },
  ];

  for (const result of searchResults) {
    student = new Student();
    student.name = result.name;
    student.image = result.image;
    student.year = result.year;
    student.major = result.major;

    students.push(student);
  }

  switch (id) {
    case 1: // Bradley id
      return students;

    default:
      return students;
  }
};
