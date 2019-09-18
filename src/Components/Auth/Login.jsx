import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../Redux/Actions/Actions";
import classnames from "classnames";

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

class Login extends Component {
    constructor() {
    super();
        this.state = {
        email: "",
        password: "",
        errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);

        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    render() {
        const { errors } = this.state;
    return (
        <div className="container">
            <div  className="">
            <div className="">
                <Link to="/" className="">Back to home</Link>
                <div className="">
                <h4>
                    <b>Login</b> below
                </h4>
                <p className="">
                    Don't have an account? <Link to="/auth/register">Register</Link>
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