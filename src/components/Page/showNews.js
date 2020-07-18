import React from "react";

class ShowNews extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="news box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-signal-stream"></span>News
                </h2>
                <a href="javascript:void(0);" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">More Mews</a>
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
                  Inside Higher Ed
                  <span className="details">
                    Study of Student Learning Outcomes
                  </span>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  AHEA
                  <span className="details">2020 Study Abroad Outlook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowNews;
