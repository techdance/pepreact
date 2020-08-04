import React from "react";

import { towerLogo } from "../../assets/images/logo.png";

class ShowTowerLogo extends React.Component {
  render() {
    return (
      <>
        <div id="wrap-logo">
          <a href="#0">
            <img src={towerLogo} alt="Tower Education Technologies" />
          </a>
          <a href="#0" id="menu-button-responsive">
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </>
    );
  }
}

export default ShowTowerLogo;
