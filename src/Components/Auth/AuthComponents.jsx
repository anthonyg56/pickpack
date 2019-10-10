import React, {useState} from 'react'
import useForm from 'react-hook-form'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const RegisterUser = ({...props}) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => props.registerUser(data, props.history)
    return(
        <div className="Register-User">
            <div className="Header">
                <h4>
                    <b>Registration</b>
                </h4>
            </div>
            <div className="Form">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            placeholder="Name"
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
                    <input 
                        placeholder="Email"
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
                    <input 
                        placeholder="Password"
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
                    <input 
                        placeholder="Validate Password"
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
                        id="submit"
                        type="submit" 
                    />
                </form>
            </div>
            
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
            <Link to="/" className="">Back to home</Link>
        </div>
    )
}

const RegisterProfile = ({...props}) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        let profileData = {
            user: props.user._id,
            userName: data.userName,
            birthday: data.birthday,
            bio: data.bio
        }
        props.createProfile(profileData, props.history)
    }

    return(
        <div className="Auth-Form Register-Profile">
            <div className="Header">
                <h4>Create Profile</h4>
            </div>
            <div className="Form">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input 
                        placeholder="User Name"
                        name="userName" 
                        ref={
                            register({ 
                                required: "User Name Required"
                            })
                        } 
                    />
                    <input
                        placeholder="Birthday"
                        name="birthday" 
                        type="date"
                        ref={
                            register({ 
                                required: "User Name Required"
                            })
                        } 
                    />
                    <input 
                        placeholder="Bio"
                        name="bio"
                        ref={
                            register({ 
                                required: false
                            })
                        } 
                    />
                    <input 
                        name="favoriteTeams" 
                    />
                    <input 
                        name="favoriteSports" 
                    />
                    <input 
                        id="submit"
                        type="submit" 
                    />
                </form>
            </div>
            <p>
                Already have an account? <Link to="/login">Log in</Link> <Link to="/auth/register/user">Go Back</Link>
            </p>
            <Link to="/" className="">Back to home</Link>
        </div>
    )
}

const LoginUser = props => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => props.loginUser(data)
    return(
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
    )
}

LoginUser.propTypes = {
    loginUser: PropTypes.func.isRequired
}

export {
    RegisterProfile,
    LoginUser,
    RegisterUser
}