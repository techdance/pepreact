import React from "react";

class ShowProfessorHomepageResources extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="resources box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead icon-fa-box icon-th-large-regular pl-4">
                  Resources
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <i className="fas fa-cog"></i>
                </a>
              </div>
            </div>
            <div className="box-middle">
              <div className="box-image text-center">
                <i
                  className="fad fa-th-large icon-size-60"
                  style={{ color: "#008ffa" }}
                ></i>
              </div>
            </div>
            <div className="box-bottom list-bullet">
              <ul>
                <li>
                  <a href="#0">Getting Started</a>
                </li>
                <li>
                  <a href="#0">Best Practices</a>
                </li>
                <li>
                  <a href="#0">Templates</a>
                </li>
                <li>
                  <a href="#0">Tutorial</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowProfessorHomepageResources;
