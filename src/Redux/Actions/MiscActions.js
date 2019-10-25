import MiscConstants from '../Constants/MiscConstants';

const MiscActions = {
    updateSubNav: subNav => {
        return { 
            type: MiscConstants.subNav, 
            payload: subNav
        }
    },
    updateNavBar: navBar => {
        return { 
            type: MiscConstants.navBar, 
            payload: navBar
        }
    },
    updateTitle: title => {
        return { 
            type: MiscConstants.title, 
            payload: title
        }
    },
    updateNavOpen: isOpen => {
        return { 
            type: MiscConstants.updateNavOpen, 
            payload: isOpen
        }
    },
    errors: errors => {
        return {
        type: MiscConstants.errors,
        payload: errors
        }
    }
}

export default MiscActions