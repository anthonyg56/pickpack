import Constants from '../Constants/Constants';

const updateSubNav = subNav => {
    return { 
        type: Constants.update.subNav, 
        payload: subNav
    }
}

const updateNavBar = navBar => {
    return { 
        type: Constants.update.navBar, 
        payload: navBar
    }
}

const updateTitle = title => {
    return { 
        type: Constants.update.title, 
        payload: title
    }
}

export {
    updateNavBar,
    updateSubNav,
    updateTitle
}