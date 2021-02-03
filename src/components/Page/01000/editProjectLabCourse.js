//  TODO - modify Professor object so that institutionProfile points to an Institution object.

import React from "react";
import {
  getProject,
  getProjectLabCourse,
} from "../../../repositories/ProjectRepository.js";
import { getProfessorCalendar } from "../../../repositories/ProfessorRepository.js";

import ShowMyCalendar from "../Shared/showMyCalendar.js";
import ProjectLabPartners from "../Shared/projectLab/ProjectLabPartners.js";
import DiscussionApp from "../Shared/projectLab/DiscussionApp.js";
import ProjectLabShowProjectHeader from "../Shared/projectLab/ProjectLabShowProjectHeader.js";
import ProjectLabShowTasks from "../Shared/projectLab/ProjectLabShowTasks.js";
import ProjectLabShowLearningEnvironments from "../Shared/projectLab/ProjectLabShowLearningEnvironments.js";

import ProjectLabCourseSteps from "./ProjectLabCourseSteps.js";

import ProjectLabCourseShowMilestoneSection from "./ProjectLabCourseShowMilestoneSection.js";
import ProjectLabCourseShowCourseIdentification from "./CourseInformation/ProjectLabCourseShowCourseIdentification.js";
import ProjectLabShowCourseHours from "./CourseInformation/ProjectLabShowCourseHours.js";
import ProjectLabShowCourseResources from "./CourseInformation/ProjectLabShowCourseResources.js";
import ProjectLabShowCourseQualifications from "./CourseInformation/ProjectLabShowCourseQualifications.js";
import ProjectLabCourseShowTopics from "./CourseDesign/ProjectLabCourseShowTopics.js";
import ProjectLabCourseShowObjectives from "./CourseDesign/ProjectLabCourseShowObjectives.js";

import ProjectLabCourseShowWeeks from "./ActivityTables/ProjectLabCourseShowWeeks.js";
import ShowCourseSummary from "./CourseSummary/ShowCourseSummary.js";

// Modals
import {
  CourseIdentificationModal,
  CourseHoursModal,
  CourseResourcesModal,
} from "./modals/courseInformationModals.js";
import {
  CourseTopicsModal,
  CourseObjectivesModal,
  CourseLearningEnvironmentsModal,
} from "./modals/courseDesignModals.js";
import InstructorQualificationsModal from "../Shared/projectLab/modals/InstructorQualificationModal.js";

export default class EditProjectLabCourse extends React.Component {
  constructor(props) {
    super(props);

    const url = new URL(document.location.href);

    const projectId = url.searchParams.get("projectid");
    const step = url.searchParams.get("step");

    // project id is same for Project and ProjectLab objects since 1-1 relationship (use object inheritance instead?)
    const project = getProject(projectId);
    const courseProject = getProjectLabCourse(projectId);
    const calendar = getProfessorCalendar(project.professorId);

    this.state = {
      project: project,
      step: step,
      courseProject: courseProject,
      calendar: calendar,
    };

    this.showCourseInformationStep = this.showCourseInformationStep.bind(this);
    this.showCourseDesignStep = this.showCourseDesignStep.bind(this);
    this.showActivityTableStep = this.showActivityTableStep.bind(this);
    this.showCourseSummaryStep = this.showCourseSummaryStep.bind(this);
  }

  showCourseInformationStep() {
    const { project, step, courseProject } = this.state;
    const {
      identification,
      hours,
      resources,
      qualifications,
      tasks,
    } = courseProject.courseInformation;

    const courseInformationTasks = courseProject.courseInformation.tasks;

    return (
      <>
        <div className="row row-custom sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap mb-7">
                <ProjectLabShowProjectHeader project={project} />
              </div>

              <ProjectLabCourseSteps step={step} />
              <ProjectLabCourseShowMilestoneSection step={step} tasks={tasks} />
              <div className="row row-custom">
                <ProjectLabCourseShowCourseIdentification
                  identification={identification}
                />
                <ProjectLabShowCourseHours hours={hours} />
                <ProjectLabShowCourseResources resources={resources} />
                <ProjectLabShowCourseQualifications
                  qualifications={qualifications}
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={courseInformationTasks} />
      </>
    );
  }

