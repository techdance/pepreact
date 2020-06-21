import React from "react";

class areaInterestVM1Modal extends React.Component {
  render() {
    return (
      <div
        class="modal fade modalToltip"
        id="areaInterestVm1Modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="box-border-radius box-shadow interest-modal">
                <div class="view-more-interest-modal-inner position-relative">
                  <div class="toltip-close2">
                    <a href="javascript:void(0);" data-dismiss="modal">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                  <div class="view-more-interest-modal-inner-content text-left">
                    <div class="row mb-2">
                      <div class="col-md-6">
                        <strong>Project</strong>
                        <br />
                        Course Development
                      </div>
                    </div>
                    <div class="row  mb-2">
                      <div class="col-md-6">
                        <strong>Discipline</strong>
                        <br />
                        Business
                      </div>
                      <div class="col-md-6">
                        <strong>Delivery Method</strong>
                        <br />
                        Online
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-md-12">
                        <strong>Description</strong>
                        <br />I would like to co-develop a business ethics class
                        focused on multinational corporations and how ethics may
                        or may not conflict with the culture in countries where
                        MNCs are located.
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-md-4">
                        <strong>Collaboration Type</strong>
                        <br />
                        Intracampus
                      </div>
                      <div class="col-md-4">
                        <strong>Program Level</strong>
                        <br />
                        Undergraduate
                      </div>
                      <div class="col-md-4">
                        <strong>Program Length</strong>
                        <br />7 weeks
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-md-4">
                        <strong>Credits</strong>
                        <br />3
                      </div>
                      <div class="col-md-4">
                        <strong>Preferred Language</strong>
                        <br />
                        English
                      </div>
                      <div class="col-md-4">
                        <strong>Preferred Location</strong>
                        <br />
                        All
                      </div>
                    </div>
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

export default areaInterestVM1Modal;
