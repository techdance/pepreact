import React from "react";

{
  /* Modal */
}
class signOutModal extends React.Component {
  render() {
    return (
      <div
        class="modal fade"
        id="signOutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="sign-out-logo">
                <img src="images/logo.png" />
              </div>
              <h2>Sign Out</h2>
              <p>Are you sure you would like to Sign Out of your account?</p>
            </div>
            <div class="modal-footer ac">
              <button
                type="button"
                class=""
                data-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button
                type="button"
                class=""
                data-dismiss="modal"
                aria-label="Close"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signOutModal;
