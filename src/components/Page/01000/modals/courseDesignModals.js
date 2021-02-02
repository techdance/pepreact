import React from "react";
import {
  ShowListModalHeader,
  ShowListModalSavedItems,
  ShowListModalButtons,
} from "../../Shared/projectLab/modals/ShowListModal.js";

export class CourseTopicsModal extends React.Component {
  render() {
    const { topics } = this.props;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCourseTopics"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <ShowListModalHeader headerString={"Course Topics"} />

            <div className="modal-body">
              <div className="interest-modal color-black">
                <div className="row">
                  <div className="col-md-12 color-white">
                    <h5 className="bold mb-3 color-white">Course Topics</h5>
                    <ShowListModalSavedItems
                      items={topics}
                      placeholderString={"Enter Course Topics Here"}
                    />

                    <ShowListModalButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class CourseObjectivesModal extends React.Component {
  render() {
    const { objectives } = this.props;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalCourseObjectives"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <ShowListModalHeader headerString={"Course Objectives"} />

            <div className="modal-body">
              <div className="interest-modal color-black">
                <div className="row">
                  <div className="col-md-12 color-white">
                    <h5 className="bold mb-3 color-white">Course Objectives</h5>
                    <ShowListModalSavedItems
                      items={objectives}
                      placeholderString={"Enter Course Objectives Here"}
                    />
                    <ShowListModalButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class CourseLearningEnvironmentsModal extends React.Component {
  render() {
    const { learningEnvironments } = this.props;

    return (
      <div
        className="modal fade modalToltip modalareainterest"
        id="modalLearningEnvironment"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-800" role="document">
          <div className="modal-content">
            <ShowListModalHeader headerString={"Learning Environments"} />

            <div className="modal-body">
              <div className="interest-modal color-black">
                <div className="row">
                  <div className="col-md-12 color-white">
                    <h5 className="bold mb-3 color-white">
                      Learning Environments
                    </h5>
                    <ShowListModalSavedItems
                      items={learningEnvironments}
                      placeholderString={
                        "Enter Course Learning Environments Here"
                      }
                    />
                    <ShowListModalButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
