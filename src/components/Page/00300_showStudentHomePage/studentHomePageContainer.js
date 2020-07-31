import React from "react";

import ShowAnnouncements from "../00300_showAdminHomePage/showAnnouncements.js";
import ShowStudentHomePageGroups from "./showStudentHomePageGroups.js";
import ShowStudentHomePageHolds from "./showStudentHomePageHolds.js";
import ShowStudentHomePageFinancial from "./showStudentHomePageFinancial.js";
import ShowStudentHomePageAcademic from "./showStudentHomePageAcademics.js";
import ShowStudentHomePageCourses from "./showStudentHomePageCourses.js";

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

const calendar = {
  month: "03",
  year: "2020",
  data: calendarData,
};

class StudentHomePageContainer extends React.Component {
  render() {
    const {
      announcements,
      groups,
      holds,
      financials,
      advisor,
      academics,
    } = this.props.student;
    return (
      <>
        <ShowAnnouncements announcements={announcements} />

        <section className="three-columns">
          <div className="row row-custom mb-4 sortable">
            <ShowStudentHomePageGroups groups={groups} />
            <ShowStudentHomePageHolds holds={holds} />
            <ShowStudentHomePageFinancial financials={financials} />
            <ShowStudentHomePageAcademic
              advisor={advisor}
              academics={academics}
            />
            <ShowStudentHomePageCourses />
          </div>
        </section>
      </>
    );
  }
}

export default StudentHomePageContainer;
