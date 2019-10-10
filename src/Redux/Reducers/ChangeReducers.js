import Constants from "../Constants/Constants";

const initialState = {
    isNavOpen: false,
    subNav: null,
    title: null
};

function changeReducer(state = initialState, action) {
    if (action.type === Constants.update.subNav){
        return Object.assign({}, state, {
            subNav: action.payload
        });
    }

    if (action.type === Constants.update.navBar){
        return Object.assign({}, state, {
            isNavOpen: action.payload
        });
    }

    if (action.type === Constants.update.title){
        return Object.assign({}, state, {
            title: action.payload
        });
    }

    return state;
};

export default changeReducer;