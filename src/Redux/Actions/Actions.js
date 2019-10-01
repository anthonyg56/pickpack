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

export const registerUser = (userData, history) => dispatch => {
    axios
      .post("/api/register", userData)
      .then(res => history.push("/auth/login")) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    axios
    .post("/api/auth/signin", userData)
    .then(res => {
        // Save to localStorage
        // Set token to localStorage
        console.log(res.data)
        const { token } = res.data;
        sessionStorage.setItem('jwt', JSON.stringify(res.data))
        // Set token to Auth header
        setAuthToken(token);
        // Set current user
        dispatch(setCurrentUser(res.data.user))
    })
    .catch(err => console.log(err))
        /*dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    );*/
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
};

  // User loading
export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {
  axios.get('/auth/signout')
    .then(res => {
      // Remove token from local storage
      localStorage.removeItem("jwtToken");
      // Remove auth header for future requests
      setAuthToken(false);
      // Set current user to empty object {} which will set isAuthenticated to false
      dispatch(setCurrentUser({}));
    })
};