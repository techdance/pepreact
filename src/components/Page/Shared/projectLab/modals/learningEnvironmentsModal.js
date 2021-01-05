import React from "react";
import {
  ShowListModalHeader,
  ShowListModalSavedItems,
  ShowListModalButtons,
} from "./ShowListModal.js";

export default class LearningEnvironmentsModal extends React.Component {
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
              <div className="interest-modal color-white">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="color-white font24">
                      Learning Environments
                    </h3>

                    <ShowListModalSavedItems
                      items={learningEnvironments}
                      placeholderString={"Enter Learning Environment Here"}
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
