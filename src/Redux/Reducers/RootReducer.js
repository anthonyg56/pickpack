import { combineReducers } from "redux"
import AuthReducer from './AuthReducer'
import MiscReducer from './MiscReducer'
import ProfileReducer from './ProfileReducer'

export default combineReducers({
    profile: ProfileReducer,
    auth: AuthReducer,
    misc: MiscReducer
})