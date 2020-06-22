import React from "react";

{
  /* Modal Virtual Office */
}

class virtualOfficeModal extends Component {
  render() {
    return (
      <div
        class="modal fade modalToltip"
        id="virtualOfficeModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="toltip-hover toltip-overlay border-radius-5 width-350 overflow-hidden">
                <div class="toltip-inner position-relative m-3">
                  <a
                    href="javascript:void(0);"
                    data-dismiss="modal"
                    class="icon-close-hover"
                  >
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                  </a>

                  <div class="d-flex color-white font-18">
                    <div class="col-a">
                      <div class="wrap-icon-hover text-center">
                        <div class="icon-circle icon-circle-color-red  m-auto">
                          <i class="fas fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-b pt-2 text-left">
                      <h3 class="color-white font14">
                        Virtual Office Hours (CST)
                      </h3>
                      <ul class="no-list font10 ml-2">
                        <li>Monday &ndash; Friday: 10:00 &ndash; 11:00 am</li>
                        <li>Monday &ndash; Thursday: 3:00 &ndash; 5:00 pm</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-bottom">
                  <a href="#" class="font-weight-bold">
                    Contact options
                  </a>
                  <a href="#">
                    <i class="fas fa-comments" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-phone-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default virtualOfficeModal;
