import React from "react";

class ShowCommunicateNow extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="communicate box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-broadcast-tower"></span>
                  Communicate Now
                </h2>
                <a href="javascript:void(0);" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">View Messages</a>
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
            <div className="box-middle text-center wrap-images mt-5">
              <a href="#" className="text-left">
                <span className="icon-duotone icon-desktop icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </a>

              <a href="#">
                <span className="icon-duotone icon-comments-alt icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </a>

              <a href="#" className="text-right">
                <span className="icon-duotone icon-phone-volume icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCommunicateNow;
