import React from "react";
import { removeFromArray } from "../../Shared/usefulFunctions";

import {
  ShowBodyActivitiesList,
  ShowBodyAddActivity,
} from "../../Shared/projectLab/showBodyActivities.js";
import {
  ShowBodyContentList,
  ShowBodyAddContent,
} from "../../Shared/projectLab/showBodyContent.js";
import ShowBodySelectedFromList from "../../Shared/projectLab/ShowBodySelectedFromList.js";
import ShowBodySelectList from "../../Shared/projectLab/ShowBodySelectList.js";

import ModalPortal from "../../Shared/UI/ModalPortal.js";
import WeekActivityModal from "../modals/WeekActivityModal.js";

export default class ProjectLabCourseShowWeeks extends React.Component {
  constructor(props) {
    super(props);

    const { weeks, objectives, learningEnvironments } = this.props;

    this.state = {
      weeks: weeks,
      objectives: objectives,
      learningEnvironments: learningEnvironments,
    };

    this.addWeek = this.addWeek.bind(this);
    this.removeWeek = this.removeWeek.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.addContent = this.addContent.bind(this);
    this.removeContent = this.removeContent.bind(this);

    this.showAddWeekButton = this.showAddWeekButton.bind(this);
    this.ShowWeekBody = this.ShowWeekBody.bind(this);
    this.ShowWeekHeader = this.ShowWeekHeader.bind(this);

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

  handleObjectiveClick(weekIndex, objectiveIndex) {
    const { objectives } = this.state;
    let { weeks } = this.state;

    weeks[weekIndex].objective.push(objectives[objectiveIndex]);
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

  handleLearningEnvironmentClick(weekIndex, leIndex) {
    const { learningEnvironments } = this.state;
    let { weeks } = this.state;

    weeks[weekIndex].learningEnvironment.push(learningEnvironments[leIndex]);
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

  addWeek() {
    const { weeks } = this.state;

    const newWeek = {
      objective: [],
      learningEnvironment: [],
      activity: [],
      content: [],
    };

    weeks.push(newWeek);
    this.setState({ weeks: weeks });
  }

  removeWeek(index) {
    let { weeks } = this.state;

    weeks = removeFromArray(weeks, index);
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

    // remove activity field from week
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

    // remove the content field from the week
    weeks[weekIndex].content = removeFromArray(weeks[weekIndex].content, index);
    this.setState({ weeks: weeks });
  }

  ShowWeekHeader(index) {
    return (
      <>
        <thead>
          <tr>
            <th className="title-head-th-week" scope="col">
              {"Week #" + (index + 1)}
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" className="text-right">
              <a
                href="#0"
                className="btn-week-edit mr-1"
                data-week={index}
                data-target="#modalWeek"
                data-toggle="modal"
              >
                <span className="icon-solid icon-edit color-blue-link"></span>
              </a>
              <a
                href="#0"
                className="btn-week-edit"
                onClick={(e) => this.removeWeek(index)}
              >
                <span className="icon-solid icon-trash-alt color-blue-link"></span>
              </a>
            </th>
          </tr>
        </thead>
      </>
    );
  }

  showAddWeekButton() {
    return (
      <>
        <div className="d-flex justify-content-end mt-3">
          <a
            href="#0"
            className="btn btn-blue btn-w-100"
            onClick={(e) => this.addWeek(e)}
          >
            ADD NEW WEEK
          </a>
        </div>
      </>
    );
  }

  toggleActivity(index) {
    let { activity } = this.state;
    activity[index] = activity[index] ? 0 : 1;
    this.setState({ activity: activity });
  }

  toggleContent(index) {
    let { content } = this.state;
    content[index] = content[index] ? 0 : 1;
    this.setState({ content: content });
  }

  ShowWeekBody(weekIndex) {
    const { objectives, learningEnvironments, weeks } = this.state;
    let { activity, content } = this.state;
    const week = weeks[weekIndex];

    const ShowWeekBodyHeader = () => {
      return (
        <>
          <tr>
            <th className="title-row-th text-center" scope="row" width="25%">
              Course Objective
            </th>
            <th className="title-row-th text-center" scope="row" width="25%">
              Learning Environment Design
            </th>
            <th className="title-row-th text-center" scope="row" width="25%">
              Activity
            </th>
            <th className="title-row-th text-center" scope="row" width="25%">
              Content
            </th>
          </tr>
        </>
      );
    };

    return (
      <>
        <tbody>
          {ShowWeekBodyHeader()}
          <tr>
            <td className="text-center" valign="top">
              <ShowBodySelectedFromList
                itemList={week.objective}
                itemIndex={weekIndex}
                removeItem={this.removeObjective}
              />
            </td>
            <td className="text-center" valign="top">
              <ShowBodySelectedFromList
                itemList={week.learningEnvironment}
                itemIndex={weekIndex}
                removeItem={this.removeLearningEnvironment}
              />
            </td>
            <td className="text-center" align="left" valign="top">
              <ShowBodyActivitiesList
                activities={week.activity}
                itemIndex={weekIndex}
                removeActivity={this.removeActivity}
                handleChange={this.handleChange}
              />
            </td>
            <td className="text-center" align="left" valign="top">
              <ShowBodyContentList
                contents={week.content}
                itemIndex={weekIndex}
                removeContent={this.removeContent}
                handleChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="text-center" valign="top">
              <ShowBodySelectList
                itemList={objectives}
                itemIndex={weekIndex}
                clickCallBack={this.handleObjectiveClick}
              />
            </td>
            <td className="text-center" valign="top">
              <ShowBodySelectList
                itemList={learningEnvironments}
                itemIndex={weekIndex}
                clickCallBack={this.handleLearningEnvironmentClick}
              />
            </td>
            <td className="text-center" valign="top">
              <ShowBodyAddActivity
                itemIndex={weekIndex}
                addActivity={this.addActivity}
              />
            </td>

            <td className="text-center" valign="top">
              <ShowBodyAddContent
                itemIndex={weekIndex}
                addContent={this.addContent}
              />
            </td>
          </tr>
        </tbody>
      </>
    );
  }

  render() {
    const { weeks, objectives, learningEnvironments } = this.state;

    return (
      <>
        <div className="row row-custom">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="col-md-12 mb-4">
              <div className="table-wrapper-scroll-x my-custom-scrollbar rounded">
                <table className="table table4 no-border-top">
                  {this.ShowWeekHeader(weekIndex)}
                  {this.ShowWeekBody(weekIndex)}
                </table>
              </div>
            </div>
          ))}
        </div>
        {this.showAddWeekButton()}
        {/* The modal is attached to #modal-root in html but are tied to this React Component using a portal  */}
        {/* so that its props update when this component updates */}
        <ModalPortal>
          <WeekActivityModal
            objectives={objectives}
            learningEnvironments={learningEnvironments}
            weeks={weeks}
          />
        </ModalPortal>
      </>
    );
  }
}
