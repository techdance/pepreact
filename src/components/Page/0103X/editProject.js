import React from "react";

import ProjectPageContainer from "./ProjectPageContainer.js";
import { projectTypeList } from "../../../data/areaOfInterestProjectType.js";
import { disciplineList } from "../../../data/disciplines.js";

class EditProject extends React.Component {
  constructor(props) {
    // state holds the current state of array element from areaofinterest_list and the index in the array.
    //  so, state.areaOfInterest = areaofinterest_list[index]

    let current = new Date();

    super(props);

    //  project data object to be edited
    this.state = {
      projectType: projectTypeList[1].value, // initial value from list
      discipline: disciplineList[1].value, // initial value from list
      description: "This is a dummy description",
      name: "This is a dummy project name",
      programLength: "ongoing", // this is different from area of interest - can contain either "fixed" or "ongoing"
      startDate:
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDay(), // this is different from area of interest. but area of interest was halted because modal was re-designed
      endDate:
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDay(), // this is different from area of interest.
      created: false, // shows in the modal for area of interest
    };

    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    let project = this.state;

    // call Project Post API to save the current state of the project.
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    // let project = this.state;
    // project[field] = value;
    this.setState({ [field]: value });
  };

  render() {
    let project = this.state;
    return (
      <>
        <section className="wrap-profile">
          <div className="row row-custom">
            {/* <!-- Personal Information --> */}
            <div className="col-lg-12 mb-4">
              <div className="personal box box-border-radius box-shadow bg-white position-relative">
                <div className="inner-wrap mw-lg-50">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-book-title"></span>{" "}
                      Edit Project
                    </h2>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <ProjectPageContainer
                      project={project}
                      onChange={this.passChangeUp}
                    />

                    <div
                      className="d-flex justify-content-between mt-3 mb-3"
                      style={{ float: "right" }}
                    >
                      <div>
                        <button className="btn btn-grey btn-w-100 mr-2">
                          Cancel
                        </button>{" "}
                        <button
                          type="submit"
                          className="btn btn-blue btn-w-100"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- END COL --> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EditProject;
