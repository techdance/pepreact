import { projectTypeList } from "../data/areaOfInterestProjectType.js";
import { disciplineList } from "../data/disciplines.js";

// Project class is used for pages 01033/01034/01035 and for 03100.
// ProjectLabCourse class is used for pages 01000a/b/c/d - which is a "course" type project
// There should a be new class used for pages 04200a/b/c/d - which is a "certificate" type project.
//  These 3 classes need to be merged to use the same type which is why they are located in the Project.js file.
//  Putting a foreign key into ProjectLabCourse that points to Project. This is probably a one-to-one relationship.
//      There is a conflict for tasks; Project.js contains a projectTasks array of Task objects which is displayed as part of "ShowMyProjects.js"
//      ProjectLabCourse contains several projectTasks arrays of Task objects, one for each milestone.
//        TBD: The projectTasks array in Project should pull the tasks to display from the the milestone projectTask arrays.
//
// There is a conflict for partners; If Project and ProjectLab objects have a one-to-one relationship - either one can contain the project partners array

class Project {
  id = ""; // mimics project id from database.
  professorId = ""; // a professor can have several projects
  organizer = ""; // object that contains {name: , image: }
  projectType = "";
  discipline1 = "";
  discipline2 = "";
  discipline3 = "";
  description = "";
  name = "";
  programLength = ""; // this is different from area of interest - can contain either "fixed" or "ongoing"
  startDate = ""; // this is different from area of interest. but area of interest was halted because modal was re-designed
  endDate = ""; // this is different from area of interest.
  created = false; // shows in the modal for area of interest

  progress = "0"; //% tasks done
  projectTasks = []; // array of Task objects. TBD: The projectTasks array in Project should pull the tasks to display from the the milestone projectTask arrays.
  projectPartners = []; // array of Professor objects

  constructor() {
    let current = new Date();

    // this.projectType = projectTypeList[1].value; // initial value from list
    // this.discipline1 = disciplineList[1].value; // initial value from list
    this.programLength = "ongoing";
    this.startDate =
      current.getFullYear() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getDay(); // this is different from area of interest. but area of interest was halted because modal was re-designed
    this.endDate =
      current.getFullYear() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getDay(); // this is different from area of interest.
  }

  setProject(project) {
    this.professorId = project.professorId;
    this.projectType = project.projectType;
    this.discipline = project.discipline;
    this.description = project.description;
    this.name = project.name;
    this.programLength = project.programLength;
    this.startDate = project.startDate;
    this.endDate = project.endDate;
    this.created = project.created;
    this.projectPartners = project.projectPartners;
  }

  addProject() {
    // call post method in API to save a project
    window.confirm(this.name + " has been saved to the db");

    //  simulates returning the id of the saved record;
    let id = 1;
    return id;
  }

  getProject(id) {
    // call get method in API to retrieve a project by id
    //  Below is a simulation of filling the returned data
    this.projectType = projectTypeList[1].value; // initial value from list
    this.discipline1 = disciplineList[1].value; // initial value from list
    this.discipline2 = disciplineList[2].value; // initial value from list
    this.discipline3 = disciplineList[3].value; // initial value from list
    this.description = "This is a dummy description";
    this.name = "This is a dummy project name";
    this.programLength = "ongoing";
    this.startDate = "2020-12-10";
    this.endDate = "2021-12-10";
    this.created = false;
  }

  updateProject(id) {
    // call post method in API to save a project

    window.confirm(this.name + " has been updated in the db");
  }
}

export default Project;

// This is a course type project. Lots of overlap with the other Project classes and this needs to get resolved.
export class ProjectLabCourse {
  id = null;

  // meant to represent foreign key pointing to the Project class above. I think this will be a one-to-one relationship but not clear
  // that each project type (contained in projectType field of Project) will share the same data.
  projectId = null;

  courseInformation = {
    identification: {
      courseTitle: null,
      courseNumber: null,
      prerequisites: null,
      description: null,
    },

    hours: {
      creditHours: null,
      courseWeeks: null,
      contactHours: null,
      lectureHours: null,
      labHours: null,
      independentHours: null,
    },
    resources: {
      textbookTitle: null,
      publisher: null,
      author: null,
      isbn: null,
    },
    qualifications: [null], // array of qualifications needed for each instructor
    tasks: [], // tasks needed to be completed to complete the course information milestone.
  };

  courseDesign = {
    topics: [], // topics covered in the course
    objectives: [],
    learningEnvironments: [],
    tasks: [], // tasks needed to complete the course design milestone.
  };

  activityTable = {
    weeks: [],
    tasks: [], //tasks needed to complete the activity table milestone.
  };

  summary = {
    tasks: [],
  };
}

// This is a course type project. Lots of overlap with the other Project classes and this needs to get resolved.
export class ProjectLabCertificate {
  id = null;

  // meant to represent foreign key pointing to the Project class above. I think this will be a one-to-one relationship but not clear
  // that each project type (contained in projectType field of Project) will share the same data.
  projectId = null;

  certificateInformation = {
    identification: {
      certificateTitle: null,
      certificateNumber: null,
      prerequisites: null,
      description: null,
    },

    details: {
      units: null,
      certificateLevel: null,
      timeCommitment: null,
      timeCommitmentUnit: null,
    },

    qualifications: [null], // array of qualifications needed for each instructor
    tasks: [], // tasks needed to be completed to complete the course information milestone.
  };

  certificateDesign = {
    topics: [], // topics covered in the course
    objectives: [],
    learningEnvironments: [],
    standards: [],
    tasks: [], // tasks needed to complete the course design milestone.
  };

  activityTable = {
    modules: [],
    tasks: [], //tasks needed to complete the activity table milestone.
  };

  summary = {
    tasks: [],
  };
}
