import {useStore} from '../Store'

const useAuth = () => {
    const [{...auth}, setState] = useStore()
    
    const setAuth = (data, authenticationStatus) => {
        setState(state => ({
            ...state,
            auth: {
                isAuthenticated: authenticationStatus,
                token: data.token,
                user: data.user
            }
        }))
    }
    
    return [auth, setAuth]
}
  
export default useAuth