//  TODO - modify Professor object so that institutionProfile points to an Institution object.

import React from "react";
import {
  getProject,
  getProjectLabCertificate,
} from "../../../repositories/ProjectRepository.js";
import { getProfessorCalendar } from "../../../repositories/ProfessorRepository.js";
import { PROJECTLABCERTIFICATE } from "../../../data/projectMilestones.js";

import ShowMyCalendar from "../Shared/showMyCalendar.js";
import DiscussionApp from "../Shared/projectLab/DiscussionApp.js";
import ProjectLabPartners from "../Shared/projectLab/ProjectLabPartners.js";
import ProjectLabShowProjectHeader from "../Shared/projectLab/ProjectLabShowProjectHeader.js";
import ProjectLabShowTasks from "../Shared/projectLab/ProjectLabShowTasks.js";
import ProjectLabShowSteps from "../Shared/projectLab/ProjectLabShowSteps.js";
import ProjectLabShowMilestoneSection from "../Shared/projectLab/ProjectLabShowMilestoneSection.js";

import LearningEnvironmentsModal from "../Shared/projectLab/modals/learningEnvironmentsModal.js";
import ProjectLabShowLearningEnvironments from "../Shared/projectLab/ProjectLabShowLearningEnvironments.js";

import ProjectLabCertificateShowCertificateIdentification from "./CertificateInformation/ProjectLabCertificateShowCertificateIdentification.js";
import ProjectLabCertificateShowDetails from "./CertificateInformation/ProjectLabCertificateShowDetails.js";
import ProjectLabCertificateShowQualifications from "./CertificateInformation/ProjectLabCertificateShowQualifications.js";
import ProjectLabCertificateShowTopics from "./CertifcateDesign/ProjectLabCertificateShowTopics.js";
import ProjectLabCertificateShowObjectives from "./CertifcateDesign/ProjectLabCertificateShowObjectives.js";
import ProjectLabCertificateShowStandards from "./CertifcateDesign/ProjectLabCertificateShowStandards.js";
import ProjectLabCertificateShowSummary from "./CertificateSummary/ProjectLabCertificateShowSummary.js";
import ProjectLabCertificateShowModules from "./ActivityTables/ProjectLabCertificateShowModules.js";

import {
  CertificateIdentificationModal,
  CertificateDetailsModal,
} from "./modals/certificateInformationModals.js";
import {
  CertificateTopicsModal,
  CertificateObjectivesModal,
  CertificateStandardsModal,
} from "./modals/certificateDesignModals.js";

import InstructorQualificationsModal from "../Shared/projectLab/modals/InstructorQualificationModal.js";

export default class EditProjectLabCertificate extends React.Component {
  constructor(props) {
    super(props);

    const url = new URL(document.location.href);

    const projectId = url.searchParams.get("projectid");
    const step = url.searchParams.get("step");

    // project id is same for Project and ProjectLab objects since 1-1 relationship (use object inheritance instead?)
    const project = getProject(projectId);
    const certificateProject = getProjectLabCertificate(projectId);
    const calendar = getProfessorCalendar(project.professorId);

    this.state = {
      project: project,
      step: step,
      certificateProject: certificateProject,
      calendar: calendar,
    };

    this.showCertificateInformationStep = this.showCertificateInformationStep.bind(
      this
    );
    this.showCertificateDesignStep = this.showCertificateDesignStep.bind(this);
    this.showActivityTableStep = this.showActivityTableStep.bind(this);
    this.showCertificateSummaryStep = this.showCertificateSummaryStep.bind(
      this
    );
  }

