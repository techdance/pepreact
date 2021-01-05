import React from "react";

import { PROJECTLABCOURSE } from "../../../data/projectMilestones.js";

import ProjectLabShowSteps from "../Shared/projectLab/ProjectLabShowSteps.js";

export default class ProjectLabCourseSteps extends React.Component {
  render() {
    const { step } = this.props;

    return <ProjectLabShowSteps step={step} type={PROJECTLABCOURSE} />;
  }
}
