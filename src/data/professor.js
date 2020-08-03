export const professor = {
  pageOwner: {
    Institution: {
      logoA2: "./images/logo-a2.png",
      logoB2: "./images/logo-b2.png",
    },
    Person: { firstName: "Inez", iconImage: "./images/Inez.png" },
  },

  badges: ["Tour Guide", "3.5 GPA", "Scholar-Athlete"],

  alerts: [
    {
      type: "message",
      image: "images/randy.png",
      text:
        "Randy Wolff uploaded a document in What Artificial Intelligence Can Do for Small Business project",
    },

    {
      type: "matches",
      image: "",
      text:
        "Karthic Koothrappali, Joanne Byrne and others have matched with you as suggested partners",
    },

    {
      type: "message",
      image: "images/Inez.png",
      text:
        "Inez Campos was added to the Ethics in Multinational Management project",
    },

    {
      type: "bullhorn",
      image: "",
      text:
        "Register today for the International Conference on Big Data in Business",
    },

    {
      type: "message",
      image: "images/Li.png",
      text: "Missed call from Li Wei",
    },
  ],

  messages: [
    {
      from: "Clinton Harris",
      time: "9:08 PM",
      subject: "Welcome to AHEA",
      text:
        "We’re so glad you are taking advantage of the benefits of AHEA membership. Enclosed please find…",
    },

    {
      from: "Clinton Harris",
      time: "4:12 PM",
      subject: "Your syllabus is available.",
      text:
        "Your syllabus template for the global business course is currently attached for review.",
    },

    {
      from: "Inez Campos",
      time: "2:23 PM",
      subject: "Academic Paper",
      text:
        "Hello Bradley. I found an academic paper that would support our collaboration – relatively new and incorporates the cloud.",
    },

    {
      from: "Brittany Simms",
      time: "11:46 PM",
      subject: "Chapter 1 Questions",
      text:
        "Hi Dr. Dexter – Chapter 1 has me wondering about the implications of regulations globally as well.",
    },

    {
      from: "Inez Campos",
      time: "8:59 PM",
      subject: "Review Questions",
      text:
        "Hello Bradley. Looking forward to consolidating our review questions into a central area.",
    },
  ],

  receivedProjectMessages: [
    {
      from: {
        name: "Bradley Dexter, Ph.D.",
        image: "images/bradley.png",
        title: "Professor, College of Business",
        institution: "AHEA University",
      },
      timeStamp: "2019-10-13 11:52 AM",
      project: {
        type: "Course Development",
        discipline: "​Business",
        deliveryMethod: "Online",
        region: "All",
      },
    },
    {
      from: {
        name: "Joanna Byrne, Ph.D.",
        image: "images/Joanna.png",
        title: "Vice Dean of Business and Management",
        institution: "National University of Ireland, Galway",
      },
      timeStamp: "2019-10-04 5:08 PM",
      project: {
        type: "Research",
        discipline: "​Business",
        deliveryMethod: "Online",
        region: "All",
      },
    },
    {
      from: {
        name: "Fadhili Kiserian, Ph.D.",
        image: "images/Fadhili.png",
        title: "Chair of Economics",
        institution: "Maseno University",
      },
      timeStamp: "2019-09-20 2:59 PM",
      project: {
        type: "Course Development",
        discipline: "​Business",
        deliveryMethod: "Online",
        region: "All",
      },
    },
  ],

  sentProjectMessages: [
    {
      from: {
        name: "Inez Campos, Bus.D.",
        image: "images/Inez.png",
        title: "Professor of Business Management",
        institution: "Universidade de Lisboa",
      },
      timeStamp: "2019-10-13 11:52 AM",
      project: {
        type: "Course Development",
        discipline: "​Business",
        deliveryMethod: "Online",
        region: "All",
        preferredLanguage: "English",
        status: "Accepted",
      },
    },

    {
      from: {
        name: "Denaye Thompson, Ph.D.",
        image: "images/Denaye.png",
        title: " Senior Lecturer Department of Management",
        institution: "Charles Sturt University",
      },
      timeStamp: "2019-10-5 3:12 PM",
      project: {
        type: "Research",
        discipline: "Economics",
        deliveryMethod: "Online",
        region: "Europe",
        preferredLanguage: "English",
        status: "Pending",
      },
    },

    {
      from: {
        name: " Karthik Koothrappali, Ph.D.",
        image: "images/Karthik.png",
        title: "Lecturer, Business & Economics",
        institution: "University of Dubai",
      },
      timeStamp: "2019-10-13 11:52 AM",
      project: {
        type: "Academic Journal",
        discipline: "​Business",
        deliveryMethod: "Online",
        region: "All",
        preferredLanguage: "English",
        status: "Declined",
      },
    },
  ],
};

export const menuItems = [
  { name: "Home", link: "#", icon: "icon-home" },
  { name: "My Calendar", link: "#", icon: "icon-calendar" },
  { name: "Committees & Teams", link: "#", icon: "icon-user-group" },
  { name: "My Advisees", link: "#", icon: "icon-book-reader icon-solid" },
  { name: "My Courses", link: "#", icon: "icon-book" },
  { name: "My Projects", link: "#", icon: "icon-book-title" },
  { name: "My Files", link: "#", icon: "icon-copy" },
  { name: "Resources", link: "#", icon: "icon-th-large" },
  { name: "Opportunities", link: "#", icon: "icon-sun-haze" },
  {
    name: "Recommended Partners",
    link: "#",
    icon: "icon-user-friends icon-solid",
  },
  { name: "Settings", link: "#", icon: "icon-settings" },
];
