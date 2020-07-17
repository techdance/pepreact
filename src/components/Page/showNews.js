import React from "react";

class ShowNews extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="news box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-signal-stream"></span>News
                </h2>
                <a href="javascript:void(0);" class="icon-setting icon-box">
                  <span class="icon-solid fa-cog"></span>
                </a>
                <div class="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">More Mews</a>
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
                  Inside Higher Ed
                  <span class="details">
                    Study of Student Learning Outcomes
                  </span>
                </a>
              </div>
              <div class="item">
                <a href="#">
                  AHEA
                  <span class="details">2020 Study Abroad Outlook</span>
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
