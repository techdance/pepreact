import React from "react";
import Select from "react-select";
import ChangeImage from "../Shared/changeImage.js";

import { prefixList } from "../../../data/prefixList.js";
import UserService from '../../../services/User';

class EditProfilePersonalInformationOnlineStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const { value } = event.target;

    //  set local state
    let onlineStatus = this.state;
    onlineStatus = value;
    this.setState({ onlineStatus: onlineStatus });

    /// pass current state up to parent to propogate changes
    this.props.onChange("onlineStatus", onlineStatus);
  }

  render() {
    return (
      <>
      <label className="d-inline mr-2">Online Status</label>
        <div className="form-group">
        {/* <label className="d-inline mr-2" for="Public">Public</label>
          <input
            type="radio"
            name="onlineStatus"
            value="public"
            // checked={this.state.onlineStatus === "public" ? true : false}
            onChange={this.onChangeValue}
            id="Public"
            // checked={true}
          /> */}
          {/* <label className="d-inline mr-2" for="private">private</label> */}
          {/* <input
            type="radio"
            name="onlineStatus"
            value="private"
            // className="ml-2"
            // checked={this.state.onlineStatus === "private" ? true : false}
            onChange={this.onChangeValue}
            id="private"
          /> */}
        <label for="male">Male</label>
        <input class="form-check-input" type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
        <input  class="form-check-input" type="radio" id="other" name="gender" value="other" />



        </div>
      </>
    );
  }
}

class EditProfilePersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.personalInformation;

    // initialize icon states to match current values of links in the "Overview" data object.
    //  if the link is an empty string "", then icon is plus otherwise is minus.

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleChangeSingleSelect = this.handleChangeSingleSelect.bind(this);
  }

  handleChangeSingleSelect = (field, selected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event
    const { value } = selected;

    //  set local state
    let personalInformation = this.state;
    personalInformation[field] = value;
    this.setState({ [field]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("personalInformation", personalInformation);
  };

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let personalInformation = this.state;
    personalInformation[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("personalInformation", personalInformation);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let personalInformation = this.state;
    personalInformation[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("personalInformation", personalInformation);
  };

  render() {
    const {
      namePrefix,
      firstName,
      lastName,
      title,
      image,
      personalMessage,
      department,
      onlineStatus,
    } = this.state;

    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="personal box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-user-circle"></span>
                  Personal Information
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-6">
                    <div className="bg-profile no-bg">
                      <ChangeImage image="images/Gordon-camera.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Prefix</label>
                      <Select
                        options={prefixList}
                        className="inputSelect"
                        classNamePrefix="rs"
                        // onChange={(e) =>
                        //   this.handleChangeSingleSelect("namePrefix", e)
                        // }
                        value={{
                          value: namePrefix,
                          label: namePrefix,
                        }}
                        isSearchable="true"
                        isDisabled={true}
                      />
                    </div>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        className="input"
                        // onChange={this.handleChange}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        className="input"
                        // onChange={this.handleChange}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Position</label>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        className="input"
                        // onChange={this.handleChange}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Department</label>
                      <input
                        type="text"
                        name="department"
                        value={department}
                        className="input"
                        // onChange={this.handleChange}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-bottom">
                <div className="form-group mb-3">
                  <label>
                    <span className="icon-regular icon-user-cog"></span> My
                    Thoughts
                  </label>
                  <textarea
                    className="input textarea"
                    rows="3"
                    name="personalMessage"
                    value={personalMessage}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <EditProfilePersonalInformationOnlineStatus
                  onlineStatus={onlineStatus}
                  onChange={this.passChangeUp}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditProfilePersonalInformation;


