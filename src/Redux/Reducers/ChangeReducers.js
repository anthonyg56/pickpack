import Constants from "../Constants/Constants";

const initialState = {
    IsNavOpen: false,
    SubNav: null,
    Title: null
};

function changeReducer(state = initialState, action) {
    if (action.type === Constants.update.subNav){
        return Object.assign({}, state, {
            SubNav: action.payload
        });
    }

    if (action.type === Constants.update.navBar){
        return Object.assign({}, state, {
            IsNavOpen: action.payload
        });
    }

    if (action.type === Constants.update.title){
        return Object.assign({}, state, {
            SubNav: action.payload
        });
    }

    return state;
};

export default changeReducer;