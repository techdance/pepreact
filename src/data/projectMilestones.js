const HOST = "http://localhost:3000";

export const courseMilestones = [
  {
    stepText: "Course Information",
    milestoneText:
      "Course Information: Define the basics of the course using the tools below.",
    href: HOST + "/01CL_01000?projectid=1&step=1",
  },
  {
    stepText: "Course Design",
    milestoneText:
      "Course Design: Begin defining the basic details of the course. Topics covered, course objectives, and learning environments.",
    href: HOST + "/01CL_01000?projectid=1&step=2",
  },
  {
    stepText: "Activity table",
    milestoneText: "Activity Table: Define the details for each week.",
    href: HOST + "/01CL_01000?projectid=1&step=3",
  },
  {
    stepText: "Course Summary",
    milestoneText: null,
    href: HOST + "/01CL_01000?projectid=1&step=4",
  },
];

export const PROJECTLABCOURSE = "1";

export const certificateMilestones = [
  {
    stepText: "Certificate Information",
    milestoneText:
      "Certificate Information: Define the basics of the course using the tools below.",
    href: HOST + "/05CL_04200?projectid=2&step=1",
  },
  {
    stepText: "Certificate Design",
    milestoneText:
      "Certificate Design: Begin defining the basic details of the certificate. Topics covered, course objectives, and learning environments.",
    href: HOST + "/05CL_04200?projectid=2&step=2",
  },
  {
    stepText: "Activity Table",
    milestoneText: "Activity Table: Define the details for each module.",
    href: HOST + "/05CL_04200?projectid=2&step=3",
  },
  {
    stepText: "Certificate Summary",
    milestoneText: null,
    href: HOST + "/05CL_04200?projectid=2&step=4",
  },
];

export const PROJECTLABCERTIFICATE = "2";
