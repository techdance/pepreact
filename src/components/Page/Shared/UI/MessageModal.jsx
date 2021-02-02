import React from "react";

export default function MessageModal({ modalID, modalRef, modalMsg }) {
  return (
    <div
      ref={modalRef}
      className={"modal fade modalToltip"}
      id={modalID}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content modalareainterest ">
          <div className="modal-header position-relative">
            <div className="toltip-close3">
              <a href="#0" data-dismiss="modal">
                <i className="fa fa-times-circle"></i>
              </a>
            </div>
            <div className="text-left font15">
              <strong>Message</strong>
            </div>
          </div>
          <div className="modal-body">
            <div className="font14 interest-modal bg-grey no-border">
              <div className="pt-4 pb-4 text-center">{modalMsg}</div>
              <div className="row text-center p-3">
                <a
                  href="#0"
                  id="save-what-type"
                  className="btn btn-blue m-auto"
                  data-dismiss="modal"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConfirmModal({ modalID, modalRef, modalMsg, confirmCallBack }) {
  return (
    <div
      ref={modalRef}
      className={"modal fade modalToltip"}
      id={modalID}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content modalareainterest ">
          <div className="modal-header position-relative">
            <div className="toltip-close3">
              <a href="#0" data-dismiss="modal">
                <i className="fa fa-times-circle"></i>
              </a>
            </div>
            <div className="text-left font15">
              <strong>Message</strong>
            </div>
          </div>
          <div className="modal-body">
            <div className="font14 interest-modal bg-grey no-border">
              <div className="pt-4 pb-4 text-center">{modalMsg}</div>
              <div className="row text-center p-3">
                <a
                  href="#0"
                  // id="save-what-type"
                  className="btn btn-blue m-auto"
                  data-dismiss="modal"
                  onClick={(event) => confirmCallBack(true)}
                >
                  OK
                </a>
                <a
                  href="#0"
                  // id="save-what-type"
                  className="btn btn-grey m-auto"
                  data-dismiss="modal"
                  onClick={(event) => confirmCallBack(false)}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
