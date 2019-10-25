import MiscConstants from "../Constants/MiscConstants"

const initialState = {
    isNavOpen: false,
    subNav: null,
    title: null,
    errors: null
}

function MiscReducer(state = initialState, action) {
    switch (action.type) {
        case MiscConstants.updateNavOpen:
            return {
                ...state,
                isNavOpen: action.payload
            }
        case MiscConstants.subNav:
            return {
                ...state,
                subNav: action.payload
            }
        case MiscConstants.title:
            return {
                ...state,
                title: action.payload
            }
        case MiscConstants.errors:
            return {
                ...state,
                errors: action.payload
            }
        default:
             return state;
    }
}

export default MiscReducer