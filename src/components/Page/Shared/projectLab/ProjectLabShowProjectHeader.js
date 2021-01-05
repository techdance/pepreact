import React from "react";
import StatusDoughnut from "../UI/StatusDoughnut.js";

export default class ProjectLabShowProjectHeader extends React.Component {
  constructor(props) {
    super(props);

    this.showNameAndDescription = this.showNameAndDescription.bind(this);
    this.showHeader = this.showHeader.bind(this);
  }

  showNameAndDescription(project) {
    return (
      <>
        <div className="box-middle-inner">
          <h4>
            Name: <span style={{ fontWeight: "normal" }}>{project.name}</span>
          </h4>
          <h5>Description</h5>
          <p>{project.description}</p>
        </div>
      </>
    );
  }

  showHeader() {
    return (
      <>
        <div className="box-top position-relative w-btn">
          <h3 className="box-subhead">
            <span className="icon-regular icon-binoculars"></span> Project
            Overview
          </h3>
          <a href="#0" className="icon-setting icon-box mb-5">
            <span className="btn btn-blue btn-w-100 mr-2 text-uppercase">
              Edit Project
            </span>
            <i className="fas fa-cog"></i>
          </a>
        </div>
      </>
    );
  }

  render() {
    const { project, initialComplete } = this.props;

    return (
      <>
        {this.showHeader()}
        <div className="box-middle text1 d-flex">
          {this.showNameAndDescription(project)}
          <StatusDoughnut initialComplete={initialComplete} />
        </div>
      </>
    );
  }
}
