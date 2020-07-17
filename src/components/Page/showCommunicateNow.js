import React from "react";

class ShowCommunicateNow extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="communicate box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-broadcast-tower"></span>
                  Communicate Now
                </h2>
                <a href="javascript:void(0);" class="icon-setting icon-box">
                  <span class="icon-solid fa-cog"></span>
                </a>
                <div class="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">View Messages</a>
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
            <div class="box-middle text-center wrap-images mt-5">
              <a href="#" class="text-left">
                <span class="icon-duotone icon-desktop icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </a>

              <a href="#">
                <span class="icon-duotone icon-comments-alt icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </a>

              <a href="#" class="text-right">
                <span class="icon-duotone icon-phone-volume icon-size-50 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCommunicateNow;
