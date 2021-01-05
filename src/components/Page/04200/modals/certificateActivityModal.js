import React from "react";
import Flexslider from "../../Shared/projectLab/modals/Flexslider.js";
import { removeFromArray } from "../../Shared/usefulFunctions";

import ShowBodySelectList from "../../Shared/projectLab/ShowBodySelectList.js";
import ShowBodySelectedFromList from "../../Shared/projectLab/ShowBodySelectedFromList.js";
import {
  ShowBodyActivitiesList,
  ShowBodyAddActivity,
} from "../../Shared/projectLab/showBodyActivities.js";
import {
  ShowBodyContentList,
  ShowBodyAddContent,
} from "../../Shared/projectLab/showBodyContent.js";

export class ModuleActivityModal extends React.Component {
  constructor(props) {
    super(props);
    const { modules, objectives, learningEnvironments } = this.props;
    this.state = {
      modules: modules,
      objectives: objectives,
      learningEnvironments: learningEnvironments,
    };

    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.addContent = this.addContent.bind(this);
    this.removeContent = this.removeContent.bind(this);

    this.handleObjectiveClick = this.handleObjectiveClick.bind(this);
    this.removeObjective = this.removeObjective.bind(this);
    this.handleLearningEnvironmentClick = this.handleLearningEnvironmentClick.bind(
      this
    );
    this.removeLearningEnvironment = this.removeLearningEnvironment.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(moduleIndex, index, event) {
    // name is either "activity" or "content" to update the correct field.
    // value is the input from customer
    const { name, value } = event.target;
    let { modules } = this.state;

    modules[moduleIndex][name][index] = value;
    this.setState({ modules: modules });
  }

  handleObjectiveClick(moduleIndex, objectiveIndex) {
    const { objectives } = this.state;
    let { modules } = this.state;

    modules[moduleIndex].objective.push(objectives[objectiveIndex]);
    this.setState({ modules: modules });
  }

  removeObjective(moduleIndex, index) {
    let { modules } = this.state;

    modules[moduleIndex].objective = removeFromArray(
      modules[moduleIndex].objective,
      index
    );
    this.setState({ modules: modules });
  }

  handleLearningEnvironmentClick(moduleIndex, leIndex) {
    const { learningEnvironments } = this.state;
    let { modules } = this.state;

    modules[moduleIndex].learningEnvironment.push(
      learningEnvironments[leIndex]
    );
    this.setState({ modules: modules });
  }

  removeLearningEnvironment(moduleIndex, index) {
    let { modules } = this.state;

    modules[moduleIndex].learningEnvironment = removeFromArray(
      modules[moduleIndex].learningEnvironment,
      index
    );
    this.setState({ modules: modules });
  }

  addActivity(moduleIndex) {
    let { modules } = this.state;
    const newActivity = "";
    modules[moduleIndex].activity.push(newActivity);
    this.setState({ modules: modules });
  }

  removeActivity(moduleIndex, index) {
    let { modules } = this.state;

    // remove activity field from module
    modules[moduleIndex].activity = removeFromArray(
      modules[moduleIndex].activity,
      index
    );
    this.setState({ modules: modules });
  }

  addContent(moduleIndex) {
    let { modules } = this.state;
    const newContent = "";
    modules[moduleIndex].content.push(newContent);
    this.setState({ modules: modules });
  }

  removeContent(moduleIndex, index) {
    let { modules } = this.state;

    // remove the content field from the module
    modules[moduleIndex].content = removeFromArray(
      modules[moduleIndex].content,
      index
    );
    this.setState({ modules: modules });
  }

  render() {
    const { modules, objectives, learningEnvironments } = this.state;
    return (
      <div
        className="modal fade modalToltip modalareainterest modal-activity-table"
        id="modalModule"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-1100" role="document">
          <div className="modal-content">
            <div className="modal-header position-relative text-center">
              <div className="text-left font15 m-auto">
                <strong>Activity Table</strong>
              </div>
            </div>
            <div className="modal-body">
              <div className="interest-modal color-black">
                <div className="row">
                  <div className="col-md-12">
                    <Flexslider>
                      <ul className="slides">
                        {modules.map((module, index) => (
                          <li key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <h5 className="bold mb-4 text-left color-white">
                                  {"Module " + (index + 1)}
                                </h5>
                              </div>
                              <div className="col-md-4">
                                <span className="color-white mr-2">
                                  Duration
                                </span>{" "}
                                <input
                                  type="number"
                                  name=""
                                  defaultValue="1"
                                  min="0"
                                  className="w-60px mr-2"
                                />
                                <select
                                  style={{ height: "26px" }}
                                  defaultValue="Days"
                                >
                                  <option value="Select">Select</option>
                                  <option value="Hours">Hours</option>
                                  <option value="Days">Days</option>
                                  <option value="Weeks">Weeks</option>
                                  <option value="Months">Months</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="text-center bold mb-2 color-white">
                                  Certificate Objectives
                                </div>
                                <div className="course-box">
                                  <div className="courses-box-body">
                                    <div className="wrap-modal-content-box-week-1">
                                      <ShowBodySelectedFromList
                                        itemList={module.objective}
                                        itemIndex={index}
                                        removeItem={this.removeObjective}
                                      />
                                    </div>
                                  </div>
                                  <div className="courses-box-footer text-center">
                                    <ShowBodySelectList
                                      itemList={objectives}
                                      itemIndex={index}
                                      clickCallBack={this.handleObjectiveClick}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="text-center bold mb-2 color-white">
                                  Learning Environment Design
                                </div>
                                <div className="course-box">
                                  <div className="courses-box-body">
                                    <div className="wrap-modal-content-box-week-1">
                                      <ShowBodySelectedFromList
                                        itemList={module.learningEnvironment}
                                        itemIndex={index}
                                        removeItem={
                                          this.removeLearningEnvironment
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="courses-box-footer text-center">
                                    <ShowBodySelectList
                                      itemList={learningEnvironments}
                                      itemIndex={index}
                                      clickCallBack={
                                        this.handleLearningEnvironmentClick
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="text-center bold mb-2 color-white">
                                  Activity
                                </div>

                                <div className="course-box">
                                  <div className="courses-box-body">
                                    <div className="wrap-modal-content-box-week-1">
                                      <ShowBodyActivitiesList
                                        activities={module.activity}
                                        itemIndex={index}
                                        removeActivity={this.removeActivity}
                                        handleChange={this.handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="courses-box-footer text-center">
                                    <ShowBodyAddActivity
                                      itemIndex={index}
                                      addActivity={this.addActivity}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="text-center bold mb-2 color-white">
                                  Content
                                </div>

                                <div className="course-box">
                                  <div className="courses-box-body">
                                    <div className="wrap-modal-content-box-week-1">
                                      <ShowBodyContentList
                                        contents={module.content}
                                        itemIndex={index}
                                        removeContent={this.removeContent}
                                        handleChange={this.handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="courses-box-footer text-center">
                                    <ShowBodyAddContent
                                      itemIndex={index}
                                      addContent={this.addContent}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>

                      {/* end of slides */}
                    </Flexslider>
                    {/* end of Flexslider */}
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-12">
                    <div className="float-left">
                      <a href="#0" className="btn btn-blue">
                        Learn more
                      </a>
                    </div>
                    <div className="float-right d-flex">
                      <a
                        href="#0"
                        className="btn btn-grey mr-2"
                        data-dismiss="modal"
                      >
                        Cancel
                      </a>
                      <a
                        href="#0"
                        className="btn btn-blue"
                        data-dismiss="modal"
                        id="save-week-1"
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
