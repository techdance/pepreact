import React from "react";
import Select from "react-select";

import ChangeDocument from "./changeDocument.js";

import { projectTypeList } from "../../../data/areaOfInterestProjectType.js";
import { disciplineList } from "../../../data/disciplines.js";

class ProjectPageContainer extends React.Component {
  constructor(props) {
    // state holds the current state of array element from areaofinterest_list and the index in the array.
    //  so, state.areaOfInterest = areaofinterest_list[index]

    super(props);

    this.state = this.props.project;

    this.handleChangeSingleSelect = this.handleChangeSingleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    // let project = this.state;
    // project[name] = value;
    this.setState({ name: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange(name, value);
  };

  handleChangeSingleSelect = (field, selected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event
    const { value } = selected;

    //  set local state
    // let project = this.state;
    // project[field] = value;
    this.setState({ [field]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange(field, value);
  };

  render() {
    const {
      projectType,
      description,
      discipline,
      name,
      programLength,
      startDate,
      endDate,
      created,
    } = this.state;

    console.log("project type: " + projectType);

    return (
      <>
        <div className="box-middle">
          <div className="form-group">
            <label>Project Type</label>
            <Select
              options={projectTypeList}
              className="inputSelectModal"
              // className="form-control"
              classNamePrefix="rsModal"
              onChange={(e) => this.handleChangeSingleSelect("projectType", e)}
              value={{
                value: projectType,
                label: projectType,
              }}
              isSearchable="true"
            />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="4"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Discipline:</label>

            <Select
              options={disciplineList}
              className="inputSelectModal"
              classNamePrefix="rsModal"
              onChange={(e) => this.handleChangeSingleSelect("discipline", e)}
              value={{
                value: discipline,
                label: discipline,
              }}
              isSearchable="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="discipline2">Discipline 2</label>
            <input
              type="text"
              id="discipline2"
              className="form-control"
              value=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="discipline3">Discipline 3</label>
            <input
              type="text"
              id="discipline3"
              className="form-control"
              value=""
            />
          </div>

          <div className="form-group pt-2 pb-2">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="ongoing"
                className="form-check-input"
                name="programLength"
                value="ongoing"
                onChange={this.handleChange}
                checked={programLength === "ongoing" && true}
              />
              <label className="form-check-label">Ongoing</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="fixed"
                className="form-check-input"
                name="programLength"
                value="fixed"
                onChange={this.handleChange}
                checked={programLength === "fixed" && true}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Fixed
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="startDate">Start Date</label>
                <div className="wrap-input-calendar">
                  <input
                    type="text"
                    id="startDate"
                    className="form-control
                              icon-cal"
                    name="startDate"
                    value={startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="discipline3">End Date</label>
                <div className="wrap-input-calendar">
                  <input
                    type="text"
                    id="endDate"
                    className="form-control
                              icon-cal"
                    name="endDate"
                    value={endDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group pt-2 pb-2">
            <ChangeDocument />
          </div>
        </div>
      </>
    );
  }
}

export default ProjectPageContainer;
