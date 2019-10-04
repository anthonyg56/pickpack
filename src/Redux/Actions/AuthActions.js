import Constants from '../Constants/Constants'
import axios from "axios"
import setAuthToken from "../../Utils/SetAuthToken"

const registerUser = (userData, history) => dispatch => {
  axios
  .post("/api/register", userData)
  .then(res => {
    history.push("/auth/login")
  }) // re-direct to login on successful register
  .catch(err =>
    dispatch({
      type: Constants.get.errors,
      payload: err.response.data
    })
  )
}

const loginUser = userData => dispatch => {
    axios
    .post("/api/auth/signin", userData)
    .then(res => {
      console.log(res.data)
      const { token } = res.data;
      sessionStorage.setItem('jwt', JSON.stringify(res.data))
      setAuthToken(token);
      dispatch(setCurrentUser(res.data.user))
      dispatch(updateAuthentication(true))
    })
    .catch(err => 
      dispatch({
        type: Constants.get.errors,
        payload: err.response.data
      })
    )
}

const setCurrentUser = decoded => {
  return {
    type: Constants.get.currentUser,
    payload: decoded
  }
}

const setUserLoading = () => {
  return {
    type: Constants.update.userLoading
  };
}

const updateAuthentication = auth => {
  return{
    type: Constants.update.authentication,
    payload: auth
  }
}

const logoutUser = () => dispatch => {
  axios
  .get('/auth/signout')
  .then(res => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    dispatch(updateAuthentication(false))
  })
}

export {
  updateAuthentication,
  registerUser,
  loginUser,
  setCurrentUser,
  setUserLoading,
  logoutUser
}