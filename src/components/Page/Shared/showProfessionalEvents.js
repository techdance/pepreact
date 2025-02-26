import React from "react";

import { professionalEvents } from "../../../data/professionalEvents.js";

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
                  Professonal Events
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#0">Sort by Newest </a>
                    </li>
                    <li>
                      <a href="#0">Sort by Oldest</a>
                    </li>
                    <li>
                      <a href="#0" className="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-middle">
              {professionalEvents.map((event, index) => (
                <div key={index} className="item">
                  <a href={event.eventLink}>
                    {event.eventName}
                    <span className="color-black">
                      {event.eventDateLocation}
                    </span>
                  </a>
                </div>
              ))}
            </div>
            <div className="box-bottom text-center">
              <a href="#0" className="icon-regular view-more">
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
