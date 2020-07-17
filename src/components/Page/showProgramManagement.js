import React from "react";

class ShowProgramManagement extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="resources box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-chart-pie"></span>
                  <a href="#" class="hover-underline color-black">
                    Program Management
                  </a>
                </h2>
                <a href="#" class="icon-setting icon-box">
                  <span class="icon-solid fa-cog"></span>
                </a>
              </div>
            </div>
            <div class="box-middle pt-3">
              <div class="box-image text-center">
                <span class="icon-duotone icon-chart-pie icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </div>
            </div>
            <div class="box-bottom list-bullet list-task mt-5">
              <ul>
                <li>
                  <a href="#">Budget vs. Actuals</a>
                </li>
                <li>
                  <a href="#">Faculty/Course Matrix</a>
                </li>
                <li>
                  <a href="#">Program/Space Optimization</a>
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

export default ShowProgramManagement;
