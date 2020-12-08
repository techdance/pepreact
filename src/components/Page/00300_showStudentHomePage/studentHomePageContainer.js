import React from "react";

//  both below controls need to be put in folder shared by different page containers.
import ShowAnnouncements from "../Shared/showAnnouncements.js";
import ShowMyCalendar from "../Shared/showMyCalendar.js";
import ShowDownloadSherpaApp from "../Shared/showDownloadSherpaApp.js";

import ShowStudentHomePageGroups from "./showStudentHomePageGroups.js";
import ShowStudentHomePageHolds from "./showStudentHomePageHolds.js";
import ShowStudentHomePageFinancial from "./showStudentHomePageFinancial.js";
import ShowStudentHomePageAcademic from "./showStudentHomePageAcademics.js";
import ShowStudentHomePageCourses from "./showStudentHomePageCourses.js";
import ShowStudentHomePageCourseRegistration from "./showStudentHomePageCourseRegistration.js";
import ShowStudentHomePageOpportunities from "./showStudentHomePageOpportunities.js";
import ShowStudentHomePageCampusServices from "./showStudentHomePageCampusServices.js";
import ShowStudentHomePageCampusFeeds from "./showStudentHomePageCampusFeeds.js";

class StudentHomePageContainer extends React.Component {
  render() {
    console.log(this.props);

    const {
      announcements,
      groups,
      holds,
      financials,
      advisor,
      academics,
      courses,
      calendar,
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
            <ShowStudentHomePageCourses courses={courses} />

            {/* calendar tile and course registration tile appear in the same column on this page. Height is set to auto*/}
            <div className="col-lg-3 mb-4">
              <div className="calendar box box-border-radius box-shadow bg-white height-auto">
                <ShowMyCalendar calendar={calendar} />
              </div>
              <ShowStudentHomePageCourseRegistration />
            </div>

            <div className="col-lg-3 mb-4">
              <div className="box box-border-radius box-shadow bg-white">
                <ShowStudentHomePageOpportunities />
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="box box-border-radius box-shadow bg-white">
                <ShowStudentHomePageCampusServices />
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="box box-border-radius box-shadow bg-white">
                <ShowStudentHomePageCampusFeeds />
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div class="create-new box box-border-radius box-shadow bg-brown-light">
                <ShowDownloadSherpaApp />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default StudentHomePageContainer;
