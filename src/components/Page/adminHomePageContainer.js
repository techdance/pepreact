import React from "react";

import ShowAnnouncements from "./showAnnouncements.js";
import ShowProgramManagement from "./showProgramManagement.js";
import ShowTasksAndOverRides from "./showTasksAndOverrides.js";
import ShowCommitteesAndTeams from "./showCommitteesAndTeams.js";
import ShowMyCalendar from "./showMyCalendar.js";
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

class AdministratorHomePageContainer extends React.Component {
  render() {
    return (
      <>
        <ShowAnnouncements announcements={announcements} />

        <section class="three-columns">
          <div class="row row-custom mb-4 sortable">
            <ShowProgramManagement />
            <ShowTasksAndOverRides />
            <ShowCommitteesAndTeams />
            <ShowMyCalendar />

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
