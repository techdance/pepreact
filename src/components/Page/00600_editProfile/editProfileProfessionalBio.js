import React from "react";
import Select from "react-select";
import { ChangeVideoImage, ChangeVideoButton } from "../Shared/changeVideo.js";
import InternationalExperience from "./editProfileProfessionalBioIntlExperience.js";

import { disciplineList } from "../../../data/disciplines.js";
import videoImage from "../../../assets/images/video-bradley.png"

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
      userId: this.props.userId
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

  handleChange = (event, index) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    // let {areaOfExpertise, fieldName } = this.state;
    // areaOfExpertise[name] = value;
    this.setState({ areaOfExpertise: value });

    /// pass current state up to parent to propogate changes
    this.props.onChange(String(index), value);
  };

  handleClick = (event, index) => {
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
    this.props.onChange(String(index), areaOfExpertise);
  };

  componentWillReceiveProps(nextProps){
    if (this.state?.userId !== nextProps?.userId) {
      
      let { areaOfExpertise } = nextProps;
        this.setState({ areaOfExpertise: nextProps?.areaOfExpertise,  userId: nextProps?.userId , fieldName:nextProps?.fieldName  });
        if (areaOfExpertise) {
          this.setState({ holdAreaOfExpertise : {
            name: areaOfExpertise,
            iconValue: "minus",
          }
        })
      }
    }
  }


  render() {
    let { areaOfExpertise, fieldName, holdAreaOfExpertise } = this.state;
    let { index } = this.props;
  
    return (
      <div className="d-flex">
        <a
          href="#0"
          id={"area-" + fieldName}
          className="cl-asset-type-d cl-hover-black font20 mr-1"
          onClick={(e)=> this.handleClick(e, index)}
        >
          {holdAreaOfExpertise.iconValue === "minus" ? (
            <i className="fas fa-minus-circle"></i>
          ) : (
            <i className="fas fa-plus-circle"></i>
          )}
        </a>
        {holdAreaOfExpertise.iconValue === "minus" ? (
          <input
            type="text"
            name={fieldName}
            value={areaOfExpertise}
            className="input"
            onChange={(e)=>this.handleChange(e, index) }
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
    if(['1','2','3'].includes(field)){
      if(professionalBio){
        professionalBio['areaofexpertise1']={ ... professionalBio?.areaofexpertise1 , [field] : value || ""};
      } else {
     
        this.setState({ areaofexpertise1: {
            [field] : value || ""
          } });
        }
    } else {
      professionalBio[field] = value;
    }
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("professionalBio", professionalBio);
  };


  componentWillReceiveProps(nextProps){
    if (this.state?.userId !== nextProps?.professionalBio?.userId) {
        this.setState({ ...nextProps.professionalBio });
     
    }
  }




  render() {
    const {
      userId,
      areaofexpertise1,
      experienceyears,
      cvlink,
      biodescription,
      bioDiscipline,
    } = this.state || {
      discipline: {},
      areaofexpertise1: {},
      experienceyears: {},
      bio: "",
      cvLink: "",
      biodescription: "",
      bioDiscipline: "",
      userId: ""
    };;

   
    let areaofexpertise11 = Object.values(areaofexpertise1);

    const customStyles = {
      control: styles => ({ ...styles,                 

      }),
      option: styles => ({ ...styles,                 

      }),
      menu: styles => ({ ...styles,                 
       width: '150px'
      })                 

    };

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

                  <ChangeVideoImage introVideo={videoImage} />
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
                          className="mt-4 col-md-6 col-offset-4"
                          classNamePrefix="rs"
                          onChange={(e) =>
                            this.handleChangeSingleSelect("bioDiscipline", e)
                          }
                          value={{
                            value: bioDiscipline,
                            label: bioDiscipline,
                          }}
                          maxMenuHeight={190}
                          isSearchable="true"
                        />
                      </div>
                    </div>
                  </div>
                 
                 
                  <div className="col-md-12">
                    <div className="mb-4">
                      <h4 className="mb-3">
                        <span className="icon-regular icon-user-ninja"></span>{" "}
                        Areas Of Expertise
                      </h4>
                      <div id="area-1" className="form-group area pl-4">
                        <label>Area of Expertise &ndash; 1</label>
                        <EditProfessionalBioAreaofExpertise
                          areaOfExpertise={areaofexpertise11[0]}
                          userId={userId}
                          fieldName="areaOfExpertise1"
                          onChange={this.passChangeUp}
                          index={1}
                        />
                      </div>
                      <div id="area-2" className="form-group area pl-4">
                        <label>Area of Expertise &ndash; 2</label>
                        <EditProfessionalBioAreaofExpertise
                          areaOfExpertise={areaofexpertise11[1]}
                          userId={userId}
                          fieldName="areaOfExpertise2"
                          onChange={this.passChangeUp}
                          index={2}
                        />
                      </div>
                      <div id="area-3" className="form-group area pl-4">
                        <label>Area of Expertise &ndash; 3</label>
                        <EditProfessionalBioAreaofExpertise
                          areaOfExpertise={areaofexpertise11[2]}
                          userId={userId}
                          fieldName="areaOfExpertise3"
                          onChange={this.passChangeUp}
                          index={3}
                        />
                      </div>
                    </div>
                  </div>
               
               
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
                        inernationalExperience={experienceyears}
                        onChange={this.passChangeUp}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group w-100">
                      <label>Link Your CV</label>
                      <input
                        type="url"
                        name="cvlink"
                        value={cvlink}
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
                        name="biodescription"
                        value={biodescription}
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
