import React, { Component } from "react"
import { RegisterUser, RegisterProfile } from './AuthComponents'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { registerUser, getToken, setCurrentUser } from '../../Redux/Actions/AuthActions'
import { createProfile } from '../../Redux/Actions/ProfileActions'
import background from '../../Img/Backgrounds/Auth/auth.jpeg'
class Register extends Component {
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    render() {
    let history = this.props.history
    let user = this.props.auth.user
    return (
        <div className="Auth" style={{backgroundImage: 'url(' + background + ')'}}>
            <div className="Register">
                    <Route path="/auth/register/user" component={props => <RegisterUser {...props} history={history}  registerUser={(userData, history) => this.props.registerUser(userData, history)} />} />
                    <Route path="/auth/register/profile" component={props => <RegisterProfile {...props} history={history } createProfile={(userData, history) => this.props.createProfile(userData, history)} user={user} />} />
                {/*<div className="">
                <div className="">
                    <Link to="/" className="">Back to home</Link>
                    <div className="" >
                    <h4>
                        <b>Register below</b>
                    </h4>
                    <p>
                        Already have an account? <Link to="/auth/login">Log in</Link>
                    </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field">
                            <input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            className={classnames("", {
                                invalid: errors.name
                            })}
                            />
                            <label htmlFor="name">Name</label>
                            <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="input-field">
                            <input
                            onChange={this.onChange}
                            value={this.state.userName}
                            error={errors.username}
                            id="userName"
                            type="text"
                            className={classnames("", {
                                invalid: errors.userName
                            })}
                            />
                            <label htmlFor="userName">User Name</label>
                            <span className="red-text">{errors.username}</span>
                        </div>
                        <div className="input-field">
                            <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="input-field">
                            <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="input-field">
                            <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            />
                            <label htmlFor="password2">Confirm Password</label>
                        </div>
                        <div className="" >
                            <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            type="submit"
                            className=""
                            >
                            Sign up
                            </button>
                        </div>
                    </form>
                </div>
                        </div>*/}
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.errors
})

Register.propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    getToken: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    createProfile: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {registerUser, createProfile, setCurrentUser, getToken})(Register);