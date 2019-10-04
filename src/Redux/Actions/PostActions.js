import { CREATE_POST, DELETE_POST, LIKE_POST, UNLIKE_POST, FIND_POST, TIMELINE, GET_ERRORS, GET_POSTS } from '../Constants/Constants'
import axios from "axios"

export const createPost = (params, data, token) => dispatch => {
    axios
    .post('/api/posts/new/' + params.userId, data.post, { headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token.t
    }}, {body: data.post})
    .then((response) => console.log(response.data))
    .catch(err => errors(err.response.data))
}

export const postsByUser = (params, token) => dispatch => {
  axios
  .get('/api/posts/by/' + params, { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
    }})
  .then(response => {
    dispatch(getPosts(response.data))
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err
    })
  )
}

export const errors = error => {
  return {
    type: GET_ERRORS,
    payload: error
  }
}

export const getPosts = posts => {
  return {
    type: GET_POSTS,
    payload: posts
  }
}