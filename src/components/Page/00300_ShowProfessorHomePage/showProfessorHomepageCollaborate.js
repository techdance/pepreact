import React from "react";

class ShowProfessorHomepageCollaborate extends React.Component {
  render() {
    return (
      <div className="col-lg-3 mb-4">
        <div className="create-new box box-border-radius box-shadow bg-orange">
          <div className="inner-wrap">
            <div className="box-top position-relative">
              <h2 className="box-subhead icon-fa-box icon-handshake-light pl-45 color-white">
                READY TO COLLABORATE?
              </h2>
              <a href="#0" className="icon-setting icon-box">
                <i className="fas fa-cog color-white"></i>
              </a>
            </div>
          </div>
          <div className="box-middle color-white text-center">
            Share Interests and Collaborate!
          </div>
          <div className="box-bottom text-center d-flex justify-content-center">
            <a
              href="01IN_00500a-done2.html#collaboration-interests"
              className="btn btn-blue btn-w-100 mr-4"
            >
              Collaborate Now
            </a>
            <i className="fas fa-handshake icon-size-40 color-white"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProfessorHomepageCollaborate;
