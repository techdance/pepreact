import React from "react";

import {
  ProjectLabShowListBodywithScroll,
  ProjectLabShowListHeader,
} from "../../Shared/projectLab/ProjectLabShowListwithScroll";

export default class ProjectLabCourseShowTopics extends React.Component {
  render() {
    const { topics } = this.props;

    return (
      <div className="col-md-12 mb-5">
        <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
          <ProjectLabShowListHeader
            title="Course Topics"
            modalName="#modalCourseTopics"
          />
          <ProjectLabShowListBodywithScroll list={topics} />
        </div>
      </div>
    );
  }
}
