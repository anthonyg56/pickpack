import Constants from "../Constants/Constants";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case Constants.get.token:
        return {
          ...state,
          token: action.payload
        };
      case Constants.update.userLoading:
        return {
          ...state,
          loading: true
        };
      case Constants.get.currentUser:
        return {
          ...state,
          user: action.payload
        };
      case Constants.update.authentication:
        return {
          ...state,
          isAuthenticated: action.payload
        };
      default:
        return state;
    }
}