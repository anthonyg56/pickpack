import React from 'react'
import AuthApi from '../../Api/AuthApi'
import ProfileApi from '../../Api/ProfileApi'
import useForm from 'react-hook-form'
import { Link } from "react-router-dom"

const RegisterUser = ({...props}) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => AuthApi.registerUser(data, props.history)
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
        ProfileApi.createProfile(profileData, props.history)
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
export {
    RegisterProfile,
    RegisterUser
}