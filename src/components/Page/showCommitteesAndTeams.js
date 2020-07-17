import React from "react";

class ShowCommitteesAndTeams extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="resources box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-users-class"></span>
                  <a href="#" class="hover-underline color-black">
                    Committees & Teams
                  </a>
                </h2>
                <a href="#" class="icon-setting icon-box">
                  <i class="icon-solid fa-cog"></i>
                </a>
              </div>
            </div>
            <div class="box-middle pt-3">
              <div class="box-image text-center">
                <span class="icon-duotone icon-users-class icon-size-40 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </div>
            </div>
            <div class="box-bottom list-bullet list-task mt-5">
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
              <div class="mt-4 text-center">
                <a href="#" class="btn btn-blue">
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
