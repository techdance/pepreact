import React from "react";
import ProjectLabShowQualifications from "../../Shared/projectLab/projectLabShowQualifications.js";

export default class ProjectLabShowCourseQualifications extends React.Component {
  render() {
    const { qualifications } = this.props;

    return <ProjectLabShowQualifications qualifications={qualifications} />;
  }
}
