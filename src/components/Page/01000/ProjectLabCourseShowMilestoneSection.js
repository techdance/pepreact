import React from "react";

import ProjectLabShowMilestoneSection from "../Shared/projectLab/ProjectLabShowMilestoneSection.js";
import { PROJECTLABCOURSE } from "../../../data/projectMilestones.js";

export default class ProjectLabCourseShowMilestoneSection extends React.Component {
  render() {
    const { step, tasks } = this.props;

    return (
      <ProjectLabShowMilestoneSection
        step={step}
        type={PROJECTLABCOURSE}
        tasks={tasks}
      />
    );
  }
}
