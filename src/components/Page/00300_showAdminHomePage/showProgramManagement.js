import React from "react";

class ShowProgramManagement extends React.Component {
  render() {
    const programs = this.props.programs;

    const programManagement = {
      title: "Program Management",
      titleIcon: "icon-regular icon-chart-pie",
      icon: "icon-duotone icon-chart-pie icon-size-50",
    };

    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="resources box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className={programManagement.titleIcon}></span>
                  <a href="#" className="hover-underline color-black">
                    {programManagement.title}
                  </a>
                </h2>
                <a href="#" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
              </div>
            </div>
            <div className="box-middle pt-3">
              <div className="box-image text-center">
                <span
                  className={
                    programManagement.icon +
                    " cl-primary-asset-type-f cl-secondary-asset-type-f"
                  }
                ></span>
              </div>
            </div>
            <div className="box-bottom list-bullet list-task mt-5">
              <ul>
                {programs.map((program, index) => (
                  <li key={index}>
                    <a href={program.link}>{program.name}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <a href="#" className="btn btn-blue">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowProgramManagement;
