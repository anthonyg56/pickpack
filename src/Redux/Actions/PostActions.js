import { CREATE_POST, DELETE_POST, LIKE_POST, UNLIKE_POST, FIND_POST, TIMELINE, GET_ERRORS } from '../Constants/Constants'
import axios from "axios"
import jwt_decode from "jwt-decode"
import setAuthToken from "../../Utils/SetAuthToken";

export const createPost = (params, data, token) => dispatch => {
    axios
    .post('/api/posts/new/' + params.userId, data.post, { headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token.t
    }}, {body: data.post})
    .then((response) => console.log(response.data))
    .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    )
}