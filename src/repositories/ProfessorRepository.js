import Professor from "../classes/Professor.js";
import Calendar from "../classes/Calendar.js";

export const getProfessorMatches = function (professor) {
  // simulate call to API to get matches to the current professor
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

  searchResults.map((result) => {
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
  });

  return professors;
};

// get calendar for the Professor with id "id"
export const getProfessorCalendar = function (id) {
  let calendar = new Calendar();

  // same search results for any id for now.
  const searchResult = {
    month: "10",
    year: "2019",
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
