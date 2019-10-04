import Constants from '../Constants/Constants'
import axios from "axios"

const createPost = (params, data, token) => dispatch => {
  axios
  .post('/api/posts/new/' + params.userId, data.post, { headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + token.t
  }}, {body: data.post})
  .then((response) => console.log(response.data))
  .catch(err => errors(err.response.data))
}

const postsByUser = (params, token) => dispatch => {
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
      type: Constants.get.errors,
      payload: err
    })
  )
}

const errors = error => {
  return {
    type: Constants.get.errors,
    payload: error
  }
}

const getPosts = posts => {
  return {
    type: Constants.get.posts,
    payload: posts
  }
}

export {
 errors,
 getPosts,
 postsByUser,
 createPost
}