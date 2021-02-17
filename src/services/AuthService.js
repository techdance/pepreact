import EventEmitter from 'events'
import API from './api'


const localStorageKey = 'loggedIn'
const tokenExpiryKey = 'tokenExpiry'
const tokenyKey = 'growth-token'
// const loginEvent = 'loginEvent'



class AuthService extends EventEmitter {
    idToken = null;
    profile = null;
    tokenExpiry = null;

    // Starts the user login flow
    login (loginData) {
      // store.commit('RESET_ACL');
      return API({
        url:'login',
        method:'POST',
        data:loginData
      });

    }

    userInfo(){
      if(this.isAuthenticated){
        return JSON.parse(localStorage.getItem("userInfo"))
      }
    }

    checkLogin(){
      // return store.getters.isLoggedIn
    }

    localLogin (userInfo) {
     
      localStorage.setItem(tokenyKey, userInfo.token);
      localStorage.setItem(localStorageKey, 'true');

      console.log('local login',userInfo)
      // store.commit('UPDATE_USER_INFO',userInfo)
    }

    localLogOut () {
      localStorage.removeItem(localStorageKey)
      localStorage.removeItem(tokenyKey)

      this.idToken = null
      this.tokenExpiry = null
      this.profile = null
    }

    logOut () {
      // vue.$http({url:vue.$baseUrl+'logout',method:'POST'})
      localStorage.removeItem(localStorageKey)
      localStorage.removeItem(tokenyKey)

      // store.commit('RESET_ACL');
      this.idToken = null
      this.tokenExpiry = null
      this.profile = null

    }

    isAuthenticated () {
      return (
            localStorage.getItem(localStorageKey) === 'true'
      )
    }

    getToken(){
        return  localStorage.getItem(tokenyKey);
    }
    setAuthenticationHeader(token){
      localStorage.setItem('AHEA-token',token)
    }

    // forgotPassword(requestData){
    //     return API({
    //     url:'forget-password',
    //     method:'POST',
    //     data:requestData
    //   });
    // }

    // checkResetPasswordLinkExpiry(hash){
    //   // return vue.$http({url:vue.$baseUrl+'check-reset-password-token',method:'POST',data:{resetToken:hash}})
    // }

    // resetPassword(requestData){
    //   return API({
    //     url:'reset-password',
    //     method:'POST',
    //     data:requestData
    //   });
    // }

    // setRememberLoginData(loginData){
    //   localStorage.setItem('rememberData',JSON.stringify(loginData))
    // }
    // removeRememberLoginData(){
    //   localStorage.removeItem('rememberData')
    // }
    // changePassword(dataObj){
    //   return API({
    //     url: "change-password",
    //     method: "POST",
    //     data: dataObj
    //   });
    // }

    // updateLocalUserProfile(profile) {
    //   const exisitingProfile = this.userInfo()
    //   const newProfile = {...exisitingProfile, ...profile}

    //   localStorage.setItem("userInfo", JSON.stringify(newProfile))
    // }

    // updateUserInfo(userObj){
    //   if(this.isAuthenticated){
    //     return JSON.parse(localStorage.getItem("userInfo"))
    //   }
    // }
}

export default new AuthService()
