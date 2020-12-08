import React from "react";

class ShowStudentHomePageFinancial extends React.Component {
  render() {
    const { financials, disabled } = this.props;
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div
            className={
              "resources box box-border-radius box-shadow bg-white" +
              (disabled ? "  disabled" : "")
            }
          >
            <div className={disabled ? "disabled-overlay" : ""}></div>

            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-solid icon-usd-square"></span>My
                  Financial
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
              </div>
            </div>
            <div className="box-middle pt-3">
              <div className="box-image text-center">
                <span className="icon-duotone icon-usd-square icon-size-60 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </div>
            </div>
            <div className="box-bottom list-bullet mt-5">
              <ul>
                {financials.map((financial, index) => (
                  <li key={index}>
                    <a href={financial.link}>{financial.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="box-bottom text-center mt-3">
              <a
                href="#0"
                className="btn btn-blue btn-w-100"
                id="partner-search"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageFinancial;
