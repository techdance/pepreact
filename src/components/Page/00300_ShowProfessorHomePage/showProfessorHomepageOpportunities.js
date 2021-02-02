import React from "react";

import { opportunities } from "../../../data/opportunities.js";

class ShowProfessorHomepageOpportunities extends React.Component {
  render() {
    return (
      <div className="col-lg-3 mb-4" id="col-opportunities">
        <div className="opportunities box box-border-radius box-shadow bg-white">
          <div className="inner-wrap">
            <div className="box-top position-relative">
              <h2 className="box-subhead icon-fa-box icon-sun-haze-light pl-45">
                Opportunities
              </h2>
              <a href="#0" className="icon-setting icon-box">
                <i className="fas fa-cog"></i>
              </a>
            </div>
          </div>
          <div className="box-middle">
            {opportunities.map((opportunity, index) => (
              <div className="item link-tw" key={index}>
                <a href={opportunity.link}>
                  <span className="sp-tw">{opportunity.name}</span>
                  <span className="details">{opportunity.location}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProfessorHomepageOpportunities;
