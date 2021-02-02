export class StudentCourse {
  name = null;
  code = null;
  term = null;
  days = [];
  start = "";
  end = "";
  location = {
    link: "#0",
    type: "",
    online: "",
  };
  instructor = {
    name: "",
    image: "",
  };

  syllabusLink = null;
  classmatesLink = null;
  assignmentsExams = [];
  progress = "";
}

export class ProfessorCourse {
  name = null;
  code = null;
  term = null;
  days = [];
  start = "";
  end = "";
  location = {
    link: "",
    type: "",
    online: "",
  };
  rosterLink = null;
  syllabusLink = null;
  attendanceLink = null;
  gradebookLink = null;
  reportsLink = null;
}
