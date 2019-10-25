import {useStore} from '../Store'

const useMisc = () => {
    const [{...misc}, setState] = useStore()

    const updateHeader = (subNav, title) => {
        setState(state => ({
            ...state,
            misc: {
                subNav: subNav,
                title: title
            }
        }))
    }
    
    const updateNavOpen = isOpen => 
        setState(state => ({
            ...state,
            misc: {
                isNavOpen: isOpen
            }
        }))

    const getErrors = errors => 
        setState(state => ({
            ...state,
            misc: {
                errors: errors
            }
        }))

    return [{...misc}, {updateHeader}, updateNavOpen, getErrors]
}

export default useMisc