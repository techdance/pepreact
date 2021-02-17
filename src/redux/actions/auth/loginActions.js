export const changeRole = role => {
  return dispatch => dispatch({ type: "CHANGE_ROLE", userRole: role })
}

export const updateUserInfoByKey = payload => {
  return dispatch => dispatch({ type: "UPDATE_USER_INFO_KEY", data: payload })
}

export const updateUserInfo = ({ commit }, payload) => {
  return dispatch => dispatch({ type: "UPDATE_USER_INFO", data: payload })
}

