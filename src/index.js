import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router} from "react-router-dom"
import App from "./App.jsx"
import {Provider} from './Store'
import './Sass/Index.scss'

const initialState = {
  profile: {
    _id: null,
    userName: null,
    bio: null,
    birthday: null,
    posts: null,
    picks: [],
    stats: [],
    likes: [],
    comments: []
  },
  auth: {
    token: null,
    user: {},
    isAuthenticated: false,
    loading: false
  },
  misc: {
    errors: null,
    subNav: null,
    title: null,
    isNavOpen: false
  },
  post: {
    _id: null,
    poster: null,
    text: null,
    likes: null,
    comments: null
  }
}

ReactDOM.render(
  <Router basename="">
    <Provider initialValue={initialState} >
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);