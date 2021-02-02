import React from "react";
import { timezones } from "../../../../data/timezone.js";

export default class ProjectLabPartners extends React.Component {
  constructor(props) {
    super(props);

    this.showPartner = this.showPartner.bind(this);
  }

  showPartner(partner, index) {
    //  TODO doesn't support time zones that are half-hours
    const now = new Date(); // Used to store local browser time
    let partnerNow = new Date(); // adjusted to store partner's local time

    // utcoffsetPartner is time in milliseconds partner's local time is from UTC
    // utcOffsetLocal is time in milliseconds current browser's local time is from UTC
    const utcOffsetString = timezones[partner.personalInformation.timezone];
    let utcOffsetPartner = Number(utcOffsetString.slice(1)); // doesn't work if utcOffsetString contains half-hours like +10:30
    utcOffsetPartner *= 60 * 60 * 1000; // convert hours to milliseconds
    const utcOffsetLocal = Number(now.getTimezoneOffset()) * (60 * 1000); // convert to milliseconds

    // if partner's UTC offset is positive, then add offset, otherwise subtract
    // utcOffsetLocal sets the local time to UTC time
    if (utcOffsetString.slice(0, 1) === "+") {
      partnerNow.setTime(now.getTime() + utcOffsetPartner + utcOffsetLocal);
    } else {
      partnerNow.setTime(now.getTime() - utcOffsetPartner + utcOffsetLocal);
    }

    return (
      <>
        <div className="item item-flex">
          <div className="item-img">
            <img
              src={partner.personalInformation.image}
              alt={
                partner.personalInformation.firstName +
                " " +
                partner.personalInformation.lastName
              }
              width="58"
            />
            <span className="user-active"></span>
          </div>
          <div className="item-text">
            <div className="partner partner-name position-relative">
              {partner.personalInformation.firstName +
                " " +
                partner.personalInformation.lastName +
                " - " +
                partnerNow.getHours() +
                ":" +
                partnerNow.getMinutes()}
            </div>
            <span className="partner partner-title">
              {partner.personalInformation.title}
            </span>
            <span className="partner partner-title">
              {partner.personalInformation.department}
            </span>
            <span className="partner partner-university">
              {partner.institutionProfile.name}
            </span>
            <span className="partner partner-address">
              {partner.institutionProfile.location},{" "}
              <span
                data-toggle="tooltip"
                title="Portugal"
                data-offset="50%, 3"
                className="tooltips"
              >
                Fix!!
              </span>
            </span>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { partners } = this.props;

    return (
      <>
        <div className="row row-custom sortable lab-project-partner">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white block-top">
              <div className="inner-wrap">
                <div className="box-top position-relative mb-4">
                  <h3 className="box-subhead">
                    <span className="icon-regular icon-users"></span> Project
                    Partners
                  </h3>
                  <a href="#0" className="icon-setting icon-box">
                    <i className="fas fa-cog"></i>
                  </a>
                </div>
                <div className="box-middle text1">
                  <div className="row row-custom">
                    {partners.map((partner, index) => (
                      <div className="col-md-4" key={index}>
                        {this.showPartner(partner, index)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
