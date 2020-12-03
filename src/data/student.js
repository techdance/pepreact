export const student = {
  announcements: [
    {
      msg:
        "Fall Term registration is open Wednesday, open 2020-04-01 to 2020-05-01.",
      link: "#0",
    },
    {
      msg: "Study Skills Workshops have begun for Spring 2020.",
      link: "#0",
    },
    {
      msg:
        "Career & Internship Fair is on Friday, 2020-03-13 from 1:00-5:00 PM. ",
      link:
        "https://en.wikipedia.org/w/index.php?title=Ballsbridge_University,_Dominica&action=edit&redlink=1",
    },
  ],

  groups: [
    { name: "CHE 200-01 Study Group", link: "#0" },
    { name: "WESLIT 201-01 Study Group", link: "#0" },
    {
      name: "Beta Gamma Sigma International Business Honor Society",
      link: "#0",
    },
  ],

  holds: [
    { name: "Financial Holds", link: "#0" },
    { name: "Academic Holds", link: "#0" },
    { name: "Other Holds", link: "#0" },
  ],
  financials: [
    {
      name: "Financial Aid Summary",
      link: "#0",
    },
    {
      name: "Pay My Bill",
      link: "#0",
    },
    {
      name: "Refunds",
      link: "#0",
    },
    {
      name: "Contact Financial Aid Office",
      link: "#0",
    },
  ],

  advisor: {
    name: "Bradley Dexter",
    image: "images/bradley.png",
  },

  academics: [
    { name: "Academic Progress", link: "#0" },
    {
      name: "View Grades",
      link: "http://40.121.137.192/towerhtml/03CN_02201.html",
    },
    { name: "Request Credit Evaluation", link: "#0" },
    { name: "Request Transcript", link: "#0" },
    { name: "Apply for Graduation", link: "#0" },
  ],

  courses: [
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
  ],
  calendar: {
    month: "03",
    year: "2020",
    colorKeys: [],
    data: [
      //blue-event, green-event, orange-event, purple-event
      {
        date: "orders.html",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "http://www.google.com",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "green-event",
      },
      {
        date: "2020-03-05",
        badge: true,
        title: "Quiz 1 Discussion",
        description: "<b>Bradley Dexter</b>, <i>Instructor</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "green-event",
      },

      {
        date: "2020-03-06",
        badge: true,
        title: "Artificial Intelligence Project Check-In",
        description: "<b>Randy Wolff</b>, <i>Organizer</i>",
        hour: "3:00pm EST",
        link: "#",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "green-event",
      },
      {
        date: "2020-03-11",
        badge: true,
        title: "Ethics Luncheon",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "11:30am EST",
        link: "",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "blue-event",
      },
      {
        date: "2020-03-13",
        badge: true,
        title: "Ethics Luncheon",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "11:30am EST",
        link: "",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "blue-light-event",
      },
      {
        date: "2020-03-19",
        badge: true,
        title: "Ethics Luncheon",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "11:30am EST",
        link: "",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2020-03-26",
        badge: true,
        title: "Ethics Luncheon",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "11:30am EST",
        link: "",
        textlink: "View More <i class='fas fa-arrow-alt-circle-right'></i>",
        classname: "green-event",
      },
    ],
  },
};

export const menuItems = [
  { name: "Home", link: "#0", icon: "icon-home" },
  { name: "My Calendar", link: "#0", icon: "icon-fa icon-calendar" },
  { name: "My Courses", link: "#0", icon: "icon-fa icon-book" },
  { name: "My Holds", link: "#0", icon: "icon-fa icon-alarm-clock" },
  { name: "My Financials", link: "#0", icon: "icon-fa icon-usd-square" },
  { name: "My Academics", link: "#0", icon: "icon-fa icon-user-chart" },
  { name: "My Groups", link: "#0", icon: "icon-fa icon-solar-system" },
  {
    name: "Course Registration",
    link: "#0",
    icon: "icon-fa icon-book-medical",
  },
  { name: "My Tiles", link: "#", icon: "icon-fa icon-clone" },
  { name: "My Files", link: "#", icon: "icon-fa icon-copy" },

  { name: "Resources", link: "#0", icon: "icon-fa icon-th-large" },
  { name: "Settings", link: "#0", icon: "icon-fa icon-settings" },
];
