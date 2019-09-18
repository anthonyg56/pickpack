import { CHANGE_SUB_NAV, CHANGE_NAV_BAR, CHANGE_TITLE } from "../Constants/Constants";

const initialState = {
    IsNavOpen: false,
    SubNav: null,
    Title: null
};

function changeReducer(state = initialState, action) {
    if (action.type === CHANGE_SUB_NAV){
        return Object.assign({}, state, {
            SubNav: action.payload
        });
    }

    if (action.type === CHANGE_NAV_BAR){
        return Object.assign({}, state, {
            IsNavOpen: action.payload
        });
    }

    if (action.type === CHANGE_TITLE){
        return Object.assign({}, state, {
            SubNav: action.payload
        });
    }

    return state;
};

export default changeReducer;