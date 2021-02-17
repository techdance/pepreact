var userInfo = localStorage.getItem("userInfo")
userInfo  = JSON.parse(userInfo);
const userDefaults = userInfo ? userInfo : {}

// eslint-disable-next-line
var state = {
  loggedInUser: userDefaults,
  userRole: "admin"
}

// eslint-disable-next-line
export const login = (state = {
  loggedInUser: userDefaults,
  userRole: "admin"
}, action) => {
  switch (action.type) {
    case "CHANGE_ROLE": {
      return { ...state, userRole: action.userRole }
    } 
    case "UPDATE_USER_INFO_KEY": {
      let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.loggedInUser
      for (const property of Object.keys(state.payload)) {
        if (action.payload[property] != null) {
          state.loggedInUser[property] = action.payload[property]
          userInfo[property] = action.payload[property]
        }
      }
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
      return state.loggedInUser;
    }
    case "UPDATE_USER_INFO": {
      state.AppActiveUser = state.payload
      localStorage.setItem("userInfo", JSON.stringify(state.payload))
      return state.loggedInUser;
    }
    default: {
      return state
    }
  }
}
