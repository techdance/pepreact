import React from "react";
import ModalPortal from "../Page/Shared/UI/ModalPortal.js";

import { InstitutionLogoContext } from "../../App.js";

export default function SignoutModal(props) {

  return (
    <ModalPortal>
      <div
        className="modal fade"
        id="signOutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <InstitutionLogoContext.Consumer>
                {(value) => (
                  <div className="sign-out-logo">
                    <img src={value} alt="Institution Logo" />
                  </div>
                )}
              </InstitutionLogoContext.Consumer>

              <h2>Sign Out</h2>
              <p>Are you sure you would like to Sign Out of your account?</p>
            </div>
            <div className="modal-footer ac">
              <button
                type="button"
                className=""
                data-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button
                type="button"
                className=""
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.logout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
