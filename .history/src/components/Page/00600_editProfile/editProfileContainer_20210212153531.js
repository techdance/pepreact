import React from "react";

import EditProfilePersonalInformation from "./editProfilePersonalInformation.js";
import EditProfileInstitutionProfile from "./editProfileInstitutionProfile.js";
import EditProfileCommunicationPreferences from "./editProfileCommunicationPreferences.js";
import EditProfileCredentials from "./editProfileCredentials.js";
import EditProfileProfessionalBio from "./editProfileProfessionalBio.js";
import EditProfileProfessionalBioIT from "./editProfileProfessionalBioIT.js";
import EditProfileCollaborationInterests from "./editProfileCollaborationInterests.js";
import {connect} from "react-redux";
import {
  thoughtSave,
  getPersonalInformation,
  getCollaboratedUserProfileimage,
  getLanguageList
} from "../../../redux/actions/users";
import AuthService from "../../../services/AuthService";
import { ToastContainer } from "react-toastr";
import useService from '../../../services/User';
import axios from 'axios';

//  TLM: constants below represent sample DB records.

// sameUser flag is used to distinguish when those component are viewed by the page owner or not.
//  sameUser = "true" when page owner and profile owner are the same person. Otherwise, sameUser = "false"
//  for example, in page 00501, page owner and profile owner are two different people.

