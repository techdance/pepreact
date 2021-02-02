import React from "react";
import Flexslider from "../../Shared/projectLab/modals/Flexslider.js";

import { removeFromArray, makeXORList } from "../../Shared/usefulFunctions";

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

export default class WeekActivityModal extends React.Component {
  constructor(props) {
    super(props);
    const { weeks, objectives, learningEnvironments } = this.props;
    this.state = {
      weeks: weeks,
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

  handleChange(weekIndex, index, event) {
    // name is either "activity" or "content" to update the correct field.
    // value is the input from customer
    const { name, value } = event.target;
    let { weeks } = this.state;

    weeks[weekIndex][name][index] = value;
    this.setState({ weeks: weeks });
  }

  handleObjectiveClick(weekIndex, item) {
    let { weeks } = this.state;

    weeks[weekIndex].objective.push(item);
    this.setState({ weeks: weeks });
  }

  removeObjective(weekIndex, index) {
    let { weeks } = this.state;

    weeks[weekIndex].objective = removeFromArray(
      weeks[weekIndex].objective,
      index
    );
    this.setState({ weeks: weeks });
  }

  handleLearningEnvironmentClick(weekIndex, item) {
    let { weeks } = this.state;

    weeks[weekIndex].learningEnvironment.push(item);
    this.setState({ weeks: weeks });
  }

  removeLearningEnvironment(weekIndex, index) {
    let { weeks } = this.state;

    weeks[weekIndex].learningEnvironment = removeFromArray(
      weeks[weekIndex].learningEnvironment,
      index
    );
    this.setState({ weeks: weeks });
  }

  addActivity(weekIndex) {
    let { weeks } = this.state;
    const newActivity = "";
    weeks[weekIndex].activity.push(newActivity);
    this.setState({ weeks: weeks });
  }

  removeActivity(weekIndex, index) {
    let { weeks } = this.state;

    // remove activity field from module
    weeks[weekIndex].activity = removeFromArray(
      weeks[weekIndex].activity,
      index
    );
    this.setState({ weeks: weeks });
  }

  addContent(weekIndex) {
    let { weeks } = this.state;
    const newContent = "";
    weeks[weekIndex].content.push(newContent);
    this.setState({ weeks: weeks });
  }

  removeContent(weekIndex, index) {
    let { weeks } = this.state;

    // remove the content field from the module
    weeks[weekIndex].content = removeFromArray(weeks[weekIndex].content, index);
    this.setState({ weeks: weeks });
  }

  render() {
    const { weeks, objectives, learningEnvironments } = this.state;

    return (
      <>
        <div
          className="modal fade modalToltip modalareainterest modal-activity-table"
          id="modalWeek"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalLabel"
          aria-hidden="true"
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
                          {weeks.map((week, indexWeek) => (
                            <li key={indexWeek}>
                              <h5 className="bold mb-4 text-center color-white">
                                {"Week " + (indexWeek + 1)}
                              </h5>
                              <div className="row">
                                <h6 className="color-white font-weight-bold	mb-3 col-md-12">
                                  Activity Table - Assign Weeks
                                </h6>
                              </div>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="text-center bold mb-2 color-white">
                                    Course Objectives
                                  </div>
                                  <div className="course-box">
                                    <div className="courses-box-body">
                                      <div className="courses-box-content">
                                        <div
                                          className={
                                            "wrap-modal-course-objectives-content-week-1"
                                          }
                                        >
                                          <ShowBodySelectedFromList
                                            itemList={week.objective}
                                            itemIndex={indexWeek}
                                            removeItem={this.removeObjective}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="courses-box-footer text-center">
                                      <ShowBodySelectList
                                        itemList={makeXORList(
                                          objectives,
                                          week.objective
                                        )}
                                        itemIndex={indexWeek}
                                        clickCallBack={
                                          this.handleObjectiveClick
                                        }
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
                                      <div className="wrap-modal-learning-content-week-1">
                                        <ShowBodySelectedFromList
                                          itemList={week.learningEnvironment}
                                          itemIndex={indexWeek}
                                          removeItem={
                                            this.removeLearningEnvironment
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="courses-box-footer text-center">
                                      <ShowBodySelectList
                                        itemList={makeXORList(
                                          learningEnvironments,
                                          week.learningEnvironment
                                        )}
                                        itemIndex={indexWeek}
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
                                      <div className="courses-box-content">
                                        <ShowBodyActivitiesList
                                          activities={week.activity}
                                          itemIndex={indexWeek}
                                          removeActivity={this.removeActivity}
                                          handleChange={this.handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="courses-box-footer text-center">
                                      <ShowBodyAddActivity
                                        itemIndex={indexWeek}
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
                                      <div className="courses-box-content">
                                        <ShowBodyContentList
                                          contents={week.content}
                                          itemIndex={indexWeek}
                                          removeContent={this.removeContent}
                                          handleChange={this.handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="courses-box-footer text-center">
                                      <ShowBodyAddContent
                                        itemIndex={indexWeek}
                                        addContent={this.addContent}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                        {/*<!-- slides -->*/}
                      </Flexslider>
                      {/* </div> */}
                      {/*<!-- flexslider -->*/}
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
                          className="btn btn-grey-dark mr-2"
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
      </>
    );
  }
}
