import React from "react";

import ShowMyCalendar from "../Shared/showMyCalendar.js";

import ShowAnnouncements from "../Shared/showAnnouncements.js";
import ShowProgramManagement from "./showProgramManagement.js";
import ShowTasksAndOverRides from "./showTasksAndOverrides.js";
import ShowCommitteesAndTeams from "./showCommitteesAndTeams.js";
import ShowReportsandAssessments from "./showReportsandAssessments.js";
import ShowNews from "../Shared/showNews.js";
import ShowProfessionalEvents from "../Shared/showProfessionalEvents.js";
import ShowCommunicateNow from "./showCommunicateNow.js";
import ShowEngageYourTeam from "./showEngageYourTeam.js";

class AdministratorHomePageContainer extends React.Component {
  render() {
    const {
      announcements,
      programs,
      tasksandOverrides,
      committeesandteams,
      calendar,
    } = this.props.administrator;
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
            <ShowNews />
            <ShowProfessionalEvents />
            <ShowCommunicateNow />
            <ShowEngageYourTeam />
          </div>
        </section>
      </>
    );
  }
}

export default AdministratorHomePageContainer;
