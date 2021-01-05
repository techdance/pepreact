import Task from "../classes/Tasks.js";

export const getProjectLabTasks = function (projectLabId, step) {
  let task = null;
  let tasks = []; // return object is an array of Task objects

  const searchResultsProject1Step1 = [
    {
      id: null,
      projectId: "1",
      step: "1",
      name: "Refine Course Identification",
      dueDate: "2020-12-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "1",
      name: "Determine Course Hours",
      dueDate: "2020-12-15",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "1",
      name: "Identify Course Resources",
      dueDate: "2021-01-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "1",
      name: "Add Instructor Qualifications",
      dueDate: "2021-01-30",
      status: "To Do",
      assignedTo: null,
    },
  ];

  const searchResultsProject2Step1 = [
    {
      id: null,
      projectId: "2",
      step: "1",
      name: "Complete Certificate Information",
      dueDate: "2020-12-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "2",
      step: "1",
      name: "Complete Certificate Details",
      dueDate: "2020-12-15",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "2",
      step: "1",
      name: "Complete Instructor Qualifications",
      dueDate: "2021-01-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "2",
      step: "1",
      name: "Share Book List for Textbook Selection",
      dueDate: "2021-01-30",
      status: "To Do",
      assignedTo: null,
    },
  ];

  const searchResultsProject1Step2 = [
    {
      id: null,
      projectId: "1",
      step: "2",
      name: "Review Course Topics",
      dueDate: "2020-12-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "2",
      name: "Evaluate Course Objectives",
      dueDate: "2020-12-15",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "2",
      name: "Identify Learning Environments",
      dueDate: "2021-01-11",
      status: "To Do",
      assignedTo: null,
    },
  ];

  const searchResultsProject1Step3 = [
    {
      id: null,
      projectId: "1",
      step: "3",
      name: "Add Course Objectives to Weeks",
      dueDate: "2020-12-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "3",
      name: "Associate Learning Environment Design with Objectives",
      dueDate: "2020-12-15",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "3",
      name: "Add Week Activities",
      dueDate: "2021-01-11",
      status: "To Do",
      assignedTo: null,
    },
    {
      id: null,
      projectId: "1",
      step: "3",
      name: "Identify Content for Course Objectives",
      dueDate: "2021-01-11",
      status: "To Do",
      assignedTo: null,
    },
  ];

  let searchResults = []; // assign to this the correct step search results - won't be needed in when db api is in place.
  //  projectLabId = 1 is Course Project, = 2 is Certificate Project
  switch (projectLabId) {
    case "1":
      switch (step) {
        case "1":
          searchResults = searchResultsProject1Step1;
          break;
        case "2":
          searchResults = searchResultsProject1Step2;
          break;
        case "3":
          searchResults = searchResultsProject1Step3;
          break;
        case "4":
          searchResults = []; // no built-in tasks for Course Summary step
          break;
        default:
      }
      break;
    case "2":
      // prototype repeats step 1 tasks in steps 2-4 so I'm just repeating tasks from Course Project
      switch (step) {
        case "1":
          searchResults = searchResultsProject2Step1;
          break;
        case "2":
          searchResults = searchResultsProject1Step2;
          break;
        case "3":
          searchResults = searchResultsProject1Step3;
          break;
        case "4":
          searchResults = []; // no built-in tasks for Course Summary step
          break;
        default:
      }
      break;
    default:
  }

  for (const result of searchResults) {
    task = new Task();
    task.setTask(result);
    tasks.push(task);
  }

  return tasks;
};
