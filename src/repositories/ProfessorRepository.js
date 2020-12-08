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
