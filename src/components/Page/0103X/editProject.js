import React from "react";

import ProjectFormPage from "./ProjectFormPage.js";
import Project from "./Project.js";

class EditProject extends React.Component {
  constructor(props) {
    let project = new Project();
    let id = "1"; // dummy id to use to retrive project from db

    super(props);

    //  project data object to be edited
    project.getProject(id);
    this.state = {
      id: id,
      projectType: project.projectType,
      discipline: project.discipline,
      description: project.description,
      name: project.name,
      programLength: project.programLength,
      startDate: project.startDate,
      endDate: project.endDate,
      created: project.created,
    };

    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    let project = new Project();
    // preventing the url called again with query string parameters which also reloads the components
    event.preventDefault();

    // set current state to Project object and then call Project Post API to update project object in the db.
    project.setProject(this.state);
    project.updateProject(this.state.id);
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
