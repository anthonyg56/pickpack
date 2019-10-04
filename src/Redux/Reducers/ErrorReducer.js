import Constants from "../Constants/Constants";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case Constants.get.errors:
      return action.payload;
    default:
      return state;
  }
}