class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state =  this.props.profile;
    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  componentDidMount(){
    let paramsToken = { token: AuthService.getToken() };
    console.log(' token params: ', paramsToken);
 // this.props.getCollaboratedUserProfileimage({ params: { token: AuthService.getToken() }, dataObj: null });
    this.props.getLanguageList(paramsToken);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let profile = this.state;
    profile[name] = value;
    this.setState({ profile });

    // This is the parent component so instead of passing change up just update the parent object state.
    this.passChangeUp("profile", profile);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    let profile = this.state;
    profile[field] = value;
    this.setState({ profile });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit current state");
    console.log(' Profile Data: ', this.state)

    // let { profile } = this.state
    // this.state contains the current revised version of the communicationPreferencesetToken(), 
    //                            thought: profile?.personalInformation?.personalMessage, onlinestatus: 1 
    // }, dataObj: ''}).then( (res) => {
    //         if(!res.status){
    //           ToastContainer.error(" unable to save thoughts")
    //         }
    //   })

    //                            thought: profile?.personalInformation?.personalMessage, onlinestatus: 1 
    // }, dataObj: ''})

    let { communicationPreferences, credentials, professionalBio, personalInformation }  = this.state;
    const todayDate = new Date().getFullYear() + new Date().getMonth()+ new Date().getDay();
    const token = AuthService.getToken();
    let communicationPreferencesObj = {
      token: token,
      createDate: todayDate,
      modifiedDate: todayDate,
      primaryLanguageId:12,
      primaryLanguageName: communicationPreferences?.primaryLanguage,
      secondaryLanguageId:10,
      secondaryLanguageName: communicationPreferences?.secondaryLanguage,    
      tertiaryLanguageId:1,
      tertiaryLanguageName: communicationPreferences?.tertiaryLanguage,
      emailAddress: communicationPreferences?.emailAddress,
      phoneNumber: communicationPreferences?.officePhone,
      website: communicationPreferences?.url,
      mobileNumber: communicationPreferences?.mobilePhone

    }

    let collaboratedLanguagePreferencesSaveObj = {
      "token":token,
      "createDate":todayDate,
      "modifiedDate ":todayDate,
      "languageName ":"English"
    }

    let collaboratedUserProfileimageSaveObj = {
      createDate:todayDate,
    }
    let collaboratedUserProfileimageSaveBodyObj = {
      blobData:"",
    }

    let membarshipObj = credentials?.professionalMemberships?.map( (data, index) => ({ ['membership'+index]: data.name  })).reduce((a,b)=>(Object.assign(a, b)))
    let certificateObj = credentials?.certificates?.map( (data, index) => ({ ['certificate'+index]: data  })).reduce((a,b)=>(Object.assign(a, b)))
    let collaboratedUsercredentialObj = Object.assign( {
      token :token,
      createDate : todayDate,
      modifiedDate : todayDate,
      educationallevel :"educationallevel",
    }, membarshipObj,certificateObj ) 
   

    let areaofexpertiseObj = professionalBio?.areasOfExpertise?.map( (data, index) => ({ ['areaOfExpertise'+index]: data  })).reduce((a,b)=>(Object.assign(a, b)))
    let collaborateduserprofessionalbioSaveObj = Object.assign({
      token :token ,
      createDate :todayDate,
      modifiedDate :todayDate,
      experienceyears :"2.5",
      cvlink : professionalBio?.cvLink,
      biodescription : professionalBio?.bio,
      bioDiscipline : professionalBio?.discipline,
     }, areaofexpertiseObj)


    // let collaboratedProfileAreaofInterestObj = {
    //   token :token,
    //   createDate :todayDate,
    //   modifiedDate :todayDate,
    //   projectType : "projectType",
    //   description :"description",
    //   discipline1 :"discipline1",
    //   language :"language",
    //   location1 :"location1",
    //   campus :"campus",
    //   programLevel :"programLevel",
    //   programLength :"programLength",
    //   deliveryMethod :"deliveryMethod",
    //   credits :"credits",
    //   collaborationType :"collaborationType",
    //   disciplineB :"disciplineB",
    //   locationB :"locationB",
    //   disciplineC :"disciplineC",
    //   locationC :"locationC",
    //   disciplineD :"disciplineD",
    //   locationD :"locationD",
    //   rangeYearStart :"rangeYearStart",
    //   rangeYearEnd :"rangeYearEnd",
    //   rangeMonthStart :"rangeMonthStart",
    //   rangeMonthEnd :"rangeMonthEnd",
    //   universityName :"universityName",
    //   groupName :"groupName"
    //  }

    let thoughtSaveObj = {
      token,
      "thought": personalInformation.thought, 
      "onlinestatus":1
    }


    console.group(" --- all params ---- ");
    console.groupEnd();


  const  thoughtSave = useService.thoughtSave({ params: thoughtSaveObj , dataObj:null }); 
  const  communicationPreferencesSave = useService.communicationPreferencesSave({ params: communicationPreferencesObj, dataObj:null }); 

  // const  collaboratedLanguagePreferencesSave = useService.collaboratedLanguagePreferencesSave({ params: {token:  AuthService.getToken()}, dataObj:null }); 
  // const  collaboratedUserProfileimageSave = useService.collaboratedUserProfileimageSave({ params: {token:  AuthService.getToken()}, dataObj:null }); 

  const  collaboratedUsercredential = useService.collaboratedUsercredential({ params: collaboratedUsercredentialObj, dataObj:null }); 
  const  collaborateduserprofessionalbioSave = useService.collaborateduserprofessionalbioSave({ params: collaborateduserprofessionalbioSaveObj, dataObj:null });
  
  
  // const  collaboratedProfileAreaofInterest = useService.collaboratedProfileAreaofInterest({ params: {token:  AuthService.getToken()}, dataObj:null }); 

  axios.all([thoughtSave, communicationPreferencesSave,collaboratedUsercredential,
    collaborateduserprofessionalbioSave ]).then(axios.spread((...responses) => {
    const responseZero = responses[0]
    const responseOne = responses[1]
    const responesTwo = responses[2]
    const responesThree = responses[3]
    const responesFour = responses[4]
    const responesFive = responses[5]
    const responesSix = responses[6]
    const responesSeven = responses[7]
    console.log(' after Save Response: ', responses);
    // use/access the results 
  })).catch(errors => {
    // react on errors.

    console.log(' some error ocurred: ', errors);

  })


  };



  render() {
    const {
      personalInformation,
      institutionProfile,
      communicationPreferences,
      credentials,
      professionalBio,
      areaofinterest_list,
    } = this.state;

    const IT = this.props.IT;
      console.log(' editContainerProps: ', this.props);
    return (
      <>
        <section className="wrap-profile">
          <form onSubmit={this.handleSubmit}>
            <div className="row row-custom ">
              <EditProfilePersonalInformation
                personalInformation={personalInformation}
                onChange={this.passChangeUp}
              />
              <EditProfileInstitutionProfile
                institutionProfile={institutionProfile}
                onChange={this.passChangeUp}
              />

              <EditProfileCommunicationPreferences
                communicationPreferences={communicationPreferences}
                onChange={this.passChangeUp}
              />
              <EditProfileCredentials
                credentials={credentials}
                onChange={this.passChangeUp}
              />
              {IT === "true" ? (
                <EditProfileProfessionalBioIT
                  professionalBio={professionalBio}
                  onChange={this.passChangeUp}
                />
              ) : (
                <>
                  <EditProfileProfessionalBio
                    professionalBio={professionalBio}
                    onChange={this.passChangeUp}
                  />
                  <EditProfileCollaborationInterests
                    areaofinterest_list={areaofinterest_list}
                    onChange={this.passChangeUp}
                  />
                </>
              )}
            </div>
            <div className="row row-custom ">
              <div className="col-lg-12 mb-4 text-right">
                <button className="btn btn-blue" type="submit">
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

// export default EditProfileContainer;
const mapStateToProps = state => {
  return {
    app: state.users
  }
}


export default connect(mapStateToProps, {
  thoughtSave,
  getPersonalInformation,
  getCollaboratedUserProfileimage,
  getLanguageList,
})(EditProfileContainer)
