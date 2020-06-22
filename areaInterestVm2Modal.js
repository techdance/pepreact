import React from "react";

{
  /* Modal Areas of interest - view more 2 */
}
class areaInterestVm2Modal extends Component {
  render() {
    return (
      <div
        class="modal fade modalToltip"
        id="areaInterestVm2Modal"
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
                        Research
                      </div>
                    </div>
                    <div class="row  mb-2">
                      <div class="col-md-6">
                        <strong>Discipline</strong>
                        <br />
                        Economics
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
                        <br />I am interested in finding one or two partners to
                        conduct a longitudinal study on the impact of Brexit on
                        the EU and what changes will take place in the economy
                        as a result.
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
                        <br />
                        Trimester
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-md-4">
                        <strong>Credits</strong>
                        <br />4
                      </div>
                      <div class="col-md-4">
                        <strong>Preferred Language</strong>
                        <br />
                        English
                      </div>
                      <div class="col-md-4">
                        <strong>Preferred Location</strong>
                        <br />
                        Europe
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

export default areaInterestVm2Modal;
