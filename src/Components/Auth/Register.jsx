import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { registerUser } from "../../Redux/Actions/Actions";
import classnames from "classnames";

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            userName: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
  
    componentWillReceiveProps(nextProps) {
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
        const newUser = {
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };

        console.log(newUser);

        this.props.registerUser(newUser, this.props.history); 
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
            <div className="">
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
            </div>
        </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));