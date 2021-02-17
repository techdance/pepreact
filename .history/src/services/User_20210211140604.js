import EventEmitter from 'events'
import API from './api'

class Users extends EventEmitter {



  userInfo() {
    if (this.isAuthenticated) {
      return JSON.parse(localStorage.getItem("userInfo"))
    }
  }

  checkLogin() {
    // return store.getters.isLoggedIn
  }


  // user portion
  getUserData(Obj) {
    return API({
      url: 'getUserDetails',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getPersonalInformation(Obj) {
    return API({
      url: 'getPersonalInformation',
      method: 'GET',
      params: Obj.params
    });
  }
  getInstitutionProfileData(Obj) {
    return API({
      url: 'getInstitutionProfileData',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getCommunicationPreferences(Obj) {
    return API({
      url: 'getCommunicationPreferences',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getCollaboratedLanguagePreferences(Obj) {
    return API({
      url: 'getCollaboratedLanguagePreferences',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getCollaboratedUserProfileimage(Obj) {
    return API({
      url: 'getCollaboratedUserProfileimage',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getCollaboratedUsercredential(Obj) {
    return API({
      url: 'getCollaboratedUsercredential',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getCollaborateduserprofessionalbio(Obj) {
    return API({
      url: 'getCollaborateduserprofessionalbio',
      method: 'GET',
      params: Obj.params
    });
  }
  getCollaboratedProfileAreaofInterestAll(Obj) {
    return API({
      url: 'getCollaboratedProfileAreaofInterestAll',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  getCollaboratedProfileAreaofInterestSingle(Obj) {
    return API({
      url: 'getCollaboratedProfileAreaofInterestSingle',
      method: 'GET',
      params: Obj.params,
      data: Obj.dataObj
    });
  }




  thoughtSave(Obj) {
    return API({
      url: 'thoughtSave',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  communicationPreferencesSave(Obj) {
    return API({
      url: 'communicationPreferencesSave',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  collaboratedLanguagePreferencesSave(Obj) {
    return API({
      url: 'collaboratedLanguagePreferencesSave',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  collaboratedUserProfileimageSave(Obj) {
    return API({
      url: 'collaboratedUserProfileimageSave',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  collaboratedUsercredential(Obj) {
    return API({
      url: 'collaboratedUsercredential',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  collaborateduserprofessionalbioSave(Obj) {
    return API({
      url: 'collaborateduserprofessionalbioSave',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }
  collaboratedProfileAreaofInterest(Obj) {
    return API({
      url: 'collaboratedProfileAreaofInterest',
      method: 'POST',
      params: Obj.params,
      data: Obj.dataObj
    });
  }



 




}

export default new Users()
