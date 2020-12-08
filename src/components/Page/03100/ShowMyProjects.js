//  TODO use local time zone to render the Local Time correctly in the project partners section
// TODO split country abbreviation from institutionProfile.location in order to use in the tooltip to show full country name

import React from "react";
import Knob from "../../UI/Knob.js";

import { getProfessorProjects } from "../../../repositories/ProjectRepository.js";
import { getProfessorCalendar } from "../../../repositories/ProfessorRepository.js";

import ShowMyCalendar from "../Shared/showMyCalendar.js";

class ShowMyProjects extends React.Component {
  render() {
    const id = this.props.id;

    // inProgress contains an array of inProgress Project objects belonging to Professor with id "id"
    const inProgress = getProfessorProjects(Number(id), "inProgress");

    // past contains array of past Project objects belonging to Professor with id "id"
    const past = getProfessorProjects(Number(id), "past");

    // get the calendar associated with Professor with id "id"
    const calendar = getProfessorCalendar(Number(id));

    const now = new Date();

    return (
      <>
        <section className="wrap-best-practices">
          <div className="row">
            <div className="col-lg-9 mb-4">
              <div className="resources box box-border-radius box-shadow bg-white">
                <div className="inner-wrap">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead mw-100">
                      <i className="fal fa-book"></i>
                      <a
                        href="#0"
                        className="color-black hover-underline color-blue-light-hover"
                      >
                        My Projects
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="box-middle">
                  <ul className="nav nav-tabs" id="tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="projects-tab"
                        data-toggle="tab"
                        href="#projects"
                        role="tab"
                        aria-controls="projects"
                        aria-selected="true"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tasks-tab"
                        data-toggle="tab"
                        href="#tasks"
                        role="tab"
                        aria-controls="tasks"
                        aria-selected="false"
                      >
                        Tasks
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="projects"
                      role="tabpanel"
                      aria-labelledby="projects-tab"
                    >
                      <ul
                        className="nav nav-tabs nav-tabs-whithout-style"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="progress-tab"
                            data-toggle="tab"
                            href="#progress"
                            role="tab"
                            aria-controls="progress"
                            aria-selected="true"
                          >
                            In Progress
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="past-tab"
                            data-toggle="tab"
                            href="#past"
                            role="tab"
                            aria-controls="past"
                            aria-selected="false"
                          >
                            Past
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="progress"
                          role="tabpanel"
                          aria-labelledby="progress-tab"
                        >
                          <div className="row">
                            {inProgress.map((project, index) => (
                              <div className="col-md-6">
                                <div
                                  className={
                                    "box-project-progress " +
                                    (index / 2
                                      ? "box-project-progress-green"
                                      : "box-project-progress-orange")
                                  }
                                >
                                  <div className="box-project-progress-header"></div>
                                  <div className="box-project-progress-body">
                                    <h4>
                                      <a href="01CL_01000a2.html">
                                        {project.name}
                                      </a>
                                    </h4>
                                    <div className="d-flex">
                                      <div className="box-donnut box-donnut-30 pr-4">
                                        <input
                                          type="text"
                                          className="knob"
                                          value={project.progress}
                                          data-width="150"
                                          data-height="150"
                                          data-fgColor={
                                            index / 2 ? "#339937" : "#FF993E"
                                          }
                                          disabled=""
                                        />
                                      </div>
                                      {/* javascript code to render course progress knob */}
                                      <Knob tag={".knob"} />
                                      <div className="box-text">
                                        {project.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="past"
                          role="tabpanel"
                          aria-labelledby="past-tab"
                        >
                          {past.map((project, index) => (
                            <div className="row">
                              <div className="col-md-6">
                                <div className="box-project-progress box-project-progress-brown">
                                  <div className="box-project-progress-header"></div>
                                  <div className="box-project-progress-body">
                                    <h4>{project.name}</h4>
                                    <div className="d-flex">
                                      <div className="box-donnut pr-4">
                                        <input
                                          type="text"
                                          className="knob"
                                          value={project.progress}
                                          data-width="150"
                                          data-height="150"
                                          data-fgColor="#339937"
                                          disabled=""
                                        />
                                      </div>
                                      <Knob tag={".knob"} />
                                      <div className="box-text">
                                        {project.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tasks"
                      role="tabpanel"
                      aria-labelledby="tasks-tab"
                    >
                      <table className="table table-font18">
                        <thead>
                          <tr>
                            <th></th>
                            <th className="al">Project</th>
                            <th className="al">Title</th>
                            <th className="al">Due Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inProgress.map((project) =>
                            project.projectTasks.map((task) => (
                              <tr>
                                <td className="td-valign-bottom td-icon-arrow td-icon-arrow">
                                  <i className="fas fa-chevron-circle-right color-orange fa-2x"></i>
                                </td>
                                <td className="td-valign-top">
                                  <a href="#0">{project.name}</a>
                                </td>
                                <td className="td-valign-top">
                                  {task.name}{" "}
                                  {/* not clear how many tasks are shown per in progress project. Prototype shows 1 */}
                                </td>
                                <td className="td-valign-top">
                                  {task.dueDate}
                                  {/* not clear how many tasks are shown per in progress project. Prototype shows 1 */}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <nav
                    aria-label="Page navigation example"
                    className="mt-3 wrap-pagination"
                  >
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#0"
                          aria-label="Previous"
                        >
                          <i className="fal fa-angle-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#0">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#0" aria-label="Next">
                          <i className="fal fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* <!--col-lg-4--> */}
            <div className="col-lg-3 mb-4" draggable="true">
              <div className="box box-border-radius box-shadow bg-white block-top height-auto mb-4">
                <div className="inner-wrap">
                  <div className="box-top position-relative">
                    <h3 className="box-subhead">
                      <span className="icon-regular icon-users"></span> Project
                      Partners
                    </h3>
                    <a href="#0" className="icon-setting icon-box">
                      <i className="fas fa-cog"></i>
                    </a>
                  </div>
                  <div className="box-middle text1">
                    {/* {inProgress.map((inprogress) => ( */}
                    {/* not clear how many partners per project, prototype always shows the same partner regardless of project and only shows 1*/}
                    <div className="item d-flex">
                      <div className="item-img">
                        <div className="position-relative">
                          {/* not clear how many partners per project, prototype always shows the same partner regardless of project and only shows 1*/}
                          <img
                            src={
                              inProgress[0].projectPartners[0]
                                .personalInformation.image
                            }
                            alt=""
                            width="58"
                          />
                          <span className="user-active"></span>
                        </div>
                      </div>
                      <div className="item-text">
                        {/* not clear how many partners per project, prototype always shows the same partner regardless of project and only shows 1*/}

                        <div className="partner partner-name position-relative">
                          {inProgress[0].projectPartners[0].personalInformation
                            .firstName +
                            " " +
                            inProgress[0].projectPartners[0].personalInformation
                              .lastName}
                          <br />
                          <i className="far fa-clock"></i>{" "}
                          {now.getHours() +
                            ":" +
                            now.getMinutes() +
                            " Local Time"}
                          {/* 11:42 PM Local Time     */}
                        </div>
                        {/* not clear how many partners per project, prototype always shows the same partner regardless of project and only shows 1*/}
                        <span className="partner partner-title">
                          {inProgress[0].projectPartners[0].title}
                        </span>
                        <span className="partner partner-title">
                          {
                            inProgress[0].projectPartners[0].personalInformation
                              .department
                          }
                        </span>
                        <span className="partner partner-university">
                          {
                            inProgress[0].projectPartners[0].institutionProfile
                              .name
                          }
                        </span>
                        <span className="partner partner-address font-bold">
                          {
                            inProgress[0].projectPartners[0].institutionProfile
                              .location
                          }
                        </span>
                        {/* <span className="partner partner-address font-bold">
                          Lisbon,{" "}
                          <span
                            data-toggle="tooltip"
                            title="Portugal"
                            data-offset="50%, 3"
                            className="tooltips font-bold color-black"
                          >
                            PRT
                          </span>
                        </span> */}
                      </div>
                    </div>
                    {/* ))}  this is the end of the partners map */}
                  </div>
                </div>
              </div>

              <div className="calendar box box-border-radius box-shadow bg-white height-auto mb-3">
                <ShowMyCalendar calendar={calendar} />
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </section>
      </>
    );
  }
}

export default ShowMyProjects;
