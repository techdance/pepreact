import React from "react";
import Select from "react-select";
import { ChangeVideoImage, ChangeVideoButton } from "../Shared/changeVideo.js";
import InternationalExperience from "./editProfileProfessionalBioIntlExperience.js";

import { disciplineList } from "../../../data/disciplines.js";

class EditProfessionalBioAreaofExpertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaOfExpertise: this.props.areaOfExpertise,
      fieldName: this.props.fieldName,
      holdAreaOfExpertise: {
        name: "",
        iconValue: "plus",
      },
    };

    let { areaOfExpertise } = this.state;

    // structure to maintain status of areaofexpertise entry field
    // iconValue repesent whether the oranga icon is a plus or minus
    //  name contains the last value from the areaOfExpertise passed as props to the class
    //  so that the informaion is retained if user clicks "minus" on a valid AOE and wants it back.

    if (areaOfExpertise) {
      this.state.holdAreaOfExpertise = {
        name: areaOfExpertise,
        iconValue: "minus",
      };
    }

    // initialize states to match current values of links in the "professionalBio" data object.

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    // let {areaOfExpertise, fieldName } = this.state;
    // areaOfExpertise[name] = value;
    this.setState({ areaOfExpertise: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange(name, value);
  };

  handleClick = (event) => {
    // function that handles clicks on the icons next to certificate fields

    let { holdAreaOfExpertise, areaOfExpertise, fieldName } = this.state;

    event.preventDefault();

    //  if the current icon in a plus - make it minus (and then show text input field where this anchor is setup)
    //  if the current icon is a minus - set link to a null string (so it won't show in ShowProfle) and set icon to plus
    if (holdAreaOfExpertise.iconValue === "minus") {
      holdAreaOfExpertise = { name: areaOfExpertise, iconValue: "plus" };
      areaOfExpertise = "";
    } else {
      areaOfExpertise = holdAreaOfExpertise.name;
      holdAreaOfExpertise.iconValue = "minus";
    }

    this.setState({ areaOfExpertise: areaOfExpertise });
    this.setState({ holdAreaOfExpertise: holdAreaOfExpertise });
    /// pass current state up to parent to propogate changes
    this.props.onChange(fieldName, areaOfExpertise);
  };

  render() {
    let { areaOfExpertise, fieldName, holdAreaOfExpertise } = this.state;

    return (
      <div class="d-flex">
        <a
          href="#0"
          id={"area-" + fieldName}
          class="cl-asset-type-d cl-hover-black font20 mr-1"
          onClick={this.handleClick}
        >
          {holdAreaOfExpertise.iconValue === "minus" ? (
            <i class="fas fa-minus-circle"></i>
          ) : (
            <i class="fas fa-plus-circle"></i>
          )}
        </a>
        {holdAreaOfExpertise.iconValue === "minus" ? (
          <input
            type="text"
            name={fieldName}
            value={areaOfExpertise}
            class="input"
            onChange={this.handleChange}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

class EditProfileProfessionalBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.professionalBio;

    // initialize states to match current values of links in the "professionalBio" data object.

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let professionalBio = this.state;
    professionalBio[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("professionalBio", professionalBio);
  };

  handleChangeSingleSelect = (field, selected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event
    const { value } = selected;

    //  set local state
    let professionalBio = this.state;
    professionalBio[field] = value;
    this.setState({ [field]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("professionalBio", professionalBio);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let professionalBio = this.state;
    professionalBio[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("professionalBio", professionalBio);
  };

  render() {
    const {
      introVideo,
      discipline,
      areaOfExpertise1,
      areaOfExpertise2,
      areaOfExpertise3,
      internationalExperience,
      bio,
      cvLink,
    } = this.state;

    return (
      <>
        <div class="col-lg-6 mb-4">
          <div class="profesional box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular icon-user-secret"></span>{" "}
                  Professional Bio
                </h2>
              </div>
              <div class="box-middle">
                <div class="row row-custom mb-4">
                  <div class="col-md-12">
                    <h3 class="mb-3">
                      <span class="icon-regular icon-camcorder pr-3"></span>{" "}
                      Introduction Video
                    </h3>
                  </div>

                  <ChangeVideoImage introVideo={introVideo} />
                  <div class="col-md-6">
                    <ChangeVideoButton />
                  </div>
                </div>
                <div class="row row-custom mb-4">
                  <div class="col-md-12">
                    <div class="content-icon position-relative mb-4">
                      <div>
                        <span class="icon-regular icon-shield-check"></span>{" "}
                        <strong>Discipline</strong>
                      </div>
                      <div class="form-group ml-4">
                        <Select
                          options={disciplineList}
                          className="inputSelect"
                          classNamePrefix="rs"
                          onChange={(e) =>
                            this.handleChangeSingleSelect("discipline", e)
                          }
                          value={{
                            value: discipline,
                            label: discipline,
                          }}
                          isSearchable="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-4">
                      <h4 class="mb-3">
                        <span class="icon-regular icon-user-ninja"></span> Areas
                        Of Expertise
                      </h4>
                      <div id="area-1" class="form-group area pl-4">
                        <label>Area of Expertise &ndash; 1</label>
                        <EditProfessionalBioAreaofExpertise
                          areaOfExpertise={areaOfExpertise1}
                          fieldName="areaOfExpertise1"
                          onChange={this.passChangeUp}
                        />
                      </div>
                      <div id="area-2" class="form-group area pl-4">
                        <label>Area of Expertise &ndash; 2</label>
                        <EditProfessionalBioAreaofExpertise
                          areaOfExpertise={areaOfExpertise2}
                          fieldName="areaOfExpertise2"
                          onChange={this.passChangeUp}
                        />
                      </div>
                      <div id="area-3" class="form-group area pl-4">
                        <label>Area of Expertise &ndash; 3</label>
                        <EditProfessionalBioAreaofExpertise
                          areaOfExpertise={areaOfExpertise3}
                          fieldName="areaOfExpertise3"
                          onChange={this.passChangeUp}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-custom">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="position-relative">
                        <span class="icon-regular icon-globe-stand"></span>{" "}
                        International Experience
                        <i
                          class="fa fa-info-circle cl-blue icon-info"
                          aria-hidden="true"
                        >
                          <span class="info-toltip">
                            Please select the range that most accurately matches
                            your international skills, experience, and studies.
                          </span>
                        </i>
                      </label>
                      <InternationalExperience
                        inernationalExperience={internationalExperience}
                        onChange={this.passChangeUp}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group w-100">
                      <label>Link Your CV</label>
                      <input
                        type="url"
                        name="cLink"
                        value={cvLink}
                        class="input"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="row row-custom">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>
                        <span class="icon-regular icon-book-user"></span> Bio
                      </label>
                      <textarea
                        className="input textarea"
                        style={{ minHeight: "100px" }}
                        rows="6"
                        name="bio"
                        value={bio}
                        onChange={this.handleChange}
                      ></textarea>
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

export default EditProfileProfessionalBio;
