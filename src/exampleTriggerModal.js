import React from "react";

import AreaInterestModal from "./areaInterestModal.js";

class ExampleTriggerModal extends React.Component {
  render() {
    return (
      <>
        <div class="row row-custom mt-2">
          <div class="col-md-12 d-flex justify-content-between">
            <div class="text-center">
              <a
                href="javascript:void(0);"
                data-toggle="modal"
                data-target="#areaInterestModal"
              >
                View more Example {this.props.example}
              </a>
            </div>
          </div>
        </div>

        <AreaInterestModal modal={this.props.modal} />
      </>
    );
  }
}

export default ExampleTriggerModal;
