import React from "react";

class ShowProfessionalEvents extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="news box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-briefcase"></span>Professional
                  Events
                </h2>
                <a href="javascript:void(0);" class="icon-setting icon-box">
                  <span class="icon-solid fa-cog"></span>
                </a>
                <div class="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">Sort by Newest </a>
                    </li>
                    <li>
                      <a href="#">Sort by Oldest</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box-middle">
              <div class="item">
                <a href="#">
                  NBEA 2020 Annual Convention and Tradeshow
                  <span class="color-black">
                    April 7-11, 2020 Boston, MA, USA{" "}
                  </span>
                </a>
              </div>
              <div class="item">
                <a href="https://www.aacsb.edu/events/conference/2020/international-conference-and-annual-meeting">
                  AACSB International Conference and Annual Meeting
                  <span class="color-black">
                    April 26-28, 2020 Denver, CO, USA{" "}
                  </span>
                </a>
              </div>
            </div>
            <div class="box-bottom text-center">
              <a href="#" class="icon-regular view-more">
                View More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowProfessionalEvents;
