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
import ShowBodySelectedFromList from "../../Shared/projectLab/ShowBodySelectedFromList";
import ShowBodySelectList from "../../Shared/projectLab/ShowBodySelectList.js";

import ModalPortal from "../../Shared/UI/ModalPortal.js";
import { ModuleActivityModal } from "../modals/certificateActivityModal.js";

export default class ProjectLabCertificateShowModules extends React.Component {
  constructor(props) {
    super(props);

    const { modules, objectives, learningEnvironments } = this.props;

    this.state = {
      modules: modules,
      objectives: objectives,
      learningEnvironments: learningEnvironments,
    };

    this.addModule = this.addModule.bind(this);
    this.removeModule = this.removeModule.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.addContent = this.addContent.bind(this);
    this.removeContent = this.removeContent.bind(this);

    this.ShowModuleHeader = this.ShowModuleHeader.bind(this);
    this.ShowModuleBody = this.ShowModuleBody.bind(this);

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

  addModule() {
    const { modules } = this.state;

    const newModule = {
      length: "1 Day",
      objective: [],
      learningEnvironment: [],
      activity: [],
      content: [],
    };

    modules.push(newModule);
    this.setState({ modules: modules });
  }

  removeModule(index) {
    let { modules } = this.state;

    modules = removeFromArray(modules, index);
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

  ShowModuleHeader(index, module) {
    // const { showModal } = this.props.showModal;
    return (
      <thead>
        <tr>
          <th className="title-head-th-week" scope="col">
            {"Module " + (index + 1) + ": " + module.length}
          </th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col" className="text-right">
            <a
              href="#0"
              className="btn-week-edit mr-1"
              data-week={index}
              data-target="#modalModule"
              data-toggle="modal"
            >
              <span className="icon-solid icon-edit color-blue-link"></span>
            </a>

            <a
              href="#0"
              className="btn-week-trash"
              onClick={(e) => this.removeModule(index)}
            >
              <span className="icon-solid icon-trash-alt color-blue-link"></span>
            </a>
          </th>
        </tr>
      </thead>
    );
  }

  showAddModuleButton() {
    return (
      <>
        {" "}
        <div className="col-md-12 text-right mt-3">
          <a
            href="#0"
            className="btn btn-blue btn-w-100"
            id="add-new-module"
            onClick={(e) => this.addModule(e)}
          >
            ADD NEW MODULE
          </a>
        </div>
      </>
    );
  }

  ShowModuleBody(moduleIndex) {
    const { objectives, learningEnvironments, modules } = this.state;
    const module = modules[moduleIndex];

    const ShowModuleBodyHeader = () => {
      return (
        <tr>
          <th className="title-row-th text-center" scope="row" width="25%">
            Certificate Objective
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
      );
    };

    return (
      <tbody>
        {ShowModuleBodyHeader()}
        <tr>
          <td className="text-center" valign="top">
            <ShowBodySelectedFromList
              itemList={module.objective}
              itemIndex={moduleIndex}
              removeItem={this.removeObjective}
            />
          </td>
          <td className="text-center" valign="top">
            <ShowBodySelectedFromList
              itemList={module.learningEnvironment}
              itemIndex={moduleIndex}
              removeItem={this.removeLearningEnvironment}
            />
          </td>
          <td className="text-center" align="left" valign="top">
            <ShowBodyActivitiesList
              activities={module.activity}
              itemIndex={moduleIndex}
              removeActivity={this.removeActivity}
              handleChange={this.handleChange}
            />
          </td>
          <td className="text-center" align="center" valign="top">
            <ShowBodyContentList
              contents={module.content}
              itemIndex={moduleIndex}
              removeContent={this.removeContent}
              handleChange={this.handleChange}
            />
          </td>
        </tr>
        <tr>
          <td className="text-center" valign="top">
            <ShowBodySelectList
              itemList={objectives}
              itemIndex={moduleIndex}
              clickCallBack={this.handleObjectiveClick}
            />
          </td>
          <td className="text-center" valign="top">
            <ShowBodySelectList
              itemList={learningEnvironments}
              itemIndex={moduleIndex}
              clickCallBack={this.handleLearningEnvironmentClick}
            />
          </td>
          <td className="text-center" valign="top">
            <ShowBodyAddActivity
              itemIndex={moduleIndex}
              addActivity={this.addActivity}
            />
          </td>
          <td className="text-center" valign="top">
            <ShowBodyAddContent
              itemIndex={moduleIndex}
              addContent={this.addContent}
            />
          </td>
        </tr>
      </tbody>
    );
  }

  render() {
    const { modules, objectives, learningEnvironments } = this.state;

    return (
      <>
        <div className="row row-custom">
          {modules.map((module, moduleIndex) => (
            <div className="col-md-12 mb-4" key={moduleIndex}>
              <div className="table-wrapper-scroll-x my-custom-scrollbar rounded">
                <table className="table table4 no-border-top">
                  {this.ShowModuleHeader(moduleIndex, module)}
                  {this.ShowModuleBody(moduleIndex)}
                </table>
              </div>
            </div>
          ))}

          {this.showAddModuleButton()}
          {/* The modal is attached to modal-root in html but are tied to this React Component using a portal  */}
          {/* so that its props update when this component updates */}
          <ModalPortal>
            <ModuleActivityModal
              modules={modules}
              objectives={objectives}
              learningEnvironments={learningEnvironments}
            />
          </ModalPortal>
        </div>
      </>
    );
  }
}
