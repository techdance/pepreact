import React from "react";

import {
  ProjectLabShowListBodywithScroll,
  ProjectLabShowListHeader,
} from "../../Shared/projectLab/ProjectLabShowListwithScroll";

export default class ProjectLabShowLearningEnvironments extends React.Component {
  render() {
    const { learningEnvironments } = this.props;

    return (
      <>
        <div className="col-md-12 mb-4">
          <div className="table-responsive table-wrapper-scroll-x my-custom-scrollbar rounded">
            <ProjectLabShowListHeader
              title="Learning Environments"
              modalName="#modalLearningEnvironment"
            />
            <ProjectLabShowListBodywithScroll list={learningEnvironments} />
          </div>
        </div>
      </>
    );
  }
}
