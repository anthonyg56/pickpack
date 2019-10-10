import Constants from "../Constants/Constants";

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
      case Constants.create.profile:
        return {
          ...state,
          general: action.payload
        };
      case Constants.get.posts:
        return {
          ...state,
          posts: action.payload
        };
      default:
        return state;
    }
}