  showCertificateInformationStep() {
    const { project, step, certificateProject } = this.state;
    const {
      identification,
      details,
      qualifications,
      tasks,
    } = certificateProject.certificateInformation;

    return (
      <>
        <div className="row row-custom sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap mb-7">
                <ProjectLabShowProjectHeader
                  project={project}
                  initialComplete={"0"}
                />
              </div>
              <div className="wrap-box-table">
                <ProjectLabShowSteps step={step} type={PROJECTLABCERTIFICATE} />
                <ProjectLabShowMilestoneSection
                  step={step}
                  type={PROJECTLABCERTIFICATE}
                  tasks={tasks}
                />
                <div className="row row-custom">
                  <ProjectLabCertificateShowCertificateIdentification
                    identification={identification}
                  />
                  <ProjectLabCertificateShowDetails details={details} />
                  <ProjectLabCertificateShowQualifications
                    qualifications={qualifications}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={tasks} />
      </>
    );
  }

  showCertificateDesignStep() {
    const { project, step, certificateProject } = this.state;
    const {
      topics,
      objectives,
      learningEnvironments,
      standards,
      tasks,
    } = certificateProject.certificateDesign;

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
                <ProjectLabShowSteps step={step} type={PROJECTLABCERTIFICATE} />
                <ProjectLabShowMilestoneSection
                  step={step}
                  type={PROJECTLABCERTIFICATE}
                  tasks={tasks}
                />
                <div className="row row-custom">
                  <ProjectLabCertificateShowTopics topics={topics} />

                  <ProjectLabCertificateShowObjectives
                    objectives={objectives}
                  />
                  <ProjectLabShowLearningEnvironments
                    learningEnvironments={learningEnvironments}
                  />
                  <ProjectLabCertificateShowStandards standards={standards} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={tasks} />
      </>
    );
  }

  showActivityTableStep() {
    const { project, step, certificateProject } = this.state;
    const { modules, tasks } = certificateProject.activityTable;
    const {
      objectives,
      learningEnvironments,
    } = certificateProject.certificateDesign;

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
                <ProjectLabShowSteps step={step} type={PROJECTLABCERTIFICATE} />
                <ProjectLabShowMilestoneSection
                  step={step}
                  type={PROJECTLABCERTIFICATE}
                  tasks={tasks}
                />
                <ProjectLabCertificateShowModules
                  objectives={objectives}
                  learningEnvironments={learningEnvironments}
                  modules={modules}
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={tasks} />
      </>
    );
  }

  showCertificateSummaryStep() {
    const { project, step, certificateProject } = this.state;
    const summaryTasks = certificateProject.summary.tasks;

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
                <ProjectLabShowSteps step={step} type={PROJECTLABCERTIFICATE} />
                <ProjectLabShowMilestoneSection
                  step={step}
                  type={PROJECTLABCERTIFICATE}
                  tasks={summaryTasks}
                />
                <ProjectLabCertificateShowSummary
                  certificateProject={certificateProject}
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectLabShowTasks tasks={summaryTasks} />
      </>
    );
  }

  render() {
    const { project, step, calendar, certificateProject } = this.state;

    const { projectPartners } = project;
    let showStep = null;

    switch (step) {
      case "1":
        showStep = this.showCertificateInformationStep();
        break;
      case "2":
        showStep = this.showCertificateDesignStep();
        break;
      case "3":
        showStep = this.showActivityTableStep();
        break;
      case "4":
        showStep = this.showCertificateSummaryStep();
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
        {/* Modals are stored at bottom of page */}
        {/* Modals for Certificate Identification */}
        <CertificateIdentificationModal
          identification={
            certificateProject.certificateInformation.identification
          }
        />
        <CertificateDetailsModal
          details={certificateProject.certificateInformation.details}
        />
        <InstructorQualificationsModal
          qualifications={
            certificateProject.certificateInformation.qualifications
          }
        />
        {/* Modals for Certificate Design */}
        <CertificateTopicsModal
          topics={certificateProject.certificateDesign.topics}
        />
        <CertificateObjectivesModal
          objectives={certificateProject.certificateDesign.objectives}
        />
        <LearningEnvironmentsModal
          learningEnvironments={
            certificateProject.certificateDesign.learningEnvironments
          }
        />
        <CertificateStandardsModal
          standards={certificateProject.certificateDesign.standards}
        />
      </>
    );
  }
}
