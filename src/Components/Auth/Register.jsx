import React, { Component } from "react"
import { RegisterUser, RegisterProfile } from './AuthComponents'
import { Route} from 'react-router-dom'
import background from '../../Img/Backgrounds/Auth/auth.jpeg'

const Register = ({...props}) => {
    return (
        <div className="Auth" style={{backgroundImage: 'url(' + background + ')'}}>
            <div className="Register">
                <Route path="/register/user" component={props => <RegisterUser {...props} history={props.history}/>} />
                <Route path="/register/profile" component={props => <RegisterProfile {...props} history={props.history }/>} />
            </div>
        </div>
    )
}


export default Register;