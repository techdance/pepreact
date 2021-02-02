import React from "react";

import ShowMyCalendar from "../Shared/showMyCalendar.js";

import ShowAnnouncements from "../Shared/showAnnouncements.js";
import ShowProfessorCourses from "./showProfessorHomepageCourses.js";
import ShowProfessorAdvisees from "./showProfessorHomepageAdvisees.js";
import ShowProfessorProjects from "./showProfessorHomepageProjects.js";
import ShowProfessorPartners from "./showProfessorHomepagePartners.js";
import ShowProfessorResources from "./showProfessorHomePageResources.js";
import ShowProfessorCommunicateNow from "./showProfessorHomepageCommunicateNow.js";
import ShowProfessorOpportunities from "./showProfessorHomepageOpportunities.js";
import ShowNews from "../Shared/showNews.js";
import ShowProfessionalEvents from "../Shared/showProfessionalEvents.js";
import ShowProfessorTeams from "./showProfessorHomepageTeams.js";
import ShowProfessorCollaborate from "./showProfessorHomepageCollaborate.js";

import {
  getProfessorAnnouncements,
  getProfessorCourses,
  getProfessorAdvisees,
  getProfessorMatches,
  getProfessorCalendar,
} from "../../../repositories/ProfessorRepository.js";

import { getProfessorProjects } from "../../../repositories/ProjectRepository.js";

class ShowProfessorHomepage extends React.Component {
  render() {
    const { id } = this.props;

    const announcements = getProfessorAnnouncements(id);
    const professorCourses = getProfessorCourses(id);
    const advisees = getProfessorAdvisees(id);
    const projects = getProfessorProjects(Number(id), "all");
    const matches = getProfessorMatches(Number(id));
    const calendar = getProfessorCalendar(Number(id));

    return (
      <>
        <ShowAnnouncements announcements={announcements} />

        <section className="three-columns">
          <div className="row row-custom mb-4 sortable">
            <ShowProfessorCourses courses={professorCourses} />
            <ShowProfessorAdvisees advisees={advisees} />
            <ShowProfessorProjects projects={projects} />
            <ShowProfessorPartners matches={matches} />
            <ShowProfessorResources />
            <ShowProfessorCommunicateNow />
            <ShowProfessorOpportunities />
            <div className="col-lg-3 mb-4">
              <div className="calendar box box-border-radius box-shadow bg-white">
                <ShowMyCalendar calendar={calendar} />
              </div>
            </div>
            <ShowNews />
            <ShowProfessionalEvents />
            <ShowProfessorTeams />
            <ShowProfessorCollaborate />
          </div>
        </section>
      </>
    );
  }
}

export default ShowProfessorHomepage;
