import { GET_POSTS, GET_LIKES, GET_PICKS } from "../Constants/Constants";

const initialState = {
    posts: [],
    picks: [],
    likes: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
        return {
          ...state,
          posts: action.payload
        };
      case GET_LIKES:
        return {
          ...state,
          picks: action.payload
        };
    case GET_PICKS:
        return {
          ...state,
          likes: action.payload
        };
      default:
        return state;
    }
}