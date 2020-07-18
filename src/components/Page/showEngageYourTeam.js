import React from "react";

class ShowEngageYourTeam extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="create-new box box-border-radius box-shadow bg-asset-yellow-2">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead icon-fa-box icon-handshake-light pl-45 color-black">
                  ENGAGE YOUR TEAM?
                </h2>
                <a href="#" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog color-black"></span>
                </a>
              </div>
            </div>
            <div className="box-middle color-black text-center">
              <strong>Share Interests and Collaborate!</strong>
            </div>
            <div className="box-bottom text-center d-flex justify-content-center">
              <a href="#" className="btn btn-blue btn-w-100 mr-5">
                Collaborate Now
              </a>
              <span className="icon-solid fa-handshake icon-size-40 color-white"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowEngageYourTeam;
