import { projectTypeList } from "../../../data/areaOfInterestProjectType.js";
import { disciplineList } from "../../../data/disciplines.js";

class Project {
  projectType = "";
  discipline = "";
  description = "";
  name = "";
  programLength = ""; // this is different from area of interest - can contain either "fixed" or "ongoing"
  startDate = ""; // this is different from area of interest. but area of interest was halted because modal was re-designed
  endDate = ""; // this is different from area of interest.
  created = false; // shows in the modal for area of interest

  constructor() {
    let current = new Date();

    this.projectType = projectTypeList[1].value; // initial value from list
    this.discipline = disciplineList[1].value; // initial value from list
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
    this.projectType = project.projectType;
    this.discipline = project.discipline;
    this.description = project.description;
    this.name = project.name;
    this.programLength = project.programLength;
    this.startDate = project.startDate;
    this.endDate = project.endDate;
    this.created = project.created;
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
    this.discipline = disciplineList[1].value; // initial value from list
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
