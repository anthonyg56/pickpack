import React from 'react';
import Login from './Login';
import Register from './Register';
import { Route } from 'react-router-dom';
import background from '../../Img/Backgrounds/Auth/auth.jpeg'
export const Auth = () => 
    <div className="Auth" style={{backgroundImage: 'url(' + background + ')'}}>
        <Route path="/auth/login" component={props => <Login {...props} />} />
        <Route path="/auth/register/:id" component={props => <Register {...props} />}/>
    </div>