  showCourseDesignStep() {
    const { project, step, courseProject } = this.state;
    const {
      topics,
      objectives,
      learningEnvironments,
      tasks,
    } = courseProject.courseDesign;

    const courseDesignTasks = courseProject.courseDesign.tasks;

    return (
      <>
        <div className="row row-custom sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap mb-7">
                <ProjectLabShowProjectHeader
                  project={project}
                  initialComplete={"36"}
                />
              </div>
              <div className="wrap-box-table">
                <ProjectLabCourseSteps step={step} />
                <ProjectLabCourseShowMilestoneSection
                  step={step}
                  tasks={tasks}
                />
                <ProjectLabCourseShowTopics topics={topics} />
                <ProjectLabCourseShowObjectives objectives={objectives} />
                <ProjectLabShowLearningEnvironments
                  learningEnvironments={learningEnvironments}
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={courseDesignTasks} />
      </>
    );
  }

  showActivityTableStep() {
    const { project, step, courseProject } = this.state;
    const { weeks, tasks } = courseProject.activityTable;
    const { objectives, learningEnvironments } = courseProject.courseDesign;

    const activityTableTasks = courseProject.activityTable.tasks;

    return (
      <>
        <div className="row row-custom sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap mb-7">
                <ProjectLabShowProjectHeader
                  project={project}
                  initialComplete={"63"}
                />
              </div>
              <div className="wrap-box-table">
                <ProjectLabCourseSteps step={step} />
                <ProjectLabCourseShowMilestoneSection
                  step={step}
                  tasks={tasks}
                />
                <ProjectLabCourseShowWeeks
                  objectives={objectives}
                  learningEnvironments={learningEnvironments}
                  weeks={weeks}
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={activityTableTasks} />
      </>
    );
  }

  showCourseSummaryStep() {
    const { project, step, courseProject } = this.state;
    const summaryTasks = courseProject.summary.tasks;

    return (
      <>
        <div className="row row-custom sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap mb-7">
                <ProjectLabShowProjectHeader
                  project={project}
                  initialComplete={"100"}
                />
              </div>
              <div className="wrap-box-table">
                <ProjectLabCourseSteps step={step} />
                <ProjectLabCourseShowMilestoneSection
                  step={step}
                  tasks={summaryTasks}
                />
                <ShowCourseSummary courseProject={courseProject} />
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={summaryTasks} />
      </>
    );
  }

  render() {
    const { courseProject, project, step, calendar } = this.state;

    const { projectPartners } = project;
    let showStep = null;

    switch (step) {
      case "1":
        showStep = this.showCourseInformationStep();
        break;
      case "2":
        showStep = this.showCourseDesignStep();
        break;
      case "3":
        showStep = this.showActivityTableStep();
        break;
      case "4":
        showStep = this.showCourseSummaryStep();
        break;
      default:
    }

    return (
      <>
        <section className="wrap-lab">
          {showStep}
          <ProjectLabPartners partners={projectPartners} />
          <div className="row row-custom sortable">
            <DiscussionApp />
            <div className="col-lg-3 mb-4">
              <div className="calendar box box-border-radius box-shadow bg-white height-auto">
                <ShowMyCalendar calendar={calendar} />
              </div>
            </div>
          </div>
        </section>
        {/* modals are stored at the bottom of the html page */}
        {/* in the process of using Portals in order to store modals */}
        {/*   at the end of the html page (under #modal-root) */}
        {/*   but inside the React Component ProjectLabCourseShowWeeks */}
        {/* Course Information Modals */}
        <CourseIdentificationModal
          identification={courseProject.courseInformation.identification}
        />
        <CourseHoursModal hours={courseProject.courseInformation.hours} />
        <CourseResourcesModal
          resources={courseProject.courseInformation.resources}
        />
        <InstructorQualificationsModal
          qualifications={courseProject.courseInformation.qualifications}
        />
        {/* Course Design Modals */}
        <CourseTopicsModal topics={courseProject.courseDesign.topics} />
        <CourseObjectivesModal
          objectives={courseProject.courseDesign.objectives}
        />
        <CourseLearningEnvironmentsModal
          learningEnvironments={courseProject.courseDesign.learningEnvironments}
        />
      </>
    );
  }
}
