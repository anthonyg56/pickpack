import { CHANGE_SUB_NAV, CHANGE_NAV_BAR, CHANGE_TITLE, GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from '../Constants/Constants';
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../Utils/SetAuthToken";

export const changeSubNav = payload => {
    return { type: CHANGE_SUB_NAV, payload}
}

export const changeNavBar = payload => {
    return { type: CHANGE_NAV_BAR, payload}
}

export const changeTitle = payload => {
    return { type: CHANGE_TITLE, payload}
}