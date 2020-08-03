import React from "react";

import sherpaImage from "../../../assets/images/Sherpa.png";

class ShowDownloadSherpaApp extends React.Component {
  render() {
    return (
      <>
        <div className="inner-wrap">
          <div className="box-top position-relative">
            <h2 className="box-subhead color-white">
              <span className="icon-solid icon-cloud-download-alt"></span>
              Download Sherpa App
            </h2>
            {/* <a href="#" className="icon-setting icon-box"><span className="icon-solid fa-cog color-white"></span></a> */}
          </div>
        </div>
        <div className="box-middle color-white text-center mb-0">
          <div className="d-flex ml-3">
            <div className="al ml-4">
              <em>Elevate Global Engagement with Sherpa</em>
            </div>
            <div className="ac ml-3">
              <img src={sherpaImage} className="mb-3" />
              <br />
              <a style={{ color: "black" }} href="#0">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowDownloadSherpaApp;
