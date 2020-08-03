import React from "react";

import ShowMyCalendar from "../Shared/showMyCalendar.js";

import ShowAnnouncements from "../Shared/showAnnouncements.js";
import ShowProgramManagement from "./showProgramManagement.js";
import ShowTasksAndOverRides from "./showTasksAndOverrides.js";
import ShowCommitteesAndTeams from "./showCommitteesAndTeams.js";
import ShowReportsandAssessments from "./showReportsandAssessments.js";
import ShowNews from "./showNews.js";
import ShowProfessionalEvents from "./showProfessionalEvents.js";
import ShowCommunicateNow from "./showCommunicateNow.js";
import ShowEngageYourTeam from "./showEngageYourTeam.js";

//  TLM: constants below represent sample DB records.

const announcement1 = {
  msg:
    "Fall Term registration is open Wednesday, April 1 through Friday, May 1, 2020.",
  link: "#",
};

const announcement2 = {
  msg: "AHEA Conference Grant Deadline is August 28, 2020.",
  link: "#",
};

const announcement3 = {
  msg:
    "Help us welcome our newest CollaboratED members: Georgia International University; Ballsbridge University, Dominica; and Edinburgh Institute for Global Affairs.",
  link: "#",
};

const announcements = [announcement1, announcement2, announcement3];

const programs = [
  { name: "Budget vs. Actuals", link: "#" },
  { name: "Faculty/Course Matrix", link: "#" },
  { name: "Program/Space Optimization", link: "#" },
];

const tasksandOverrides = [
  { name: "Adjunct Contracts Approvals", link: "#", count: "22" },
  { name: "Faculty Evaluations", link: "#", count: "37" },
  { name: "Expense Report Approvals", link: "#", count: "10" },
  { name: "Approve Fall Term Schedule & Rosters", link: "#", count: "" },
];

const committeesandteams = [
  { name: "Student Success Committee", link: "#" },
  { name: "Cross-Dept Collaboration", link: "#" },
  { name: "Curriculum Committee", link: "#" },
  { name: "Accreditation Task Force", link: "#" },
];

const calendarData = [
  //blue-event, green-event, orange-event, purple-event
  {
    date: "2020-03-05",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "http://www.google.com",
    classname: "green-dark-event",
  },
  {
    date: "2020-03-10",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "green-light-event",
  },
  {
    date: "2020-03-12",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "green-dark-event",
  },
  {
    date: "2020-03-16",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "blue-light-event",
  },
  {
    date: "2020-03-18",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "green-light-event",
  },
  {
    date: "2020-03-19",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "green-dark-event",
  },
  {
    date: "2020-03-24",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "green-light-event",
  },
  {
    date: "2020-03-26",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "green-dark-event",
  },
  {
    date: "2020-03-30",
    badge: true,
    title: "Human Subjects Approval",
    description: "<b>William Stinson</b>, <i>Organizer</i>",
    hour: "8:00am EST",
    link: "#",
    textlink: "View Event <i className='fas fa-angle-double-right'></i>",
    classname: "blue-light-event",
  },
];

const colorKeyData = [
  {
    name: "College of communications",
    iconColor: "toltip-icon-brown",
  },
  {
    name: "College of Business",
    iconColor: "toltip-icon-blue-light",
  },
  {
    name: "College of Science & Engineering",
    iconColor: "toltip-icon-green",
  },
];

const calendar = {
  month: "03",
  year: "2020",
  colorKeys: colorKeyData,
  data: calendarData,
};

const news = [
  {
    source: "Inside Higher Ed",
    sourceLink: "#",
    title: "Study of Student Learning Outcomes",
  },
  { source: "AHEA", sourceLink: "#", title: "2020 Study Abroad Outlook" },
];

const professionalEvents = [
  {
    eventName: "NBEA 2020 Annual Convention and Tradeshow",
    eventLink: "#",
    eventDateLocation: "April 7-11, 2020 Boston, MA, USA",
  },
  {
    eventName: "AACSB International Conference and Annual Meeting",
    eventLink:
      "https://www.aacsb.edu/events/conference/2020/international-conference-and-annual-meeting",
    eventDateLocation: "April 26-28, 2020 Denver,CO USA",
  },
];

class AdministratorHomePageContainer extends React.Component {
  render() {
    return (
      <>
        <ShowAnnouncements announcements={announcements} />

        <section className="three-columns">
          <div className="row row-custom mb-4 sortable">
            <ShowProgramManagement programs={programs} />
            <ShowTasksAndOverRides tasksandOverrides={tasksandOverrides} />
            <ShowCommitteesAndTeams committeesandteams={committeesandteams} />

            {/* calendar tile on Admin Home page is only tile in the column. This is not true for other occurrences of calendar tile  Height is not set to auto*/}
            <div className="col-lg-3 mb-4">
              <div className="calendar box box-border-radius box-shadow bg-white">
                <ShowMyCalendar calendar={calendar} />
              </div>
            </div>

            <ShowReportsandAssessments />
            <ShowNews news={news} />
            <ShowProfessionalEvents events={professionalEvents} />
            <ShowCommunicateNow />
            <ShowEngageYourTeam />
          </div>
        </section>
      </>
    );
  }
}

export default AdministratorHomePageContainer;
