import AuthConstants from "../Constants/AuthConstants"

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  loading: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case AuthConstants.getToken:
        return {
          ...state,
          token: action.payload
        };
      case AuthConstants.updateUserLoading:
        return {
          ...state,
          loading: true
        };
      case AuthConstants.getCurrentUser:
        return {
          ...state,
          user: action.payload
        };
      case AuthConstants.updateAuthentication:
        return {
          ...state,
          isAuthenticated: action.payload
        };
      default:
        return state;
    }
}

export default AuthReducer