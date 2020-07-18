import React from "react";

class ShowCommitteesAndTeams extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="resources box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-users-class"></span>
                  <a href="#" className="hover-underline color-black">
                    Committees & Teams
                  </a>
                </h2>
                <a href="#" className="icon-setting icon-box">
                  <i className="icon-solid fa-cog"></i>
                </a>
              </div>
            </div>
            <div className="box-middle pt-3">
              <div className="box-image text-center">
                <span className="icon-duotone icon-users-class icon-size-40 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </div>
            </div>
            <div className="box-bottom list-bullet list-task mt-5">
              <ul>
                <li>
                  <a href="#">Student Success Committee</a>
                </li>
                <li>
                  <a href="#">Cross-Dept Collaboration</a>
                </li>
                <li>
                  <a href="#">Curriculum Committee</a>
                </li>
                <li>
                  <a href="#">Accreditation Task Force</a>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <a href="#" className="btn btn-blue">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCommitteesAndTeams;
