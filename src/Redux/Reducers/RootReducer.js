import { combineReducers } from "redux"
import changeReducer from './ChangeReducers'
import authReducer from './AuthReducer'
import errorReducer from './ErrorReducer'
import profileReducer from './ProfileReducer'

export default combineReducers({
    profile: profileReducer,
    change: changeReducer,
    auth: authReducer,
    errors: errorReducer
  });