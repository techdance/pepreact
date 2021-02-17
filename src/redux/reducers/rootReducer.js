import { combineReducers } from "redux"
import customizer from "./customizer/"
import auth from "./auth/"
import users from "./users"

const rootReducer = combineReducers({
  customizer: customizer,
  auth: auth,
  users: users
})

export default rootReducer
