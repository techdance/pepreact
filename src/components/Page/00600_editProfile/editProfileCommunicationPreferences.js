import React from "react";
import Select from "react-select";

import { languageList } from "../../../data/languages.js";

class EditProfileCommunicationPreferencesstatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    // toggle if true then false and if false then true
    if (this.state.status) {
      this.setState({ status: false });
      this.props.onChange("status", false);
    } else {
      this.setState({ status: true });
      this.props.onChange("status", true);
    }
  }

  render() {
    let status = this.state;

    return (
      <>
        <div className="col-md-6">
          <div className="form-group" style={this.props.styleProp.checkGroup}>
            <label>&nbsp;</label>

            <input
              name="status"
              type="checkbox"
              value={status.status}
              checked={status.status}
              onChange={this.onChangeValue}
              style={this.props.styleProp.checkBox}
            />

            <span className="font-weight-bold" style={ this.props.styleProp.checkRadio}> Receive SMS Notifications</span>
            <i
              className="fa fa-info-circle icon-info cl-blue"
              aria-hidden="true"
            >
              <span className="info-toltip" >
                Standard messaging rates may apply.
              </span>
            </i>
          </div>
        </div>
      </>
    );
  }
}

class EditProfileCommunicationPreferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.communicationPreferences;

    // initialize states to match current values of links in the "communicationPreferences" data object.

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let communicationPreferences = this.state;
    communicationPreferences[name] = value;
    this.setState({ [name]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("communicationPreferences", communicationPreferences);
  };

  handleChangeSingleSelect = (field, selected) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event
    const { value } = selected;

    //  set local state
    let communicationPreferences = this.state;
    communicationPreferences[field] = value;
    this.setState({ [field]: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange("communicationPreferences", communicationPreferences);
  };

  handleChangeTelephone = (field, number) => {
    let telephone = number.target.value;
    const regexp = /^[0-9-+ \b]+$/;

    // if value is not blank, then test the regex
    if (telephone === "" || regexp.test(telephone)) {
      //  set local state
      let communicationPreferences = this.state;
      communicationPreferences[field] = telephone;
      this.setState({ [field]: telephone });

      /// pass current state up to parent to propogate changes
      this.props.onChange("communicationPreferences", communicationPreferences);
    }
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let communicationPreferences = this.state;
    communicationPreferences[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("communicationPreferences", communicationPreferences);
  };


  componentWillReceiveProps(nextProps){
    if (this.state?.createDate !== nextProps?.communicationPreferences?.createDate) {
        this.setState({ ...nextProps?.communicationPreferences })
    }
  }


  render() {

    const {
      language={},
      emailAddress="",
      phoneNumber={},
      website="",
      status="",
      userId,
    } = this.state || {
      language:{},
      emailAddress:"",
      phoneNumber:"",
      website:"",
      status:"",
      status: true,
      userId: "",
      website:{},
    };

 let style = {
   checkBox:{
   "opacity": "1",
   "margin-left": "-7.5pc",
    "margin-top": "1px"
   },
   checkGroup:{
    "display": "inline-block",
   },
   checkRadio: {
     "margin-left": "2pc"
   }
 }



    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="institution box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead mw-100">
                  <span className="icon-regular icon-comment-dots"></span>{" "}
                  Communication Preferences
                </h2>
              </div>
              <div className="box-middle">
                <div className="row row-custom">
                  <div className="col-md-6">
                    <h4 className="mb-3">Languages</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={emailAddress}
                        className="input"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Primary Language</label>
                      <Select
                        options={languageList}
                        className="inputSelect"
                        classNamePrefix="rs"
                        onChange={(e) =>
                          this.handleChangeSingleSelect("primaryLanguageName", e)
                        }
                        value={{
                          value: language?.primary?.LanguageId || "",
                          label: language?.primary?.LanguageName || "",
                        }}
                        isSearchable="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group" id="profile-phone">
                      <label>Office</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber?.landphone}
                        className="input"
                        maxLength="15"
                        pattern="^+ [ 0-9]{4}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) =>
                          this.handleChangeTelephone("phoneNumber", e)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Secondary Language</label>
                      <Select
                        options={languageList}
                        className="inputSelect"
                        classNamePrefix="rs"
                        onChange={(e) =>
                          this.handleChangeSingleSelect("secondaryLanguageName", e)
                        }
                        value={{
                          value: language?.secondary?.LanguageId || "",
                          label: language?.secondary?.LanguageName || "" ,
                        }}
                        isSearchable="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group" id="profile-mobile">
                      <label>Mobile</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={phoneNumber?.mobileNumber}
                        className="input"
                        maxLength="15"
                        pattern="^+ [ 0-9]{4}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) =>
                          this.handleChangeTelephone("mobileNumber", e)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tertiary Language</label>
                      <Select
                        options={languageList}
                        className="inputSelect"
                        classNamePrefix="rs"
                        onChange={(e) =>
                          this.handleChangeSingleSelect("tertiaryLanguageName", e)
                        }
                        value={{
                          value: language?.tertiary?.LanguageId || "",
                          label: language?.tertiary?.LanguageName || "" ,
                        }}
                        isSearchable="true"
                      />
                    </div>
                  </div>

                  <EditProfileCommunicationPreferencesstatus
                    status={status}
                    onChange={this.passChangeUp}
                    styleProp={style}
                  />
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Website</label>
                      <input
                        type="url"
                        name="website"
                        value={website?.path}
                        className="input"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );


    // return (
    //   <>
      
    //     <h1> demo </h1>
    //   </>
    // )

  }
}

export default EditProfileCommunicationPreferences;
