import React from "react";
import Select from "react-select";

import ChangeImage from "../Shared/changeImage.js";

import { institutionTypes } from "../../../data/institution.js"; // TODO read this object from backend API to close the loop
import { languageList } from "../../../data/languages.js"; // TODO read this object from backend API to close the loop

class Edit_InstitutionOverview_Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.Overview;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (typeSelected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes
    //  this function is called by the Select component. the argument is an array of objects in the format value: label:

    // get user input change and convert to format used in institution data object
    let typeList = [];
    typeSelected.map((institutionType, index) =>
      typeList.push(institutionType.value)
    );

    // set local state
    this.setState({ ["type"]: typeList });

    // pass current state up to parent to propogate changes
    let Overview = this.state;
    Overview["type"] = typeList;
    this.props.onChange("Overview", Overview);
  };

  render() {
    const { type } = this.state;

    // object format needed for Select component in react-select is an array of objects using value: label:
    let typeSelected = [];
    type.map((institutionType, index) =>
      typeSelected.push({
        value: institutionType,
        label: institutionType,
      })
    );

    return (
      <>
        <div className="col-md-3">
          <div className="form-group mb-2">
            <label>Type</label>
            <Select
              isMulti
              name="type"
              options={institutionTypes}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleChange}
              value={typeSelected}
            />
          </div>
        </div>
      </>
    );
  }
}

class Edit_InstitutionOverview_OtherLanguages extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.Overview;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (otherLanguagesSelected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes
    //  this function is called by the Select component. the argument is an array of objects in the format value: label:

    // get user input change and convert to format used in institution data object
    let otherLanguages = [];
    otherLanguagesSelected.map((otherLanguageSelected, index) =>
      otherLanguages.push(otherLanguageSelected.value)
    );

    // set local state
    this.setState({ ["otherLanguages"]: otherLanguages });

    // pass current state up to parent to propogate changes
    let Overview = this.state;
    Overview["otherLanguages"] = otherLanguages;
    this.props.onChange("Overview", Overview);
  };

  render() {
    const { otherLanguages } = this.state;

    // object format needed for Select component in react-select is an array of objects using value: label:
    let otherLanguagesSelected = [];
    otherLanguages.map((otherLanguage, index) =>
      otherLanguagesSelected.push({
        value: otherLanguage,
        label: otherLanguage,
      })
    );

    return (
      <>
        <div className="form-group mb-2">
          <label>Other Languages</label>
          <Select
            isMulti
            name="otherLanguages"
            options={languageList}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={this.handleChange}
            value={otherLanguagesSelected}
          />
        </div>
      </>
    );
  }
}

class EditInstitutionOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.Overview;

    // initialize icon states to match current values of links in the "Overview" data object.
    //  if the link is an empty string "", then icon is plus otherwise is minus.
    this.state.facebookLink
      ? (this.state.fbLinkIcon = "minus")
      : (this.state.fbLinkIcon = "plus");

    this.state.twitterLink
      ? (this.state.twLinkIcon = "minus")
      : (this.state.twLinkIcon = "plus");

    this.state.instagramLink
      ? (this.state.igLinkIcon = "minus")
      : (this.state.igLinkIcon = "plus");

    this.state.linkedinLink
      ? (this.state.liLinkIcon = "minus")
      : (this.state.liLinkIcon = "plus");

    this.state.youtubeLink
      ? (this.state.ytLinkIcon = "minus")
      : (this.state.ytLinkIcon = "plus");

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.editSocialMediaLinks = this.editSocialMediaLinks.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let Overview = this.state;
    Overview[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("Overview", Overview);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let Overview = this.state;
    Overview[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("Overview", Overview);
  };

  handleClick = (linkName, iconName, iconValue, event) => {
    // function that handles clicks on the social media icons

    event.preventDefault();

    //  if the current icon in a plus - make it minus (and then show text input field where this anchor is setup)
    //  if the current icon is a minus - set link to a null string (so it won't show in ShowProfle) and set icon to plus
    if (iconValue === "plus") {
      this.setState({ [iconName]: "minus" });
    } else {
      // this.setState({ [linkName]: "" });
      this.setState({ [iconName]: "plus" });
    }
  };

  editSocialMediaLinks = (props) => {
    // handles the orange "plus/minus" icon behavior in front of social media links.
    //  this.state contains a reference to the data object "institution" which contains the values for the social media links in the "Overview" object.
    //  if the link value is an empty string "", then the link icon does not show in the ShowInstitutionProfile component.
    //  this.state also contains the current state of the icon for each social media link.
    //  if the icon shows "minus" and is clicked, then it is switched to plus, the link set to an empty string and the text input is removed.
    //  if the icon shows "plus" and is clicked then it is switched to minus and the text input box is shown.

    const { linkName, iconName, linkValue, iconValue } = props;

    return (
      <div className="d-flex align-items-center">
        <a
          href="#0"
          className="color-orange font20 mr-1"
          // handle different outcomes based on whether current icon is a plus or minus - see handleClick function definition.
          onClick={(e) => this.handleClick(linkName, iconName, iconValue, e)}
        >
          {/* show icon based on current state */}
          {iconValue === "minus" ? (
            <i className="fas fa-minus-circle"> </i>
          ) : (
            <i className="fas fa-plus-circle"> </i>
          )}
        </a>
        {/* if icon is a minus, then show input field otherwise don't */}
        {iconValue === "minus" ? (
          <input
            type="text"
            name={linkName}
            value={linkValue}
            onChange={this.handleChange}
            className="input"
          />
        ) : (
          <></>
        )}
      </div>
    );
  };

  render() {
    const {
      description1,
      foundedYear,
      academicCalendar,
      type,
      primaryLanguage,
      otherLanguages,
      president,
      employees,
      alumni,
      image,
      facebookLink,
      twitterLink,
      instagramLink,
      linkedinLink,
      youtubeLink,
    } = this.state;

    return (
      <>
        <section className="wrap-institution">
          <div className="row row-custom ">
            <div className="col-lg-12 mb-4">
              <div className="personal box box-border-radius box-shadow bg-white position-relative">
                <div className="inner-wrap">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-school"></span>
                      Institution Overview
                    </h2>
                  </div>
                  <div className="box-middle">
                    <div className="row row-custom">
                      <div className="col-md-9">
                        <div className="form-group mb-3">
                          <textarea
                            className="input textarea"
                            rows="6"
                            name="description1"
                            value={description1}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>Founded</label>
                              <input
                                type="text"
                                name="foundedYear"
                                value={foundedYear}
                                className="input"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Academic Calendar</label>
                              <input
                                type="text"
                                name="academicCalendar"
                                value={academicCalendar}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                          </div>

                          <Edit_InstitutionOverview_Type
                            Overview={this.state}
                            onChange={this.props.onChange}
                          />

                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>Language</label>
                              <input
                                type="text"
                                name="primaryLanguage"
                                value={primaryLanguage}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>

                            <Edit_InstitutionOverview_OtherLanguages
                              Overview={this.state}
                              onChange={this.props.onChange}
                            />
                          </div>
                          <div className="col-md-3">
                            <div className="form-group mb-2">
                              <label>President</label>
                              <input
                                type="text"
                                name="president"
                                value={president}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Total Employees</label>
                              <input
                                type="text"
                                name="employees"
                                value={employees}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Alumni</label>
                              <input
                                type="text"
                                name="alumni"
                                value={alumni}
                                onChange={this.handleChange}
                                className="input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 img-resp">
                        {/* <img src={image} className="img-responsive" /> */}
                        <ChangeImage image={image} />
                      </div>
                    </div>
                  </div>
                  <div className="box-top position-relative">
                    <h2 className="box-subhead">
                      <span className="icon-regular icon-share"></span>Social
                      Media
                    </h2>
                  </div>
                  <div className="box-middle">
                    <div className="row row-custom">
                      <div className="col-md-4">
                        <div className="form-group mb-2">
                          <label>Facebook</label>
                          <this.editSocialMediaLinks
                            linkName="facebookLink"
                            iconName="fbLinkIcon"
                            linkValue={facebookLink}
                            iconValue={this.state.fbLinkIcon}
                          />
                        </div>
                        <div className="form-group mb-2">
                          <label>Twitter</label>
                          <this.editSocialMediaLinks
                            linkName="twitterLink"
                            iconName="twLinkIcon"
                            linkValue={twitterLink}
                            iconValue={this.state.twLinkIcon}
                          />
                        </div>
                        <div className="form-group mb-2">
                          <label>Instagram</label>

                          <this.editSocialMediaLinks
                            linkName="instagramLink"
                            iconName="igLinkIcon"
                            linkValue={instagramLink}
                            iconValue={this.state.igLinkIcon}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-2">
                          <label>LinkedIn</label>

                          <this.editSocialMediaLinks
                            linkName="linkedinLink"
                            iconName="liLinkIcon"
                            linkValue={linkedinLink}
                            iconValue={this.state.liLinkIcon}
                          />
                        </div>
                        <div className="form-group mb-2">
                          <label>YouTube</label>

                          <this.editSocialMediaLinks
                            linkName="youtubeLink"
                            iconName="ytLinkIcon"
                            linkValue={youtubeLink}
                            iconValue={this.state.ytLinkIcon}
                          />
                        </div>

                        {/* not sure the purpose of the blank social media link or how it works */}
                        {/* <div className="form-group mb-2 mt-4">
                          <div className="d-flex align-items-center">
                            <a href="#0" className="color-orange font20 mr-1">
                              <i className="fas fa-plus-circle"></i>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EditInstitutionOverview;
