import axios from "axios"
import useAuth from '../Hooks/useAuth'

const AuthApi = () => {
    const [{auth}, setAuth] = useAuth()
    const registerUser = (userData, history) => {
        return(
            axios
            .post("/api/register", userData)
            .then(res => {
                console.log('User Information:')
                console.log(res.data)
                history.push('/register/profile')
            })
            .catch(err => console.log(err))
        )
    }
    const loginUser = (userData) => {
          return axios
          .post("/api/auth/signin", userData)
          .then(res => {
            sessionStorage.setItem('jwt', JSON.stringify(res.data))
            console.log('User Logged In')
            console.log(res.data)
            return res.data
          })
          .catch(err => console.log(err))
    }
    const logoutUser = () => {
        return(
            axios
            .get('/auth/signout')
            .then(res => {
                localStorage.removeItem("jwtToken")
                console.log('User Logged Out')
                console.log(res.data)
                return res.data
            })
            .catch(err => console.log(err))
        )
    }
    return {registerUser, loginUser, logoutUser}
}

export default AuthApi