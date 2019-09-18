import { combineReducers } from "redux";
import changeReducer from './ChangeReducers';
import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';

export default combineReducers({
    change: changeReducer,
    auth: authReducer,
    errors: errorReducer
  });