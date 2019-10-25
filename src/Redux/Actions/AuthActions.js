import AuthConstants from '../Constants/AuthConstants'

const AuthActions = {
  getToken: token => dispatch => dispatch({
      type: AuthConstants.getToken,
      payload: token
  }),
  getUser: decoded => dispatch => dispatch({
      type: AuthConstants.getCurrentUser,
      payload: decoded
  }),
  setUserLoading: () => dispatch => dispatch({
      type: AuthConstants.updateUserLoading
  }),
  updateAuthentication: auth => dispatch => dispatch({
      type: AuthConstants.updateAuthentication,
      payload: auth
  })
}

export default AuthActions