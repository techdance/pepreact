import React from "react";

class ShowProfessionalEvents extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="news box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-briefcase"></span>
                  Professional Events
                </h2>
                <a href="javascript:void(0);" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">Sort by Newest </a>
                    </li>
                    <li>
                      <a href="#">Sort by Oldest</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-middle">
              <div className="item">
                <a href="#">
                  NBEA 2020 Annual Convention and Tradeshow
                  <span className="color-black">
                    April 7-11, 2020 Boston, MA, USA{" "}
                  </span>
                </a>
              </div>
              <div className="item">
                <a href="https://www.aacsb.edu/events/conference/2020/international-conference-and-annual-meeting">
                  AACSB International Conference and Annual Meeting
                  <span className="color-black">
                    April 26-28, 2020 Denver, CO, USA{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="box-bottom text-center">
              <a href="#" className="icon-regular view-more">
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
