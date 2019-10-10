import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../Redux/Actions/AuthActions"
import { LoginUser } from './AuthComponents'
import auth from './AuthHelper'
import classnames from "classnames"
import background from '../../Img/Backgrounds/Auth/auth.jpeg'
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

class Login extends Component {
    state = {
        errors: {}
    }

    componentWillReceiveProps(nextProps) {
        if (auth.isAuthenticated()) {
          this.props.history.push("/dashboard");
        }
        console.log(nextProps.errors)
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    componentDidMount() {
        const isAuth = auth.isAuthenticated()
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    render() {
        const { errors } = this.state;
    return (
        <div className="Auth" style={{backgroundImage: 'url(' + background + ')'}}>
            <div className="Login">
                <LoginUser loginUser={data => this.props.loginUser(data)} />
                {/*<div  className="">
                <div className="">
                    <Link to="/" className="">Back to home</Link>
                    <div className="">
                    <h4>
                        <b>Login</b> below
                    </h4>
                    <p className="">
                        Don't have an account? <Link to="/auth/register/user">Register</Link>
                    </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="">
                        <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                        })}
                        />
                        <label htmlFor="email">Email</label>
                        <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                    </div>
                    <div className="">
                        <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                        })}
                        />
                        <label htmlFor="password">Password</label>
                        <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
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
                        Login
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);