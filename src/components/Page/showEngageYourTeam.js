import React from "react";

class ShowEngageYourTeam extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="create-new box box-border-radius box-shadow bg-asset-yellow-2">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead icon-fa-box icon-handshake-light pl-45 color-black">
                  ENGAGE YOUR TEAM?
                </h2>
                <a href="#" class="icon-setting icon-box">
                  <span class="icon-solid fa-cog color-black"></span>
                </a>
              </div>
            </div>
            <div class="box-middle color-black text-center">
              <strong>Share Interests and Collaborate!</strong>
            </div>
            <div class="box-bottom text-center d-flex justify-content-center">
              <a href="#" class="btn btn-blue btn-w-100 mr-5">
                Collaborate Now
              </a>
              <span class="icon-solid fa-handshake icon-size-40 color-white"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowEngageYourTeam;
