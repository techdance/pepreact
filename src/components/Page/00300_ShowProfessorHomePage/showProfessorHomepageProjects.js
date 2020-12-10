// Project type icon is not mapped to project type - the icon showing now is just random

import React from "react";

import Knob from "../../UI/Knob.js";
import { projectTypeList } from "../../../data/areaOfInterestProjectType.js";

class ShowProfessorHomepageProjects extends React.Component {
  render() {
    const { projects } = this.props;

    return (
      <>
        <div className="col-lg-9 mb-4 my-projects">
          <div className="box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead icon-fa-box icon-book-alt-light2 pl-4">
                  My Projects
                </h2>
                <a href="#0" className="icon-setting icon-box btn-menu">
                  <i className="fas fa-cog"></i>
                </a>
              </div>
              <div className="box-middle">
                <div className="table-wrapper-scroll-x my-custom-scrollbar">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th align="left" className="text-left">
                          Project Title
                        </th>
                        <th align="center">Start and End</th>
                        <th align="center">Type</th>
                        <th align="center">Organizer</th>
                        <th align="center">Files</th>
                        <th align="center">Partners</th>
                        <th align="center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((project, index) => (
                        <tr
                          key={index}
                          className={
                            {
                              0: "row-color row-color-blue",
                              1: "row-color row-color-green",
                              2: "row-color row-color-orange",
                              3: "row-color row-color-blue-light",
                              4: "row-color row-color-brown",
                            }[index % 5]
                          }
                        >
                          <td>
                            <b>{project.name}</b>
                          </td>
                          <td className="align-center">
                            {project.startDate + " to " + project.endDate}
                          </td>
                          <td className="align-center">
                            <i
                              className={
                                "fad " +
                                {
                                  Research: "fa-microscope",
                                  "Academic Journal": "fa-hands-helping",
                                  "Best Practices": "fa-user-friends",
                                  "Course Development": "fa-microscope",
                                  "Curriculum Development": "fa-microscope",
                                  "General Publication": "fa-microscope",
                                  Mentorship: "fa-microscope",
                                  "Peer Review": "fa-microscope",
                                  Research: "fa-microscope",
                                  "Study Abroad": "fa-microscope",
                                  Other: "fa-microscope",
                                }[project.projectType.label] +
                                " icon-size-40"
                              }
                            ></i>
                          </td>
                          <td className="align-center">
                            <span className="wrap-image">
                              <img
                                src={project.organizer.image}
                                width="36"
                                alt=""
                              />
                              <span className="user-active"></span>
                            </span>
                            <div className="org-name">
                              {project.organizer.name}
                            </div>
                          </td>
                          <td className="align-center">
                            <i className="fad fa-paste icon-size-40"></i>
                          </td>
                          <td className="align-center">
                            <i className="fad fa-ball-pile icon-size-40"></i>
                          </td>
                          <td className="align-center">
                            <input
                              type="text"
                              readOnly
                              className="knob"
                              value={project.progress}
                              data-width="50"
                              data-height="50"
                              data-fgcolor={
                                {
                                  0: "#084265",
                                  1: "#339900",
                                  2: "#ff993e",
                                  3: "#009fff",
                                  4: "#9f5a14",
                                }[index % 5]
                              }
                              disabled=""
                            />
                            <Knob tag={".knob"} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowProfessorHomepageProjects;
