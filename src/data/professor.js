// simulate gordon profile page db records
export const gordonProfessor = {
  personalInformation: {
    namePrefix: "Dr",
    firstName: "Gordon",
    lastName: "Stanley",
    name: "Dr. Gordon Stanley",
    title: "Provost",
    image: "./images/Gordon.png",
    department: "Academic Affairs",
    personalMessage:
      '"The goal of education is the advancement of knowledge and the dissemination of truth." -John Fitzgerald Kennedy',
  },
  communicationPreferences: {
    languages: ["English", "NA"],
    primaryLanguage: "English",
    secondaryLanguage: "",
    tertiaryLanguage: "",
    emailAddress: "gstanley@ahea.edu",
    phoneNumbers: ["+1 555-432-7788", "+1 555-432-1100"],
    officePhone: "+1 555-432-7788",
    mobilePhone: "+1 555-432-1100",
    url: "https://www.ahea.edu/about-ahea/provost-office/provost",
    receiveSMS: false,
  },
  professionalBio: {
    introVideo: "./images/Gordon-video.png",
    discipline: "Business",
    areasOfExpertise: [
      "Institutional Research",
      "Graduate Research Funding",
      "Accrediting Standards Planning and Execution",
    ],
    areaOfExpertise1: "Institutional Research",
    areaOfExpertise2: "Graduate Research Funding",
    areaOfExpertise3: "Accrediting Standards Planning and Execution",
    internationalExperience: "",
    bio:
      "Dr. Stanley began his tenure as AHEA University's provost on July 1, 2012, following a 24-plus year career at Center State University, where he served as the George and Sadye Joy Raye Professor of Economics and editor of the Journal of Small Public Universities. From 2000-2005 Dr. Stanley served as dean of the College of Business and Entrepreneurialship, Central State's largest academic unit with more than 400 faculty and 5,500 students. He also chaired the economics department from 1995 to 1999 and directed the honors program from 1999 to 2005. An honors graduate in economics from the University of North Dakota, Dr. Stanley received his Ph.D. from the same institution, specializing in Global Affairs.",
    cvLink: "#",
  },

  institutionProfile: {
    name: "AHEA University, Iowa City Campus",
    type: "4-year Institution",
    location: "Iowa City, IA USA",
    continent: "North America",
    calendar: "Semester",
  },

  credentials: {
    educationLevel: "Phd",
    professionalMemberships: [
      {
        name: "Association of College Administration Professionals (ACAP)",
        link: "#",
      },
      {
        name:
          "Council for the Advancement of Standards in Higher Education (CAS)",
        link: "#",
      },
      // { name: "NAFSA: Association of International Educators", link: "#" },
    ],
    links: ["#", "#"],
    certificates: ["Internationalization of Higher Education"],
  },

  areaofinterest_list: [
    {
      projectType: "Research",
      description:
        "I am interested in finding one or two partners to conduct a longitudinal study on the impact of Brexit of the EU and what changes will take place in the economy as a result.",
      discipline: "Economic",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "Europe",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "4",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: true,
    },
    {
      projectType: "Academic Journal",
      description:
        "I am looking for partners to help author an article on the impact of mobile technology on business acumen. There is a lot of literature on international business acumen, but nothing has been updated since the onset of our 24/7 connectivity with mobile devices.",
      discipline: "Business",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "All",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "4",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: true,
    },
    {
      projectType: "Course Development",
      description:
        "I would like to co-develop a business ethics class focused on multinational corporations and how ethics may or may not conflict with the culture in countries where MNCs are located.",
      discipline: "Business",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "All",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "3",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: true,
    },
  ],
};

export const bradleyProfessor = {
  personalInformation: {
    namePrefix: "Dr",
    firstName: "Bradley",
    lastName: "Dexter",
    name: "Dr. Bradley Dexter",
    title: "Professor",
    image: "./images/bradley.png",
    department: "College of Business",
    personalMessage:
      '"Success in business requires training and discipline and hard work." David Rockefeller',
  },

  communicationPreferences: {
    languages: ["English", "Spanish"],
    emailAddress: "bdexter@ahea.edu",
    phoneNumbers: ["+1 555 432 1100", "+1 555 432 1122"],
    url: "https://www.ahea.edu/about-ahea/college-of-business/bdexter",
  },

  professionalBio: {
    introVideo: "./images/Bradley-video.png",
    discipline: "Business",
    areasOfExpertise: [
      "Business Analytics & Intelligence",
      "Business Ethics",
      "International​ Operations Research & Management",
    ],
    areaOfExpertise1: "Business Analytics & Intelligence",
    areaOfExpertise2: "Business Ethics",
    areaOfExpertise3: "International​ Operations Research & Management",
    internationalExperience: "1-2 Years of International Experience",
    bio:
      "Divides professional time between teaching undergraduate courses in both classroom and online settings, and providing private consulting specializing in the growt and globalization of small businesses. I also serve on the editorial board of  <em>The Academy of Management Journal</em>.",
    cvLink: "#",
  },

  institutionProfile: {
    name: "AHEA University, Iowa City Campus",
    type: "4-year Institution",
    location: "Iowa City, IA USA",
    continent: "North America",
    calendar: "Semester",
  },

  credentials: {
    educationLevel: "Phd",
    professionalMemberships: [
      { name: "Academy of International Business", link: "#" },
      { name: "American Management Association", link: "#" },
    ],
    links: ["#", "#"],
    certificates: ["Business Data Analytics"],
  },

  areaofinterest_list: [
    {
      projectType: "Research",
      description:
        "I am interested in finding one or two partners to conduct a longitudinal study on the impact of Brexit of the EU and what changes will take place in the economy as a result.",
      discipline: "Economic",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "Europe",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "4",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: false,
    },
    {
      projectType: "Academic Journal",
      description:
        "I am looking for partners to help author an article on the impact of mobile technology on business acumen. There is a lot of literature on international business acumen, but nothing has been updated since the onset of our 24/7 connectivity with mobile devices.",
      discipline: "Business",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "All",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "4",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: false,
    },
    {
      projectType: "Course Development",
      description:
        "I would like to co-develop a business ethics class focused on multinational corporations and how ethics may or may not conflict with the culture in countries where MNCs are located.",
      discipline: "Business",
      deliveryMethod: "Online",
      collaborationType: "Global",
      region: "All",
      programLength: "Semester",
      preferredLanguage: "English",
      credits: "3",
      programLevel: "Undergraduate",
      dateRange: "Today 2020",
      created: false,
    },
  ],
};

// this is really the page owner not the professor data
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
