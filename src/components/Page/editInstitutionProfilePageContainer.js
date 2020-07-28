import React from "react";

import EditInstitutionOverview from "./editInstitutionProfileOverview.js";
import EditInstitutionContactInfo from "./editInstitutionProfileContactInfo.js";
import EditInstitutionStudentBodyInfo from "./editInstitutionProfileStudentBodyInfo.js";
import EditInstitutionFacultyInfo from "./editInstitutionProfileFacultyInfo.js";
import EditInstitutionAcademic from "./editInstitutionProfileAcademic.js";

import { institution } from "../../data/institution.js";

class EditInstitutionProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = institution;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let institution = this.state;
    institution[name] = value;
    this.setState({ institution });

    // This is the parent component so instead of passing change up just update the parent object state.
    this.passChangeUp("institution", institution);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    let institution = this.state;
    institution[field] = value;
    this.setState({ institution });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit current state");

    // this.state contains the current revised version of the institution object so should store to institution data.
  };

  render() {
    const {
      Overview,
      ContactInfo,
      StudentBodyInfo,
      FacultyInfo,
      Academic,
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <EditInstitutionOverview
            Overview={Overview}
            onChange={this.passChangeUp}
          />

          <section className="wrap-profile">
            <div className="row row-custom ">
              <div className="col-lg-12">
                <div className="row row-custom sortable">
                  <EditInstitutionContactInfo
                    ContactInfo={ContactInfo}
                    onChange={this.passChangeUp}
                  />
                </div>
                <EditInstitutionStudentBodyInfo
                  StudentBodyInfo={StudentBodyInfo}
                  onChange={this.passChangeUp}
                />
                <EditInstitutionFacultyInfo
                  FacultyInfo={FacultyInfo}
                  onChange={this.passChangeUp}
                />

                {/* "Save" button is buried in this last section. Not sure why. */}
                <EditInstitutionAcademic
                  Academic={Academic}
                  onChange={this.passChangeUp}
                />
              </div>
            </div>
          </section>
        </form>
      </>
    );
  }
}

export default EditInstitutionProfileForm;
