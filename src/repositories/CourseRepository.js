import { StudentCourse } from "../classes/Course.js";
import ForumDiscussion from "../classes/ForumDiscussion.js";

// returns an array of Discussion objects the belong to the course with id "courseId"
export const getCourseForumDiscussions = function (courseId) {
  let forumDiscussion = null; // object to add to array
  let forumDiscussions = []; // returned array of objects

  const searchResults = [
    {
      title: "Are ethical and legal the same thing",
      startedBy: "Bradley Dexter",
      startedByImage: "images/bradley.png",
      createdTimeStamp: "2020-03-06 10:02 AM",
      lastPostName: "Victoria Banks",
      lastPostImage: "images/Victoria.png",
      lastPostTimeStamp: "2020-03-09 12:17 PM",
      numReplies: "1",
    },
    {
      title: "Lab 1: Introducing myself",
      startedBy: "Sean Johnson",
      startedByImage: "images/Sean.png",
      createdTimeStamp: "2020-03-07 3:17 PM",
      lastPostName: "Timothy Parker",
      lastPostImage: "images/Tim.png",
      lastPostTimeStamp: "2020-03-04 8:03 AM",
      numReplies: "6",
    },
    {
      title: "Test message - hi everyone",
      startedBy: "William Sandler",
      startedByImage: "images/William.png",
      createdTimeStamp: "2020-03-03 11:46 AM",
      lastPostName: "Merrill Winston",
      lastPostImage: "images/Merrill.png",
      lastPostTimeStamp: "2020-03-03 1:37 PM",
      numReplies: "2",
    },

    {
      title: "Welcome",
      startedBy: "Bradley Dexter",
      startedByImage: "images/bradley.png",
      createdTimeStamp: "2020-03-02 2:13 PM",
      lastPostName: "Jessica Thompson",
      lastPostImage: "images/Jessica.png",
      lastPostTimeStamp: "2020-03-04 6:12 PM",
      numReplies: "12",
    },
  ];

  switch (courseId) {
    case 1:
      for (const searchResult of searchResults) {
        forumDiscussion = new ForumDiscussion();

        forumDiscussion.title = searchResult.title;
        forumDiscussion.startedBy = searchResult.startedBy;
        forumDiscussion.startedByImage = searchResult.startedByImage;
        forumDiscussion.createdTimeStamp = searchResult.createdTimeStamp;
        forumDiscussion.lastPostName = searchResult.lastPostName;
        forumDiscussion.lastPostImage = searchResult.lastPostImage;
        forumDiscussion.lastPostTimeStamp = searchResult.lastPostTimeStamp;
        forumDiscussion.numReplies = searchResult.numReplies;

        forumDiscussions.push(forumDiscussion);
      }
      break;
    default:
  }
  return forumDiscussions;
};

