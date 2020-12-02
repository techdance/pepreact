import React from "react";

import Project from "./Project.js";
import ProjectFormPage from "./ProjectFormPage.js";

class CreateProject extends React.Component {
  constructor(props) {
    // state holds the current state of array element from areaofinterest_list and the index in the array.
    //  so, state.areaOfInterest = areaofinterest_list[index]

    let project = new Project();

    super(props);

    //  project data object to be added
    this.state = project;

    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    let project = new Project();
    // preventing the url called again with query string parameters which also reloads the components
    event.preventDefault();

    // set current state to Project object and then call Project Post API to save project object to the db.
    project.setProject(this.state);
    project.addProject(); // returns the id of the save object
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
            <div className="col-lg-12 mb-4">
              <div className="personal box box-border-radius box-shadow bg-white position-relative">
                <div className="inner-wrap mw-lg-50">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-book-title"></span>{" "}
                      Project Information
                    </h2>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <ProjectFormPage
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
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End of Col */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CreateProject;
