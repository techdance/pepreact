import React from "react";

class ShowStudentHomePageHolds extends React.Component {
  render() {
    const { holds } = this.props;
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="resources box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-solid icon-alarm-clock"></span>My Holds
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
              </div>
            </div>
            <div className="box-middle pt-3">
              <div className="box-image text-center">
                <span className="icon-duotone icon-alarm-clock icon-size-60 cl-primary-asset-type-f cl-secondary-asset-type-f"></span>
              </div>
            </div>
            <div className="box-bottom list-bullet mt-5">
              <ul>
                {holds.map((hold, index) => (
                  <li key={index}>
                    <a href={hold.link}>{hold.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="box-bottom text-center mt-3">
              <a href="#0" className="btn btn-blue btn-w-100" id="">
                View More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowStudentHomePageHolds;
