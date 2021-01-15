import React from "react";

{
  /* Modal */
}

class signOutModal extends Component {
  render() {
    return (
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
              <div className="sign-out-logo">
                <img src="images/logo.png" />
              </div>
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
