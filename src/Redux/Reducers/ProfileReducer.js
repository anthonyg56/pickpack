import Constants from "../Constants/Constants";

const initialState = {
    posts: [],
    picks: [],
    likes: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case Constants.get.posts:
        return {
          ...state,
          posts: action.payload
        };
      case Constants.get.picks:
        return {
          ...state,
          picks: action.payload
        };
    case Constants.get.likes:
        return {
          ...state,
          likes: action.payload
        };
      default:
        return state;
    }
}