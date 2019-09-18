import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./App.jsx";
import './Sass/Index.scss';

// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";

render(
  <Provider store={store}>
    <Router basename="">
        <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);