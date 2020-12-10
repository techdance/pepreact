export class StudentCourse {
  name = "CHEMISTRY";
  code = "CHE 200-01";
  days = ["M", "W", "F"];
  start = "2:30";
  end = "3:30 PM";
  location = {
    link: "#0",
    type: "backpack",
  };
  instructor = {
    name: "Shaina Berube",
    image: "images/Chem.png",
  };

  syllabusLink = "#0";
  classmatesLink = "#0";
  assignmentsExams = [];
  progress = "61%";
}

export class ProfessorCourse {
  name = null;
  code = null;
  days = [];
  start = "";
  end = "";
  location = {
    link: "",
    type: "",
  };
  rosterLink = null;
  syllabusLink = null;
  attendanceLink = null;
  gradebookLink = null;
  reportsLink = null;
}
