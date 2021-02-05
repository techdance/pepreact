import React from "react";

import {
  certificateMilestones,
  courseMilestones,
  PROJECTLABCOURSE,
  PROJECTLABCERTIFICATE,
} from "../../../../data/projectMilestones.js";

// shows the milestone step information section of the Project Lab screens
//  type is Course, Certificate or Cirriculum
//  step is the milestone step (1 through 4)
export default class ProjectLabShowSteps extends React.Component {
  render() {
    const { step, type } = this.props;

    let classStep1 = null;
    let classStep2 = null;
    let classStep3 = null;
    let classReview = null;

    let iconStep1 = null;
    let iconStep2 = null;
    let iconStep3 = null;
    let iconStep4 = null;

    let milestones;

    switch (step) {
      case "1":
        classStep1 = "step step-current bar-progress button-blue-init mr--15";
        classStep2 =
          "step bar-progress button-lead next-step color-black mr--15";
        classStep3 =
          "step bar-progress button-lead next-step color-black mr--15";
        classReview =
          "step bar-progress button-lead next-step color-black mr--15";

        break;
      case "2":
        classStep1 =
          "step step-complete bar-progress previous-step button-green mr--15";
        classStep2 =
          "step step-current bar-progress button-blue color-white mr--15";
        classStep3 =
          "step bar-progress button-lead next-step color-black mr--15";
        classReview =
          "step bar-progress button-lead next-step color-black mr--15";

        iconStep1 = <i className="fa fa-check" aria-hidden="true"></i>;

        break;
      case "3":
        classStep1 =
          "step step-complete bar-progress previous-step button-green mr--15";
        classStep2 =
          "step step-complete bar-progress previous-step button-green-2 step-h-blue-2 color-white mr--15";
        // "step step-complete bar-progress previous-step button-green mr--15";
        classStep3 =
          "step step-current bar-progress button-blue color-white mr--15";
        classReview =
          "step bar-progress button-lead next-step color-black mr--15";

        iconStep1 = <i className="fa fa-check" aria-hidden="true"></i>;
        iconStep2 = <i className="fa fa-check" aria-hidden="true"></i>;

        break;
      case "4":
        classStep1 =
          "step step-complete bar-progress previous-step button-green mr--15";
        classStep2 =
          "step step-complete bar-progress previous-step button-green-2 step-h-blue-2 color-white mr--15";
        classStep3 =
          "step step-complete bar-progress previous-step button-green-2 step-h-blue-2 color-white mr--15";
        classReview = "bar-progress button-green-3 color-white";

        iconStep1 = <i className="fa fa-check" aria-hidden="true"></i>;
        iconStep2 = <i className="fa fa-check" aria-hidden="true"></i>;
        iconStep3 = <i className="fa fa-check" aria-hidden="true"></i>;
        iconStep4 = <i className="fa fa-check" aria-hidden="true"></i>;

        break;
      default:
    }

    switch (type) {
      case PROJECTLABCOURSE:
        milestones = courseMilestones;
        break;

      case PROJECTLABCERTIFICATE:
        milestones = certificateMilestones;
        break;

      default:
    }
    return (
      <>
        <div className="wrap-step mb-4">
          <a href={milestones[0].href} id="step-1" className={classStep1}>
            <span>
              {iconStep1}
              {milestones[0].stepText}
            </span>
          </a>
          <a href={milestones[1].href} id="step-2" className={classStep2}>
            <span>
              {iconStep2}
              {milestones[1].stepText}
            </span>
          </a>
          <a href={milestones[2].href} id="step-3" className={classStep3}>
            <span>
              {iconStep3}
              {milestones[2].stepText}
            </span>
          </a>
          <a href={milestones[3].href} className={classReview}>
            <span>
              {iconStep4}
              {milestones[3].stepText}
            </span>
          </a>
        </div>
      </>
    );
  }
}
