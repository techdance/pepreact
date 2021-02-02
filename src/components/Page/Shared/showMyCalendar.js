import React from "react";
import MyZabutoCalendar from "./MyZabutoCalendar.js";

import "../../../assets/css/zabuto_calendar.css";

function RenderColorKeyBadge(props) {
  //  Renders the badge on the calendar that shows color coding for items on the calendar
  //  if colorKeys object is empty, then show nothing.

  const { colorKeys } = props;

  if (colorKeys.length) {
    return (
      <a
        className="icon-certificate-bg"
        href="#0"
        data-toggle="modal"
        data-target="#mycalendarModal-2"
      >
        {colorKeys.length}
      </a>
    );
  } else {
    return <></>;
  }
}

function RenderColorKeyModal(props) {
  //  Renders the modal when the colorKeys badge is clicked showing the color coding for items on the calendar.
  //  if colorKeys object is empty, then show nothing.

  const { colorKeys } = props;

  if (colorKeys.length) {
    return (
      <div
        className="modal fade modalToltip"
        id="mycalendarModal-2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-310" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div id="toltip-my-calendar" className="toltip toltip-1-2">
                {colorKeys.map((colorKey, index) => (
                  <div key={index} className="toltip-item toltip-overlay mb-2">
                    <a href="#0" className="d-flex align-items-center">
                      <div
                        className={
                          "toltip-icon toltip-icon2 " + colorKey.iconColor
                        }
                      >
                        <i className="far fa-calendar-alt color-white"></i>
                      </div>
                      <div className="toltip-text color-white">
                        <p>{colorKey.name}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

class ShowMyCalendar extends React.Component {
  render() {
    const { calendar } = this.props;

    return (
      <>
        <div className="inner-wrap">
          <div className="box-top2 position-relative">
            <h2 className="box-subhead">
              <span className="icon-regular fa-calendar-alt"></span>
              My Calendar
              <RenderColorKeyBadge colorKeys={calendar.colorKeys} />
            </h2>
            <a href="#0" className="icon-setting icon-box">
              <span className="icon-solid fa-cog"></span>
            </a>

            {/* <!-- Modal Badges --> */}
            <RenderColorKeyModal colorKeys={calendar.colorKeys} />
          </div>
        </div>
        <div className="box-middle">
          {/* <MyCalendar calendar={calendar} /> */}
          <MyZabutoCalendar calendar={calendar} />
        </div>
      </>
    );
  }
}

export default ShowMyCalendar;
