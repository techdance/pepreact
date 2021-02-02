import Project, { ProjectLabCourse } from "../classes/Project.js";
import { getProjectLabTasks } from "../repositories/TaskRepository.js";

import { inezProfessor, bradleyProfessor } from "../data/professor.js";
import { projectTypeList } from "../data/areaOfInterestProjectType.js";

// getProfessorProjects is used for pages 01033/01034/01035 and for 03100.
export const getProfessorProjects = function (id, status) {
  // simulate get projects for a professor with id=id

  let project;
  let projects = [];

  const searchResultsBradleyInProgress = [
    {
      id: "1",
      organizer: { name: "William Stinson", image: "images/imag-organ-2.jpg" },
      projectType: projectTypeList[0],
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
      progress: "10",
      projectTasks: [
        { name: "Refine Course Identification", dueDate: "2019-12-11" },
      ],
      projectPartners: [inezProfessor],
    },
    {
      id: "2",
      organizer: { name: "Bradley Dexter", image: "images/bradley.png" },
      projectType: projectTypeList[1],
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
      organizer: { name: "Randy Wolff", image: "images/randy.png" },
      projectType: projectTypeList[2],
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
            project.organizer = result.organizer;
            project.projectType = result.projectType;
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
            project.organizer = result.organizer;
            project.projectType = result.projectType;
            project.name = result.name;
            project.description = result.description;
            project.progress = result.progress;
            project.projectPartners = result.projectPartners;
            project.projectTasks = result.projectTasks;

            projects.push(project);
          }
          break;
        case "all":
          for (const result of searchResultsBradleyPast) {
            project = new Project();
            project.id = result.id; // dummy set project id to location in the returned array but should be included in the actual db search results.
            project.organizer = result.organizer;
            project.projectType = result.projectType;
            project.name = result.name;
            project.description = result.description;
            project.progress = result.progress;
            project.projectPartners = result.projectPartners;
            project.projectTasks = result.projectTasks;

            projects.push(project);
          }
          for (const result of searchResultsBradleyInProgress) {
            project = new Project();
            project.id = result.id; // dummy set project id to location in the returned array but should be included in the actual db search results.
            project.organizer = result.organizer;
            project.projectType = result.projectType;
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
            project.organizer = result.organizer;
            project.projectType = result.projectType;
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
            project.organizer = result.organizer;
            project.projectType = result.projectType;
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

// getProject and getProjectLabCourse are used for pages 01000a/b/c/d - which is a "course" type project
// gets a project by id and returns a Project object.
export const getProject = function (id) {
  let project = new Project(); // returned object of Class Project (defined in Project.js)

  const searchResultId1 = {
    id: "1", // project id
    professorId: "1", // id of the professor who owns the project?
    organizer: { name: "William Stinson", image: "images/imag-organ-2.jpg" },
    projectType: projectTypeList[0],
    discipline1: "",
    discipline2: "",
    discipline3: "",
    description:
      "This course is designed to develop a student's ability to recognize and reason about ethical issues connected with multinational business management. At the completion of this course, students will be able to 1) identify possible ethical dilemmas arising from a cross-cultural context, 2) understand the factors in a cross-cultural context that inform a manager's decisions, and 3) apply knowledge of the cross-cultural context to resolve an ethical dilemma. All assignments will be read and completed in English.",
    name: "Ethics in Multinational Management",
    programLength: "",
    startDate: "",
    endDate: "",
    created: false,
    progress: "10",
    projectTasks: [
      { name: "Refine Course Identification", dueDate: "2019-12-11" },
    ],
    projectPartners: [inezProfessor, bradleyProfessor],
  };

  const searchResultId2 = {
    id: "2",
    professorId: "2",
    organizer: { name: "Inez Campos", image: "images/inez.jpg" },
    projectType: projectTypeList[4],
    discipline1: "",
    discipline2: "",
    discipline3: "",
    description:
      "This project is to design a graduate-level certificate in cross-cultural business communications. Rather than just 'reading' about common practices, students will experience them by studying in a global classroom and working through a multinational corporation case study on management and communication strategies.",
    name: "Cross-Cultural Business Communication Certificate",
    programLength: "",
    startDate: "",
    endDate: "",
    created: false,
    progress: "10",
    projectTasks: [
      { name: "Refine Course Identification", dueDate: "2019-12-11" },
    ],
    projectPartners: [inezProfessor, bradleyProfessor],
  };

  switch (id) {
    case "1":
      project.setProject(searchResultId1);
      break;
    case "2":
      project.setProject(searchResultId2);
      break;
    default:
  }
  return project;
};

//  gets a ProjectLabCourse with id "id"
export const getProjectLabCourse = function (id) {
  let projectLabCourse = null; // returned object of Class ProjectLabCourse (defined in Project.js)

  const searchResult = {
    id: null,
    projectId: null,

    courseInformation: {
      identification: {
        courseTitle: "Ethics in Multinational Management",
        courseNumber: "BUS 131-02",
        prerequisites: "None",
        description:
          "Ethics in Multinational Management is part of the course you are currently enrolled in. This course will provide you with the opportunity to gain international business experience. You will have a real multicultural experience by working with students in other countries and cultures. Using technology, you will work in cross-cultural teams to explore and analyze management issues such as leadership, decision making, and employee problems.",
      },

      hours: {
        creditHours: "3",
        courseWeeks: "14",
        contactHours: "3",
        lectureHours: "3",
        labHours: "3",
        independentHours: "6",
      },
      resources: {
        textbookTitle:
          "Global Marketing: Foreign Entry, Local Marketing and Global Marketing",
        publisher: "McGraw Hill / Irwin",
        author: "Johny Johanssen",
        isbn: "0073381012",
      },
      qualifications: [
        "Earned master's degree in business administration and 5-10 years of experience in private sector business management",
        "Earned masters/doctorate in social sciences (sociology, anthropology, economics)",
      ], // array of qualifications needed for each instructor
      tasks: [], // tasks needed to be completed to complete the course information milestone.
    },

    courseDesign: {
      topics: [
        "1. Management Qualities",
        "2. Management Decisions",
        "3. Management Analysis",
        "4. Analysis of Management Cultures and Decisions",
        "5. Cross-Cultural Product Analysis and Advertising",
        "6. Corporate Ethics",
        "7. Strategic Management",
      ],
      objectives: [
        "1. Connect with a partner in another country and engage in conversations that result in a joint project that enhances student's intercultural competency skills and knowledge",
        "2. Use online tools to develop global business communication skills in a cross-cultural virtual team environment",
        "3. Use case studies to understand similarities and differences in how management issues may be handled different cultures",
        "4. Objective 4          ",
        "5. Objective 5          ",
      ],
      learningEnvironments: [
        "1. Synchronous Video Lecture",
        "2. Independent Assignments",
        "3. Group Assignments",
        "4. Learning Environment 4",
        "5. Learning Environment 5",
        "6. Learning Environment 6",
        "7. Learning Environment 7",
        "8. Learning Environment 8",
        "9. Learning Environment 9",
        "10. Learning Environment 10",
        "11. Learning Environment 11",
      ],
      tasks: [], // tasks needed to complete the course design milestone.
    },
    activityTable: {
      weeks: [
        {
          objective: [],
          learningEnvironment: [],
          activity: [],
          content: [],
        },
        {
          objective: [],
          learningEnvironment: [],
          activity: [],
          content: [],
        },
        {
          objective: [],
          learningEnvironment: [],
          activity: [],
          content: [],
        },
      ],
      tasks: [], //tasks needed to complete the activity table milestone.
    },
    summary: {
      tasks: [],
    },
  };

  searchResult.courseInformation.tasks = getProjectLabTasks(id, "1"); // get tasks for step 1 associated with this ProjectLabCourse id
  searchResult.courseDesign.tasks = getProjectLabTasks(id, "2"); // get tasks for Step 2 associated with this ProjectLabCourse id
  searchResult.activityTable.tasks = getProjectLabTasks(id, "3"); // get tasks for Step 3 associated with this ProjectLabCourse id
  searchResult.summary.tasks = getProjectLabTasks(id, "4");

  projectLabCourse = searchResult;

  return projectLabCourse;
};

//  gets a ProjectLabCertificate with id "id"
export const getProjectLabCertificate = function (id) {
  let projectLabCertificate = null; // returned object of Class ProjectLabCourse (defined in Project.js)

  const searchResult = {
    id: null,
    projectId: null,

    certificateInformation: {
      identification: {
        certificateTitle: "Cross-Cultural Business Management Certification",
        certificateNumber: "BUS 600 Cert",
        prerequisites: "None",
        description:
          "This certificate course will provide you with the opportunity to learn and practice communication strategies for cross-cultural business settings. You will have a real multicultural experience by working with students in another country and culture. Using technology, you will work in cross-cultural teams to explore and analyze management and communication strategies of a multi-national corporation.",
      },

      details: {
        units: "2 CEUs",
        certificateLevel: "Graduate",
        timeCommitment: "1",
        timeCommitmentUnit: "Weeks",
      },

      qualifications: [
        "Earned Master’s Degree in Business Administration and 5 – 10 years of experience in private sector Business Management",
        "Earned Doctorate in Social Sciences (Sociology, Anthropology, Economics)",
      ], // array of qualifications needed for each instructor
      tasks: [], // tasks needed to be completed to complete the course information milestone.
    },

    certificateDesign: {
      topics: [
        "1. Cultures, Languages",
        "2. Gender, Religion and Class",
        "3. Family and Work-Life",
      ],
      objectives: [
        "1. Identify cultural differences in verbal and non-verbal communication",
        "2. Communicate in a business setting with a person from a different culture, language, or both",
      ],
      learningEnvironments: [
        "1. Synchronous Video Lecture",
        "2. Independent Assignments",
        "3. Group Assignments",
      ],
      standards: [
        "International Society for Communication Standards (ISCS) - https://www.iscs.io",
      ],
      tasks: [], // tasks needed to complete the course design milestone.
    },
    activityTable: {
      modules: [
        {
          length: "1 Day",
          objective: [],
          learningEnvironment: [],
          activity: [],
          content: [],
        },
        {
          length: "1.5 Days",
          objective: [],
          learningEnvironment: [],
          activity: [],
          content: [],
        },
        {
          length: "1.5 Days",
          objective: [],
          learningEnvironment: [],
          activity: [],
          content: [],
        },
      ],
      tasks: [], //tasks needed to complete the activity table milestone.
    },
    summary: {
      tasks: [],
    },
  };

  searchResult.certificateInformation.tasks = getProjectLabTasks(id, "1"); // get tasks for step 1 associated with this ProjectLabCourse id

  searchResult.certificateDesign.tasks = getProjectLabTasks(id, "2"); // get tasks for Step 2 associated with this ProjectLabCourse id
  searchResult.activityTable.tasks = getProjectLabTasks(id, "3"); // get tasks for Step 3 associated with this ProjectLabCourse id
  searchResult.summary.tasks = getProjectLabTasks(id, "4");

  projectLabCertificate = searchResult;

  return projectLabCertificate;
};
