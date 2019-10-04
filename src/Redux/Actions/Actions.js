import Constants from '../Constants/Constants';

const updateSubNav = payload => {
    return { 
        type: Constants.update.subNav, 
        payload
    }
}

const updateNavBar = payload => {
    return { 
        type: Constants.update.navBar, 
        payload
    }
}

const updateTitle = payload => {
    return { 
        type: Constants.update.title, 
        payload
    }
}

export {
    updateNavBar,
    updateSubNav,
    updateTitle
}