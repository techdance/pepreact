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

export const pamelaIT = {
  personalInformation: {
    namePrefix: "Mrs",
    firstName: "Pamela",
    lastName: "Morris",
    name: "Mrs. Pamela Morris",
    title: "Senior Director of Administration Systems",
    image: "./images/pamela.png",
    department: "Enterprise Information Technology Serivces",
    personalMessage:
      "\"It's not a faith in technology. It's a faith in people.\" Steve Jobs",
  },

  communicationPreferences: {
    languages: ["English", "NA"],
    emailAddress: "pmorris@ahea.edu",
    phoneNumbers: ["+1 555 432-5150", "+1 555 432 7666"],
    url: "https://www.ahea.edu/about-ahea/information-technology/pmorris",
  },

  professionalBio: {
    introVideo: "./images/pamela-video.png",
    discipline: "",
    areasOfExpertise: ["Data Analytics", "System Networking"],
    areaOfExpertise1: "Data Analytics",
    areaOfExpertise2: "System Networking",
    internationalExperience: "",
    bio:
      "Pamela Morris has been the Sr. Director of Administrative Applications at AHEA University since 2018. Prior to that, she led the infrastructure and research computing groups within AHEA University’s central IT department for four years. During her time at AHEA, Ms. Morris has led several initiatives to improve the research computing services available on campus and has overseen the adoption of new technologies across the institution.",
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
    educationLevel: "Master's",
    professionalMemberships: [
      { name: "EDUCAUSE", link: "#" },
      { name: "Society for College and University Planning", link: "#" },
      { name: "National Center for Higher Ed Management Systems", link: "#" },
    ],
    links: ["#", "#"],
    certificates: ["Certified Analytics Professional"],
    certificates: ["Certified Big Data Professional"],
  },

  areaofinterest_list: [],
};

// this is really the page owner not the professor data

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
