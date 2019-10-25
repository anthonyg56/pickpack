import React, {useEffect} from "react"
import AuthApi from '../../Api/AuthApi'
import useAuth from '../../Hooks/useAuth'
import useForm from 'react-hook-form'
import { Link } from "react-router-dom"
import background from '../../Img/Backgrounds/Auth/auth.jpeg'
import ProfileApi from "../../Api/ProfileApi"
import useProfile from "../../Hooks/useProfile"

const Login = ({...props}) => {
    const { register, handleSubmit } = useForm()
    const [{auth}, setAuth] = useAuth()
    const {loginUser} = AuthApi()
    const [, setProfile] = useProfile()
    const onSubmit = data => (async () => {
        const response = await loginUser(data)
        setAuth(response, true)
    })()

    const readProfile = async () => {
        const response = await ProfileApi.read(auth.user._id, auth.token)
        setProfile(response)
    }

    useEffect(() => {
        if(auth.isAuthenticated === true){
            readProfile()
            props.history.push('/profile')
        }
    }, [auth.isAuthenticated])
    return(
        <div className="Auth" style={{backgroundImage: 'url(' + background + ')'}}>
            <div className="Login">
                <div className="Auth-Form Login-Form">
                    <div className="Form-Header">
                        <h4>
                            <b>Login</b>
                        </h4>
                    </div>
                    <div className="Form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                placeholder="Email"
                                name="email"
                                ref={register({
                                    required: "email required"
                                })}
                            />
                            <br/>
                            <input 
                                placeholder="Password"
                                name="password"
                                ref={
                                    register({
                                        required: "password required"
                                    })
                                }
                            />
                            <br />
                            <input id="submit" type="submit" placeholder="Create Profile"/>
                        </form>
                        <p className="">
                            Don't have an account? <Link to="/register/user">Register</Link>
                        </p>
                        <Link to="/" className="">Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;