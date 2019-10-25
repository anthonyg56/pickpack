import ProfileConstants from "../Constants/ProfileConstants";

const initialState = {
  general: {},
  followers: [],
  following: [],
  posts: [],
  picks: [],
  likes: [],
  comments: [],
  favoriteTeams: [],
  favoriteSports: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ProfileConstants.getProfile:
        return {
          ...state,
          general: action.payload
        };
      case ProfileConstants.getPosts:
        return {
          ...state,
          posts: action.payload
        };
      case ProfileConstants.getPicks:
        return {
          ...state,
          picks: action.payload
        }
      case ProfileConstants.getLikes:
        return {
          ...state,
          likes: action.payload
        }
      case ProfileConstants.getComments:
        return {
          ...state,
          comments: action.payload
        }
      case ProfileConstants.getFollowers:
        return {
          ...state,
          followers: action.payload
        }
      case ProfileConstants.getFollowing:
        return {
          ...state,
          following: action.payload
        }
      default:
        return state;
    }
}