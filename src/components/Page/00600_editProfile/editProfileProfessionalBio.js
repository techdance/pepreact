import React from "react";
import Select from "react-select";
import { ChangeVideoImage, ChangeVideoButton } from "../Shared/changeVideo.js";
import InternationalExperience from "./editProfileProfessionalBioIntlExperience.js";

import { disciplineList } from "../../../data/disciplines.js";
import { removeFromArray } from "../Shared/usefulFunctions.js";

const maxAreasOfInterest = 3;

class EditProfessionalBioAreaofExpertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areasOfExpertise: this.props.areasOfExpertise,
    };

    // initialize states to match current values of links in the "professionalBio" data object.
    this.handleChange = this.handleChange.bind(this);
    this.removeAreaofExpertise = this.removeAreaofExpertise.bind(this);
    this.addAreaofExpertise = this.addAreaofExpertise.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    let { areasOfExpertise } = this.state;
    areasOfExpertise[name] = value;
    this.setState({ areasOfExpertise: areasOfExpertise });
    // pass current state up to parent to propogate changes
    this.props.onChange("areasOfExpertise", areasOfExpertise);
  };

  addAreaofExpertise = (event) => {
    let { areasOfExpertise } = this.state;

    if (areasOfExpertise.length < maxAreasOfInterest) {
      areasOfExpertise.push("");
      // pass current state up to parent to propogate changes
      this.props.onChange("areasOfExpertise", areasOfExpertise);
    }
  };

  removeAreaofExpertise = (index, event) => {
    let { areasOfExpertise } = this.state;
    areasOfExpertise = removeFromArray(areasOfExpertise, index);
    this.setState({ areasOfExpertise: areasOfExpertise });

    /// pass current state up to parent to propogate changes
    this.props.onChange("areasOfExpertise", areasOfExpertise);
  };

  render() {
    let { areasOfExpertise } = this.state;

    return (
      <div className="col-md-12">
        <div className="mb-4">
          <h4 className="mb-3">
            <span className="icon-regular icon-user-ninja"></span>
            Areas Of Expertise
            <a
              href="#0"
              className="cl-asset-type-d cl-hover-black font20 mr-1"
              onClick={this.addAreaofExpertise}
            >
              <i class="fas fa-plus-circle"></i>
            </a>
          </h4>

          {areasOfExpertise.map((aoe, index) => (
            <div id={"area-" + (index + 1)} className="form-group area pl-4">
              {/* <label>Area of Expertise &ndash; 1</label> */}
              <div className="d-flex">
                <a
                  href="#0"
                  id={"area-" + index}
                  className="cl-asset-type-d cl-hover-black font20 mr-1"
                  onClick={(event) => this.removeAreaofExpertise(index, event)}
                >
                  <i className="fas fa-minus-circle"></i>
                </a>

                <input
                  type="text"
                  name={index}
                  value={aoe}
                  className="input"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          ))}
        </div>
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
      areasOfExpertise,
      internationalExperience,
      bio,
      cvLink,
    } = this.state;

    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="profesional box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-user-secret"></span>{" "}
                  Professional Bio
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom mb-4">
                  <div className="col-md-12">
                    <h3 className="mb-3">
                      <span className="icon-regular icon-camcorder pr-3"></span>{" "}
                      Introduction Video
                    </h3>
                  </div>

                  <ChangeVideoImage introVideo={introVideo} />
                  <div className="col-md-6">
                    <ChangeVideoButton />
                  </div>
                </div>
                <div className="row row-custom mb-4">
                  <div className="col-md-12">
                    <div className="content-icon position-relative mb-4">
                      <div>
                        <span className="icon-regular icon-shield-check"></span>{" "}
                        <strong>Discipline</strong>
                      </div>
                      <div className="form-group ml-4">
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

                  <EditProfessionalBioAreaofExpertise
                    areasOfExpertise={areasOfExpertise}
                    onChange={this.passChangeUp}
                  />
                </div>
                <div className="row row-custom">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="position-relative">
                        <span className="icon-regular icon-globe-stand"></span>{" "}
                        International Experience
                        <i
                          className="fa fa-info-circle cl-blue icon-info"
                          aria-hidden="true"
                        >
                          <span className="info-toltip">
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
                  <div className="col-md-6">
                    <div className="form-group w-100">
                      <label>Link Your CV</label>
                      <input
                        type="url"
                        name="cLink"
                        value={cvLink}
                        className="input"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-custom">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>
                        <span className="icon-regular icon-book-user"></span>{" "}
                        Bio
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
