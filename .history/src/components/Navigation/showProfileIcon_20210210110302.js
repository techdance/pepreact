import React from "react";
import { Redirect } from "react-router";
import SignoutModal from "./signoutModal.js";

class ShowProfileIcon extends React.Component {
  state = { redirect: null };

  logout = (e) => {
    e.preventDefault(); 
    console.log(' from tri logOut', this.props);
    this.props.history.replace("/");
 }

  render() {

  console.log(' props: ', this.props);
    return (
      <>
        <div className="top-icon top-icon-user hello">
          <div className="btn-group btn-group-menu">
            <a
              href="#0"
              className="btn-menu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="img-circle img-border-blue"
                src={this.props.image}
                alt=""
              />
              <span className="user-name">
                {"Hello, " + this.props.firstName}
              </span>
            </a>
            <div className="dropdown-menu">
              <div id="notification-toltip" className="toltip">
                <div
                  id="user-toltip"
                  className="toltip menu-toltip toltip-overlay"
                >
                  <ul>
                    <li>
                      <a href="/profile">My Profile</a>
                    </li>
                    <li>
                      <a href="#0">Settings & Privacy</a>
                    </li>
                    <li>
                      <a
                        id="btn-sign-out"
                        href="#0"
                        data-toggle="modal"
                        data-target="#signOutModal"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SignoutModal logout={this.logout}/>
      </>
    );
  }
}

export default ShowProfileIcon;
