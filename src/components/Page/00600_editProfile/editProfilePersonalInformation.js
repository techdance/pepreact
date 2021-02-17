import React from "react";
import Select from "react-select";
import ChangeImage from "../Shared/changeImage.js";

import { prefixList } from "../../../data/prefixList.js";
import UserService from '../../../services/User';
import { prefix } from "@fortawesome/free-solid-svg-icons";

class EditProfilePersonalInformationstatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const { value } = event.target;

    //  set local state
    let status = this.state;
    status = value;
    this.setState({ status: status });

    /// pass current state up to parent to propogate changes
    this.props.onChange("status", status);
  }

  componentDidUpdate(prevProps){
    if (this.state?.status !== prevProps?.status) {
      this.setState({ status: prevProps?.status })
  }
  }



  render() {

    let { styleProp } = this.props;
    let { status } = this.state;
    return (
      <>
      <label className="d-inline mr-2">Online Status</label>
        <div class="form-check-inline">
          <label class="form-check-label d-flex text-nowrap">
            <input type="radio" class="form-check-input"  name="status"  
              checked={status}
              onChange={this.onChangeValue}
            id="Public" style={styleProp.remembarStyle} value="1"/> Public 
          </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label d-flex text-nowrap">
            <input type="radio" class="form-check-input"  name="status"  id="private"  
             checked={!status}
             onChange={this.onChangeValue}
            style={styleProp.remembarStyle} value="0" />Private
          </label>
        </div>
      </>
    );
  }
}

class EditProfilePersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    let { personalInformation= {} } = this.props;
    this.state = {...personalInformation };

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
    personalInformation[field] = ['status'].includes(field)? Boolean(Number(value)) : value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("personalInformation", personalInformation);

  };


  componentWillReceiveProps(nextProps){
    if (this.state?.name !== nextProps?.personalInformation?.name) {
        this.setState({ ...nextProps?.personalInformation })
    }
  }



  render() {
    const {
      thoughts,
      status
    } = this.state || {
      thoughts:"",
      status: true,
    };

    let {   
      prefix,
      firstName,
      middleName,
      lastName,
      userName, department, position } = this.props?.userInfo;

    let {collaboratedUserProfileimage, reflashImage } = this.props;

    const imageSrc = collaboratedUserProfileimage?.blobData;
    const disable = {
      "pointer-events": "none",
      "color": "#ccc"
    };

    let style = {
      remembarStyle: {
        "position": "relative",
        "opacity": "1",
        "display": "inline-block",
        "vertical-align": "middle",
        "width": "15px"
      },
    }

    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="personal box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-rela4a03c658a0aa506e3954128968956dc22c124a166f4388ef1919e6381f391f3ftive">
                <h2 className="box-subhead">
                  <span className="icon-regular icon-user-circle"></span>
                  Personal Information
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-6">
                    <div className="bg-profile no-bg">
                      <ChangeImage image={imageSrc} reflashImage={reflashImage} alt="profile Picture" />

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
                          value: prefix,
                          label: prefix,
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
                        value={position}
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
                    name="thoughts"
                    value={thoughts}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <EditProfilePersonalInformationstatus
                  status={status}
                  onChange={this.passChangeUp}
                  styleProp={style}
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


