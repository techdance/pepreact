import Project from "../classes/Project.js";
import { inezProfessor, bradleyProfessor } from "../data/professor.js";

export const getProfessorProjects = function (id, status) {
  // simulate get projects for a professor with id=id

  let project;
  let projects = [];

  const searchResultsBradleyInProgress = [
    {
      id: "1",
      projectType: "",
      discipline1: "",
      discipline2: "",
      discipline3: "",
      description:
        "This course is designed to develop a student's ability to recognize and reason about ethical issues connected with multinational business management...",
      name: "Ethics in Multinational Management",
      programLength: "",
      startDate: "",
      endDate: "",
      created: false,
      progress: "0",
      projectTasks: [
        { name: "Refine Course Identification", dueDate: "2019-12-11" },
      ],
      projectPartners: [inezProfessor],
    },
    {
      id: "2",
      projectType: "",
      discipline1: "",
      discipline2: "",
      discipline3: "",
      description:
        "This course is designed to develop a student's ability to recognize and reason about ethical issues connected with multinational business management...",
      name: "AHEA Course Orientation",
      programLength: "",
      startDate: "",
      endDate: "",
      created: false,
      progress: "45",
      projectTasks: [
        { name: "Take Personality Assessment", dueDate: "2020-01-15" },
      ],
      projectPartners: [inezProfessor],
    },
  ];

  const searchResultsBradleyPast = [
    {
      id: "3",
      projectType: "",
      discipline1: "",
      discipline2: "",
      discipline3: "",
      description:
        "This Peer Review of academic work is conducted by diverse business educators and professionals to assess the quality of the article to be submitted in scholarly journal...",
      name: "Virtual Transformation of International Business",
      programLength: "",
      startDate: "",
      endDate: "",
      created: false,
      progress: "100",
      projectTasks: [],
      projectPartners: [inezProfessor],
    },
  ];

  const searchResultsInezInProgress = [
    {
      id: "4",
      projectType: "",
      discipline1: "",
      discipline2: "",
      discipline3: "",
      description:
        "This project is to design a graduate-level certificate in cross-cultural business communications. Rather than just 'reading' about common practices, students will experience…",
      name: "Cross-Cultural Business Management Certificate",
      programLength: "",
      startDate: "",
      endDate: "",
      created: false,
      progress: "0",
      projectTasks: [
        { name: "Take Personality Assessment", dueDate: "2020-01-15" },
      ],
      projectPartners: [bradleyProfessor],
    },
  ];

  const searchResultsInezPast = [
    {
      id: "3",
      projectType: "",
      discipline1: "",
      discipline2: "",
      discipline3: "",
      description:
        "This Peer Review of academic work is conducted by diverse business educators and professionals to assess the quality of the article to be submitted in scholarly journal...",
      name: "Virtual Transformation of International Business",
      programLength: "",
      startDate: "",
      endDate: "",
      created: false,
      progress: "100",
      projectTasks: [],
      projectPartners: [bradleyProfessor],
    },
  ];

  switch (id) {
    case 1: // Bradley id
      switch (status) {
        case "inProgress":
          for (const result of searchResultsBradleyInProgress) {
            project = new Project();
            project.id = result.id; // dummy set project id to location in the returned array but should be included in the actual db search results.
            project.name = result.name;
            project.description = result.description;
            project.progress = result.progress;
            project.projectPartners = result.projectPartners;
            project.projectTasks = result.projectTasks;

            projects.push(project);
          }
          break;
        case "past":
          for (const result of searchResultsBradleyPast) {
            project = new Project();
            project.id = result.id; // dummy set project id to location in the returned array but should be included in the actual db search results.
            project.name = result.name;
            project.description = result.description;
            project.progress = result.progress;
            project.projectPartners = result.projectPartners;
            project.projectTasks = result.projectTasks;

            projects.push(project);
          }
          break;
        default:
          break;
      }

      break;
    case 2: // Inez id
      switch (status) {
        case "inProgress":
          for (const result of searchResultsInezInProgress) {
            project = new Project();
            project.id = result.id; // dummy set project id to location in the returned array but should be included in the actual db search results.
            project.name = result.name;
            project.description = result.description;
            project.progress = result.progress;
            project.projectPartners = result.projectPartners;
            project.projectTasks = result.projectTasks;

            projects.push(project);
          }
          break;
        case "past":
          for (const result of searchResultsInezPast) {
            project = new Project();
            project.id = result.id; // dummy set project id to location in the returned array but should be included in the actual db search results.
            project.name = result.name;
            project.description = result.description;
            project.progress = result.progress;
            project.projectPartners = result.projectPartners;
            project.projectTasks = result.projectTasks;

            projects.push(project);
          }
          break;
        default:
          break;
      }

      break;
    default:
      break;
  }

  return projects;
};
