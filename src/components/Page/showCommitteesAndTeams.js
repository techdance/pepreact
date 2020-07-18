import React from "react";

class ShowCommitteesAndTeams extends React.Component {
  render() {
    const committees = this.props.committeesandteams;

    const committeesAndTeams = {
      title: "Committees & Teams",
      titleIcon: "icon-regular icon-users-class",
      icon: "icon-duotone icon-users-class icon-size-40",
    };

    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="resources box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className={committeesAndTeams.titleicon}></span>
                  <a href="#" className="hover-underline color-black">
                    {committeesAndTeams.title}
                  </a>
                </h2>
                <a href="#" className="icon-setting icon-box">
                  <i className="icon-solid fa-cog"></i>
                </a>
              </div>
            </div>
            <div className="box-middle pt-3">
              <div className="box-image text-center">
                <span
                  className={
                    committeesAndTeams.icon +
                    " cl-primary-asset-type-f cl-secondary-asset-type-f"
                  }
                ></span>
              </div>
            </div>
            <div className="box-bottom list-bullet list-task mt-5">
              <ul>
                {committees.map((committee, index) => (
                  <li key={index}>
                    <a href={committee.link}>{committee.name}</a>
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

export default ShowCommitteesAndTeams;
