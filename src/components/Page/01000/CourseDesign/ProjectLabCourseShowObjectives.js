import React from "react";

import {
  ProjectLabShowListBodywithScroll,
  ProjectLabShowListHeader,
} from "../../Shared/projectLab/ProjectLabShowListwithScroll";

export default class ProjectLabCourseShowObjectives extends React.Component {
  render() {
    const { objectives } = this.props;

    return (
      <>
        <div className="col-md-12 mb-5">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <ProjectLabShowListHeader
              title="Course Objectives"
              modalName="#modalCourseObjectives"
            />
            <ProjectLabShowListBodywithScroll list={objectives} />
          </div>
        </div>
      </>
    );
  }
}
