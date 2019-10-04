import React, {useState} from 'react'
import auth from './AuthHelper'
import useForm from 'react-hook-form'
import { Link, withRouter } from "react-router-dom"
import { registerUser, loginUser, logoutUser } from '../../Redux/Actions/AuthActions'
import { connect } from 'react-redux'

const UserRegistration = ({...props}) => {
    let initialState = {
        name: "",
        userName: "",
        email: "",
        password: "",
        password2: ""
    }
    const [ user, updateUser ] = useState(initialState)
    const { register, handleSubmit } = useForm()
    const onSubmit = data => props.registerUser(data, props.history /* <= Change to Link to Profile*/)

    return(
        <div>
            <div>
                <Link to="/" className="">Back to home</Link>
                <h4>
                    <b>Register below</b>
                </h4>
                <p>
                    Already have an account? <Link to="/auth/login">Log in</Link>
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input 
                    name="name" 
                    ref={
                        register({ 
                            required: "Name Required", 
                            max: {
                                value: 32,
                                message: "Name Too Long"
                            }
                        })
                    } 
                />
                <label htmlFor="name"> User Name</label>
                <input 
                    name="userName" 
                    ref={
                        register({
                            required: "User Name Required" ,
                            max: {
                                value: 24,
                                message: "User Name Too Long"
                            }
                        })
                    } 
                />
                <label htmlFor="name"> Email</label>
                <input 
                    name="email" 
                    ref={
                        register({ 
                            required: "Email Required",
                            pattern: {
                                value: /.+\@.+\..+/,
                                message: "Email Not Valid"
                            }
                        })
                    }
                />
                <label htmlFor="name"> Password</label>
                <input 
                    name="password" 
                    ref={
                        register({
                            required: "Password Required",
                            min: {
                                value: 7,
                                message: "Password Too Short"
                            },
                            max: {
                                value: 15,
                                message: "Password Too Long"
                            }
                        })
                    }
                />
                <label htmlFor="name"> Validate Password</label>
                <input 
                    name="password2" 
                    ref={
                        register({ 
                            required: "Validate password" ,
                            min: {
                                value: 7,
                                message: "Password Too Short"
                            },
                            max: {
                                value: 15,
                                message: "Password Too Long"
                            }
                        })
                    } 
                />
                <input 
                    type="submit" 
                />
            </form>
        </div>
    )
}

export default connect( null, { registerUser })(UserRegistration)