// retrieves all courses for a student and returns an array of StudentCourse objects
export const getAllStudentCourses = function (studentId) {
  let course = null; // individual StudentCourse object added to return array
  let courses = []; // returned array of StudentCourse objects

  const searchResults = [
    {
      name: "CHEMISTRY",
      code: "CHE 200-01",
      days: ["M", "W", "F"],
      start: "2:30",
      end: "3:30 PM",
      location: {
        link: "#0",
        type: "backpack",
      },
      instructor: {
        name: "Shaina Berube",
        image: "images/Chem.png",
        online: false,
      },

      syllabusLink: "#0",
      classmatesLink: "#0",
      assignmentsExams: [],
      progress: "61%",
    },
    {
      name: "ETHICS IN MULTINATIONAL MGMT",
      code: "BUS 131-02",
      days: ["M", "W", "F"],
      start: "1:00",
      end: "2:00 PM",
      location: {
        link: "#0",
        type: "browser",
        online: true,
      },
      instructor: {
        name: "Bradley Dexter",
        image: "images/bradley.png",
      },

      syllabusLink: "#0",
      classmatesLink: "#0",
      assignmentsExams: [
        {
          name:
            "Just Business: Multinational Corporation and Human Rights, Chapter 4",
          due: "Due 2020-03-13",
        },
        { name: "Unit 1, Quiz #2, 2020-03-13", due: "3-13-2020" },
      ],
      progress: "39%",
    },
    {
      name: "WESTERN LITERATURE",
      code: "WEST LIT 201-01",
      days: ["T", "TH"],
      start: "9:30",
      end: "10:30 AM",
      location: {
        link: "#0",
        type: "browser",
        online: true,
      },
      instructor: {
        name: "Daniel Kearney",
        image: "images/Daniel.png",
      },

      syllabusLink: "#0",
      classmatesLink: "#0",
      assignmentsExams: [],
      progress: "70%",
    },

    {
      name: "CHEMISTRY LAB",
      code: "CHE 200L-03",
      days: ["T", "TH"],
      start: "11:30",
      end: "1:00 PM",
      location: {
        link: "#0",
        type: "backpack",
        online: false,
      },
      instructor: {
        name: "Sam Cushman",
        image: "images/Sam.png",
      },

      syllabusLink: "#0",
      classmatesLink: "#0",
      assignmentsExams: [],
      progress: "67%",
    },

    {
      name: "CALCULUS 201",
      code: "CAL201-04",
      days: ["T", "TH"],
      start: "3:00",
      end: "4:30 PM",
      location: {
        link: "#0",
        type: "backpack",
        online: false,
      },
      instructor: {
        name: "Li Kwak",
        image: "images/Li.png",
      },

      syllabusLink: "#0",
      classmatesLink: "#0",
      assignmentsExams: [],
      progress: "67%",
    },
  ];

  switch (studentId) {
    case 1: // Brittany student id
      for (const searchResult of searchResults) {
        course = new StudentCourse();

        course.name = searchResult.name;
        course.code = searchResult.code;
        course.days = searchResult.days;
        course.start = searchResult.start;
        course.end = searchResult.end;
        course.location = searchResult.location;
        course.instructor = searchResult.instructor;
        course.syllabusLink = searchResult.syllabusLink;
        course.classmatesLink = searchResult.classmatesLink;
        course.assignmentsExams = searchResult.assignmentsExams;
        course.progress = searchResult.progress;

        courses.push(course);
      }
      break;
    default:
  }

  return courses;
};

// returns a StudentCourse object with the id "courseId"
export const getStudentCourse = function (courseId) {
  let course = null; // object to return

  const searchResults = {
    name: "ETHICS IN MULTINATIONAL MGMT",
    code: "BUS 131-02",
    term: "Spring 2020",
    days: ["M", "W", "F"],
    start: "1:00",
    end: "2:00 PM",
    location: {
      link: "#0",
      type: "browser",
      online: true,
    },
    instructor: {
      name: "Bradley Dexter",
      image: "images/bradley.png",
    },

    syllabusLink: "#0",
    classmatesLink: "#0",
    assignmentsExams: [
      {
        name:
          "Just Business: Multinational Corporation and Human Rights, Chapter 4",
        due: "Due 2020-03-13",
      },
      { name: "Unit 1, Quiz #2, 2020-03-13", due: "3-13-2020" },
    ],
    progress: "39%",
  };

  course = new StudentCourse();
  switch (courseId) {
    case 1: // id for Ethics in Multinational Management course
      course.name = searchResults.name;
      course.code = searchResults.code;
      course.term = searchResults.term;
      course.days = searchResults.days;
      course.start = searchResults.start;
      course.end = searchResults.end;
      course.location = searchResults.location;
      course.instructor = searchResults.instructor;
      course.syllabusLink = searchResults.syllabusLink;
      course.classmatesLink = searchResults.classmatesLink;
      course.assignmentsExams = searchResults.assignmentsExams;
      course.progress = searchResults.progress;
      break;
    default:
  }

  return course;
};
