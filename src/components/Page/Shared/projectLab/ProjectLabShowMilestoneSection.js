import React from "react";

import {
  certificateMilestones,
  courseMilestones,
  PROJECTLABCOURSE,
  PROJECTLABCERTIFICATE,
} from "../../../../data/projectMilestones.js";

// shows the milestone information section of the Project Lab screens
//  type is Course, Certificate or Cirriculum
//  step is the milestone step (1 through 4)
export default class ProjectShowMilestoneSection extends React.Component {
  render() {
    const { step, type } = this.props;
    let milestone;
    let stepInstructions;

    // Step 4 shows nothing; Steps 1-3 get instructions from data object and then render it.
    switch (type) {
      case PROJECTLABCOURSE:
        switch (step) {
          case "1":
          case "2":
          case "3":
            milestone = courseMilestones[Number(step) - 1];
            stepInstructions = milestone.milestoneText;
            break;
          case "4": // for Course Summary Step, do not show Milestone button.
            return <></>;

          default:
        }
        break;

      case PROJECTLABCERTIFICATE:
        switch (step) {
          case "1":
          case "2":
          case "3":
            milestone = certificateMilestones[Number(step) - 1];
            stepInstructions = milestone.milestoneText;
            break;
          case "4": // for Certificate Summary Step, do not show Milestone button.
            return <></>;

          default:
        }
        break;

      default:
    }

    // style the Complete Milestone button grey until all tasks are set to "Complete"
    let completeMilestoneButtonClass = "btn btn-green-2 btn-w-100 ml-3";
    const tasks = this.props.tasks !== undefined ? this.props.tasks : [];
    for (const task of tasks) {
      if (task.status !== "Completed") {
        completeMilestoneButtonClass = "btn btn-grey btn-w-100 ml-3";
        break;
      }
    }

    return (
      <>
        <div className="row row-custom mb-4">
          <div className="col-md-12">
            <div className="alert alert-multitab mb-0 d-flex flex-md-row flex-column justify-content-between align-items-center">
              {stepInstructions}
              <a href="#0" className={completeMilestoneButtonClass}>
                Complete Milestone
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
